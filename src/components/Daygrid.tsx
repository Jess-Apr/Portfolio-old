import React from "react";
import github from "../assets/images/github.png";
import link from "../assets/images/link.png";
import Slider from "./Slider";
import { daygridFe, daygridBe } from "../assets/images/skills/projectSkills";

function Daygrid(): JSX.Element {
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
        <div className="w-42 flex items-center gap-2 mb-8">
          {daygridBe.map((v, i) => (
            <div className="skill_be" key={i}>
              {v}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="title">내가 기여한 부분</h2>
        <p className="text-xl mb-2">프론트엔드</p>
        <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
          <li className="list_disc_style">
            Webpack과 Babel을 설정하여 프론트엔드 개발 환경 세팅
            <ul className="flex flex-col gap-2 mt-2">
              <li className="list_circle_style pl-7">
                Bebel-loader 와 ts-loader를 esbuild-loader로 마이그레이션하여 빌드 시간 단축
                <ul className="flex flex-col gap-2 mt-2">
                  <li className="list_circle_style pl-7">
                    esbuild는 Go언어를 기반으로 작성되어 JavaScrip에 비해 빠른 빌드 속도를 보여줌.
                    하지만 타입 체킹을 진행하지 않기 때문에 fork-ts-checker-webpack-plugin을
                    사용하여 타입 체킹을 별도의 프로세스로 분리하여 진행.
                  </li>
                  <li className="list_circle_style pl-7">
                    npm run build 속도: 17.84초 -&gt; 8.56초, npm start 속도: 10.62초 -&gt; 6.62초
                  </li>
                </ul>
              </li>
            </ul>
          </li>
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
              <li className="list_circle_style pl-7">
                같은 날짜에 일정 카드가 여러개 생길 경우, 위치가 겹쳐 특정 일정 카드가 가려지지
                않도록 로직 구현
                <ul className="flex flex-col gap-2 mt-2">
                  <li className="list_circle_style pl-7">시간이 긴 일정일수록 뒤로 배치</li>
                  <li className="list_circle_style pl-7">
                    일정 시작 시간이 같은 일정이 여러개일 경우, '1/일정갯수'의 길이로 일정 카드 너비
                    축소
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
                사용자 정보가 수정되었을 때는 useMutation으로 서버 데이터를 업데이트하고, 캐시에
                있는 데이터를 무효화. 이후 서버로부터 데이터를 새로 가져오도록 하여 유저 정보를 가장
                최신 상태로 유지.
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
                    Access token의 유효기간을 1시간으로, refresh token은 일주일로 설정.
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
      </div>
    </div>
  );
}

export default Daygrid;
