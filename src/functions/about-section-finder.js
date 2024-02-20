import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setAboutVisibility } from "../store/visibility/aboutVisibilitySlice";

const AboutSectionFinder = () => {
  const findAboutSectionRef = useRef();
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

    if (findAboutSectionRef.current) {
      observer.observe(findAboutSectionRef.current);
    }

    return () => {
      if (findAboutSectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(findAboutSectionRef.current);
      }
    };
  }, [dispatch]);

  return findAboutSectionRef;
};

export default AboutSectionFinder;
