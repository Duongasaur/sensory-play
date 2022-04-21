import { Logo } from "../logo";

import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const DivLoader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: white;
  opacity: 1;
  display: flex;
  justify-content: center;
  transition: opacity 1s ease-in-out 2s;
  padding-top: calc(50vh - 6rem);
`;

export const Loader = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(true);
  useEffect(() => {
    const el = ref.current;

    if (el) {
      requestAnimationFrame(() => {
        el.style.opacity = "0";
      });
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, []);

  if (!show) {
    return null;
  }
  return (
    <DivLoader ref={ref}>
      <Logo showBackground={false} />
    </DivLoader>
  );
};
