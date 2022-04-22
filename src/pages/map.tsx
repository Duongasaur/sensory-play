import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Loader, LoaderOptions } from "google-maps";
import pin from "../images/pin.png";

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
  width: 100%;
  height: 200px;
  filter: hue-rotate(290deg) saturate(0.9);
`;

const DivContact = styled.div`
  display: grid;
  padding: 20px;
  background-color: #282a35;
  color: white;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const Icon = styled.div`
  display: inline-block;
  font-size: 2rem;
  line-height: 1rem;
  vertical-align: top;
`;

const ContactCard = () => {
  return (
    <DivContact>
      <span>
        <Icon>✆</Icon> 33 4455 6677
      </span>
      <span>
        <Icon>✉</Icon> info@sensoryplayhouse.com.au
      </span>
      <span />
      <span>Shop 17C, 235 Sinnamon Rd</span>
      <span>Jindalee 4077 QLD</span>
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
