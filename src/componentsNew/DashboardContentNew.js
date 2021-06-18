import React from 'react';
import VisualCard from '../components/VisualCard';
import VisualCardNew from './VisualCardNew';
import ProjectList from './ProjectList';
import BasicInfo from './BasicInfo';
import SystemInfo from './SystemInfo';

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
                                
                            </VisualCard>
                        </div>
                        <div className="db-row" style={{height: "20vh"}}>
                            <VisualCard title="361质量评估" columnSpan="2">
                                
                            </VisualCard>
                            <VisualCard title="重大项目进度" columnSpan="3">
                                
                            </VisualCard>
                        </div>
                        <div className="db-row" style={{height: "20vh"}}>
                            <VisualCard title="361质量评估" columnSpan="2">
                                
                            </VisualCard>
                            <VisualCard title="重大项目进度" columnSpan="3">
                                
                            </VisualCard>
                        </div>
                        </div>
                    </div>
                    </VisualCardNew>
            </div>;
    }
}

export default DashboardContentNew;