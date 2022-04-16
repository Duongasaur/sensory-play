import styled from "styled-components";

const DivMenu = styled.div`
  display: inline-grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  width: min-content;
  grid-column-gap: 1rem;
`;

const Item = styled.a`
  white-space: nowrap;
  text-decoration: none;
  letter-spacing: 0.01rem;
  color: #3e4152;
  font-weight: bold;

  &:active {
    color: black;
  }

  border-bottom: 1px solid rgba(0, 0, 0, 0);
`;

const DivRelative = styled.div`
  position: relative;
`;

interface ItemProps {
  name: string;
}

const MenuItem = ({ name }: ItemProps) => {
  const key = name.replace(" ", "-").toLowerCase();
  const link = `#${key}`;
  return <Item href={link}>{name}</Item>;
};

const ITEMS = ["About", "Activities", "Book", "Contact", "News"];

export const Menu = () => {
  return (
    <DivRelative>
      <DivMenu>
        {ITEMS.map((name) => (
          <MenuItem key={name} name={name} />
        ))}
      </DivMenu>
    </DivRelative>
  );
};
