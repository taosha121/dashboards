import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { FaSpinner } from 'react-icons/fa';
import { fetchProjectIndustryDetails, fetchProjectCategoryDetails, fetchProjectQualityDetails, fetchProjectAlertDetails, fetchProjectProcessDetails, fetchProjectMonitorDetails, fetchProjectStatusDetails, fetchProjectLocationDetails, fetchProjects, selectAllProjects } from '../features/projectsSlice'

export const ProjectCard = () => {
    const dispatch = useDispatch()
    const projects = useSelector(selectAllProjects)

    const projectStatus = useSelector(state => state.projects.status)

    useEffect(() => {
        if(projectStatus === 'idle') {
            dispatch(fetchProjects())
        }
    }, [projectStatus, dispatch])


    let listItem
    if (projectStatus === 'loading') {
        return <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectStatus === 'succeeded') {

        let pid = 0;
        setInterval(() => {
            console.log(pid);
            dispatch(fetchProjectIndustryDetails(pid))
            dispatch(fetchProjectCategoryDetails(pid))
            dispatch(fetchProjectQualityDetails(pid))
            dispatch(fetchProjectAlertDetails(pid))
            dispatch(fetchProjectProcessDetails(pid))
            dispatch(fetchProjectMonitorDetails(pid))
            dispatch(fetchProjectStatusDetails(pid))
            dispatch(fetchProjectLocationDetails(pid))
            pid++;
        }, 10000);

        listItem = projects.map((item) => {
            return (
                <ProjectCardItem item={item} key={item.projectId}/>
            )
        })
    }

    return (<div className="project-card-container">{listItem}</div>)
}

export default ProjectCard;

function ProjectCardItem(props) {
    return (
        <div className="project-card-item">
            <div className="project-card-item-title">{props.item.projectName}</div>
            <div>项目：{props.item.projectNum}</div>
            <div>人数：{props.item.staffNum}</div>
        </div>
    )
}