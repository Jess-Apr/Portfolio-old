import React from "react";
import { useRecoilState } from "recoil";
import { projectState } from "../recoil/atoms/menuState";
import Portfolio from "./Portfolio";
import Daygrid from "./Daygrid";
import Pathfinder from "./Pathfinder";

function Projects(): JSX.Element {
  const [project, setproject] = useRecoilState(projectState);

  return (
    <div className="flex flex-col">
      <div className="border-b-4 border-primary-point mb-5p">
        <div className="border-b-4 border-primary-point">
          <h1 className="text-4xl font-medium tracking-wide mb-4">
            {project === "por"
              ? "Project - Portfolio"
              : project === "day"
              ? "Project - DayGrid"
              : "Project - Pathfinder"}
          </h1>
        </div>
        {project === "por" ? <Portfolio /> : project === "day" ? <Daygrid /> : <Pathfinder />}
      </div>
    </div>
  );
}

export default Projects;
