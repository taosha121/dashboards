import React from 'react';
import VisualCard from '../components/VisualCard';
import VisualCardNew from './VisualCardNew';
import ProjectList from './ProjectList';
import BasicInfo from './BasicInfo';
import SystemInfo from './SystemInfo';
import ProjectStatusNew from './ProjectStatusNew';
import TaskInfo from './TaskInfo';
import BuildInfo from './BuildInfo';
import CommitInfo from './CommitInfo';
import BurndownInfo from './BurndownInfo';
import BugInfo from './BugInfo';

class DashboardContentNew extends React.Component {
    render() {
        return <div className="db-content">
                   <VisualCardNew>
                    
                    <div style={{display: 'flex'}}>
                        <div style={{flex: '2', display: 'flex'}}>
                            <ProjectList />
                        </div>
                        <div style={{flex: '7'}}>
                        <div className="db-row" style={{height: "18vh"}}>
                            <VisualCard title="基本信息" columnSpan="1">
                                <BasicInfo />
                            </VisualCard>
                            <VisualCard title="系统信息" columnSpan="1">
                                <SystemInfo />
                            </VisualCard>
                            <VisualCard title="项目预警事件" columnSpan="1">
                                
                            </VisualCard>
                        </div>
                        <div className="db-row" style={{height: "20vh"}}>
                            <VisualCard title="" columnSpan="2">
                                <ProjectStatusNew />
                            </VisualCard>
                        </div>
                        <div className="db-row" style={{height: "20vh"}}>
                            <VisualCard title="任务概况" columnSpan="1">
                                <TaskInfo />
                            </VisualCard>
                            <VisualCard title="构建情况" columnSpan="1">
                                <BuildInfo />
                            </VisualCard>
                            <VisualCard title="代码健康度" columnSpan="1">
                                
                            </VisualCard>
                        </div>
                        <div className="db-row" style={{height: "20vh"}}>
                            <VisualCard title="燃尽图" columnSpan="1">
                                <BurndownInfo />
                            </VisualCard>
                            <VisualCard title="代码提交概况" columnSpan="1">
                                <CommitInfo />
                            </VisualCard>
                            <VisualCard title="缺陷分布" columnSpan="1">
                                <BugInfo />
                            </VisualCard>
                        </div>
                        </div>
                    </div>
                    </VisualCardNew>
            </div>;
    }
}

export default DashboardContentNew;