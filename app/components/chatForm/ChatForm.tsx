"use client";
import { generateCompletion } from "@/app/api/open-ai";
import answerResponseSelector from "@/store/ApiResponse/apiResponseSelector";
import useAppDispatch from "@/store/storeUtils/useAppDipatch";
import useAppSelector from "@/store/storeUtils/useAppSelector";
import React, { useState } from "react";

const ChatForm = () => {
  const dispatch = useAppDispatch();
  const answers = useAppSelector(answerResponseSelector().answerContent);

  return (
    <>
      <div className="flex justify-center items-center  h-56 bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600">Hello, Next!</h1>
        <button
          className=" w-48 rounded-xl h-10 bg-blue-800 text-white mx-5"
          onClick={() => generateCompletion(dispatch)}
        >
          Make Req
        </button>
      </div>
      <h1 className="w-[50%] flex mx-auto text-blue-700 text-xs font-extrabold">
        {answers.map((x) => x.message.content)}
      </h1>
    </>
  );
};

export default ChatForm;
