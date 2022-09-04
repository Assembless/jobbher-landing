import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {{name}} from './index';

export default {
  // ! Remember to specify whether the component is an `atom`, `molecule`, `organism` or `page`.
  title: `{{$atomsOrMoleculesOrOrganisms}}/{{name}}`,
  component: {{name}},
  argTypes: {
    backgroundColor: { control: `color` },
  },
  // ? More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof {{name}}>;

const Template: ComponentStory<typeof {{name}}> = (args) => <{{name}} {...args} />;
// ? More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Standard = Template.bind({});
Standard.args = {
  // * label: `{{name}}`,
};
// ? More on args: https://storybook.js.org/docs/react/writing-stories/args
