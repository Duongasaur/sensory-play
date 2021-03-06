import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Loader, LoaderOptions } from "google-maps";
import pin from "../images/pin.png";
import share from "../images/share.svg";

import { Box } from "../components/box";

const Heading = styled.h3`
  color: #282a35;
`;

const options: LoaderOptions = {
  /* todo */
};

const blah = "IzaSyB1dBhW7";
const blah2 = "fKsjHBRY9hmOaIUFsMOYoP!OEE";
const key = `A${blah}${blah2}`.replace("!", "-");
const loader = new Loader(key, options);

const MAP_POSITION = { lat: -27.5315, lng: 152.9455 };
const MARKER_POSITION = { lat: -27.5319, lng: 152.94445 };

const GOOGLE_SETTINGS = {
  zoom: 15,
  center: MAP_POSITION,
  disableDefaultUI: false,
  keyboardShortcuts: true,
  mapTypeControlOptions: {
    mapTypeIds: [],
  },
};

async function loadMap(mapEl: HTMLDivElement) {
  const google = await loader.load();

  const map = new google.maps.Map(mapEl, GOOGLE_SETTINGS);

  const _marker = new google.maps.Marker({
    position: MARKER_POSITION,
    map: map,
    icon: {
      url: pin,
      scaledSize: new google.maps.Size(48, 64), // scaled size
    },
  });
}

const DivMap = styled.div`
  /* margin-top: 1rem; */
  height: 200px;
  border: 8px solid #282a35;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  filter: hue-rotate(290deg) saturate(0.9);
`;

const DivContact = styled.div`
  position: relative;
  display: grid;
  padding: 20px;
  background-color: #282a35;
  color: white;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  grid-template-rows: repeat(5, 2rem);
  line-height: 2rem;
`;

const ContactLink = styled.a`
  color: #82b6ff;
`;

const Icon = styled.div`
  display: inline-block;
  font-size: 2rem;
  line-height: 1.5rem;
  vertical-align: top;
  color: white;
`;

const ShareButton = styled.a`
  position: absolute;
  width: 2rem;
  height: 2rem;
  right: 1rem;
  top: 1rem;
  background: center center url(${share}) no-repeat;
  filter: invert(100%);
`;

const MAP_URL = "https://maps.app.goo.gl/ZpgEQxskUjy8VQDo8";
const ContactCard = () => {
  const onShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Sensory Playhouse",
          text: "Checkout our site sensoryplayhouse.com.au \n or come find us at Shop 17C, 235 Sinnamon Rd Jindalee 4074 QLD",
          url: MAP_URL,
        })
        .then(() => {
          // console.log("Thanks for sharing!");
        })
        .catch(console.error);
    }
  };
  return (
    <DivContact id="contact">
      <ShareButton onClick={onShare} />
      <ContactLink href="tel:33-4455-6677">
        <Icon>???</Icon> 33 4455 6677
      </ContactLink>
      <ContactLink href="mailto:info@sensoryplayhouse.com.au">
        <Icon>???</Icon> info@sensoryplayhouse.com.au
      </ContactLink>
      <span />
      <a target="_blank" href={MAP_URL}>
        <span>Shop 17C, 235 Sinnamon Rd,</span>
        <br />
        <span>Jindalee 4074 QLD</span>
      </a>
    </DivContact>
  );
};

export const Map = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      loadMap(ref.current);
    }
  }, []);

  return (
    <Box>
      <Heading>Find us</Heading>
      <ContactCard />
      <DivMap ref={ref} />
    </Box>
  );
};
