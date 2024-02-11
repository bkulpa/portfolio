import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setExperienceVisibility } from "../store/visibility/experienceVisibilitySlice";

const ExperienceSectionFinder = () => {
  const findExperienceSectionRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        dispatch(setExperienceVisibility(entry.isIntersecting));
      },
      {
        // TODO: Uncomment this place
        // root: null,
        // rootMargin: "-33% 0px -33% 0px",
        threshold: 0.1,
      }
    );

    if (findExperienceSectionRef.current) {
      observer.observe(findExperienceSectionRef.current);
    }

    return () => {
      if (findExperienceSectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(findExperienceSectionRef.current);
      }
    };
  }, [dispatch]);

  return findExperienceSectionRef;
};

export default ExperienceSectionFinder;
