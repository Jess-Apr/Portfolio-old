import React, { useEffect, useState } from "react";
import Slider from "../../../components/Slider";
import { lingpickSkills } from "../../../assets/projects/projectSkills";

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
            <h2 className="title">문제 해결 경험</h2>
            <div className="flex flex-col pb-7 text-lg gap-3">
                <div className="font-medium">🚨 문제 상황</div>
                <div className="mb-2">
                    기존 애플리케이션의 피드 페이지에서 사용자가 ‘좋아요’ 버튼을
                    클릭했을 때, 사용자 인터페이스의 피드백이 지연되는 문제가
                    발생
                </div>
                <div className="font-medium">💥 문제 원인</div>
                <div className="mb-2">
                    피드 페이지에서 링크 리스트를 한꺼번에 받아와 렌더링하는
                    구조였으며, ‘좋아요’ 버튼을 클릭할 때마다 전체 링크 리스트를
                    다시 불러와 해당 링크의 ‘좋아요’ 수를 갱신함. 이로인해
                    불필요한 재요청이 발생하여 성능이 저하됨.
                </div>
                <div className="font-medium">💡 해결 방법</div>
                <ul className="flex flex-col gap-2">
                    <li className="list-disc ml-5 pl-7">
                        사용자 경험 측면에서 '좋아요' 수가 실시간으로 정확하게
                        반영되는 것 보다, 빠른 피드백이 더 중요하다고 판단
                    </li>
                    <li className="list-disc ml-5 pl-7">
                        Tanstack Query의 setQueryData 메서드를 활용하여
                        Optimistic Update 패턴을 적용. '좋아요' 버튼이 눌린
                        링크의 좋아요 수만 클라이언트에서 즉시 업데이트하도록
                        처리.
                    </li>
                    <li className="list-disc ml-5 pl-7">
                        피드페이지에서 좋아요 클릭 시 사용자 액션 반응 시간을
                        기존 <span className="font-semibold">1070ms</span>
                        에서
                        <span className="font-semibold">36ms</span>로 개선
                    </li>
                    <li className="list-disc ml-5 pl-7">
                        '좋아요' 버튼뿐만 아니라, 사용자 프로필 사진 변경 등
                        실시간 데이터 반영이 중요하지 않은 기능들에도 동일한
                        Optimistic Update 방식을 적용하여 서버 요청 없이
                        클라이언트에서 즉각적으로 처리. 이를 통해{" "}
                        <span className="font-semibold">서버 부하를 감소</span>
                        시키고,{" "}
                        <span className="font-semibold">
                            리소스 소비를 최적화
                        </span>
                        함.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Lingpick;
