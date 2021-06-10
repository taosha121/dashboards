import React from 'react';

class VisualCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="visual-card-container" style={{flex:(this.props.columnSpan)}}>
            <div className="visual-card-title">{this.props.title}</div>
            <div>{this.props.children}</div>
        </div>)
            
    }
}

export default VisualCard;