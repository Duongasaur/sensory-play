import { Logo } from "./logo";
import { Booking } from "./pages/booking";
import { Map } from "./pages/map";
import { Classes } from "./pages/classes";
import { Menu } from "./components/menu";

import "./styles.css";
import styled from "styled-components";
import { Grid } from "./components/zag";
import { Insta } from "./pages/insta";
import { Content } from "./content";
import { Loader } from "./components/loader";

export default function App() {
  return (
    <div className="App">
      <Logo showBackground={true}>
        <Menu />
      </Logo>
      <Content />
      <Grid>
        <Classes />
        <Booking />
        <Map />
        <Insta />
      </Grid>
      <Loader />
    </div>
  );
}
