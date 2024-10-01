import React from "react";
import { useRecoilState } from "recoil";
import { projectState } from "../../recoil/atoms/viewState";
import Daygrid from "./projects/Daygrid";
import Lingpick from "./projects/Lingpick";
import PinnFlag from "./projects/PinnFlag";

function Projects(): JSX.Element {
    const [project, setproject] = useRecoilState(projectState);

    return (
        <div className="flex flex-col mb-5p border-b-4 border-primary-point pb-5">
            <div>
                <div className="flex flex-row items-baseline border-b-4 border-primary-point">
                    <h1 className="text-4xl font-medium tracking-wide mb-4">
                        {project === "lin"
                            ? "Lingpick"
                            : project === "pin"
                            ? "PinnFlag"
                            : "DayGrid"}
                    </h1>
                    <div className="font-medium ml-2 text-xl">
                        {project === "day"
                            ? "| 그룹 프로젝트"
                            : "| 회사 프로젝트"}{" "}
                    </div>
                </div>
                {project === "lin" ? (
                    <Lingpick />
                ) : project === "pin" ? (
                    <PinnFlag />
                ) : (
                    <Daygrid />
                )}
            </div>
        </div>
    );
}

export default Projects;
