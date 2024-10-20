"use client";
import { generateCompletion } from "@/api/open-ai";
import answerResponseSelector from "@/store/ApiResponse/apiResponseSelector";
import useAppDispatch from "@/store/storeUtils/useAppDipatch";
import useAppSelector from "@/store/storeUtils/useAppSelector";
import React from "react";
import Input from "../base/Input";
import chatInputSelector from "@/store/inputText/chatInputSelector";

const ChatForm = () => {
  const dispatch = useAppDispatch();
  const answers = useAppSelector(answerResponseSelector().answerContent);
  const input = useAppSelector(chatInputSelector().userInput);

  return (
    <div className="  h-screen mx-10">
      <div className="flex justify-center items-center  h-28 bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600">Hello, Next!</h1>
        <button
          className=" w-48 rounded-xl h-10 bg-blue-800 text-white mx-5"
          onClick={() =>
            generateCompletion({ dispatch: dispatch, userPrompt: input })
          }
        >
          Make Req
        </button>
      </div>

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
        placeholder="اینجا بنویس"
        className="input w-full  my-10"
        action={() =>
          generateCompletion({ dispatch: dispatch, userPrompt: input })
        }
      />
    </div>
  );
};

export default ChatForm;
