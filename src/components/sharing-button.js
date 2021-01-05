import React from 'react';
import { Facebook, Twitter } from 'react-sharingbuttons';

const SharingButtons = ({ title, url }) => {
  return (
    <>
      <Facebook url={url} />
      <Twitter url={url} shareText={title} />
    </>
  );
};

export default SharingButtons;