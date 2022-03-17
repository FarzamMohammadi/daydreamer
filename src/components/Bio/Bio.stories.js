import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio,
};

const Template = () => (
  <Bio
    headshot='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'
    name='Farzam Mo'
    tagline='Learing NextJs & Figma'
    role='Junior Software Engineer'
  />
);

export const Default = Template.bind({});
