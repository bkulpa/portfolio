import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setAboutVisibility,
  setExperienceVisibility,
} from "../store/visibility/visibility.reducer";

const MenuSectionFinder = () => {
  const findMenuSectionRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        dispatch(setAboutVisibility(entry.isIntersecting));
      },
      {
        // TODO: Uncomment this place
        // root: null,
        // rootMargin: "-33% 0px -33% 0px",
        threshold: 0.1,
      }
    );

    if (findMenuSectionRef.current) {
      observer.observe(findMenuSectionRef.current);
    }

    return () => {
      if (findMenuSectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(findMenuSectionRef.current);
      }
    };
  }, [dispatch]);

  return findMenuSectionRef;
};

export default MenuSectionFinder;
