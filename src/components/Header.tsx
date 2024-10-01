import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { menuState, projectState } from "../recoil/atoms/menuState";
import { flushSync } from "react-dom";

function Header(): JSX.Element {
    const [menu, setMenu] = useRecoilState(menuState);
    const [project, setProject] = useRecoilState(projectState);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 중인지 여부
    const modalBackgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const listener = (e: MouseEvent) => {
            if (
                !modalBackgroundRef.current ||
                modalBackgroundRef.current.contains(e.target as Node)
            )
                return;
            setIsAnimating(true); // 닫힐 때 애니메이션 시작
        };

        document.addEventListener("mousedown", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
        };
    }, [modalBackgroundRef, setMenuOpen]);

    return (
        <div className="header">
            <p
                className={menu === "intro" ? "nav_selected" : "nav_style"}
                onClick={() => setMenu("intro")}
            >
                Introduction
            </p>
            <p
                className={menu === "skill" ? "nav_selected" : "nav_style"}
                onClick={() => setMenu("skill")}
            >
                Skills
            </p>
            <div
                className="relative"
                onClick={() => {
                    if (menuOpen) {
                        // 닫힐 때는 애니메이션을 먼저 적용
                        setIsAnimating(true);
                    } else {
                        // 열릴 때는 바로 메뉴를 표시
                        setMenu("project");
                        setMenuOpen(true);
                    }
                }}
            >
                <p
                    className={
                        menu === "project"
                            ? "nav_selected relative"
                            : "nav_style relative"
                    }
                >
                    Projects
                </p>

                {/* 메뉴가 열리거나 닫힐 때 애니메이션 적용 */}
                {menuOpen && (
                    <div
                        className={
                            `absolute top-12 px-7 py-4 text-2xl font-light rounded-lg bg-primary-nav shadow-md z-20 ` +
                            (isAnimating ? "animate-fadeOut" : "animate-fadeIn")
                        }
                        ref={modalBackgroundRef}
                        onAnimationEnd={() => {
                            if (isAnimating) {
                                flushSync(() => {
                                    setMenuOpen(false);
                                    setIsAnimating(false);
                                });
                            }
                        }}
                    >
                        <p
                            className={`mb-3 ${
                                project === "por"
                                    ? "text-primary-point"
                                    : "hover"
                            }`}
                            onClick={() => setProject("por")}
                        >
                            Portfolio
                        </p>
                        <p
                            className={`mb-3 ${
                                project === "day"
                                    ? "text-primary-point"
                                    : "hover"
                            }`}
                            onClick={() => setProject("day")}
                        >
                            DayGrid
                        </p>
                        <p
                            className={`${
                                project === "pat"
                                    ? "text-primary-point"
                                    : "hover"
                            }`}
                            onClick={() => setProject("pat")}
                        >
                            Pathfinder
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
