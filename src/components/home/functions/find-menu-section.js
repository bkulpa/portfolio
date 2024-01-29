import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setVisibility } from "../../../store/visibility/visibility.reducer";

const FindMenuSection = () => {
  const findMenuSectionRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        dispatch(setVisibility(entry.isIntersecting));
      },
      {
        root: null,
        rootMargin: "-33% 0px -33% 0px",
        threshold: 0.1,
      }
    );

    if (findMenuSectionRef.current) {
      observer.observe(findMenuSectionRef.current);
    }

    return () => {
      if (findMenuSectionRef.current) {
        observer.unobserve(findMenuSectionRef.current);
      }
    };
  }, [dispatch]);

  return findMenuSectionRef;
};

export default FindMenuSection;
