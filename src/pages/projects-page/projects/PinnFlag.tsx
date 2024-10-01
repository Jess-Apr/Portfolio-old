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
                    커뮤니티 게시판, 여행상품 판매 페이지, 관리자 페이지 등 30여
                    장의 화면 구현
                </li>
                <li className="list_disc_style">
                    백엔드 api 연동 작업 진행 (현재 회원가입/로그인, 게시글
                    CRUD, 댓글 CRUD, 카테고리 조회 등 약 30% 연동 완료)
                </li>
                <li className="list_disc_style">
                    관심사 분리 원칙을 고려한 구조적 설계
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
                    Jest를 사용하여 ViewModel과 Model 레이어의 단위 테스트 수행
                </li>
                <li className="list_disc_style">
                    i18next 라이브러리를 사용하여 다국어 지원 기능 제공
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
            </ul>
        </div>
    );
}

export default PinnFlag;
