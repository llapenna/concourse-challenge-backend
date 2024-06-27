import OpenAI from "openai";
import { ChatCompletionCreateParamsStreaming } from "openai/resources/index.mjs";

import { Message } from "@/types/message";
import { OPENAI_API_KEY } from "@/utils/config";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export const ask = (messages: Message[]) => {
  const config: ChatCompletionCreateParamsStreaming = {
    model: "gpt-4",
    stream: true,
    messages,
  };

  return openai.chat.completions.create(config);
};
