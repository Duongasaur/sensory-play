import { useEffect } from "react";
import styled from "styled-components";

const DivNews = styled.div`
  margin-top: 1rem;
`;

const DivInsta = styled.div`
  overflow: hidden;
  & > iframe {
    margin-top: -88px;
  }
`;

const ImgInsta = styled.img`
  display: inline-block;
  height: 2rem;
  vertical-align: middle;
  margin-right: 1rem;
`;

export const Insta = () => {
  useEffect(() => {
    setTimeout(() => {
      const js = document.createElement("script");
      js.src = "https://embedsocial.com/cdn/ht.js";
      js.id = "EmbedSocialHashtagScript";
      document.getElementsByTagName("head")[0].appendChild(js);
    }, 200);
  }, []);

  return (
    <DivNews>
      <ImgInsta src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" />
      sensoryplayhouseqld
      <DivInsta
        id="news"
        className="embedsocial-hashtag"
        data-ref="81b93ea323ec5e4d7ea7b91b55775b1be8c612bc"
      />
    </DivNews>
  );
};
