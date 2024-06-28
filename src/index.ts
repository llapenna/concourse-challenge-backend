import express from "express";
import cors from "cors";

import { PORT } from "@/utils/config";
import { Message } from "@/types/message";
import { ask } from "@/services/openai";
import { info } from "@/utils/logger";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  info(req.body);
  const messages = req.body.messages as Message[];

  res.writeHead(200, {
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
    "Content-Type": "text/event-stream",
  });

  const completion = await ask(messages);

  for await (const chunk of completion) {
    res.write(`data: ${chunk.choices[0]?.delta?.content || ""}\n\n`);
  }

  res.end();
});

app.listen(PORT, () => {
  info(`Example app listening on PORT ${PORT}`);
});
