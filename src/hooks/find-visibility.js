import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

/**
 *
 * @param {Function} action - Akcja Redux, która zostanie wysłana.
 * @param {number} [threshold=0.1] - Próg widoczności dla IntersectionObserver.
 * @returns {Object} Ref do przypisania do obserwowanego elementu.
 */

export const useFindVisibility = (action, threshold = 0.1) => {
  const visibilityRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const element = visibilityRef.current;

    if (element) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          dispatch(action(entry.isIntersecting));
        },
        { threshold }
      );

      observer.observe(element);

      return () => observer.unobserve(element);
    }
  }, [action, dispatch, threshold]);

  return visibilityRef;
};
