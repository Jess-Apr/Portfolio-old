import React from "react";
import { useRecoilValue } from "recoil";
import { menuState } from "../recoil/atoms/menuState";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Projects from "./projects-page/Projects";

function MainPage(): JSX.Element {
    const menu = useRecoilValue(menuState);

    return (
        <div className="w-full bg-primary-bg flex justify-center pt-14 xl:w-4/5 xl:pt-0">
            <div className="w-5/6 flex flex-col justiy-center pt-5p overflow-scroll">
                <div
                    className={
                        menu === "project"
                            ? ""
                            : "border-b-4 border-primary-point"
                    }
                >
                    {menu === "intro" ? (
                        <h1 className="text-4xl font-medium tracking-wide mb-4">
                            Introduction
                        </h1>
                    ) : menu === "skill" ? (
                        <h1 className="text-4xl font-medium tracking-wide mb-4">
                            Skills
                        </h1>
                    ) : null}
                </div>
                {menu === "intro" ? (
                    <Introduction />
                ) : menu === "skill" ? (
                    <Skills />
                ) : (
                    <Projects />
                )}
            </div>
        </div>
    );
}

export default MainPage;
