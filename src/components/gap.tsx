import styled from "styled-components";

export const DivGap = styled.div`
  position: relative;
  min-height: 12rem;
`;

const DivContent = styled.div`
  position: relative;
  color: #3e4152;
`;

export const Gap = () => {
  return (
    <DivGap>
      <div className="bg" />
      <DivContent>
        <h3>... what we do</h3>
        <p>
          We believe in the importance of your childs education and exploration.
          While having safe guidance of a relative during activities. We have
          created a sensory wonderland you and bub.
        </p>
      </DivContent>
    </DivGap>
  );
};
