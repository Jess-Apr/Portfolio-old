import React from "react";
import { feSkills } from "../assets/feSkills";
import { beSkills } from "../assets/beSkills";

function Skills(): JSX.Element {
  return (
    <div className="h-full flex flex-col border-b-4 border-primary-point overflow-scroll">
      <div>
        <h2 className="text-3xl font-medium mt-3p mb-6">Front-End</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
          {feSkills.map((el, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-39 flex-shrink-0">
                <img src={el.img} className="mx-auto" />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="w-full text-xl leading-6 pb-2 mb-2 border-b-2 border-primary-point">
                  {el.title}
                </div>
                <p>{el.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-medium mt-10 mb-6">Back-End</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 mb-3p md:grid-cols-2">
          {beSkills.map((el, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-39 flex-shrink-0">
                <img src={el.img} className="mx-auto" />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="w-full text-xl leading-6 pb-2 mb-2 border-b-2 border-primary-point">
                  {el.title}
                </div>
                <p>{el.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
