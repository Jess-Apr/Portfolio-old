import React from "react";

function Introduction(): JSX.Element {
  return (
    <div className="flex flex-col mb-5p px-3 py-5 border-b-4 border-primary-point pb-5 md:h-full md:justify-center">
      <h2 className="text-3xl font-medium mb-9">
        성장하는 것이 가장 즐거운 프론트엔드 개발자, 한재연입니다.
      </h2>
      <div className="text-xl flex flex-col gap-6">
        <p className="leading-8">
          단순히 지식을 배우는 것에만 만족하지 않고, 부족한 부분을 찾아나가는 것에 집중합니다.
          새롭게 습득한 내용은 직접 프로젝트에 적용하거나 문제를 해결해보는 등 실질적인 경험을 통해
          이해를 높이려 합니다.
        </p>
        <p className="leading-8">
          또한, 조금이라도 더 읽기 쉽고 유지보수가 용이한 코드를 작성하기 위해 기존에 작성했던
          코드를 다시 읽어보며 코드를 개선할 수 있는 방법을 꾸준히 고민하고, 이전 프로젝트의
          리팩토링도 진행하고 있습니다.
        </p>
        <p className="leading-8">
          "노력은 배신하지 않는다"는 말이 저의 원동력이며, 어떤것이든 대충하지 않고 노력을 들여
          꾸준히 성장하는 사람이 되고자 합니다. 기초부터 단단히 쌓아온 지식을 바탕으로 더 효율적인
          솔루션을 제시하고, 적극적으로 배우는 자세로 주변에 좋은 영향력을 주는 개발자가 되겠습니다.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
