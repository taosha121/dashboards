import React from 'react';

class DashboardHeader extends React.Component {
    render() {
        return <div className="db-header-container">
                    <div className="db-header-title">{this.props.title}</div>
            </div>;
    }
}

export default DashboardHeader;