"use client";
import HomePage from "@/components/homePage/HomePage";
import { store } from "../store/store";
import { Provider } from "react-redux";

const Home = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};
export default Home;
