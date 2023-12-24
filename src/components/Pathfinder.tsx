import React from "react";
import github from "../assets/images/github.png";
import link from "../assets/images/link.png";
import Slider from "./Slider";
import { pathfinderSkills } from "../assets/images/skills/projectSkills";

function Pathfinder(): JSX.Element {
  return (
    <div className="flex flex-col px-3">
      <h1 className="text-3xl font-medium mt-6 mb-2">여행 커뮤니티 웹 사이트</h1>
      <div className="flex items-center gap-6">
        <a href="https://github.com/Jess-Apr/Pathfinder" target="_blank" className="link">
          <img src={github} className="w-5 h-5" />
          <span className="link_text">Github 링크</span>
        </a>
        <a
          href="http://seb45-main-020.s3-website.ap-northeast-2.amazonaws.com/"
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
            여행 경험과 사진을 글로 남겨 사람들과 공유할 수 있고, 사용자 추천 기능을 통해 인기
            여행지를 추천 받거나 랜덤 추천 기능을 통해 국내 여행지를 알아볼 수 있습니다.
          </li>
          <li className="list-disc list-inside">프로젝트 기간: 2023.09 ~ 2023.10</li>
          <li className="list-disc list-inside">참여 인원: 6명 (FE 3명, BE 3명)</li>
          <li className="list-disc list-inside">역할: 프론트엔드 개발</li>
        </ul>
      </div>
      <div className="w-42 flex items-center gap-2 mb-6">
        {pathfinderSkills.map((v) => (
          <div className="skill_fe">{v}</div>
        ))}
      </div>
      <div>
        <ul className="flex flex-col ml-3 mb-7 text-lg">
          <li className="text-2xl font-medium mb-2">구현 기능</li>
          <li className="list-disc list-inside">로그인 페이지, 회원가입 페이지, 마이페이지</li>
          <li className="list-disc list-inside">댓글 CRUD 기능</li>
          <li className="list-disc list-inside">JWT 토큰을 이용하여 사용자 인증 진행</li>
          <li className="list-disc list-inside">
            Oauth를 이용하여 카카오톡, 깃허브 소셜 로그인 연결
          </li>
        </ul>
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

export default Pathfinder;
