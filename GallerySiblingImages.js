import React           from 'react';
import Card            from 'react-bootstrap/Card';
import Col             from 'react-bootstrap/Col';
import Row             from 'react-bootstrap/Row';
import slidesObject    from './Gallery.json';


class GallerySiblingImages extends React.Component {
  
  render() {
    const slide = slidesObject.slides[this.props.slideNo];
    var n = slide.numOfImages -1 ;
    var DisplayWithOverlay= [null, null];
    var imgSRC = require('./images/'+ slide.imgSRC[n]);
    var altMsg = slide.altMsg[n];

    var DisplayWithOutOverlay = 
      <Col>
        <Card.Img src={imgSRC} alt={altMsg} />
        <div className='text-center'>
          {slide.caption[n]}
        </div>
      </Col>;
    n--;
    do{
      imgSRC = require('./images/'+ slide.imgSRC[n]);
      altMsg = slide.altMsg[n];
      DisplayWithOverlay[n] =
      <Col>
        <Card.Img src={imgSRC} alt={altMsg}/>
        <Card.ImgOverlay style={{padding: 0}}>
          <div className='rollOver' dangerouslySetInnerHTML={{__html: slide.svgCode[n]}}></div>
        </Card.ImgOverlay>
        <div className='text-center'>
          {slide.caption[n]}
        </div>
      </Col>;
    n--;
    }
    while (n >=0);  
      return(
        <Row noGutters='true' fluid='true'>
          {DisplayWithOverlay[0]}
          {DisplayWithOverlay[1]}
          {DisplayWithOutOverlay}
        </Row>
      );
    }
   
  }
 

export default GallerySiblingImages;