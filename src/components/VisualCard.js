import React from 'react';

class VisualCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {projectList: [
            
        ]};
    }

    render() {
        return (<div className="visual-card-container">{this.props.title}</div>)
            
    }
}

export default VisualCard;