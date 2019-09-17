import React                     from 'react';
class Star extends React.Component {
    render(){
    const pentagonData = 
       this.props.size * 0.50 + ',' + this.props.size * 0.03 + ' ' +
       this.props.size * 0.20 + ',' + this.props.size * 0.97 + ' ' +
       this.props.size * 0.95 + ',' + this.props.size * 0.37 + ' ' +
       this.props.size * 0.05 + ',' + this.props.size * 0.37 + ' ' +
       this.props.size * 0.80 + ',' + this.props.size * 0.97;
    return(
            <div>
                            <svg height={this.props.size} width={this.props.size} >
            <polygon points={pentagonData} style={{fill: 'gold', fillRule: 'nonzero'}}/>
            </svg>
            </div>
        )
    }
}
export default Star;



