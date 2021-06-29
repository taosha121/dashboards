import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectBasicInfo, selectProjectBasicInfo } from '../features/pipelinesSlice';
import { FaSpinner } from 'react-icons/fa';

const BasicInfo = () => {
    const dispatch = useDispatch()
    const projectDetails = useSelector(selectProjectBasicInfo)
    const projectDetailsStatus = useSelector(state => state.pipelines.statusForProBasicInfoRequest)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjectBasicInfo(1))
        }
    }, [projectDetailsStatus, dispatch])
    let content
    if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectDetailsStatus === 'succeeded') {
        content = (
            <div className="dbnew-basicinfo-container">
                <div className="dbnew-basicinfo-item">
                    <div className="dbnew-basicinfo-item-title">项目管理员</div>
                    <div className="dbnew-basicinfo-item-value">{projectDetails[0].projectManager}</div>
                </div>
                <div className="dbnew-basicinfo-item">
                    <div className="dbnew-basicinfo-item-title">项目类别</div>
                    <div className="dbnew-basicinfo-item-value">{projectDetails[0].projectType}</div>
                </div>
                <div className="dbnew-basicinfo-item">
                    <div className="dbnew-basicinfo-item-title">项目人力</div>
                    <div className="dbnew-basicinfo-item-value">{projectDetails[0].staffNum}</div>
                </div>
                <div className="dbnew-basicinfo-item">
                    <div className="dbnew-basicinfo-item-title">项目开发周期</div>
                    <div className="dbnew-basicinfo-item-value">{projectDetails[0].cycle}</div>
                </div>
                <div className="dbnew-basicinfo-item">
                    <div className="dbnew-basicinfo-item-title">项目里程碑</div>
                    <div className="dbnew-basicinfo-item-value">{projectDetails[0].milestone}</div>
                </div>
                <div className="dbnew-basicinfo-item">
                    <div className="dbnew-basicinfo-item-title">项目Deadline</div>
                    <div className="dbnew-basicinfo-item-value">{projectDetails[0].deadLine}</div>
                </div>
            </div>
        )
    }

    return <div>{content}</div>
}

export default BasicInfo;