import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCube,
} from "swiper/modules";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element";
import { useScroll } from "../../context/contextScroll/useScroll";
import { slideData } from "../../data/slideData";

// Import Swiper styles
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import { Link } from "react-router-dom";

function ContainerCarrossel() {
  const [progress, setProgress] = useState<number>(0);
  const autoplayDelay = 10000;
  const progressInterval = useRef<number>(0);
  const { elementRefSlide } = useScroll();

  const resetProgress = () => {
    setProgress(0);
    clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, autoplayDelay / 100);
  };
  useEffect(() => {
    resetProgress();
    return () => clearInterval(progressInterval.current);
  }, []);

  return (
    <S.ContainerSlide ref={elementRefSlide}>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCube,
        ]}
        effect="cube"
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        onSlideChange={() => resetProgress()}
      >
        {slideData.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={item.link || "#"}>
              <picture>
                <source srcSet={item.imageLarge} media="(min-width: 1200px)" />
                <source srcSet={item.imagemMedium} media="(min-width: 768px)" />
                <S.SlideImage
                  src={item.imagemMedium}
                  alt={item.title}
                  loading="lazy"
                  className="slide-item"
                />
              </picture>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.ProgressBar $progress={progress} />
    </S.ContainerSlide>
  );
}

export default ContainerCarrossel;
