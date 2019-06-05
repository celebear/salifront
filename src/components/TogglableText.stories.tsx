import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import React from "react";

import TogglableText from "./TogglableText";

const stories = storiesOf('TogglableText', module);

stories.addDecorator(withKnobs);

stories.add('Basic', () => <TogglableText toggled={boolean('Toggled', false)} text="Latissimus dorsi"/>);