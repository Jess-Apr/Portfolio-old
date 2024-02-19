import React, { useEffect, useState } from "react";
import github from "../assets/images/github.png";
import link from "../assets/images/link.png";
import Slider from "./Slider";
import { pathfinderSkills } from "../assets/projects/projectSkills";

function Pathfinder(): JSX.Element {
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
      <h2 className="title">프로젝트 소개</h2>
      <div className="flex flex-col text-lg gap-3 mb-5 md:gap-5">
        <div>
          여행 경험과 사진을 글로 남겨 사람들과 공유할 수 있고, 유저 추천 기능 또는 랜덤 추천 기능을
          통해 국내 여행지를 추천받을 수 있는 여행 커뮤니티 사이트 입니다.
        </div>
        <div>프로젝트 기간: 2023.09 ~ 2023.10</div>
        <ul className="ml-2">
          <li className="list_disc_style">참여 인원: 6명 (FE 3명, BE 3명)</li>
          <li className="list_disc_style">역할: 프론트엔드 개발, 프로젝트 기획 및 디자인</li>
        </ul>
      </div>
      <h2 className="title">사용한 기술</h2>
      <div className="w-42 flex items-center gap-2 mb-6">
        {pathfinderSkills.map((v, i) => (
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
              Recoil을 사용한 이유
              <ul className="flex flex-col gap-2 mt-2">
                <li className="list_circle_style pl-7">
                  짧은 시간 안에 프로젝트를 완성해야 하고, 상태 관리 라이브러리를 사용해보지 않은
                  팀원이 있어 비교적 구조가 직관적이고 빨리 배울 수 있는 Recoil을 사용
                </li>
              </ul>
            </li>
            <li className="list_disc_style">
              Styled-components를 사용한 이유
              <ul className="flex flex-col gap-2 mt-2">
                <li className="list_circle_style pl-7">
                  유일한 class명을 생성하여 붙여주기 때문에 class 네이밍을 고민하지 않아도 되고,
                  파일 단위로 스타일이 적용되어 다른 파일에 영향을 주지 않음. FE 팀원 모두가 팀
                  프로젝트를 처음 진행해보기 때문에 혼란을 줄이기 위해 채택.
                </li>
                <li className="list_circle_style pl-7">
                  JS 코드를 사용하여 동적 스타일링이 가능. 프로젝트에서 디자인을 중점적으로 생각했기
                  때문에 동적 스타일링이 필요할 것이라 생각하였음.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="title">내가 기여한 부분</h2>
      <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
        <li className="list_disc_style">
          Oauth2를 활용하여 카카오톡과 깃허브 소셜 로그인 기능 구현
          <ol className="flex flex-col gap-2 mt-2">
            <li className="list_decimal_style">
              사용자의 로그인 요청 시, 각 플랫폼의 소셜 로그인 페이지로 연결
            </li>
            <li className="list_decimal_style">
              로그인 성공 후, 플랫폼에서 발급한 인가 코드를 백엔드 서버로 전달
            </li>
            <li className="list_decimal_style">
              백엔드 서버는 인가 코드를 통해 각 플랫폼에서 access token을 발급 받고, 이를 바탕으로
              자체 서버 토큰을 발행. 이후 발급된 토큰은 쿠키에 저장.
            </li>
          </ol>
        </li>
        <li className="list_disc_style">
          react-hook-form을 이용하여 로그인, 회원가입, 마이페이지 입력값 관리
          <ul className="flex flex-col gap-2 mt-2">
            <li className="list_circle_style pl-7">
              폼 입력값 관리 및 유효성 검사를 위해 별도의 state를 선언하지 않고, submit 시
              react-hook-form에서 제공하는 데이터를 활용
            </li>
            <li className="list_circle_style pl-7">
              이를 통해 리렌더링을 횟수를 줄이고, 코드 간결성과 유지보수성을 향상시켰음
            </li>
          </ul>
        </li>
        <li className="list_disc_style">
          사용자가 작성한 댓글만 수정, 삭제 가능한 댓글 CRUD 기능 구현
          <ul className="flex flex-col gap-2 mt-2">
            <li className="list_circle_style pl-7">
              로그인 시 쿠키에 저장한 access token을 댓글 수정 요청 헤더에 포함하여 전송
            </li>
            <li className="list_circle_style pl-7">
              토큰 검증 후, 유저가 댓글 작성자일 경우에만 댓글 수정이 가능하도록 하였음
            </li>
            <li className="list_circle_style pl-7">
              유효하지 않은 토큰이나 댓글 작성자가 아닌 경우, 수정 권한 없음을 알리는 알림창이
              팝업되도록 구현
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="title">트러블 슈팅 경험</h2>
      <div className="flex flex-col mb-7 text-lg gap-3">
        <div className="font-medium">🚨 문제 상황</div>
        <div className="mb-2">
          로그인 또는 회원가입 과정에서 사용자가 버튼을 연달아 누를 경우 서버에 요청이 여러번
          전송됨. 이로 인해 응답이 제대로 돌아오지 않는 현상이 발생함.
        </div>
        <div className="font-medium">💡 해결 방법</div>
        <ul className="flex flex-col gap-2">
          <li className="list-disc ml-5 pl-7">
            isLoading이라는 state값을 생성한 후, 서버로부터 응답이 돌아올때까지 isLoading의 값을
            true로 설정하였음. isLoading 값이 true인 경우, 제출 버튼 대신 로딩 이미지를 출력되도록
            함.
          </li>
          <li className="list-disc ml-5 pl-7">
            이를 통해 요청이 중복으로 보내지지 않도록 했고, 동시에 사용자에게 현재 작업이 진행
            중임을 알려주어 사용자 경험을 개선하였음.
          </li>
        </ul>
      </div>
      <h2 className="title">배운 점</h2>
      <ol className="flex flex-col ml-3 mb-7 text-lg gap-3">
        <li className="list_decimal_style">
          팀워크와 커뮤니케이션
          <ul className="flex flex-col ml-3 mt-2 text-lg gap-3">
            <li className="list_disc_style">
              매일 아침 데일리 스크럼을 진행하고, 짧은 기간동안 많은 작업을 하게되면서 팀원들과 정말
              많은 의견을 나누었습니다.
            </li>
            <li className="list_disc_style">
              프로젝트를 원활하게 진행하기 위해 제가 수행한 작업 내용을 명확하게 전달하는 방법과,
              백엔드 팀원들도 제 업무를 충분히 이해할 수 있도록 상대방의 입장에서 소통하는 방법을
              배웠습니다.
            </li>
          </ul>
        </li>
        <li className="list_decimal_style">
          사용자 경험에 대한 인식
          <ul className="flex flex-col ml-3 mt-2 text-lg gap-3">
            <li className="list_disc_style">
              서비스를 배포하고 사용자의 피드백을 받는 과정에서, 내 생각과 사용자의 경험이 다를 수
              있음을 알게 되었습니다.
            </li>
            <li className="list_disc_style">
              사용자의 입장에서 제품을 바라보는 중요성을 다시 한 번 깨달았습니다.
            </li>
          </ul>
        </li>
        <li className="list_decimal_style">
          로그인 과정의 이해와 문제 해결
          <ul className="flex flex-col ml-3 mt-2 text-lg gap-3">
            <li className="list_disc_style">
              로그인 및 소셜 로그인 구현 과정에서 다양한 에러를 만났습니다.
            </li>
            <li className="list_disc_style">
              이 과정에서 JWT 토큰을 사용한 로그인, 소셜 로그인의 진행 방식, 그리고 쿠키와 세션에
              대한 개념에 대해 이해하게 되었습니다.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default Pathfinder;
