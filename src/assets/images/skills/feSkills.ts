import js from "./js.png";
import ts from "./ts.png";
import react from "./react.png";
import rn from "./rn.svg";
import redux from "./redux.png";
import recoil from "./recoil.png";
import rq from "./rq.png";
import sc from "./sc.png";
import tailwind from "./tailwind.png";

export const feSkills = [
    {
        img: js,
        title: "JavaScript",
        desc: [
            "변수, 데이터 타입 등의 기본 개념부터 클로저, 프로토타입 등의 고급 개념까지 이해하고 사용할 수 있습니다.",
            "Promise, async await과 같은 문법을 사용하여 적절하게 비동기 처리를 할 수 있습니다.",
        ],
    },
    {
        img: ts,
        title: "TypeScript",
        desc: [
            "다양한 타입을 자유롭게 다룰 수 있으며, 적절한 타입을 정의하여 코드의 안전성을 높일 수 있습니다.",
            "인터페이스, 제네릭 등의 타입스크립트 문법을 익숙하게 사용할 수 있습니다.",
        ],
    },
    {
        img: react,
        title: "React",
        desc: [
            "Virtual DOM, Diffing 알고리즘과 같은 리액트 작동 원리를 이해하고 있습니다.",
            "리액트 컴포넌트를 의미있는 단위로 분리하고, 재사용 가능하도록 설계할 수 있습니다.",
        ],
    },
    {
        img: rn,
        title: "React Native",
        desc: [
            "React에 대한 이해도를 기반으로 모바일 앱을 개발할 수 있습니다.",
            "iOS와 Android의 차이를 이해하고, 일관성있는 UI를 구현할 수 있습니다.",
            "React Native와 네이티브 코드 간의 통신 처리를 할 수 있습니다.",
        ],
    },
    {
        img: redux,
        title: "Redux",
        desc: [
            "액션, 리듀서, 스토어를 사용하여 상태를 전역으로 관리할 수 있습니다.",
            "hook을 이용해 상태값을 리액트 컴포넌트와 연결할 수 있습니다.",
        ],
    },
    {
        img: recoil,
        title: "Recoil",
        desc: [
            "데이터를 atom 단위로 선언하여 상태를 전역으로 관리할 수 있습니다.",
            "Recoil hook을 사용하여 atom의 값을 읽거나 업데이트 할 수 있습니다.",
        ],
    },
    {
        img: rq,
        title: "React Query",
        desc: [
            "서버 데이터를 캐싱하고 동기화하여 효율적으로 관리할 수 있습니다.",
            "로딩 상태와 에러 상태를 받아 상황에 따른 대응을 할 수 있습니다. ",
            "자동 캐싱, 낙관적 업데이트, 무한 스크롤과 같은 기능을 사용하여 사용자 경험을 향상시킬 수 있습니다.",
        ],
    },
    {
        img: sc,
        title: "styled-components",
        desc: [
            "스타일 컴포넌트를 만들어 css 작업을 할 수 있습니다.",
            "동적 스타일링, 스타일 확장, 전역 스타일 등의 기능을 활용할 수 있습니다.",
        ],
    },
    {
        img: tailwind,
        title: "Tailwind CSS",
        desc: [
            "유틸리티 클래스를 조합하거나 사용자 정의 유틸리티를 만들어 스타일링을 할 수 있습니다.",
        ],
    },
];
