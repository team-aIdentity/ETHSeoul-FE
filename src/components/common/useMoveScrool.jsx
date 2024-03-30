import { useRef } from "react";

export default function useMoveScrool() {
  const element = useRef();
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { element, onMoveToElement };
}
