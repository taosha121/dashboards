import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectSystemInfo, selectProjectSystemInfo } from '../features/pipelinesSlice';
import { FaSpinner } from 'react-icons/fa';

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
    const dispatch = useDispatch()
    const projectDetails = useSelector(selectProjectSystemInfo)
    const projectDetailsStatus = useSelector(state => state.pipelines.statusForProSystemInfoRequest)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjectSystemInfo(1))
        }
    }, [projectDetailsStatus, dispatch])

    let content
    if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectDetailsStatus === 'succeeded') {
        content = (
            <div className="dbnew-systeminfo-container">
                <div className="dbnew-systeminfo-item">
                    <div className="dbnew-systeminfo-item-title">服务总数</div>
                    <div className="dbnew-systeminfo-item-value">{projectDetails[0].serverNum}</div>
                </div>
                <div className="dbnew-systeminfo-item">
                    <div className="dbnew-systeminfo-item-title">环境</div>
                    <div className="dbnew-systeminfo-item-value">{projectDetails[0].development}</div>
                </div>
                <div className="dbnew-systeminfo-item">
                    <div className="dbnew-systeminfo-item-title">Pipeline</div>
                    <div className="dbnew-systeminfo-item-value">{projectDetails[0].pipeline}</div>
                </div>
                <div className="dbnew-systeminfo-item">
                    <div className="dbnew-systeminfo-item-title">代码仓库</div>
                    <div className="dbnew-systeminfo-item-value">{projectDetails[0].codeRepo}</div>
                </div>
                <div className="dbnew-systeminfo-item">
                    <div className="dbnew-systeminfo-item-title">制品库</div>
                    <div className="dbnew-systeminfo-item-value">{projectDetails[0].packageRepo}</div>
                </div>
                <div className="dbnew-systeminfo-item">
                    <div className="dbnew-systeminfo-item-title">版本</div>
                    <div className="dbnew-systeminfo-item-value">{projectDetails[0].version}</div>
                </div>
                <div className="dbnew-systeminfo-item">
                    <div className="dbnew-systeminfo-item-title">成员</div>
                    <div className="dbnew-systeminfo-item-value">{projectDetails[0].staff}</div>
                </div>
            </div>
        )
    }

    return <div>{content}</div>
}

export default SystemInfo;