import React, { useEffect, useState } from "react";
import Slider from "../../../components/Slider";
import { pinnflagSkills } from "../../../assets/projects/projectSkills";

function PinnFlag(): JSX.Element {
    const [skillState, setSkillsState] = useState<boolean>(false);
    const [visibilityAnimation, setVisibilityAnimation] =
        useState<boolean>(false);

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
            <div className="mt-8">
                <Slider />
            </div>
            <h2 className="title">프로젝트 소개</h2>
            <div className="flex flex-col text-lg gap-4 mb-5 md:gap-4">
                <div>
                    외국인들에게 한국 현지 가이드의 여행상품을 판매하고, 여행
                    정보를 공유할 수 있는 커뮤니티를 제공해주는 플랫폼
                </div>
                <ul className="list-none">
                    <li className="flex flex-row items-baseline">
                        <div className="font-medium mr-3">진행 기간:</div>
                        <div>2024.03 - current</div>
                    </li>
                    <li className="flex flex-row items-baseline">
                        <div className="font-medium mr-3">진행 인원:</div>
                        <div>프론트엔드 1인, 백엔드 1인</div>
                    </li>
                    <li className="flex flex-row items-baseline">
                        <div className="font-medium mr-3">담당 업무:</div>
                        <div>프론트엔드 개발</div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col">
                <h2 className="title">기술 스택</h2>
                <div className="w-42 flex items-center gap-3 mb-6">
                    {pinnflagSkills.map((v, i) => (
                        <div className="skill_fe" key={i}>
                            {v}
                        </div>
                    ))}
                </div>
            </div>
            <h2 className="title">주요 작업 내용</h2>
            <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
                <li className="list_disc_style">
                    <span className="font-semibold">
                        프론트엔드 개발 전반을 주도
                    </span>
                    하며 작업을 수행
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            커뮤니티 게시판, 여행상품 판매 페이지, 관리자 페이지
                            등 약 30여 개의 화면을 설계 및 구현
                        </li>
                        <li className="list_circle_style pl-7">
                            회원가입/로그인, 게시글 및 댓글 CRUD, 카테고리 조회
                            등 주요 기능에 대한 백엔드 API 연동 작업 진행
                        </li>
                        <li className="list_circle_style pl-7">
                            클라이언트와 직접 소통하며 요구 사항을 반영하고,
                            UI/UX 개선을 제안 및 적용하여 사용자 경험 최적화
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    <span className="font-semibold">관심사 분리 원칙</span>을
                    고려한 구조적 설계
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            MVVM 패턴을 적용하여 뷰 로직과 비즈니스 로직을 분리
                            <ul className="flex flex-col gap-2 mt-2">
                                <li className="list_circle_style pl-7">
                                    Model: 데이터를 가공하는 비즈니스 로직 처리
                                </li>
                                <li className="list_circle_style pl-7">
                                    ViewModel: Model에서 가공된 데이터를 View에
                                    전달하고, API 호출과 상태 관리 수행
                                </li>
                                <li className="list_circle_style pl-7">
                                    View: UI를 구성하고 ViewModel로부터 받은
                                    데이터를 표시하며, 사용자의 입력을
                                    ViewModel로 전달
                                </li>
                            </ul>
                        </li>
                        <li className="list_circle_style pl-7">
                            각 파일은 300줄 이하, 함수는 20줄 이하로 제한하여
                            코드 가독성을 높이고, 책임 분리를 명시적으로 적용
                        </li>
                        <li className="list_circle_style pl-7">
                            Styled-Components를 사용하여 컴포넌트의 스타일 분리
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    Jest를 사용하여 ViewModel과 Model 레이어의{" "}
                    <span className="font-semibold">단위 테스트 수행</span>
                </li>
                <li className="list_disc_style">
                    i18next 라이브러리를 사용하여{" "}
                    <span className="font-semibold">다국어 지원 기능 제공</span>
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            각 언어에 대응하는 키-언어 쌍을 가진 JSON 번역
                            파일을 기반으로 동적으로 콘텐츠를 렌더링할 수 있도록
                            설계
                        </li>
                        <li className="list_circle_style pl-7">
                            언어 전환 시에도 일관된 UI/UX를 제공하여 글로벌
                            사용자 경험 최적화
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    개발자가 아닌 클라이언트와의{" "}
                    <span className="font-semibold">
                        원활한 소통을 위한 시각적 자료 제작
                    </span>
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            UI 수정을 제안할 때 Figma로 수정 사항이 적용된
                            화면을 그린 후 제안 사항과 함께 전달
                        </li>
                        <li className="list_circle_style pl-7">
                            복잡한 코드의 흐름을 플로우 차트로 제작하여 코드를
                            더욱 쉽게 이해할 수 있도록 함
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    효율적인 협업을 위한{" "}
                    <span className="font-semibold">
                        작업 우선순위 문서화 도입 및 적용
                    </span>
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            클라이언트, 프론트엔드, 백엔드 간 우선순위 불일치로
                            인한 작업 지연 문제를 해결하기 위해 문서화 프로세스
                            제안 및 실행
                        </li>
                        <li className="list_circle_style pl-7">
                            Google Docs를 활용해 구성원들이 각자의 작업
                            우선순위를 공유하고, 주간 미팅에서 이를 기반으로
                            작업 순서 조정 및 진행 상황 점검
                        </li>
                        <li className="list_circle_style pl-7">
                            클라이언트와 약속된 기능의 누락을 줄이고, 개발 진행
                            속도를 향상시켜 마일스톤 목표를 안정적으로 달성
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default PinnFlag;
