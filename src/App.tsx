import React from "react";
import { useRecoilValue } from "recoil";
import { menuState } from "./recoil/atoms/viewState";
import Nav from "./components/Nav";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

const App = () => {
    const menu = useRecoilValue(menuState);

    return (
        <div className="w-screen h-screen flex justify-end">
            <Header />
            <Nav />
            <MainPage />
        </div>
    );
};

export default App;
