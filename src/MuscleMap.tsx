import React from 'react';

import TogglableText from './components/TogglableText';

const axios = require('axios');

interface State {
  muscles: string[];
}

export default class MuscleMap extends React.Component<{}, State> {
  public constructor(props: any) {
    super(props);

    this.state = { muscles: []};

    this.updateMuscles = this.updateMuscles.bind(this);
    this.fetchMuscles = this.fetchMuscles.bind(this);
  }
  public componentDidMount() {
    this.fetchMuscles();
  }

  public render() {
    return (
      <div>
        <h2>Lihakset</h2>
        {this.state.muscles.map((muscle) => <TogglableText toggled={false} text={muscle}/>)}
      </div>
    );
  }

  private fetchMuscles() {
    axios.get('http://saliapi.herokuapp.com/api/muscles')
    .then(this.updateMuscles);
  }

  private updateMuscles(response: any) {
    const muscles = response.data.map((muscle: any) => muscle.name);
    this.setState({muscles});
  }
}