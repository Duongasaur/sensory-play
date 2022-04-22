import { ReactNode } from "react";
import styled from "styled-components";

const BaseGrid = styled.div`
  display: grid;
  grid-row-gap: 0rem;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto, 1fr);
  max-width: 1060px;
  margin: auto;
`;

const GridSimple = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  padding: 1rem 0.5rem;
`;

const DivGrid = styled(BaseGrid)<{ isEven: boolean }>`
  grid-template-columns: 1fr 1fr;
  direction: ${({ isEven }) => (isEven ? "ltr" : "rtl")};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const isEven = (num: number) => num % 2 === 0;

interface Props {
  children: ReactNode[];
}

export const Zag = ({ children }: Props) => {
  const zigs = [...chunks<ReactNode>(children, 2)];
  return (
    <GridSimple>
      {zigs.map((zig: ReactNode[], index) => (
        <DivGrid isEven={isEven(index)}>{zig}</DivGrid>
      ))}
    </GridSimple>
  );
};

function* chunks<T>(arr: T[], n = 1): Generator<T[]> {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

export const Grid = ({ children }: Props) => <BaseGrid children={children} />;
