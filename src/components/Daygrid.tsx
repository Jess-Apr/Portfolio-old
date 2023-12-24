import React from "react";
import github from "../assets/images/github.png";
import link from "../assets/images/link.png";
import Slider from "./Slider";
import { daygridFe, daygridBe } from "../assets/images/skills/projectSkills";

function Daygrid(): JSX.Element {
  return (
    <div className="flex flex-col px-3">
      <h1 className="text-3xl font-medium mt-6 mb-2">캘린더 웹 어플리케이션</h1>
      <div className="flex items-center gap-6">
        <a href="https://github.com/Jess-Apr/DayGrid" target="_blank" className="link">
          <img src={github} className="w-5 h-5" />
          <span className="link_text">Github 링크</span>
        </a>
        <a
          href="http://daygrid.s3-website.ap-northeast-2.amazonaws.com/info"
          target="_blank"
          className="link"
        >
          <img src={link} className="w-5 h-5" />
          <span className="link_text">Demo 링크</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Slider />
        <ul className="flex flex-col gap-3 ml-3 text-lg mb-5 md:gap-6">
          <li>
            달력에 일정을 남기거나 디데이 설정을 하여 일정 관리를 할 수 있고, 원하는 날짜에
            다이어리를 작성할 수도 있는 캘린더 웹 어플리케이션 입니다.
          </li>
          <li className="list-disc list-inside">프로젝트 기간: 2023.10 ~ 2023.11</li>
          <li className="list-disc list-inside">참여 인원: 2명</li>
          <li className="list-disc list-inside">역할: 풀스택 개발</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-42 flex items-center gap-2">
          {daygridFe.map((v) => (
            <div className="skill_fe">{v}</div>
          ))}
        </div>
        <div className="w-42 flex items-center gap-2 mb-6">
          {daygridBe.map((v) => (
            <div className="skill_be">{v}</div>
          ))}
        </div>
      </div>
      <div>
        <ul className="flex flex-col ml-3 mb-7 text-lg">
          <li className="text-2xl font-medium mb-2">구현 기능</li>
          <li className="list-disc list-inside">달력 페이지, 마이페이지</li>
          <li className="list-disc list-inside">일정 CRUD 기능을 위한 api 작성</li>
          <li className="list-disc list-inside">회원 정보 CRUD 기능을 위한 api 작성</li>
          <li className="list-disc list-inside">
            Access token, refresh token을 이용한 사용자 인증 로직
          </li>
          <li className="list-disc list-inside">데이터베이스 스키마 설계 및 구축</li>
        </ul>
        <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
          <li className="text-2xl font-medium">성장 경험</li>
          <li className="list-disc list-inside">
            Node.js와 Express를 통해 서버 환경을, MySQL로 데이터베이스를 직접 구축해보며 api 작성,
            라우팅 처리 등 몰랐던 백엔드 작업에 대해 더 깊이 공부할 수 있었습니다. 또, postman으로
            서버를 테스트하거나 cors 에러를 해결하는 과정을 겪으며 프론트엔드 개발자로써 어떻게
            백엔드 개발자들과 더 잘 소통할 수 있을지 생각해보는 계기가 되었습니다.
          </li>
          <li className="list-disc list-inside">
            다양한 submit form을 만들면서 상태값이 늘어나게 되어 클라이언트 상태값은 Redux로, 서버
            데이터는 React Query로 분리하여 관리했습니다. 이에 따라 리액트에서 state로 관리해야 할
            상태값이 줄어 코드의 양이 감소했고, 값이 변할때마다 React Query가 자동으로 값을 업데이트
            해주어 유지보수가 더욱 간편한 코드를 작성할 수 있었습니다.
          </li>
          <li className="list-disc list-inside">
            Access token의 유효기간이 길어지면 탈취 위험이 높아져 refresh token까지 활용한 유저 인증
            로직을 구현했습니다. Access token이 만료되었을 때 refresh token을 통해 새로 토큰을
            받아오는 인증 로직을 구현하는 과정에서 어려움을 겪었지만, CSRF 공격에 더 안전한 인증
            로직을 구현할 수 있었고, 각 토큰의 역할과 사용 방법을 제대로 배우는 경험이 되었습니다.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Daygrid;
