import { Logo } from "./logo";
import { Booking } from "./pages/booking";
import { Map } from "./pages/map";
import { Classes } from "./pages/classes";
import { Square } from "./components/square";
import { Menu } from "./components/menu";
import { Gap } from "./components/gap";

import square1 from "./images/square1.jpeg";
import square2 from "./images/square2.jpeg";

import "./styles.css";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Zag } from "./components/zag";

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

const Loader = () => {
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

const SQUARE_1_TITLE = "About us";
const SQUARE_1_TXT =
  "We are a fun play center for your child to explore and learn";

const SQUARE_2_TITLE = "Activities";
const SQUARE_2_TXT = "We have painting, music and dancing";

export default function App() {
  return (
    <div className="App">
      <Logo showBackground={true}>
        <Menu />
      </Logo>
      <Zag>
        <Square
          id="about"
          title={SQUARE_1_TITLE}
          bg={square1}
          text={SQUARE_1_TXT}
        />
        <Gap />
        <Square
          id="activities"
          title={SQUARE_2_TITLE}
          bg={square2}
          text={SQUARE_2_TXT}
        />
        <div />
      </Zag>
      <Classes />
      <Booking />
      <Map />
      <Loader />
    </div>
  );
}
