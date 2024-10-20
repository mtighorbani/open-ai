
import createAnswerApi from './axiosCreate';
import { answerApiActions } from '@/store/ApiResponse/state';

const systemPrompt = "You are a travel agent. Be descriptive and helpful";
const userPrompt = "Tell me about San Francisco";

export interface IResponseProps {
    choices: {
        finish_reason?: string;
        message: {
            content: string;
            role: string;
        };
    }[];
}
export const generateCompletion = async (dispatch: any): Promise<IResponseProps | null> => {
    try {
        const response = await createAnswerApi.post('/', {
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: systemPrompt,
                },
                {
                    role: "user",
                    content: userPrompt,
                },
            ],
            temperature: 0.7,
            max_tokens: 256,
        });

        const answerResponse: IResponseProps = response.data
        return dispatch(answerApiActions().answerResponse(answerResponse))

    } catch (error: any) {
        if (error.response) {
            console.error('Error Response:', error.response.data);
        } else if (error.request) {
            console.error('No Response from Server:', error.request);
        } else {
            console.error('Error Setting Up Request:', error.message);
        }
        return null;
    }
};
