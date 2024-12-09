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
                    어플리케이션의 UI를 변경하는 고도화 작업 진행
                </li>
                <li className="list_disc_style">
                    카카오톡, 네이버, 구글, 메타 소셜 로그인 기능 구현
                </li>
                <li className="list_disc_style">
                    S3 이미지 업로드 로직 구현
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            서버에서 S3 업로드 URL을 받아 이미지를 업로드한 뒤,
                            성공 시 S3로부터 받은 이미지 ID를 서버로 전송
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    웹 크롤링 기능 구현
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            Swift, Kotlin 코드로 구현되어있던 크롤링 기능을
                            <span className="font-semibold">
                                타입스크립트 코드로 통합하여 유지보수성 높임
                            </span>
                        </li>
                        <li className="list_circle_style pl-7">
                            Cheerio 라이브러리를 사용하여 링크 데이터(제목,
                            내용, 위치, 이미지, 카테고리) 크롤링
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    링크 공유 기능 구현 (Android)
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            앱 전환 없이 링크 저장 UI를 호출할 수 있도록 별도의
                            Activity를 Kotlin으로 구현
                        </li>
                        <li className="list_circle_style pl-7">
                            React Native의{" "}
                            <span className="font-semibold">Native Module</span>{" "}
                            기능을 활용, 네이티브 코드에서 받은 데이터를 React
                            Native로 전송하여 타입스크립트 기뱐의 웹 크롤링
                            로직을 거칠 수 있도록 함
                        </li>
                        <li className="list_circle_style pl-7">
                            링크 저장 페이지는 바텀시트 UI 스타일로 설계하여
                            사용자가 익숙하고 자연스러운 경험을 느낄 수 있도록
                            디자인
                        </li>
                        <li className="list_circle_style pl-7">
                            사용자가 외부 어플리케이션의 링크를 저장하려 할 때,
                            Lingpick 앱으로 이동하지 않고 바로 저장 할 수 있도록
                            하여 사용자의 작업 흐름을 방해하지 않으면서도
                            직관적이고 원활한 앱 사용 경험 제공
                        </li>
                    </ul>
                </li>
            </ul>
            <h2 className="title">기능 개선</h2>
            <ul className="flex flex-col ml-3 mb-7 text-lg gap-3">
                <li className="list_disc_style">
                    사용자 인터렉션 최적화
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            <span className="font-semibold">문제: </span>좋아요
                            버튼 클릭 시, 좋아요 수를 업데이트 하기 위해 무한
                            스크롤의 모든 링크를 다시 불러오는 과정에서 딜레이
                            발생
                        </li>
                        <li className="list_circle_style pl-7">
                            <span className="font-semibold">해결: </span>
                            실시간 데이터 반영보다는 빠른 피드백이 중요하다고
                            판단하여 Tanstack Query의 Optimistic Updates 기능을
                            사용해 좋아요가 눌린 링크의 숫자만 변경
                        </li>
                        <li className="list_circle_style pl-7">
                            <span className="font-semibold">성과: </span>
                            <ul className="flex flex-col gap-2 mt-2">
                                <li className="list_circle_style pl-7">
                                    피드에서 좋아요 클릭 후 사용자 액션이
                                    반응되기까지 기존{" "}
                                    <span className="font-semibold">
                                        1070ms에서 36ms로 개선
                                    </span>
                                </li>
                                <li className="list_circle_style pl-7">
                                    사용자 액션에 대한 요청을 서버에 보내지 않고
                                    클라이언트에서 즉각적으로 처리하여{" "}
                                    <span className="font-semibold">
                                        서버 부하를 줄이고 리소스 소비 최적화
                                    </span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    무한스크롤 렌더링 최적화
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            <span className="font-semibold">문제: </span>스크롤
                            시 리스트의 모든 아이템이 재렌더링되어 성능 저하
                            발생
                        </li>
                        <li className="list_circle_style pl-7">
                            <span className="font-semibold">해결: </span>
                            <ul className="flex flex-col gap-2 mt-2">
                                <li className="list_circle_style pl-7">
                                    TanStack Query의 useInfiniteQuery를 활용해
                                    데이터를 캐싱하고, 페이지 단위로 추가
                                    데이터를 병합하여 기존 데이터 참조 유지
                                </li>
                                <li className="list_circle_style pl-7">
                                    FlatList의 keyExtractor로 고유키를 설정하여
                                    리스트 내 변화가 있는 부분만 렌더링
                                </li>
                                <li className="list_circle_style pl-7">
                                    renderItem을 useCallback으로 감싸 부모
                                    컴포넌트 리렌더링 시 함수 참조를 유지해 하위
                                    컴포넌트의 불필요한 렌더링 방지
                                </li>
                                <li className="list_circle_style pl-7">
                                    리스트 항목 컴포넌트를 React.memo로 감싸
                                    props 데이터 변경이 없는 경우 리렌더링을
                                    방지
                                </li>
                            </ul>
                        </li>
                        <li className="list_circle_style pl-7">
                            <span className="font-semibold">
                                성과: 추가된 아이템만 렌더링하도록 최적화
                            </span>
                            해 무한스크롤 성능 개선
                        </li>
                    </ul>
                </li>
                <li className="list_disc_style">
                    검색 페이지 무한 로딩 문제 해결
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="list_circle_style pl-7">
                            <span className="font-semibold">문제: </span>검색
                            키워드 입력 후 스크롤 시 Masonry List의 커스텀
                            태그에서 API 요청 스크롤 이벤트가 중복 발생하여 무한
                            로딩 현상 발생
                        </li>
                        <li className="list_circle_style pl-7">
                            <span className="font-semibold">원인: </span>Masonry
                            List 구조는 열 높이가 달라 onEndReached가 각 열의
                            끝을 계산하는 과정에서 스크롤 이벤트가 반복적으로
                            트리거될 수 있음
                        </li>
                        <li className="list_circle_style pl-7">
                            <span className="font-semibold">해결: </span>
                            <ul className="flex flex-col gap-2 mt-2">
                                <li className="list_circle_style pl-7">
                                    Debouncing 함수를 구현하여 마지막 스크롤
                                    이벤트 발생 후 200ms가 지나야 API 요청을
                                    보내도록 설정
                                </li>
                                <li className="list_circle_style pl-7">
                                    useInfiniteQuery의 isLoading 상태를 감지하여
                                    로딩 중에는 추가 API 요청을 차단
                                </li>
                            </ul>
                        </li>
                        <li className="list_circle_style pl-7">
                            <span className="font-semibold">성과: </span>중복
                            API 요청을 방지하고 무한 로딩 문제를 해결해 검색
                            페이지의 안정성과 성능 개선
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Lingpick;
