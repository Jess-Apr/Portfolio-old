import React from "react";
import github from "../assets/images/github.png";
import Slider from "./Slider";
import { portfolioSkills } from "../assets/images/skills/projectSkills";

function Portfolio(): JSX.Element {
  return (
    <div className="flex flex-col px-3">
      <h1 className="text-3xl font-medium mt-6 mb-2">웹 포트폴리오 페이지</h1>
      <a href="https://github.com/Jess-Apr/Portfolio" target="_blank" className="link">
        <img src={github} className="w-5 h-5" />
        <span className="link_text">Github 링크</span>
      </a>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Slider />
        <ul className="flex flex-col gap-3 ml-3 text-lg mb-5 md:gap-6">
          <li>제가 진행했던 프로젝트를 설명하기 위해 만든 웹 포트폴리오 페이지입니다.</li>
          <li className="list-disc list-inside">프로젝트 기간 : 2023.11.28 ~ 2023.12.26</li>
          <li>개인 프로젝트입니다.</li>
        </ul>
      </div>
      <div className="w-42 flex items-center gap-2 mb-6">
        {portfolioSkills.map((v) => (
          <div className="skill_fe">{v}</div>
        ))}
      </div>
      <div>
        <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
          <li className="text-2xl font-medium">성장 경험</li>
          <li className="list-disc list-inside">어쩌구 저쩌구</li>
          <li className="list-disc list-inside">어쩌구 저쩌구</li>
          <li className="list-disc list-inside">어쩌구 저쩌구</li>
          <li className="list-disc list-inside">어쩌구 저쩌구</li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
