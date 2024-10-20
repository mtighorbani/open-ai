import axios from 'axios';

const createAnswerApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_OPENAI_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    timeout: 20000,
});

export default createAnswerApi;