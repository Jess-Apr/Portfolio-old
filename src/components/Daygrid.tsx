import React, { useEffect, useState } from "react";
import github from "../assets/images/github.png";
import link from "../assets/images/link.png";
import Slider from "./Slider";
import { daygridFe, daygridBe } from "../assets/projects/projectSkills";

function Daygrid(): JSX.Element {
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
        <span>Test 계정 - Id: test@test.com | Password: 12341234</span>
      </div>
      <Slider />
      <h2 className="title">프로젝트 소개</h2>
      <div className="flex flex-col text-lg gap-3 mb-5 md:gap-5">
        <div>
          달력에 일정을 남기거나 디데이 설정을 하여 일정 관리를 할 수 있고, 원하는 날짜에 다이어리를
          작성하여 기록할 수 있는 캘린더 웹 어플리케이션 입니다.
        </div>
        <div>프로젝트 기간: 2023.10 ~ 2023.11</div>
        <ul className="ml-2">
          <li className="list_disc_style">참여 인원: 2명</li>
          <li className="list_disc_style">
            역할: 프론트엔드 개발, 백엔드 개발, 프로젝트 기획 및 디자인
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="title">사용한 기술</h2>
        <div className="w-42 flex items-center gap-2">
          {daygridFe.map((v, i) => (
            <div className="skill_fe" key={i}>
              {v}
            </div>
          ))}
        </div>
        <div className="w-42 flex items-center gap-2 mb-6">
          {daygridBe.map((v, i) => (
            <div className="skill_be" key={i}>
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
                Redux Toolkit
                <ul className="flex flex-col gap-2 mt-2">
                  <li className="list_circle_style pl-7">
                    중앙 집중화된 저장소에서 전역 상태를 관리하여 props drilling을 방지하고 상태값을
                    재사용할 수 있음
                  </li>
                  <li className="list_circle_style pl-7">
                    데이터가 단방향으로 흐르는 flux 패턴을 차용하여 모든 상태 변화를 예측 가능
                  </li>
                  <li className="list_circle_style pl-7">
                    Redux Toolkit을 통해 보일러플레이트 코드양을 줄여 상태관리 작업을 단순화하고
                    실수를 방지
                  </li>
                </ul>
              </li>
              <li className="list_disc_style">
                React Query
                <ul className="flex flex-col gap-2 mt-2">
                  <li className="list_circle_style pl-7">
                    캐싱 기능을 통해 비동기 데이터의 중복 호출을 방지하거나, 데이터를 지속적으로
                    동기화 해주는 등 서버 데이터를 손쉽게 관리할 수 있음
                  </li>
                  <li className="list_circle_style pl-7">
                    Redux Toolkit에서도 RTK Query 통해 비동기 데이터를 불러오고 캐싱하는 기능을
                    제공. 이후 다른 프로젝트에서 Redux Toolkit을 사용한다면 편리성을 위해 RTK
                    Query를 고려해볼 수 있을 것 같음.
                  </li>
                </ul>
              </li>
              <li className="list_disc_style">
                MySQL
                <ul className="flex flex-col gap-2 mt-2">
                  <li className="list_circle_style pl-7">
                    데이터베이스 작업을 처음 해보는 것이기 때문에 스키마를 미리 선언하고, 정해진
                    구조와 규칙에 따라 데이터를 다뤄야하는 RDBSM이 실수를 줄일 수 있을 것이라
                    생각하였음
                  </li>
                  <li className="list_circle_style pl-7">
                    MySQL은 RDBSM 중 가장 널리 사용되어 안정적이고, 문제 발생 시 정보를 쉽게 찾을 수
                    있음
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="title">내가 기여한 부분</h2>
      <p className="text-xl mb-2">프론트엔드</p>
      <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
        <li className="list_disc_style">Webpack과 Babel을 설정하여 프론트엔드 개발 환경 세팅</li>
        <li className="list_disc_style">
          달력 페이지
          <ul className="flex flex-col gap-2 mt-2">
            <li className="list_circle_style pl-7">
              라이브러리를 사용하지 않고 flex와 grid를 사용하여 달력 구현
            </li>
            <li className="list_circle_style pl-7">
              월별로 날짜를 확인할 수 있는 월간 포맷과 주별로 날짜를 확인할 수 있는 주간 포맷으로
              구성
            </li>
            <li className="list_circle_style pl-7">
              월간 달력에서 특정 날짜를 클릭하거나, 주간 달력에서 특정 시간을 클릭할 경우 해당
              날짜와 시간이 설정된 일정 생성 모달 팝업
            </li>
          </ul>
        </li>
        <li className="list_disc_style">
          일정 조회, 추가, 수정, 삭제 기능
          <ul className="flex flex-col gap-2 mt-2">
            <li className="list_circle_style pl-7">
              주간 달력에서 일정을 확인할 경우, 각 일정의 날짜와 시간에 맞추어 해당 시간에 일정
              카드가 생성될 수 있도록 구현
              <ul className="flex flex-col gap-2 mt-2">
                <li className="list_circle_style pl-7">
                  일정 카드의 position을 absolute로 설정. 일정의 날짜는 left 속성, 시간은 top
                  속성으로 위치해야 할 곳을 조정하여 카드가 특정 위치에 생성되도록 함.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="list_disc_style">
          마이페이지 (유저 정보 조회, 수정, 탈퇴)
          <ul className="flex flex-col gap-2 mt-2">
            <li className="list_circle_style pl-7">
              유저 정보는 쉽게 변하지 않는 데이터이기 때문에 React Query를 사용해 정보를 시간 제한
              없이 캐싱하여 불필요한 fetching이 일어나지 않도록 함
            </li>
            <li className="list_circle_style pl-7">
              사용자 정보가 수정되었을 때는 useMutation으로 서버 데이터를 업데이트하고, 캐시에 있는
              데이터를 무효화. 이후 서버로부터 데이터를 새로 가져오도록 하여 유저 정보를 가장 최신
              상태로 유지.
            </li>
          </ul>
        </li>
      </ul>
      <p className="text-xl mb-2">백엔드</p>
      <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
        <li className="list_disc_style">
          일정 CRUD 기능과 회원 정보 CRUD 기능 구현
          <ul className="flex flex-col gap-2 my-2">
            <li className="list_circle_style pl-7">
              API 작성 시 자원과 행위를 명확하게 표현한 RESTful API 작성
            </li>
            <li className="list_circle_style pl-7">
              코드를 요청 URI 경로별로 나누어 파일을 분리한 후, express.Router()를 사용해 분리된
              파일을 호출하여 요청 처리. 긴 코드를 나누어 모듈화하여 관리함으로써 코드의 가독성을
              높임.
            </li>
          </ul>
        </li>
        <li className="list_disc_style">
          Access token과 refresh token을 활용한 유저 인증 로직 구현
          <ul className="flex flex-col gap-2 mt-2">
            <li className="list_circle_style pl-7">
              Axios 인터셉터를 사용하여 요청마다 access token을 자동으로 삽입하고, 토큰 만료 시
              refresh token으로 토큰 재발급을 받을 수 있도록 함
            </li>
            <li className="list_circle_style pl-7">
              CSRF 공격 위험을 낮추기 위한 토큰 설정
              <ul className="flex flex-col gap-2 mt-2">
                <li className="list_circle_style pl-7">
                  Access token의 유효기간을 1시간으로, refresh token은 일주일로 설정
                </li>
                <li className="list_circle_style pl-7">
                  토큰은 HTTP Only Cookies로 설정해주어 브라우저에서 접근이 불가하도록 함
                </li>
                <li className="list_circle_style pl-7">
                  Refresh token은 요청마다 서버에 전송하는 것이 아니라 access token의 만료시에만
                  서버로 보내 탈취 위험을 낮춤
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="list_disc_style">
          데이터베이스 스키마 설계 및 MySQL 데이터베이스 구축
          <ul className="flex flex-col gap-2 mt-2">
            <li className="list_circle_style pl-7">
              사용자는 여러개의 다이어리와 일정을 기록할 수 있으므로 1:N 관계를 가짐. 따라서
              다이어리와 일정 데이터에 사용자의 ID값을 외래키로 포함하여 관계를 연결하였음.
            </li>
            <li className="list_circle_style pl-7">
              사용자 입력값이 쿼리문에 직접적으로 삽입되지 않도록 하여 SQL 인젝션 공격 방지
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="title">트러블 슈팅 경험</h2>
      <div className="flex flex-col pb-7 mb-7 text-lg gap-3 border-b-one border-secondary-lightgray">
        <div className="font-medium">🚨 문제 상황 1</div>
        <div className="mb-2">
          프로젝트를 빌드할 때 시간이 오래 걸려 배포를 하거나 개발 환경을 처음 시작할 때 불편함을
          겪었음
        </div>
        <div className="font-medium">💡 해결 방법</div>
        <ul className="flex flex-col gap-2">
          <li className="list-disc ml-5 pl-7">
            Webpack 환경의 빌드 시간을 단축시킬 수 있는 방법을 찾아보던 중, Go 언어를 기반으로
            작성되어 빌드 속도를 단축시켜주는 esbuild-loader에 대해 알게 되었음. Babel-loader 와
            ts-loader를 esbuild-loader로 마이그레이션하여 빌드 시간을 단축함.
          </li>
          <li className="list-disc ml-5 pl-7">
            esbuild-loader는 타입 체킹을 진행하지 않아 fork-ts-checker-webpack-plugin을 사용하여
            타입 체킹을 별도의 프로세스로 분리하여 진행하였음
          </li>
          <li className="list-disc ml-5 pl-7">
            npm run build 속도: 17.84초 -&gt; 8.56초, npm start 속도: 10.62초 -&gt; 6.62초
          </li>
        </ul>
      </div>
      <div className="flex flex-col pb-7 mb-7 text-lg gap-3 border-b-one border-secondary-lightgray">
        <div className="font-medium">🚨 문제 상황 2</div>
        <div className="mb-2">
          같은 날짜에 일정 카드가 여러개 생길 경우, 일정 카드가 다른 일정카드를 가리는 현상 발생
        </div>
        <div className="font-medium">💡 해결 방법</div>
        <ul className="flex flex-col gap-2">
          <li className="list-disc ml-5 pl-7">
            각 일정 카드의 z-index 값을 시간이 길수록 낮게, 짧을수록 높게 주어 시간이 긴 일정일수록
            뒤로 배치
          </li>
          <li className="list-disc ml-5 pl-7">
            일정 시작 시간이 같은 일정이 여러개일 경우, '1/일정갯수'의 길이로 일정 카드 너비 축소
          </li>
        </ul>
      </div>
      <div className="flex flex-col mb-7 text-lg gap-3">
        <div className="font-medium">🚨 문제 상황 3</div>
        <div className="mb-2">배포를 진행한 후 CORS 에러 발생</div>
        <div className="font-medium">💡 해결 방법</div>
        <ul className="flex flex-col gap-2">
          <li className="list-disc ml-5 pl-7">
            CORS 에러에 대해 인터넷에 검색해보니 브라우저에 구현되어있는 동일 출처 정책 때문에
            발생하는 에러임을 알게되었음. 해당 프로젝트의 서버와 브라우저는 서로 다른 출처를 가지기
            때문에 보안을 위하여 다른 출처에 접근이 불가능함.
          </li>
          <li className="list-disc ml-5 pl-7">
            Access-Control-Allow-Origin에 브라우저의 출처를 명시적으로 설정하여 브라우저의 접근 허용
          </li>
          <li className="list-disc ml-5 pl-7">
            응답 헤더의 Access-Control-Allow-Credentials 옵션을 true로 설정해주어 응답을 받은
            브라우저가 응답에 접근할 수 있도록 설정
          </li>
          <li className="list-disc ml-5 pl-7">
            Access-Controls-Allow-Methods에 브라우저에서 자원을 접근할 때 사용하는 모든 메서드를
            적어주어 HTTP 메서드에 관계없이 접근을 허용
          </li>
        </ul>
      </div>
      <h2 className="title">배운 점</h2>
      <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
        <li className="list_disc_style">
          기획 - 디자인 - 개발 - 배포 단계를 전부 직접 진행하며 프로덕트가 만들어지는 하나의 과정을
          경험해보았다.
        </li>
        <li className="list_disc_style">
          서버와 데이터베이스 구축하고 API를 직접 작성해보면서 백엔드가 어떻게 작동하는지, CORS
          에러는 왜 일어나게 되는지 더욱 깊이 이해할 수 있었다.
        </li>
        <li className="list_disc_style">
          라이브러리를 사용하지 않고 달력을 구현하는 것이 굉장히 어려웠지만, CSS에서 레이아웃을
          구성하는데 필수적인 flex, grid 개념과 사용법을 확실히 익힐 수 있었다.
        </li>
        <li className="list_disc_style">
          코드 컨벤션, 커밋 컨벤션과 같은 팀 규칙과 프로젝트 진행상황을 문서화 하는 과정에서 기록의
          중요성을 깨달았다. 문서화된 기록을 통해 프로젝트가 어떻게 진행되고 있는지 파악하여
          방향성을 잡을 수 있었고, 팀원 간의 의사소통이나 코드 리뷰에 드는 시간을 줄일 수 있었다.
        </li>
      </ul>
    </div>
  );
}

export default Daygrid;
