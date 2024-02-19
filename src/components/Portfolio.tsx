import React, { useState, useEffect } from "react";
import github from "../assets/images/github.png";
import Slider from "./Slider";
import { portfolioSkills } from "../assets/projects/projectSkills";

function Portfolio(): JSX.Element {
  const [skillState, setSkillsState] = useState<boolean>(false);
  const [visibilityAnimation, setVisibilityAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (skillState) {
      setVisibilityAnimation(true);
    } else {
      setTimeout(() => {
        setVisibilityAnimation(false);
      }, 500);
    }
  }, [skillState]);

  return (
    <div className="flex flex-col items-start px-3">
      <a href="https://github.com/Jess-Apr/Portfolio" target="_blank" className="link">
        <img src={github} className="w-5 h-5" />
        <span className="link_text">Github 링크</span>
      </a>
      <Slider />
      <h2 className="title">프로젝트 소개</h2>
      <div className="flex flex-col gap-3 text-lg mb-5 md:gap-5">
        <div>제가 진행했던 프로젝트를 설명하기 위해 만든 웹 포트폴리오 페이지입니다.</div>
        <div className="list-disc list-inside">프로젝트 기간 : 2023.11 ~ 업데이트 중</div>
        <div>개인 프로젝트입니다.</div>
      </div>
      <h2 className="title">사용한 기술</h2>
      <div className="w-42 flex items-center gap-2 mb-7">
        {portfolioSkills.map((v, i) => (
          <div className="skill_fe" key={i}>
            {v}
          </div>
        ))}
      </div>
      <div className="w-full border-t-one border-b-one mb-4">
        <div className="flex gap-6 items-center my-4">
          <p className="text-xl">특정 기술을 사용한 이유</p>
          <div
            className="px-2 py-3 cursor-pointer bg-primary-point rounded-sm"
            onClick={() => setSkillsState(!skillState)}
          >
            {skillState ? "숨기기" : "펼쳐보기"}
          </div>
        </div>
        <div className={`${visibilityAnimation ? "overflow-hidden" : "hidden animate-dropdown"}`}>
          <ul
            className={`flex flex-col ml-3 mb-7 text-lg gap-3 ${
              skillState ? "animate-dragup" : "animate-dropdown"
            }`}
          >
            <li className="list_disc_style">
              Tailwind CSS
              <ul className="flex flex-col gap-2 mt-2">
                <li className="list_circle_style pl-7">
                  기존 CSS를 작성하는 방식과 달라 러닝 커브가 있지만, 솔로 프로젝트라 개발 속도를
                  맞춰야 하는 팀원이 없고 화려한 디자인을 구현할 필요가 없어 Tailwind를 사용해보기에
                  적절하다고 판단
                </li>
                <li className="list_circle_style pl-7">
                  반응형 웹을 만드는 것이 프로젝트의 메인 목표 중 하나였음. 따라서 클래스 이름을
                  통해 반응형 디자인을 쉽게 구현할 수 있는 Tailwind가 적합하다고 생각하였음.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="title">구현 기능</h2>
        <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
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
