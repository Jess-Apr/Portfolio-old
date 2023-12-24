import React from "react";
import { useRecoilState } from "recoil";
import { menuState } from "../recoil/atoms/menuState";

function Header(): JSX.Element {
  const [menu, setMenu] = useRecoilState(menuState);

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
      <p
        className={menu === "project" ? "nav_selected" : "nav_style"}
        onClick={() => setMenu("project")}
      >
        Projects
      </p>
    </div>
  );
}

export default Header;
