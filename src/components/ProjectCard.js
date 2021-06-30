import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { FaSpinner } from 'react-icons/fa';
import { selectCurProId, updateProId, fetchProjectIndustryDetails, fetchProjectCategoryDetails, fetchProjectQualityDetails, fetchProjectAlertDetails, fetchProjectProcessDetails, fetchProjectMonitorDetails, fetchProjectStatusDetails, fetchProjectLocationDetails, fetchProjects, selectAllProjects } from '../features/projectsSlice'

export const ProjectCard = () => {
    const dispatch = useDispatch()
    const projects = useSelector(selectAllProjects)
    const proId = useSelector(selectCurProId)

    const projectStatus = useSelector(state => state.projects.status)

    useEffect(() => {
        if(projectStatus === 'idle') {
            dispatch(fetchProjects())
            let pid = 2;
            setInterval(() => {
                dispatch(updateProId(pid))
                dispatch(fetchProjectIndustryDetails(pid))
                dispatch(fetchProjectCategoryDetails(pid))
                dispatch(fetchProjectQualityDetails(pid))
                dispatch(fetchProjectAlertDetails(pid))
                dispatch(fetchProjectProcessDetails(pid))
                dispatch(fetchProjectMonitorDetails(pid))
                dispatch(fetchProjectStatusDetails(pid))
                dispatch(fetchProjectLocationDetails(pid))
                pid = (pid === 12) ? 1 : pid + 1
            }, 5000);
        }

        
    }, [projectStatus, dispatch])


    let listItem
    if (projectStatus === 'loading') {
        return <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectStatus === 'succeeded') {

        listItem = projects.map((item) => {
            let isCurrent = item.projectId === proId
            return (
                <div key={item.projectId} className="project-card-item" style={{color: isCurrent ? '#03efe6' : 'white', fontWeight: isCurrent ? 'bold' : 'normal'}}>
                    <div className="project-card-item-title">{item.projectName}</div>
                    <div>项目：{item.projectNum}</div>
                    <div>人数：{item.staffNum}</div>
                </div>
            )
        })
    }

    return (<div className="project-card-container">{listItem}</div>)
}

export default ProjectCard;