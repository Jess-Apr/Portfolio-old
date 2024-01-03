import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { menuState, projectState } from "../recoil/atoms/menuState";

function Header(): JSX.Element {
  const [menu, setMenu] = useRecoilState(menuState);
  const [project, setProject] = useRecoilState(projectState);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="header">
      <p
        className={menu === "intro" ? "nav_selected" : "nav_style"}
        onClick={() => {
          setMenu("intro");
          setMenuOpen(false);
        }}
      >
        Introduction
      </p>
      <p
        className={menu === "skill" ? "nav_selected" : "nav_style"}
        onClick={() => {
          setMenu("skill");
          setMenuOpen(false);
        }}
      >
        Skills
      </p>
      <div
        className="relative"
        onClick={() => {
          setMenu("project");
          setMenuOpen(!menuOpen);
        }}
      >
        <p className={menu === "project" ? "nav_selected relative" : "nav_style relative"}>
          Projects
        </p>
        <div
          className={
            menuOpen
              ? "absolute top-12 px-7 py-4 text-2xl font-light rounded-lg bg-primary-nav shadow-md z-20"
              : "hidden"
          }
        >
          <p
            className={`mb-3 ${project === "por" ? "text-primary-point" : "hover"}`}
            onClick={() => setProject("por")}
          >
            Portfolio
          </p>
          <p
            className={`mb-3 ${project === "day" ? "text-primary-point" : "hover"}`}
            onClick={() => setProject("day")}
          >
            DayGrid
          </p>
          <p
            className={`${project === "pat" ? "text-primary-point" : "hover"}`}
            onClick={() => setProject("pat")}
          >
            Pathfinder
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
