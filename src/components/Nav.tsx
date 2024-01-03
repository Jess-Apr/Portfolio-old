import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { menuState, projectState } from "../recoil/atoms/menuState";
import myPhoto from "../assets/images/myPhoto.png";
import email from "../assets/images/email.png";
import github from "../assets/images/github.png";
import velog from "../assets/images/velog.png";
import downArrow from "../assets/images/arrow-down.png";

function Nav(): JSX.Element {
  const [menu, setMenu] = useRecoilState(menuState);
  const [project, setProject] = useRecoilState(projectState);
  const [prev, setPrev] = useState<string>("intro");
  const [visibilityAnimation, setVisibilityAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (menu === "project") {
      setVisibilityAnimation(true);
    } else {
      setTimeout(() => {
        setVisibilityAnimation(false);
      }, 500);
    }
  }, [menu]);

  return (
    <div className="nav">
      <div className="w-2/3 h-full flex flex-col justify-between pt-5p pb-8p">
        <div>
          <div className="flex flex-col items-center">
            <img src={myPhoto} className="w-5/6 rounded-full bg-white mt-10 mb-4" />
            <div className="w-full flex flex-col mb-14">
              <p className="text-xl">Frontend Developer</p>
              <p className="text-3xl">한재연</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p
              className={menu === "intro" ? "nav_selected mb-7" : "nav_style mb-7"}
              onClick={() => {
                setPrev(menu);
                setMenu("intro");
              }}
            >
              Introduction
            </p>
            <p
              className={menu === "skill" ? "nav_selected mb-7" : "nav_style mb-7"}
              onClick={() => {
                setPrev(menu);
                setMenu("skill");
              }}
            >
              Skills
            </p>
            <div
              className={
                menu === "project"
                  ? "flex justify-between items-center nav_selected mb-4"
                  : "flex justify-between items-center nav_style mb-4"
              }
              onClick={() => {
                setPrev(menu);
                setMenu("project");
              }}
            >
              <p>Projects</p>
              <img
                src={downArrow}
                className={
                  menu === "project"
                    ? "transform rotate-180 animate-rotateArrowUp"
                    : prev !== "project"
                    ? ""
                    : "animate-rotateArrowDown"
                }
              />
            </div>
            <div className={visibilityAnimation ? "overflow-hidden" : "hidden"}>
              <div
                className={
                  menu === "project"
                    ? "animate-dragup text-lg flex flex-col items-start"
                    : "animate-dropdown text-lg flex flex-col items-start"
                }
              >
                <div
                  className={
                    project === "por"
                      ? "w-full h-full px-2 py-3p bg-secondary-menu cursor-pointer"
                      : "w-full h-full px-2 py-3p transition duration-300 hover:bg-secondary-lightGray cursor-pointer"
                  }
                  onClick={() => setProject("por")}
                >
                  Portfolio
                </div>
                <div
                  className={
                    project === "day"
                      ? "w-full h-full px-2 py-3p bg-secondary-menu cursor-pointer"
                      : "w-full h-full px-2 py-3p transition duration-300 hover:bg-secondary-lightGray cursor-pointer"
                  }
                  onClick={() => setProject("day")}
                >
                  DayGrid
                </div>
                <div
                  className={
                    project === "pat"
                      ? "w-full h-full px-2 py-3p bg-secondary-menu cursor-pointer"
                      : "w-full h-full px-2 py-3p transition duration-300 hover:bg-secondary-lightGray cursor-pointer"
                  }
                  onClick={() => setProject("pat")}
                >
                  Pathfinder
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-3 mb-3">
            <img src={email} className="w-6 h-5" />
            <p className="text-base">jessie1944@naver.com</p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <a href="https://github.com/Jess-Apr" target="_blank">
              <img src={github} className="cursor-pointer" />
            </a>
            <a href="https://velog.io/@jess_apr" target="_blank">
              <img src={velog} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
