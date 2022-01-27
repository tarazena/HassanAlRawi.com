import { UIContext } from "contexts";
import {
  cloneElement,
  FC,
  Children,
  isValidElement,
  ReactNode,
  useContext,
  // useState,
  // useCallback,
  // useLayoutEffect,
} from "react";

import "./SlidesContainer.css";

export const SlidesContainer: FC = ({ children }) => {
  const { activeSlide, setActiveSlide } = useContext(UIContext);
  // const [y, setY] = useState(window.scrollY);
  // const childrenCount = Children.count(children);

  const percentage = -100 * activeSlide + "%";

  // const goPrev = useCallback(() => {
  //   if (activeSlide > 0) {
  //     // setActiveSlide(activeSlide - 1);
  //   }
  // }, [activeSlide, setActiveSlide]);

  // const goNext = useCallback(() => {
  //   if (activeSlide < childrenCount - 1) {
  //     // setActiveSlide(activeSlide + 1);
  //   }
  // }, [activeSlide, setActiveSlide, childrenCount]);

  // const handleNavigation = useCallback(
  //   (e) => {
  //     const window = e.currentTarget;
  //     if (y > window.scrollY) {
  //       // goPrev();
  //     } else if (y < window.scrollY) {
  //       // goNext();
  //     }
  //     setY(window.scrollY);
  //   },
  //   [y]
  // );

  // useLayoutEffect(() => {
  //   setY(window.scrollY);
  //   window.addEventListener("scroll", handleNavigation);

  //   return () => {
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [handleNavigation]);

  return (
    <div>
      <div
        className="slides"
        style={{ transform: `translate3d(0, ${percentage}, 0)` }}
      >
        {Children.map<ReactNode, ReactNode>(children, (child, index) => {
          if (index === activeSlide && isValidElement(child)) {
            return cloneElement(child, {
              className: (child as any).className + " active",
            });
          }
          return child;
        })}
      </div>
      <ul className="dots">
        {Children.map(children, (_child, index) => (
          <li className={index === activeSlide ? "active" : ""}>
            <button onClick={() => setActiveSlide(index)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
