import styled from "styled-components";

const DivBox = styled.div`
  display: inline-block;
  position: relative;
  color: #282a35;
`;

const DivWrapper = styled.div`
  position: relative;
  padding: 1rem;
  padding-top: 0.1rem;
`;

interface Props {
  children: React.ReactNode;
}

export const Box = ({ children }: Props) => {
  return (
    <DivBox>
      <div className="bg" />
      <DivWrapper>{children}</DivWrapper>
    </DivBox>
  );
};
