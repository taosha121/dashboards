import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectIndustryDetails from './ProjectIndustryDetails';
import ProjectLocation from './ProjectLocation';
import ProjectCategoryDetails from './ProjectCategoryDetails';
import ProjectQualityDetails from './ProjectQualityDetails';
import ProjectStatus from './ProjectStatus';
import ProjectMonitor from './ProjectMonitor';
import ProjectAlert from './ProjectAlert';
import ProjectProcess from './ProjectProcess';
import VisualCard from './VisualCard';

class DashboardContent extends React.Component {
    render() {
        return <div className="db-content">
                   
                    <div>
                        <ProjectCard />
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{flex: '1'}}>
                            <div className="db-row">
                            <VisualCard title="项目交付点分布图" columnSpan="1">
                                <ProjectLocation />
                            </VisualCard>
                            </div>
                            <div className="db-row">
                            <VisualCard title="项目行业分布" columnSpan="1">
                                <ProjectIndustryDetails />
                            </VisualCard>
                            </div>
                            <div className="db-row">
                            <VisualCard title="项目来源分布" columnSpan="1">
                                <ProjectCategoryDetails />
                            </VisualCard>
                            </div>
                        </div>
                        <div style={{flex: '3'}}>
                        <div className="db-row">
                            <VisualCard title="项目交付点分布图" columnSpan="3">
                                <ProjectStatus />
                            </VisualCard>
                        </div>
                        <div className="db-row">
                            <VisualCard title="关键点监控" columnSpan="2">
                                <ProjectMonitor />
                            </VisualCard>
                            <VisualCard title="关键问题预警" columnSpan="3">
                                <ProjectAlert />
                            </VisualCard>
                        </div>
                        <div className="db-row">
                            <VisualCard title="361质量评估" columnSpan="2">
                                <ProjectQualityDetails />
                            </VisualCard>
                            <VisualCard title="重大项目进度" columnSpan="3">
                                <ProjectProcess />
                            </VisualCard>
                        </div>
                        </div>
                    </div>
            </div>;
    }
}

export default DashboardContent;