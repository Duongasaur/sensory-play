import styled from "styled-components";

import { Box } from "../components/box";

const Frame = styled.iframe`
  border-width: 0;
  margin-top: 1rem;
  max-width: 100%;
  max-height: max(500px, 100vw);
`;

export const Classes = () => {
  return (
    <Box>
      <Frame
        id="show"
        src="https://popsicle.app/schools/public/classes/calendar?schoolId=3475"
        width="800px"
        height="844px"
      />
    </Box>
  );
};
