import React from "react";
import github from "../assets/images/github.png";
import link from "../assets/images/link.png";
import Slider from "./Slider";
import { pathfinderSkills } from "../assets/images/skills/projectSkills";

function Pathfinder(): JSX.Element {
  return (
    <div className="flex flex-col px-3">
      <div className="flex flex-col md:flex-row md:gap-6 md:items-center">
        <div className="flex flex-row gap-6">
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
        <span>Test 계정 - Id: test@test.com | Password: 12341234</span>
      </div>
      <Slider />
      <h2 className="text-2xl font-medium mt-6 mb-4">프로젝트 소개</h2>
      <div className="flex flex-col text-lg gap-3 mb-5 md:gap-5">
        <div>
          여행 경험과 사진을 글로 남겨 사람들과 공유할 수 있고, 유저 추천 기능 또는 랜덤 추천 기능을
          통해 국내 여행지를 추천받을 수 있는 여행 커뮤니티 사이트 입니다.
        </div>
        <div>프로젝트 기간: 2023.09 ~ 2023.10</div>
        <ul className="ml-2">
          <li className="list_disc_style">참여 인원: 6명 (FE 3명, BE 3명)</li>
          <li className="list_disc_style">역할: 프론트엔드 개발</li>
        </ul>
      </div>
      <div className="w-42 flex items-center gap-2 mb-8">
        {pathfinderSkills.map((v, i) => (
          <div className="skill_fe" key={i}>
            {v}
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-medium my-4">내가 기여한 부분</h2>
        <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
          <li className="list_disc_style">
            로그인 페이지, 회원가입 페이지, 마이페이지
            <ul className="flex flex-col gap-2 mt-2">
              <li className="list_circle_style pl-7">
                유저 정보 입력 또는 수정 시 react-hook-form 라이브러리 사용
              </li>
              <li className="list_circle_style pl-7">
                state 값의 개수를 줄여 입력 정보가 변할 때 리렌더링이 발생하는 횟수를 줄임
              </li>
              <li className="list_circle_style pl-7">
                state 값을 바꾸기 위한 코드가 삭제되어 전체적인 코드의 양을 줄임
              </li>
            </ul>
          </li>
          <li className="list_disc_style">댓글 CRUD 기능</li>
          <li className="list_disc_style">JWT 토큰을 이용하여 사용자 인증 진행</li>
          <li className="list_disc_style">
            Oauth2를 활용하여 카카오톡과 깃허브 소셜 로그인 기능 구현
            <ul className="flex flex-col gap-2 mt-2">
              <li className="list_circle_style pl-7">
                타 플랫폼 서버를 경유하여 access token을 받아온 후, 유저 인증 프로세스 진행
              </li>
              <li className="list_circle_style pl-7">
                회원가입 없이 서비스를 이용할 수 있게 하여 사용자 경험 개선
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="text-2xl font-medium my-4">트러블 슈팅 경험</h2>
        <div className="flex flex-col mb-7 text-lg gap-3">
          <div className="font-medium">🚨 문제 상황</div>
          <div className="mb-2">
            로그인 또는 회원가입을 할 때 버튼을 연달아 누를 경우 서버에 요청이 여러번 전송되어
            제대로 응답이 돌아오지 않는 현상 발생
          </div>
          <div className="font-medium">💡 해결 방법 1</div>
          <div className="mb-2">
            throttle 기능을 구현하여 제출 버튼을 눌렀을 시 첫 요청 전송 이후 3초간 중복 요청이
            보내지지 않도록 함.
          </div>
          <div className="font-medium">💡 해결 방법 2</div>
          <div>
            사용자 경험을 개선하기 위해 사용자에게 작업이 진행되고 있다는 것을 알려줄 수 있도록
            응답이 돌아올때까지 제출 버튼 위로 로딩 이미지를 출력하여 요청 전송을 위한 클릭이
            불가능하도록 코드 수정
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pathfinder;
