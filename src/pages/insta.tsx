import { useEffect } from "react";

export const Insta = () => {
  useEffect(() => {
    const js = document.createElement("script");
    js.src = "https://embedsocial.com/cdn/ht.js";
    js.id = "EmbedSocialHashtagScript";
    document.getElementsByTagName("head")[0].appendChild(js);
  }, []);

  return (
    <div
      className="embedsocial-hashtag"
      data-ref="81b93ea323ec5e4d7ea7b91b55775b1be8c612bc"
    />
  );
};
