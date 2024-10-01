import React from "react";
import { feSkills } from "../assets/images/skills/feSkills";

function Skills(): JSX.Element {
    return (
        <div className="flex flex-col px-3">
            <div className="border-b-4 border-primary-point mb-5p">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 my-10 md:grid-cols-2">
                    {feSkills.map((el, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="w-39 flex-shrink-0">
                                <img src={el.img} className="mx-auto" />
                            </div>
                            <div className="flex flex-col flex-grow">
                                <div className="w-full text-xl leading-6 pb-2 mb-2 border-b-2 border-primary-point">
                                    {el.title}
                                </div>
                                <ul>
                                    {el.desc.map((description) => (
                                        <li className="list-disc ml-5 my-2">
                                            {description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
