import React from "react";
import { useRecoilValue } from "recoil";
import { menuState } from "./recoil/atoms/menuState";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";

const App = () => {
  const menu = useRecoilValue(menuState);

  return (
    <div className="w-screen h-screen flex justify-end">
      <Nav />
      <MainPage />
    </div>
  );
};

export default App;
