import React, { useState } from "react";
import Portfolio from "./Portfolio";
import Daygrid from "./Daygrid";
import Pathfinder from "./Pathfinder";

function Projects(): JSX.Element {
  const [curTab, setCurTab] = useState("por");

  return (
    <div className="h-full flex flex-col mt-2 mb-5p border-b-4 border-primary-point overflow-scroll">
      <div className="grid grid-cols-3 mb-2">
        <div
          className={curTab === "por" ? "project_tab_selected" : "project_tab_style"}
          onClick={() => setCurTab("por")}
        >
          Portfolio Page
        </div>
        <div
          className={curTab === "day" ? "project_tab_selected" : "project_tab_style"}
          onClick={() => setCurTab("day")}
        >
          DayGrid
        </div>
        <div
          className={curTab === "pat" ? "project_tab_selected" : "project_tab_style"}
          onClick={() => setCurTab("pat")}
        >
          Pathfinder
        </div>
      </div>
      {curTab === "por" ? <Portfolio /> : curTab === "day" ? <Daygrid /> : <Pathfinder />}
    </div>
  );
}

export default Projects;
