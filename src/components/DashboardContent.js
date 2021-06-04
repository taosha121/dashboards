import React from 'react';
import ProjectCard from './ProjectCard';
import VisualCard from './VisualCard';

class DashboardContent extends React.Component {
    render() {
        return <div className="db-content">
                   
                    <div>
                        <ProjectCard />
                    </div>
                    <div className="db-row db-row-two">
                        <VisualCard title="项目交付点分布图" />
                        <VisualCard title="项目交付点分布图" />
                    </div>
                    <div className="db-row db-row-three">
                        <VisualCard title="项目行业分布" />
                        <VisualCard title="关键点监控" />
                        <VisualCard title="关键问题预警" />
                    </div>
                    <div className="db-row db-row-three">
                        <VisualCard title="项目来源分布" />
                        <VisualCard title="361质量评估" />
                        <VisualCard title="重大项目进度" />
                    </div>
            </div>;
    }
}

export default DashboardContent;