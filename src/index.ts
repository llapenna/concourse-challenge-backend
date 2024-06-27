import express from "express";

import { PORT } from "@/utils/config";
import { Message } from "@/types/message";
import { ask } from "@/services/openai";
import { info } from "@/utils/logger";

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  const messages = req.body.messages as Message[];

  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8",
  });

  const completion = await ask(messages);

  for await (const chunk of completion) {
    res.write(chunk.choices[0]?.delta?.content || "");
  }

  res.end();
});

app.listen(PORT, () => {
  info(`Example app listening on PORT ${PORT}`);
});
