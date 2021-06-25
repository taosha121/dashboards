import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProId, fetchProjects, fetchProjectAlertInfo, fetchProjectSystemInfo, fetchProjectTaskInfo, fetchProjectStatus, selectAllProjects, selectCurProId } from '../features/pipelinesSlice';
import { FaSpinner } from 'react-icons/fa';
import { MdPlayArrow } from 'react-icons/md';


const ProjectList = () => {
    
    
    // const updateCurProId = pid => {
    //     return {
    //         type: 'pipelines/pidUpdated',
    //         payload: pid
    //     }
    // }
    const dispatch = useDispatch()
    const projectDetails = useSelector(selectAllProjects)
    const proId = useSelector(selectCurProId)
    
    const projectDetailsStatus = useSelector(state => state.pipelines.status)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjects(1))
            

            let pid = 2;
            setInterval(() => {
                // console.log("=============now the pid is===============" + pid);
                    dispatch(updateProId(pid))
            //     // dispatch(fetchProjectAlertInfo(1))
            //     // dispatch(fetchProjectSystemInfo(1))
            //     // dispatch(fetchProjectTaskInfo(1))
            //     // dispatch(fetchProjectStatus(1))
            //     // debugger
            //     // dispatch(updateProId(pid))
            //     // dispatch(fetchProjectProcessDetails(pid))
            //     // dispatch(fetchProjectMonitorDetails(pid))
            //     // dispatch(fetchProjectStatusDetails(pid))
            //     // dispatch(fetchProjectLocationDetails(pid))
                pid++;
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