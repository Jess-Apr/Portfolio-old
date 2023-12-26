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
      <div className="w-42 flex items-center gap-2 mb-8">
        {portfolioSkills.map((v) => (
          <div className="skill_fe">{v}</div>
        ))}
      </div>
      <div>
        <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
          <li className="text-2xl font-medium">주요 개발 내용</li>
          <li className="list-disc list-inside">
            반응형 디자인을 활용하여 다양한 디바이스와 화면 크기에 대응하는 웹페이지 구현
            <ul className="flex flex-col gap-2 mt-2">
              <li className="list-circle list-inside pl-7">
                % 단위를 사용하여 각 컴포넌트의 틀 구성
              </li>
              <li className="list-circle list-inside pl-7">
                화면이 일정 px 이하로 작아지면 grid의 column 수를 줄이고, 네비게이션 바 대신 헤더가
                출력되도록 설정
              </li>
            </ul>
          </li>
          <li className="list-disc list-inside">
            GitHub Actions와 AWS S3를 사용하여 배포 자동화를 구현
            <ul className="flex flex-col gap-2 mt-2">
              <li className="list-circle list-inside pl-7">
                Github에 코드를 push하면 자동으로 배포 진행
              </li>
              <li className="list-circle list-inside pl-7">
                배포 작업을 진행하지 않아도 지속적으로 웹사이트의 최신 상태 유지
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
