import React from "react";
import { useRecoilState } from "recoil";
import { projectState } from "../recoil/atoms/menuState";
import Portfolio from "./Portfolio";
import Daygrid from "./Daygrid";
import Pathfinder from "./Pathfinder";

function Projects(): JSX.Element {
  const [project, setproject] = useRecoilState(projectState);

  return (
    <div className="h-full flex flex-col mt-2 mb-5p border-b-4 border-primary-point overflow-scroll">
      <div className="grid grid-cols-3 mb-2">
        <div
          className={project === "por" ? "project_tab_selected" : "project_tab_style"}
          onClick={() => setproject("por")}
        >
          Portfolio Page
        </div>
        <div
          className={project === "day" ? "project_tab_selected" : "project_tab_style"}
          onClick={() => setproject("day")}
        >
          DayGrid
        </div>
        <div
          className={project === "pat" ? "project_tab_selected" : "project_tab_style"}
          onClick={() => setproject("pat")}
        >
          Pathfinder
        </div>
      </div>
      {project === "por" ? <Portfolio /> : project === "day" ? <Daygrid /> : <Pathfinder />}
    </div>
  );
}

export default Projects;
