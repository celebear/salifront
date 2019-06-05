import React from 'react';

import './TogglableText.scss';

interface Props {
  toggled: boolean;
  text: string;
  onClick?: () => void;
}

export default class TogglableText extends React.Component<Props> {
  public render() {
    return <div className="toggleable-text">Hoi</div>;
  }
};
