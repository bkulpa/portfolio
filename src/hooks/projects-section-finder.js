import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setProjectsVisibility } from "../store/visibility/projectsVisibilitySlice";

const ProjectsSectionFinder = () => {
  const findProjectsSectionRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        dispatch(setProjectsVisibility(entry.isIntersecting));
      },
      {
        // TODO: Uncomment this place
        // root: null,
        // rootMargin: "-33% 0px -33% 0px",
        threshold: 0.1,
      }
    );

    if (findProjectsSectionRef.current) {
      observer.observe(findProjectsSectionRef.current);
    }

    return () => {
      if (findProjectsSectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(findProjectsSectionRef.current);
      }
    };
  }, [dispatch]);

  return findProjectsSectionRef;
};

export default ProjectsSectionFinder;
