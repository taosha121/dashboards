import React from 'react';
import ProjectCard from './ProjectCard';
import Page from './Page';
import ProjectIndustryDetails from './ProjectIndustryDetails';
import VisualCard from './VisualCard';

class DashboardContent extends React.Component {
    render() {
        return <div className="db-content">
                   
                    <div>
                        <ProjectCard />
                    </div>
                    <div className="db-row db-row-two">
                        <VisualCard title="项目交付点分布图" columnSpan="1">
                            
                        </VisualCard>
                        <VisualCard title="项目交付点分布图" columnSpan="3" />
                    </div>
                    <div className="db-row db-row-three">
                        <VisualCard title="项目行业分布" columnSpan="1">
                            <ProjectIndustryDetails />
                        </VisualCard>
                        <VisualCard title="关键点监控" columnSpan="1" />
                        <VisualCard title="关键问题预警" columnSpan="2" />
                    </div>
                    <div className="db-row db-row-three">
                        <VisualCard title="项目来源分布" columnSpan="1">
                            <Page />
                        </VisualCard>
                        <VisualCard title="361质量评估" columnSpan="1">
                            <Page />
                        </VisualCard>
                        <VisualCard title="重大项目进度" columnSpan="2" />
                    </div>
            </div>;
    }
}

export default DashboardContent;