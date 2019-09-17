import React                     from 'react';
import Col                       from 'react-bootstrap/Col';
import Row                       from 'react-bootstrap/Row';
import Button                    from 'react-bootstrap/Button';
import Card                      from 'react-bootstrap/Card';
import Popover                   from 'react-bootstrap/Popover';
import OverlayTrigger            from 'react-bootstrap/OverlayTrigger';
import GalleryChildMenu          from './GalleryChildMenu.js';
import GalleryChildModuloPrior   from './GalleryChildModuloPrior.js';
import GalleryChildModuloNext    from './GalleryChildModuloNext.js';
import GallerySiblingTitle       from './GallerySiblingTitle.js';
import GallerySiblingImages      from './GallerySiblingImages.js';
import GallerySiblingText        from './GallerySiblingText.js';
import slidesObject              from './Gallery.json';

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3" className='text-center'>Treatment Tip</Popover.Title>
    <Popover.Content>
      Hover or tap on the <strong>before image</strong> above to see the applicator placement used for treatment.
    </Popover.Content>
  </Popover>
);
var slideNameArray = [''];
class Gallery extends React.Component {
  constructor(props) {
    super(props);


    for (var i=0; i<slidesObject.slides.length; i++){
      slideNameArray[i] = slidesObject.slides[i].slideName;
    } // this creates an array of slide names from Gallery.json

    this.state = { slideNo: slideNameArray.indexOf('chinM', 0), command: 'next' };
    this.moduloSlideNo = this.moduloSlideNo.bind(this);
    this.selectSlideNo = this.selectSlideNo.bind(this);

  }
  /*
  moduloSlideNo handles the props passed from GalleryChildModulo. This props consists of 'command'.
  This props can be set to one of two values: 'next' or 'prior'.
  SlideNo is the index of an arrayof the slide names from Gallery.json. 

  The 'next' command increments the slideNo (slide number). If slideNo equals
  the length of the slide array minus one, the next function loops around to the beginning.
  
  The 'prior' command is not tested for and assumed to be present if the next command is
  not found. The 'prior' code decrements slideNo. If slideNo equals zero, slideNo is set to
  the slideNameArray.length -1 to loop around to the end.
   */
  moduloSlideNo(command){
    var slideNo = this.state.slideNo;
    if (command === 'next'){
      (slideNo < slideNameArray.length -1 ) ? slideNo++ : slideNo = 0;
    }
    else {
      (slideNo > 0) ? slideNo-- : slideNo = slideNameArray.length -1;
    }
    this.setState({slideNo: slideNo});
  }
  /*
  selectSlideNo handls the props passes from GalleryChildMenu. This props consists of 'newSlideName'.
  This rountine finds the index of newSlideName within the slideNameArray.
  */
  selectSlideNo(slideName) {
    this.setState({slideNo: slideNameArray.indexOf(slideName, 0)});
  }
  
  render() {
  
	return (
		<div className='app-window-100pc'>
      <Row noGutters='true'>
        <Col md={2} xl={3}>&nbsp;</Col>
	      <Col md={8} xl={6}>
            <br/><h1 className='text-center font-calc2'>Before and After Gallery</h1><br/>

            <Card style={{backgroundColor: 'lightBlue', color: 'black'}} > 
              <br/>
              <Card.Title>
                <h2 className='text-center font-calc2'>
                  <GallerySiblingTitle slideNo={this.state.slideNo} />
                </h2>
              </Card.Title>

              <GallerySiblingImages slideNo={this.state.slideNo}/>

              <Card.Body>
                <Card.Text className='text-center'>

                  <GallerySiblingText slideNo={this.state.slideNo} />

                </Card.Text>
                <Row>
                  <GalleryChildModuloPrior onClick={this.moduloSlideNo}/>
                  <GalleryChildMenu        onClick={this.selectSlideNo} />
                  <GalleryChildModuloNext  onClick={this.moduloSlideNo}/>
                </Row>
              </Card.Body>
            </Card>
            <br/>
            <br/>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="success">Treatment Tip</Button>
            </OverlayTrigger>
        </Col>
        <Col md={2} xl={3}>&nbsp;</Col>
      </Row>
     </div>
  );

}
};

export default Gallery;