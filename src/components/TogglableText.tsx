import React from 'react';


interface Props {
  toggled: boolean;
  text: string;
  onClick?: () => void;
}

export default class TogglableText extends React.Component<Props> {
  public render() {
    return <div>Hoi</div>;
  }
};
