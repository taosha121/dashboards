import React from 'react';

const VisualCard = (props) => {
    return (<div className="visual-card-container" style={{flex:(props.columnSpan)}}>
            <div className="visual-card-title">{props.title}</div>
            <div>{props.children}</div>
        </div>)
}

export default VisualCard;