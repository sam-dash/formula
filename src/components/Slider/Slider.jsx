import React, { cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";
import { isMobile } from "react-device-detect";

const Slider = ({ children, step = 150 }) => {
  const [isScrollHorizontally, setIsScrollHorizontally] = useState(false);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  const mouseEnter = () => {
    setIsScrollHorizontally(true)
  }
  
  const mouseLeave = () => {
    setIsScrollHorizontally(false)
  }

  useEffect(() => {
    const element = sliderRef.current;

    if (!isMobile) {
      const handleWheel = (event) => {
        event.preventDefault();
        // Прокручиваем элемент горизонтально на основании вертикального скролла
        element.scrollLeft += event.deltaY;
      };

      if (isScrollHorizontally && element) {
        element.addEventListener('wheel', handleWheel, { passive: false });
      }

      return () => {
        if (element) {
          element.removeEventListener('wheel', handleWheel);
        }
      };
    }
  }, [isScrollHorizontally, sliderRef]);

  const childrenWithProps = isValidElement(children) && cloneElement(children, {
    ref: sliderRef,
    mouseEnter,
    mouseLeave,
  })

  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow}>
        <img src="icon/arrow-left.svg" alt="arrow left" className={styles.arrow} />
      </button>
      {childrenWithProps}
      <button onClick={scrollRight} className={styles.arrow}>
        <img src="icon/arrow-right.svg" alt="arrow right" className={styles.arrow} />
      </button>
    </div>
  );
};

export default Slider;

