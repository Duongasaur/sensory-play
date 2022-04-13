import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Loader, LoaderOptions } from "google-maps";

import { Box } from "../components/box";

const Heading = styled.h3`
  color: #282a35;
`;

const options: LoaderOptions = {
  /* todo */
};

const blah = "AIzaSyB1dBhW7fKsjHBRY9hmOaIUFsMOYoP-OEE";
const loader = new Loader(blah, options);

const POSITION = { lat: -27.5319, lng: 152.94445 };

const GOOGLE_SETTINGS = {
  zoom: 18,
  center: POSITION,
  disableDefaultUI: false,
  keyboardShortcuts: true,
  mapTypeControlOptions: {
    mapTypeIds: []
  }
};

async function loadMap(mapEl: HTMLDivElement) {
  // The location of Uluru
  // The map, centered at Uluru
  const google = await loader.load();

  const map = new google.maps.Map(mapEl, GOOGLE_SETTINGS);

  // The marker, positioned at Uluru
  const _marker = new google.maps.Marker({
    position: POSITION,
    map: map
  });
}

const DivMap = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 200px;
`;

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
      <DivMap ref={ref} />
    </Box>
  );
};
