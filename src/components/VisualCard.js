import React from 'react';

class VisualCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="visual-card-container" style={{flex:(this.props.columnSpan)}}>{this.props.title}
            <div>{this.props.children}</div>
        </div>)
            
    }
}

export default VisualCard;