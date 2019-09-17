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
/*
            <svg height="14" width="14">
            <polygon points="  7.0,   0.35 
                               2.8,  13.51
                              13.3,   5.11 
                               0.7,   5.11 
                              11.2,  13.51"
                             style={{fill: 'gold', fillRule: 'nonzero'}} />
            </svg>

            <svg height="200" width="200" style={{backgroundColor: 'white'}}>
            <polygon points="100,   5 
                              40, 193 
                             190,  73 
                              10,  73 
                             160, 193"
                             style={{fill: 'gold', fillRule: 'nonzero'}} />
            </svg>
            <svg height="210" width="210" style={{backgroundColor: 'white'}}>
                <polygon points="100,10 40,198 190,78 10,78 160,198"style={{fill: 'lime', stroke: 'purple', strokeWidth:5, fillRule: 'nonzero'}} />
            </svg>
*/



