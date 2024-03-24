import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setEducationVisibility } from "../store/visibility/educationVisibilitySlice";

const EducationSectionFinder = () => {
  const findEducationSectionRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        dispatch(setEducationVisibility(entry.isIntersecting));
      },
      {
        // TODO: Uncomment this place
        // root: null,
        // rootMargin: "-33% 0px -33% 0px",
        threshold: 0.1,
      }
    );

    if (findEducationSectionRef.current) {
      observer.observe(findEducationSectionRef.current);
    }

    return () => {
      if (findEducationSectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(findEducationSectionRef.current);
      }
    };
  }, [dispatch]);

  return findEducationSectionRef;
};

export default EducationSectionFinder;
