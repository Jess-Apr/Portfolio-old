import React from "react";

function IntroPage(): JSX.Element {
  return (
    <div className="w-4/5 bg-primary-bg flex justify-center content-center">
      <div className="w-5/6 flex flex-col pt-5p">
        <div className="border-b-4 border-primary-point">
          <h1 className="text-4xl font-medium tracking-wide mb-3">Introduction</h1>
        </div>
        <div>Contents</div>
      </div>
    </div>
  );
}

export default IntroPage;
