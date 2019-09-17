import React           from 'react';
import Dropdown        from 'react-bootstrap/Dropdown';
 
class GalleryChild extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    var slideName = e.target.value;

    this.props.onClick(slideName);
  }
  render (){
	return (
	  <Dropdown className='mx-auto'>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Treatment Areas
      </Dropdown.Toggle>

      <Dropdown.Menu className='pl-2 pr-2'>
        <Dropdown.Divider/>Chin (Submentum)
        <Dropdown.Item><option value="chinM"  onClick={this.handleClick}>Male</option></Dropdown.Item>
        <Dropdown.Item><option value="chinF"  onClick={this.handleClick}>Female</option></Dropdown.Item>
        <Dropdown.Divider/>Arms (Triceps)
          <Dropdown.Item><option value="armF2"  onClick={this.handleClick}>Arm #1</option></Dropdown.Item>
          <Dropdown.Item><option value="armF3"  onClick={this.handleClick}>Arm #2</option></Dropdown.Item>
          <Dropdown.Item><option value="armF1"  onClick={this.handleClick}>Arm #3</option></Dropdown.Item>
        <Dropdown.Divider/>Abdomen
        <Dropdown.Item><option value="abF1"  onClick={this.handleClick}>Female #1</option></Dropdown.Item>
        <Dropdown.Item><option value="abF2"  onClick={this.handleClick}>Female #2</option></Dropdown.Item>
        <Dropdown.Item><option value="abF3"  onClick={this.handleClick}>Post pregnancy, 2 treaments</option></Dropdown.Item>
        <Dropdown.Item><option value="abF5"  onClick={this.handleClick}>Femail #4</option></Dropdown.Item>
        <Dropdown.Divider/>Flanks
        <Dropdown.Divider/>Flanks and Abdomen
        <Dropdown.Divider/>Inner Thighs
        <Dropdown.Divider/>Outer Thighs
        <Dropdown.Divider/>Inner and Outer Thighs
        <Dropdown.Divider/>The Back                  
      </Dropdown.Menu>
  </Dropdown>
  );
  }

};

export default GalleryChild;