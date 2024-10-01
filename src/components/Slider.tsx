import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { imageModalState, projectState } from "../recoil/atoms/viewState";
import SimpleSlider from "react-slick";
import "../assets/slider/slick-theme.css";
import "../assets/slider/slick.css";
import left from "../assets/images/arrow_left.png";
import right from "../assets/images/arrow_right.png";
import {
    portfolioImg,
    daygridImg,
    pathfinderImg,
    lingpickImg,
    pinnflagImg,
} from "../assets/projects/projectsImg";

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
    const [projectImg, setProjectImg] = useState<ImgType[]>(lingpickImg);
    const [isImageModalShow, setIsImageModalShow] =
        useRecoilState(imageModalState);
    const modalBackgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        project === "lin"
            ? setProjectImg(lingpickImg)
            : project === "pin"
            ? setProjectImg(pinnflagImg)
            : setProjectImg(daygridImg);
    });

    useEffect(() => {
        const listener = (e: MouseEvent) => {
            if (
                !modalBackgroundRef.current ||
                modalBackgroundRef.current.contains(e.target as Node)
            )
                return;
            setIsImageModalShow(null);
        };

        document.addEventListener("mousedown", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
        };
    }, [modalBackgroundRef, setIsImageModalShow]);

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
        <>
            <div className="w-full text-center font-xs text-black-fontLight mb-2">
                <span>* 사진을 클릭하면 더 자세히 볼 수 있습니다.</span>
            </div>
            <div className="w-4/5 flex justify-center items-center mx-auto mb-10">
                <SimpleSlider {...settings}>
                    {projectImg.map((v, i) => (
                        <div
                            className="h-80"
                            key={i}
                            onClick={() => setIsImageModalShow(i)}
                        >
                            <div
                                className="w-full h-full flex justify-center align-center cursor-pointer"
                                key={i}
                            >
                                <img
                                    src={v.img}
                                    alt={v.alt}
                                    className="max-h-80 m-auto border border-font-black"
                                />
                            </div>
                        </div>
                    ))}
                </SimpleSlider>
            </div>
            {isImageModalShow !== null && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black-font bg-opacity-50 z-50">
                    <div
                        className="relative max-w-full max-h-full p-4"
                        ref={modalBackgroundRef}
                    >
                        <img
                            src={projectImg[isImageModalShow].img}
                            alt={projectImg[isImageModalShow].alt}
                            className="max-w-[80vw] max-h-[90vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
export default Slider;
