import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectTaskInfo, selectProjectTaskInfo } from '../features/pipelinesSlice';
import { FaSpinner } from 'react-icons/fa';

const TaskInfo = () => {
    const mockdata = {
        projectId: 1,
        total: 30,
        todo: 13,
        complete: 15,
        verified: 13,
        rules: 25,
        repos: 32,
        codemgmt: 23
    }

    const dispatch = useDispatch()
    const projectDetails = useSelector(selectProjectTaskInfo)
    const projectDetailsStatus = useSelector(state => state.pipelines.statusForProTaskInfoRequest)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjectTaskInfo(1))
        }
    }, [projectDetailsStatus, dispatch])

    let content
    if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectDetailsStatus === 'succeeded') {
        content = (
            <div className="dbnew-taskinfo-container">
                <div className="dbnew-taskinfo-title-container">
                    <div className="dbnew-taskinfo-title-item">
                        <div className="dbnew-basicinfo-item-value" style={{fontSize: '36px', color: '#28c7ff'}}>{projectDetails[0].totalNum}</div>
                        <div className="gradient-separator-horizontal" />
                        <div className="dbnew-basicinfo-item-text">总任务量</div>
                    </div>
                    <div className="dbnew-taskinfo-title-item">
                        <div className="dbnew-basicinfo-item-value" style={{fontSize: '36px', color: '#f8ea37'}}>{projectDetails[0].todoNum}</div>
                        <div className="gradient-separator-horizontal" />
                        <div className="dbnew-basicinfo-item-text">待办任务</div>
                    </div>
                    <div className="dbnew-taskinfo-title-item">
                        <div className="dbnew-basicinfo-item-value" style={{fontSize: '36px', color: '#67f191'}}>{projectDetails[0].doneNum}</div>
                        <div className="gradient-separator-horizontal" />
                        <div className="dbnew-basicinfo-item-text">已完成</div>
                    </div>
                </div>
                <div className="dbnew-taskinfo-table-container">
                        <div className="dbnew-basicinfo-table-row">
                            <div className="dbnew-basicinfo-table-row-text">用户验证</div>
                            <div className="dbnew-basicinfo-table-row-value">{projectDetails[0].userValidateNum}</div>
                        </div>
                        <div className="dbnew-basicinfo-table-row">
                            <div className="dbnew-basicinfo-table-row-text">代码检验规则</div>
                            <div className="dbnew-basicinfo-table-row-value">{projectDetails[0].codeRuleNum}</div>
                        </div>
                        <div className="dbnew-basicinfo-table-row">
                            <div className="dbnew-basicinfo-table-row-text">代码库</div>
                            <div className="dbnew-basicinfo-table-row-value">{projectDetails[0].codeRepoNum}</div>
                        </div>
                        <div className="dbnew-basicinfo-table-row">
                            <div className="dbnew-basicinfo-table-row-text">代码质量管理</div>
                            <div className="dbnew-basicinfo-table-row-value">{projectDetails[0].codeQualityNum}</div>
                        </div>
                </div>
            </div>
        )
    }
    return <div>{content}</div>
}

export default TaskInfo;