import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const TopLeft = Template.bind({});
TopLeft.args = {
  value: '1',
  direction: 'top left',
  items: [
    { content: 'helo', value: '123' },
    { content: 'Whelo', value: '321123' },
  ],
};
export const TopRight = Template.bind({});
TopRight.args = {
  value: '1',
  direction: 'top right',
  items: [
    { content: 'helo', value: '123' },
    { content: 'Whelo', value: '321123' },
  ],
};
export const BottomRight = Template.bind({});
BottomRight.args = {
  value: '1',
  direction: 'bottom right',
  items: [
    { content: 'helo', value: '123' },
    { content: 'Whelo', value: '321123' },
  ],
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
  value: '1',
  direction: 'bottom left',
  items: [
    { content: 'helo', value: '123' },
    { content: 'Whelo', value: '321123' },
  ],
};
