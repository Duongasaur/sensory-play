import { Square } from "./components/square";
import { Gap } from "./components/gap";

import square1 from "./images/square1.jpeg";
import square2 from "./images/square2.jpeg";
import content from "./content.json";

import { Zag } from "./components/zag";

const { about, activities } = content;

export const Content = () => {
  return (
    <Zag>
      <Square
        id="about"
        title={about.photo.title}
        bg={square1}
        text={about.photo.text}
      />
      <Gap title={about.block.title} text={about.block.text} />
      <Square
        id="activities"
        title={activities.photo.title}
        bg={square2}
        text={activities.photo.text}
      />
      <Gap title={activities.block.title} text={activities.block.text} />
    </Zag>
  );
};
