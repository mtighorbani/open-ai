import { IResponseProps } from "@/app/api/open-ai";
import { chatInputActions } from "@/store/inputText/state";
import useAppDispatch from "@/store/storeUtils/useAppDipatch";
import React from "react";

interface KeyDownProps {
  e: any;
  text: string;
}

interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
  action: () => Promise<IResponseProps | null>;
}

const Input = (props: InputProps) => {
  const dispatch = useAppDispatch();

  const onKeyDown = ({ e, text }: KeyDownProps) => {
    if (e.key == "Enter") {
      props.action();
      dispatch(chatInputActions().chatInput({ text }));
    }
  };

  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      onKeyDown={(e) => {
        onKeyDown({ text: e.currentTarget.value, e });
      }}
    />
  );
};

export default Input;
