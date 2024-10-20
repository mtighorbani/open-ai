import { IResponseProps } from "@/app/api/open-ai";
import { ChatInputProps } from "./inputText/state";

export default interface IApplicationState {
    answers: IResponseProps
    chatInput: ChatInputProps
}