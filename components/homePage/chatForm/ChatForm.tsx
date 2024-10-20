"use client";
import React from "react";

import Header from "../Header";
import answerResponseSelector from "@/store/ApiResponse/apiResponseSelector";
import useAppDispatch from "@/store/storeUtils/useAppDipatch";
import useAppSelector from "@/store/storeUtils/useAppSelector";
import Input from "../../base/Input";
import chatInputSelector from "@/store/inputText/chatInputSelector";
import { generateCompletion } from "@/api/open-ai";

//texts
import { inputPlaceholder } from "@/locale/text";

const ChatForm = () => {
  const dispatch = useAppDispatch();
  const answers = useAppSelector(answerResponseSelector().answerContent);
  const input = useAppSelector(chatInputSelector().userInput);

  return (
    <div className="  h-screen mx-10">
      <Header />
      <div className="chat chat-start">
        <div className="chat-bubble max-w-[70%]">{input}</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">
          {answers.map((x) => x.message.content)}
        </div>
      </div>
      <Input
        type="text"
        placeholder={inputPlaceholder}
        className="input w-full  my-10"
        action={() =>
          generateCompletion({ dispatch: dispatch, userPrompt: input })
        }
      />
    </div>
  );
};

export default ChatForm;
