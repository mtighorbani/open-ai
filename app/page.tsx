"use client";
import { store } from "../store/store";
import { Provider } from "react-redux";
import ChatForm from "./components/chatForm/ChatForm";

const Home = () => {
  return (
    <Provider store={store}>
      <div className="bg-gray-100">
        <ChatForm />
      </div>
    </Provider>
  );
};
export default Home;
