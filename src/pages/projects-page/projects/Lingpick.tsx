import React, { useEffect, useState } from "react";
import Slider from "../../../components/Slider";
import {
    daygridFe,
    daygridBe,
    lingpickSkills,
} from "../../../assets/projects/projectSkills";

function Lingpick(): JSX.Element {
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
                    여러 웹사이트와 앱의 링크를 모아서 저장/관리할 수 있고,
                    인공지능이 저장된 링크를 분석하여 관련 상품을 추천해주는
                    모바일 앱
                </div>
                <ul className="list-none">
                    <li className="flex flex-row items-baseline">
                        <div className="font-medium mr-3">진행 기간:</div>
                        <div>2024.08 - current</div>
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
                    {lingpickSkills.map((v, i) => (
                        <div className="skill_fe" key={i}>
                            {v}
                        </div>
                    ))}
                </div>
            </div>
            <h2 className="title">주요 작업 내용</h2>
            <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
                <li className="list_disc_style">
                    기존에 만들어진 어플리케이션의 퍼포먼스 개선, 기능 추가,
                    어플리케이션의 전반적인 UI를 변경 하는 고도화 작업 진행
                </li>
                <li className="list_disc_style">
                    사용자 인터렉션 최적화
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            Tanstack Query의 setQueryData(Optimistic Update)를
                            사용하여 유저 액션에 즉각적인 피드백 제공
                        </li>
                        <li className="list_circle_style pl-7">
                            피드에서 좋아요 클릭 시 사용자 액션이 반응되기까지
                            기존 <span className="font-semibold">1070ms</span>
                            에서
                            <span className="font-semibold">36ms</span>로 개선
                        </li>
                        <li className="list_circle_style pl-7">
                            사용자 액션에 대해 서버 요청 없이 클라이언트에서
                            즉각적으로 처리하여 서버 부하를 줄이고 리소스 소비
                            최적화
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    외부 어플리케이션에서 링크 공유 버튼 클릭 시, 사용자가
                    Lingpick 어플리케이션으로 이동하지 않고 바로 링크 저장 할 수
                    있는 기능 구현 (Android)
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            Kotlin으로 별도의 Activity를 생성하여 앱 전환 없이
                            특정 UI 호출
                        </li>
                        <li className="list_circle_style pl-7">
                            React Native의 Native Module 기능을 활용하여
                            네이티브 코드로 받은 데이터를 타입스크립트 코드로
                            전송
                        </li>
                        <li className="list_circle_style pl-7">
                            링크 저장 페이지는 바텀시트처럼 디자인하여
                            자연스러운 사용자 경험 제공
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    웹 크롤링 기능 구현
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            Cheerio 라이브러리를 사용하여 링크 데이터(제목,
                            내용, 위치, 이미지, 카테고리) 크롤링
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    MVVM 패턴을 적용하여 뷰 로직과 비즈니스 로직 분리
                </li>
            </ul>
        </div>
    );
}

export default Lingpick;
