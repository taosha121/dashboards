import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProId, fetchProjects, fetchProjectAlertInfo, fetchProjectSystemInfo, fetchProjectTaskInfo, fetchProjectStatus, selectAllProjects, selectCurProId, fetchProjectBuildInfo, fetchProjectHealthInfo, fetchProjectBurndownInfo, fetchProjectCommitInfo, fetchProjectBugInfo, fetchProjectBasicInfo } from '../features/pipelinesSlice';
import { FaSpinner } from 'react-icons/fa';
import { MdPlayArrow } from 'react-icons/md';


const ProjectList = () => {
    
    const dispatch = useDispatch()
    const projectDetails = useSelector(selectAllProjects)
    const proId = useSelector(selectCurProId)
    
    const projectDetailsStatus = useSelector(state => state.pipelines.status)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjects())
            

            let pid = 2;
            setInterval(() => {
                dispatch(updateProId(pid))
                dispatch(fetchProjectAlertInfo(pid))
                dispatch(fetchProjectSystemInfo(pid))
                dispatch(fetchProjectTaskInfo(pid))
                dispatch(fetchProjectStatus(pid))
                dispatch(fetchProjectBuildInfo(pid))
                dispatch(fetchProjectHealthInfo(pid))
                dispatch(fetchProjectBurndownInfo(pid))
                dispatch(fetchProjectCommitInfo(pid))
                dispatch(fetchProjectBugInfo(pid))
                dispatch(fetchProjectBasicInfo(pid))
                pid = (pid === 18) ? 1 : pid + 1
            }, 5000);

        }
    }, [projectDetailsStatus, dispatch])

    let content
    if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectDetailsStatus === 'succeeded') {

        let listItem = projectDetails.map((item) => {
            // debugger
            return <li key={item.id} style={{color: item.id === proId ? "#03f4ec" : "white"}}>{item.projectName}{item.id === proId ? <span className="float-icon"><MdPlayArrow /></span> : <span></span>}</li>
        });
        content = (
            <div className="flex-box"><ul className="dbnew-project-list-container">{listItem}</ul>
            <div className="gradient-separator-new" /></div>
        )
    
    }

    return <div>{content}</div>
}

export default ProjectList;