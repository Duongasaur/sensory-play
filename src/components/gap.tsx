import styled from "styled-components";

export const DivGap = styled.div`
  position: relative;
  min-height: 12rem;
`;

const DivContent = styled.div`
  position: relative;
  color: #3e4152;
  white-space: pre-line;
`;

interface Props {
  title: string;
  text: string;
}
export const Gap = ({ title, text }: Props) => {
  return (
    <DivGap>
      <div className="bg" />
      <DivContent>
        <h3>{title}</h3>
        <p>{text}</p>
      </DivContent>
    </DivGap>
  );
};
