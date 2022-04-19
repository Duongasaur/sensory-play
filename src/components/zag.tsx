import { ReactNode } from "react";
import styled from "styled-components";

const DivGrid = styled.div`
  display: grid;
  grid-row-gap: 0rem;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto, 1fr);
  div:nth-of-type(4n) {
    grid-column: 2;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

interface Props {
  children: ReactNode[];
}

export const Zag = ({ children }: Props) => {
  const zigs = [...chunks<ReactNode>(children, 2)];

  return <>{zigs.map(() => {})}</>;
};

function* chunks<T>(arr: T[], n = 1): Generator<T[]> {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
