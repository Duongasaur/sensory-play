import styled from "styled-components";

import { Box } from "../components/box";

const buttonBG = "pink";
const __html = `<a href="https://popsicle.app/parents/SensoryPlayhouse-Q7JWtlh/login" id="popsicle-registration-widget"> <style>@import url('https://fonts.googleapis.com/css?family=Asap:500&display=swap'); #popsicle-registration-widget{display: flex; align-items: center; color: #19181c; cursor: pointer; font-family: Asap; font-size: 16px; font-weight: 500; max-width: 217px; width: auto; height: 50px; padding: 0 10px; border-radius: 24.5px; background-color: ${buttonBG}; border: none; outline: none; text-decoration: none;}#popsicle-registration-widget:hover{background-color: #fff300;}#popsicle-registration-widget span{text-overflow: ellipsis; white-space: nowrap; overflow: hidden;}</style> <span>Register</span></a>`;

export const Booking = () => {
  return (
    <Box>
      <div id="book">
        <p></p>
        <button>
          <div dangerouslySetInnerHTML={{ __html }} />
          {/* <h3>Book Here</h3> */}
        </button>
      </div>
    </Box>
  );
};
