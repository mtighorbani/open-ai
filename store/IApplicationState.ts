import { IResponseProps } from "@/api/open-ai";
import { ChatInputProps } from "./inputText/state";

export default interface IApplicationState {
    answers: IResponseProps
    chatInput: ChatInputProps
}