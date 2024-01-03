import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { projectState } from "../recoil/atoms/menuState";
import SimpleSlider from "react-slick";
import "../assets/slider/slick-theme.css";
import "../assets/slider/slick.css";
import left from "../assets/images/arrow_left.png";
import right from "../assets/images/arrow_right.png";
import { portfolioImg, daygridImg, pathfinderImg } from "../assets/projects/projectsImg";

type ImgType = {
  img: string;
  alt: string;
};

type SlickButtonFixProps = {
  currentSlide?: number;
  slideCount?: number;
  children?: React.ReactNode;
  [key: string]: any;
};

function Slider(): JSX.Element {
  const project = useRecoilValue(projectState);
  const [projectImg, setProjectImg] = useState<ImgType[]>(portfolioImg);

  useEffect(() => {
    project === "por"
      ? setProjectImg(portfolioImg)
      : project === "day"
      ? setProjectImg(daygridImg)
      : setProjectImg(pathfinderImg);
  });

  const SlickButtonFix: React.FC<SlickButtonFixProps> = ({
    currentSlide,
    slideCount,
    children,
    ...props
  }) => <span {...props}>{children}</span>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SlickButtonFix>
        <img src={right} />
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <img src={left} />
      </SlickButtonFix>
    ),
  };

  return (
    <div className="w-4/5 flex justify-center items-center mx-auto mt-2 mb-10">
      <SimpleSlider {...settings}>
        {projectImg.map((v, i) => (
          <div className="h-80" key={i}>
            <div className="w-full h-full flex justify-center align-center" key={i}>
              <img src={v.img} alt={v.alt} className="max-h-80 m-auto border border-font-black" />
            </div>
          </div>
        ))}
      </SimpleSlider>
    </div>
  );
}
export default Slider;
