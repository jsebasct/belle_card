import React from 'react';

import { Button } from 'belle';
import { Card } from 'belle';

export default class CardSample extends React.Component {

  render() {
    return (
      <Card style = {{ color: '#2994BB',
                        borderTop: '1px solid #f2f2f2',
                        width: 300}}
              data-custom-attribute={'custom'}>
          <p>Publicada el: 26/05/2017</p>
          <p>Se me perdio el: 27/05/2017 </p>
          <img class="smaller-image thick-green-border"
              alt="A cute orange cat lying on its back. "
              style={{width: '100%'}}
              src="https://bit.ly/fcc-relaxing-cat">
          </img>
          <p>Nombre: {this.props.name}</p>
          <p>{this.props.place}: {this.props.subplace}</p>
          <p>Urgente Robado</p>
          <Button primary>Ver la publicacion</Button>
      </Card>
    );
  }
}
