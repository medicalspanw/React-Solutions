/*
This routine creates scaled vector graphics code for a five pointed star.
It uses two props passed from its parent: size & fill.

size: in numerical units. The routine does not process pixels or em units.
fill: accepts web-safe colors, number code or hex code. Hex code must be preceeded by '#'.

The resulting star is slightly padded inside a bounding box defined by the 'size' prop.
The fill color is specified by the 'fill' prop.

*/
import React from 'react';
class Star extends React.Component {
    render(){
    const pentagonData = 
       this.props.size * 0.50 + ',' + this.props.size * 0.03 + ' ' +
       this.props.size * 0.20 + ',' + this.props.size * 0.97 + ' ' +
       this.props.size * 0.95 + ',' + this.props.size * 0.37 + ' ' +
       this.props.size * 0.05 + ',' + this.props.size * 0.37 + ' ' +
       this.props.size * 0.80 + ',' + this.props.size * 0.97;
    return(   
       <svg height={this.props.size} width={this.props.size} >
       <polygon points={pentagonData} style={{fill: this.props.fill, fillRule: 'nonzero'}}/>
       </svg>
        )
    }
}
export default Star;



