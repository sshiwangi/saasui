"use client";
import { useInView } from "framer-motion";
import { ReactElement, cloneElement, useRef } from "react";

const LayoutEffect = ({
  children,
  className,
  isInviewState: { trueState = "", falseState = "" },
}: {
  children: ReactElement;
  className?: string;
  isInviewState: {
    trueState?: string;
    falseState?: string;
  };
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return cloneElement(children, {
    ref,
    className: `${children.props.className || ""} ${className || ""} ${
      isInView ? trueState : falseState
    }`,
  });
};

export default LayoutEffect;
