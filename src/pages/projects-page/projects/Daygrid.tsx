import React, { useEffect, useState } from "react";
import github from "../../../assets/images/github.png";
import link from "../../../assets/images/link.png";
import Slider from "../../../components/Slider";
import { daygridFe, daygridBe } from "../../../assets/projects/projectSkills";
import { flushSync } from "react-dom";

function Daygrid(): JSX.Element {
    const [skillState, setSkillsState] = useState<boolean>(false);
    const [visibilityAnimation, setVisibilityAnimation] =
        useState<boolean>(false);

    useEffect(() => {
        if (skillState) {
            setVisibilityAnimation(true);
        }
    }, [skillState]);

    return (
        <div className="flex flex-col px-3">
            <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
                <a
                    href="https://github.com/Jess-Apr/DayGrid"
                    target="_blank"
                    className="link"
                >
                    <img src={github} className="w-5 h-5" />
                    <span className="link_text">Github 링크</span>
                </a>
            </div>
            <Slider />
            <h2 className="title">프로젝트 소개</h2>
            <div className="flex flex-col text-lg gap-4 mb-5 md:gap-4">
                <div>
                    달력에 일정을 남기거나 디데이 설정을 하여 일정 관리를 할 수
                    있고, 원하는 날짜에 다이어리를 작성하여 기록할 수 있는
                    캘린더 웹 어플리케이션
                </div>
                <ul className="list-none">
                    <li className="flex flex-row items-baseline">
                        <div className="font-medium mr-3">진행 기간:</div>
                        <div>2023.10 ~ 2023.11</div>
                    </li>
                    <li className="flex flex-row items-baseline">
                        <div className="font-medium mr-3">진행 인원:</div>
                        <div>풀스택 개발 2인</div>
                    </li>
                    <li className="flex flex-row items-baseline">
                        <div className="font-medium mr-3">담당 업무:</div>
                        <div>
                            프론트엔드 개발, 백엔드 개발, 프로젝트 기획 및
                            디자인
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="title">사용한 기술</h2>
                <div className="w-42 flex items-center gap-3">
                    {daygridFe.map((v, i) => (
                        <div className="skill_fe" key={i}>
                            {v}
                        </div>
                    ))}
                </div>
                <div className="w-42 flex items-center gap-3 mb-6">
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
                    <div
                        className={`${
                            visibilityAnimation
                                ? "overflow-hidden"
                                : "hidden animate-dropdown"
                        }`}
                        onAnimationEnd={() => {
                            flushSync(() => {
                                if (!skillState) {
                                    setVisibilityAnimation(false);
                                }
                            });
                        }}
                    >
                        <ul
                            className={`flex flex-col ml-3 mb-7 text-lg gap-3 ${
                                skillState
                                    ? "animate-dragup"
                                    : "animate-dropdown"
                            }`}
                        >
                            <li className="list_disc_style">
                                Redux Toolkit
                                <ul className="flex flex-col gap-2 mt-2">
                                    <li className="list_circle_style pl-7">
                                        보다 적은 코드량으로 전역 상태 관리를
                                        하기 위해 사용
                                    </li>
                                </ul>
                            </li>
                            <li className="list_disc_style">
                                TanStack Query
                                <ul className="flex flex-col gap-2 mt-2">
                                    <li className="list_circle_style pl-7">
                                        캐싱 기능을 통해 비동기 데이터의 중복
                                        호출을 방지하고, 데이터를 지속적으로
                                        동기화 하는 등 서버 데이터를 손쉽게
                                        관리하기 위해 사용
                                    </li>
                                    <li className="list_circle_style pl-7">
                                        Redux Toolkit에서도 RTK Query 통해
                                        비동기 데이터를 불러오고 캐싱하는 기능을
                                        제공. 이후 다른 프로젝트에서 Redux
                                        Toolkit을 사용한다면 편리성을 위해 RTK
                                        Query를 고려해볼 수 있을 것 같음.
                                    </li>
                                </ul>
                            </li>
                            <li className="list_disc_style">
                                MySQL
                                <ul className="flex flex-col gap-2 mt-2">
                                    <li className="list_circle_style pl-7">
                                        데이터베이스 작업을 처음 해보는 것이기
                                        때문에 스키마를 미리 선언하고, 정해진
                                        구조와 규칙에 따라 데이터를 다뤄야하는
                                        RDBSM이 실수를 줄일 수 있을 것이라
                                        생각하였음
                                    </li>
                                    <li className="list_circle_style pl-7">
                                        MySQL은 RDBSM 중 가장 널리 사용되어
                                        안정적이고, 문제 발생 시 정보를 쉽게
                                        찾을 수 있어 채택
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 className="title">내가 기여한 부분</h2>
            <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
                <li className="list_disc_style">
                    Access token과 Refresh token을 활용한 유저 인증 로직 구현
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            Axios 인터셉터를 이용하여 각 요청마다 Access token을
                            자동 삽입하며, 토큰 만료 시 Refresh token으로 토큰
                            재발급을 받을 수 있도록 설정
                        </li>
                        <li className="list_circle_style pl-7">
                            보안 강화를 위한 토큰 설정
                            <ul className="flex flex-col gap-2 mt-2">
                                <li className="list_circle_style pl-7">
                                    Access token은 외부 접근이 어려운 로컬
                                    변수에, Refresh token은 브라우저에서 접근이
                                    불가능한 HTTP Only Cookies에 저장
                                </li>
                                <li className="list_circle_style pl-7">
                                    Access token의 유효기간을 1시간으로 짧게
                                    설정하여, 토큰이 악용될 가능성을 최소화
                                </li>
                                <li className="list_circle_style pl-7">
                                    Refresh token은 Access token 만료 시에만
                                    서버로 전송하여 토큰 탈취 위험을 줄임
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    외부 라이브러리를 사용하지 않고 달력 기능 구현
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            월간 달력은 grid, 주간 달력은 flex를 활용하여 구현
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    TanStack Query를 사용하여 마이페이지의 서버 데이터를
                    효율적으로 관리
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            쉽게 변하지 않는 유저 정보는 시간 제한 없이 캐싱하여
                            불필요한 fetching을 방지
                        </li>
                        <li className="list_circle_style pl-7">
                            사용자 정보가 수정되었을 경우, useMutation을 통해
                            서버 데이터를 업데이트하고, 캐시 데이터를 무효화함.
                            이후 서버로부터 최신 데이터를 새로 가져오도록
                            설정하여 유저 정보를 최신 상태로 유지함.
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    일정을 날짜별로 파악할 수 있는 일정 관리 기능 구현
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            일정을 생성할 경우, 각 일정의 날짜와 시간에 맞추어
                            달력에 일정 표시가 생성될 수 있도록 설계
                        </li>
                        <li className="list_circle_style pl-7">
                            일정 표시의 position을 absolute로 설정하고, 날짜와
                            시간에 따라 left와 top 속성을 조정하여 표시
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    서버 구축, 데이터베이스 연동 및 API 작성
                    <ul className="flex flex-col gap-2 my-2">
                        <li className="list_circle_style pl-7">
                            API 작성 시에는 자원과 행위를 명확하게 표현한
                            RESTful API로 작성
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    CRA를 사용하지 않고, Webpack과 Babel을 설정하여 프론트엔드
                    개발 환경 세팅
                </li>
            </ul>
            <h2 className="title">트러블 슈팅 경험</h2>
            <div className="flex flex-col pb-7 mb-7 text-lg gap-3 border-b-one border-secondary-lightgray">
                <div className="font-medium">🚨 문제 상황 1</div>
                <div className="mb-2">
                    프로젝트 빌드 시간이 오래 걸려 배포를 하거나 개발 환경을
                    시작할 때 불편함을 겪었음
                </div>
                <div className="font-medium">💡 해결 방법</div>
                <ul className="flex flex-col gap-2">
                    <li className="list-disc ml-5 pl-7">
                        Webpack 환경의 빌드 시간을 단축시킬 수 있는 방법을
                        찾아보던 중, Go 언어를 기반으로 작성되어 빌드 속도를
                        단축시켜주는 esbuild-loader에 대해 알게 되었음.
                        Babel-loader 와 ts-loader를 esbuild-loader로
                        마이그레이션하여 빌드 시간을 단축함.
                    </li>
                    <li className="list-disc ml-5 pl-7">
                        esbuild-loader가 타입 체킹을 진행하지 않아,
                        fork-ts-checker-webpack-plugin을 사용하여 타입 체킹을
                        별도의 프로세스로 분리함
                    </li>
                    <li className="list-disc ml-5 pl-7">
                        npm run build 속도:{" "}
                        <span className="font-semibold">
                            17.84초 -&gt; 8.56초
                        </span>
                        , npm start 속도:{" "}
                        <span className="font-semibold">
                            10.62초 -&gt; 6.62초
                        </span>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col pb-7 mb-7 text-lg gap-3 border-b-one border-secondary-lightgray">
                <div className="font-medium">🚨 문제 상황 2</div>
                <div className="mb-2">
                    같은 날짜에 일정을 여러개 등록할 경우, 달력에 생성된 일정
                    표시가 다른 일정 표시를 가리는 현상 발생
                </div>
                <div className="font-medium">💡 해결 방법</div>
                <ul className="flex flex-col gap-2">
                    <li className="list-disc ml-5 pl-7">
                        각 일정 카드의 z-index 값을 시간이 길수록 낮게, 짧을수록
                        높게 주어 시간이 긴 일정일수록 뒤로 배치
                    </li>
                    <li className="list-disc ml-5 pl-7">
                        일정 시작 시간이 같은 일정이 여러개일 경우,
                        '1/일정갯수'의 길이로 일정 카드 너비 축소
                    </li>
                </ul>
            </div>
            <div className="flex flex-col mb-7 text-lg gap-3">
                <div className="font-medium">🚨 문제 상황 3</div>
                <div className="mb-2">프로젝트를 배포한 후 CORS 에러 발생</div>
                <div className="font-medium">💡 해결 방법</div>
                <ul className="flex flex-col gap-2">
                    <li className="list-disc ml-5 pl-7">
                        인터넷 검색을 통해 CORS 에러가 브라우저의 동일 출처 정책
                        때문에 발생함을 알게 되었음. 서버와 브라우저의 출처가
                        다르므로 보안상의 이유로 다른 출처에 접근이 제한되었음.
                    </li>
                    <li className="list-disc ml-5 pl-7">
                        Access-Control-Allow-Origin에 브라우저의 출처를 명시하여
                        브라우저의 접근을 허용하도록 설정
                    </li>
                    <li className="list-disc ml-5 pl-7">
                        응답 헤더의 Access-Control-Allow-Credentials 옵션을
                        true로 설정하여, 브라우저가 응답에 접근 가능하도록
                        하였음
                    </li>
                    <li className="list-disc ml-5 pl-7">
                        Access-Controls-Allow-Methods에 브라우저에서 자원을
                        접근할 때 사용하는 모든 메서드를 명시하여, HTTP 메서드에
                        상관 없이 접근을 허용
                    </li>
                </ul>
            </div>
            <h2 className="title">배운 점</h2>
            <ol className="flex flex-col ml-3 mb-7 text-lg gap-3">
                <li className="list_decimal_style">
                    프로덕트 제작 과정의 체험
                    <ul className="flex flex-col ml-3 mt-2 text-lg gap-3">
                        <li className="list_disc_style">
                            기획부터 디자인, 개발, 배포까지의 전 과정을 직접
                            진행하며, 프로덕트가 만들어지는 과정을
                            경험하였습니다.
                        </li>
                    </ul>
                </li>
                <li className="list_decimal_style">
                    백엔드 코드의 깊은 이해
                    <ul className="flex flex-col ml-3 mt-2 text-lg gap-3">
                        <li className="list_disc_style">
                            서버와 데이터베이스 구축, API 작성 등을 통해
                            백엔드의 작동 원리와 CORS 에러의 발생 원인에 대해
                            더욱 깊이 이해할 수 있었습니다.
                        </li>
                    </ul>
                </li>
                <li className="list_decimal_style">
                    CSS 레이아웃 구성 기법의 확실한 이해
                    <ul className="flex flex-col ml-3 mt-2 text-lg gap-3">
                        <li className="list_disc_style">
                            달력 구현 과정에서 라이브러리를 사용하지 않고 직접
                            구현해보면서, CSS의 flex와 grid 개념 및 사용법을
                            확실히 익힐 수 있었습니다.
                        </li>
                    </ul>
                </li>
                <li className="list_decimal_style">
                    문서화의 중요성 인식
                    <ul className="flex flex-col ml-3 mt-2 text-lg gap-3">
                        <li className="list_disc_style">
                            코드 컨벤션, 커밋 컨벤션 등의 팀 규칙과 프로젝트
                            진행상황을 문서화하는 과정을 통해 기록의 중요성을
                            깨달았습니다. 이를 통해 프로젝트의 방향성을
                            파악하고, 팀원 간의 의사소통이나 코드 리뷰에 드는
                            시간을 줄일 수 있었습니다.
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    );
}

export default Daygrid;
