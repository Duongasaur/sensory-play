import { ReactNode, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const TEXT = "Sensory Playhouse";
const LETTERS = TEXT.split("");

export enum COLORS {
  Red = "#ff5994",
  Orange = "#ff9668",
  Green = "#84ff9f",
  // yellow = "#edff8f",
  Blue = "#82b6ff",
  Purple = "#ba55d3",
}

const COLORS_ARR = Object.values(COLORS);
const MANY_COLORS = [
  ...COLORS_ARR,
  ...COLORS_ARR,
  ...COLORS_ARR,
  ...COLORS_ARR,
  ...COLORS_ARR,
];

const bounce = keyframes`
  0% {
    transform: scale(1,1) translateY(0);
  }
  10% {
    transform: scale(1.1,.9) translateY(0); 
  }
  30% {
    transform: scale(.9,1.1) translateY(-8%);
  }
  50% {
    transform: scale(1.05,.95) translateY(0); 
  }
  58% {
    transform: scale(1,1) translateY(-1%); 
  }
  65% {
    transform: scale(1,1) translateY(0);
  }
  100% {
    transform: scale(1,1) translateY(0);
  }
`;

const DivHeader = styled.div`
  position: sticky;
  z-index: 99;
  top: 0;
  padding-top: 0.5rem;
`;

const Header = styled.h2`
  display: flex;
  justify-content: center;
  height: 40px;
  margin-top: 0;
  font-size: 1.6rem;
  text-shadow: 1px 2px #858585;
  transition: height 0.25s ease-in;
  margin-bottom: 0;

  &.pause > div > span {
    animation: none;
  }
`;

const HeaderBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

const SpanRelative = styled.div`
  position: relative;
  width: 1rem;
`;

const SpanLetter = styled.span<{ index: number }>`
  position: absolute;
  left: 0;
  color: ${({ index }) => MANY_COLORS[index]};
  animation: ${bounce} 1s ease;
  animation-delay: ${({ index }) => 0.1 * index}s;
`;

interface Props {
  showBackground: boolean;
  children?: ReactNode;
}

export const Logo = ({ showBackground, children }: Props) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      const id = setInterval(() => {
        el.classList.add("pause");
        requestAnimationFrame(() => {
          el.classList.remove("pause");
        });
      }, 6000);

      return () => clearInterval(id);
    }
  }, []);

  return (
    <DivHeader>
      {showBackground && <HeaderBg className="bg" />}
      <Header ref={ref}>
        {LETTERS.map((letter, index) => (
          <SpanRelative key={letter + index}>
            <SpanLetter index={index}>{letter}</SpanLetter>
          </SpanRelative>
        ))}
      </Header>
      {children}
    </DivHeader>
  );
};
