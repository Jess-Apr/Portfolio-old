import React from "react";

function Introduction(): JSX.Element {
  return (
    <div className="flex flex-col mb-5p px-3 py-5 border-b-4 border-primary-point pb-5 md:h-full md:justify-center">
      <h2 className="text-3xl font-medium mb-9">
        배우는 것이 가장 즐거운 프론트엔드 개발자, 한재연입니다.
      </h2>
      <div className="text-xl flex flex-col gap-6">
        <p className="leading-8">
          IT 스타트업에서 개발자 팀원들과 함께 일하며 개발에 흥미를 가지게 되었습니다. 배우는 과정이
          결코 쉽지는 않지만, 어려운 내용을 차근히 배워나가며 저의 지식으로 만들고, 그 지식을
          바탕으로 문제를 해결해낼때 큰 성취감과 재미를 느껴 개발자를 꿈꾸게 되었습니다.
        </p>
        <p className="leading-8">
          직접 서버와 데이터베이스를 구축해보거나, 다양한 라이브러리를 사용해보고 비교해보는 등
          다양한 방면에 호기심을 가지고 자기주도적으로 학습하려 합니다. 적용했던 지식은 그냥 넘기지
          않고 부족한 부분이 있었는지, 제대로 이해했는지 다시 한번 고민하고 다음 코드를 작성할 때 더
          나은 방법을 사용하기 위해 노력합니다.
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
