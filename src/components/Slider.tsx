import React from "react";
import SimpleSlider from "react-slick";
import "../assets/slider/slick-theme.css";
import "../assets/slider/slick.css";
import left from "../assets/images/arrow_left.png";
import right from "../assets/images/arrow_right.png";

type SlickButtonFixProps = {
  currentSlide?: number;
  slideCount?: number;
  children?: React.ReactNode;
  [key: string]: any;
};

function Slider(): JSX.Element {
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
    <div className="w-4/5 flex justify-center items-center mx-auto mb-10">
      <SimpleSlider {...settings}>
        <div className="slide">
          <h3>1</h3>
        </div>
        <div className="slide">
          <h3>2</h3>
        </div>
        <div className="slide">
          <h3>3</h3>
        </div>
        <div className="slide">
          <h3>4</h3>
        </div>
        <div className="slide">
          <h3>5</h3>
        </div>
        <div className="slide">
          <h3>6</h3>
        </div>
      </SimpleSlider>
    </div>
  );
}
export default Slider;
