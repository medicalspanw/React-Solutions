import React           from 'react';
import Button          from 'react-bootstrap/Button'
 
class GalleryChildModuloPrior extends React.Component {
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
      <Button variant='primary' value='prior' onClick={this.handleClick}>&lArr;</Button>
  );
  }

};

export default GalleryChildModuloPrior;