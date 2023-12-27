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
        <ul className="flex flex-col gap-3 ml-3 mb-5 md:gap-3">
          <li>
            달력에 일정을 남기거나 디데이 설정을 하여 일정 관리를 할 수 있고, 원하는 날짜에
            다이어리를 작성할 수도 있습니다.
          </li>
          <li className="list-disc list-inside">프로젝트 기간: 2023.10 ~ 2023.11</li>
          <li className="list-disc list-inside">참여 인원: 2명</li>
          <li className="list-disc list-inside mb-1">역할: 풀스택 개발</li>
          <div>
            테스트계정
            <li className="list-disc list-inside">Id: test@test.com</li>
            <li className="list-disc list-inside">Password: 12341234</li>
          </div>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-42 flex items-center gap-2">
          {daygridFe.map((v) => (
            <div className="skill_fe">{v}</div>
          ))}
        </div>
        <div className="w-42 flex items-center gap-2 mb-8">
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
          <li className="text-2xl font-medium">주요 개발 내용</li>
          <li className="list-disc list-inside">
            Node.js와 Express를 통해 서버 환경 구축
            <ul className="flex flex-col gap-2 mt-2">
              <li className="list-circle list-inside pl-7">
                API 작성 시 자원과 행위를 명확하게 표현한 RESTful API 작성
              </li>
              <li className="list-circle list-inside pl-7">
                라우팅 처리를 통해 코드를 페이지별로 분리하여 가독성을 높임
              </li>
            </ul>
          </li>
          <li className="list-disc list-inside">
            MySQL를 사용하여 데이터베이스 구축
            <ul className="flex flex-col gap-2 mt-2">
              <li className="list-circle list-inside pl-7">
                데이터에 맞는 데이터 타입을 선택하고, 테이블 간의 관계를 적절하게 설정하여 효과적인
                데이터베이스 스키마 설계
              </li>
              <li className="list-circle list-inside pl-7">
                클라이언트의 요청에 따라 특정 기간, 데이터 갯수 등 필요한 데이터만 전송할 수 있도록
                쿼리문 작성
              </li>
              <li className="list-circle list-inside pl-7">
                사용자 입력값을 쿼리문에 직접 삽입하는 상황을 없애 SQL 인젝션 공격 방지
              </li>
            </ul>
          </li>
          <li className="list-disc list-inside">
            클라이언트 상태값은 Redux로, 서버 데이터는 React Query로 분리하여 관리
            <ul className="flex flex-col gap-2 mt-2">
              <li className="list-circle list-inside pl-7">
                리액트에서 state로 관리해야 할 상태값을 줄여 코드의 양 감소
              </li>
              <li className="list-circle list-inside pl-7">
                서버 데이터의 값이 변할때마다 자동으로 값이 업데이트 되어 코드의 유지보수가 간편해짐
              </li>
            </ul>
          </li>
          <li className="list-disc list-inside">
            Access token과 refresh token을 활용한 유저 인증 로직 구현
            <ul className="flex flex-col gap-2 mt-2">
              <li className="list-circle list-inside pl-7">
                Access token의 유효기간을 줄이고, refresh token은 access token의 만료시에만 서버로
                전송하여 CSRF 공격 위험을 낮춤
              </li>
              <li className="list-circle list-inside pl-7">
                Axios 인터셉터를 사용하여 요청마다 access token을 자동으로 삽입하고, 토큰 만료 시
                refresh token으로 토큰 재발급을 받을 수 있도록 함
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Daygrid;
