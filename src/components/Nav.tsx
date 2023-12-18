import React from "react";
import { useRecoilState } from "recoil";
import { menuState } from "../recoil/atoms/menuState";
import myPhoto from "../assets/images/myPhoto.png";
import email from "../assets/images/email.png";
import github from "../assets/images/github.png";
import velog from "../assets/images/velog.png";

function Nav(): JSX.Element {
  const [menu, setMenu] = useRecoilState(menuState);

  return (
    <div className="w-1/5 h-screen bg-primary-nav absolute top-0 left-0 shadow-lg flex flex-wrap justify-center items-center text-black-font">
      <div className="w-2/3 flex flex-col">
        <img src={myPhoto} className="max-w-60 max-w-60 rounded-full bg-white mt-10 mb-4" />
        <div className="flex flex-col mb-14">
          <p className="text-xl">Frontend Developer</p>
          <p className="text-3xl">한재연</p>
        </div>
        <div className="flex flex-col gap-7 mb-32">
          <p
            className={menu === "intro" ? "nav_selected" : "nav_style"}
            onClick={() => setMenu("intro")}
          >
            Introduction
          </p>
          <p
            className={menu === "skill" ? "nav_selected" : "nav_style"}
            onClick={() => setMenu("skill")}
          >
            Skills
          </p>
          <p
            className={menu === "project" ? "nav_selected" : "nav_style"}
            onClick={() => setMenu("project")}
          >
            Projects
          </p>
        </div>
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
  );
}

export default Nav;
