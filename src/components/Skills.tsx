import React from "react";
import { feSkills } from "../assets/images/skills/feSkills";
import { beSkills } from "../assets/images/skills/beSkills";

function Skills(): JSX.Element {
  return (
    <div className="flex flex-col px-3">
      <div className="border-b-4 border-primary-point mb-5p">
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
                <ul>
                  <li className="list-disc ml-5 my-2">{el.desc1}</li>
                  {el.desc2 ? <li className="list-disc ml-5">{el.desc2}</li> : null}
                </ul>
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
                <ul>
                  <li className="list-disc ml-5 my-2">{el.desc1}</li>
                  <li className="list-disc ml-5">{el.desc2}</li>
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
