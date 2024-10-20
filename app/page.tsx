"use client";
import { store } from "../store/store";
import { Provider } from "react-redux";
import ChatForm from "./components/chatForm/ChatForm";

const Home = () => {
  return (
    <Provider store={store}>
      <ChatForm />
    </Provider>
  );
};
export default Home;
