import styled from "styled-components";

const DivSquare = styled.div<{ background: string }>`
  height: 12rem;
  padding: 2rem;
  padding-bottom: 1rem;
  font-size: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: end;
  border-radius: 2px;

  color: white;
  font-weight: bold;
  background-image: url(${({ background }) => background});
  background-size: 100% auto;
  flex-direction: column;
  text-shadow: 1px 2px #858585;
`;

interface Props {
  id: string;
  title: string;
  text: string;
  bg: string;
}

export const Square = ({ id, text, title, bg }: Props) => {
  return (
    <DivSquare id={id} background={bg}>
      <h2 style={{ color: "#e8e6e4" }}>{title}</h2>
      <span>{text}</span>
    </DivSquare>
  );
};
