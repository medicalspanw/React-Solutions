import React           from 'react';
import Button          from 'react-bootstrap/Button';
 
class GalleryChildModuloNext extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    var command = e.target.value;

    this.props.onClick(command);
  }
  render (){

	return (
      <Button variant='primary' value='next'  onClick={this.handleClick}>&rArr;</Button>
  );
  }

};

export default GalleryChildModuloNext;