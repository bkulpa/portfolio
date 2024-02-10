import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setAboutVisibility,
  setExperienceVisibility,
} from "../store/visibility/visibility.reducer";

const MenuSectionFinder = (sectionName) => {
  const sectionRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        switch (sectionName) {
          case "about":
            dispatch(setAboutVisibility(entry.isIntersecting));
            break;
          case "experience":
            dispatch(setExperienceVisibility(entry.isIntersecting));
            break;
          default:
            console.error("Unknown section name");
        }
      },
      {
        // TODO: Uncomment this place
        // root: null,
        // rootMargin: "-33% 0px -33% 0px",

        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [dispatch, sectionName]);

  return sectionRef;
};

export default MenuSectionFinder;
