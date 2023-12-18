import React from "react";
import { useRecoilValue } from "recoil";
import { menuState } from "../recoil/atoms/menuState";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

function MainPage(): JSX.Element {
  const menu = useRecoilValue(menuState);

  return (
    <div className="w-4/5 bg-primary-bg flex justify-center">
      <div className="w-5/6 flex flex-col justiy-center py-5p">
        <div className="border-b-4 border-primary-point">
          <h1 className="text-4xl font-medium tracking-wide mb-3">
            {menu === "intro" ? "Introduction" : menu === "skill" ? "Skills" : "Projects"}
          </h1>
        </div>
        {menu === "intro" ? <Introduction /> : menu === "skill" ? <Skills /> : <Projects />}
      </div>
    </div>
  );
}

export default MainPage;
