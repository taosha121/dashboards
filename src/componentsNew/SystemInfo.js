import React from 'react';

const SystemInfo = () => {
    const mockdata = {
        projectId: 1,
        serviceNum: 11,
        envNum: 3,
        pipelineNum: 25,
        repoNum: 11,
        artifactoryNum: 11,
        versionNum: 3,
        memberNum: 25
    }
    return (
        <div className="dbnew-systeminfo-container">
            <div className="dbnew-systeminfo-item">
                <div className="dbnew-systeminfo-item-title">服务总数</div>
                <div className="dbnew-systeminfo-item-value">{mockdata.serviceNum}</div>
            </div>
            <div className="dbnew-systeminfo-item">
                <div className="dbnew-systeminfo-item-title">环境</div>
                <div className="dbnew-systeminfo-item-value">{mockdata.envNum}</div>
            </div>
            <div className="dbnew-systeminfo-item">
                <div className="dbnew-systeminfo-item-title">Pipeline</div>
                <div className="dbnew-systeminfo-item-value">{mockdata.pipelineNum}人</div>
            </div>
            <div className="dbnew-systeminfo-item">
                <div className="dbnew-systeminfo-item-title">代码仓库</div>
                <div className="dbnew-systeminfo-item-value">{mockdata.repoNum}</div>
            </div>
            <div className="dbnew-systeminfo-item">
                <div className="dbnew-systeminfo-item-title">制品库</div>
                <div className="dbnew-systeminfo-item-value">{mockdata.artifactoryNum}个</div>
            </div>
            <div className="dbnew-systeminfo-item">
                <div className="dbnew-systeminfo-item-title">版本</div>
                <div className="dbnew-systeminfo-item-value">{mockdata.versionNum}</div>
            </div>
            <div className="dbnew-systeminfo-item">
                <div className="dbnew-systeminfo-item-title">成员</div>
                <div className="dbnew-systeminfo-item-value">{mockdata.memberNum}</div>
            </div>
        </div>
    )
}

export default SystemInfo;