import React from 'react';

const VisualCardNew = (props) => {
    return (<div className="visual-card-container visual-card-new" style={{flex:(props.columnSpan)}}>
            <div className="visual-card-title">{props.title}</div>
            <div>{props.children}</div>
        </div>)
}

export default VisualCardNew;