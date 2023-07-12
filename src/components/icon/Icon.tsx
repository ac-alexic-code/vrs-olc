import React from 'react';
import './Icon.scss'

interface IconProps {
  name: 'facebook' | 'instagram';
}

const Icon: React.FC<IconProps> = ({ name }) => {
  const iconPath = `src/assets/${name}.svg`;

  return (
    <img src={iconPath} alt={name} />
  );
};

export default Icon;