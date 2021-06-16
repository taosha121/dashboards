import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton';
import { fetchProjectCommonDetails, fetchProjectAlertDetails, fetchProjectProcessDetails, fetchProjectMonitorDetails, fetchProjectStatusDetails, fetchProjectLocationDetails, fetchProjects, selectAllProjects } from '../features/projectsSlice'

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
    let tempArr = [{},{},{},{},{},{},{},{},{},{},{},{}]
    if (projectStatus === 'loading') {
        listItem = tempArr.map((item) => {
            return (<div className="project-card-item-loading"><Skeleton height={20} />  <Skeleton height={10} count={2}/></div>)
        })
    } else if (projectStatus === 'succeeded') {
        listItem = projects.map((item) => {
            return (
                <ProjectCardItem item={item} key={item.projectId}/>
            )
        })
    }

    return (<div className={(projectStatus === 'succeeded' ? "project-card-container" : "project-card-container")}>{listItem}</div>)
}

export default ProjectCard;

function ProjectCardItem(props) {
    const dispatch = useDispatch()
    const handleClick = (e) => {;
        let pid = e.target.getAttribute("projectid")
        dispatch(fetchProjectCommonDetails(pid))
        dispatch(fetchProjectAlertDetails(pid))
        dispatch(fetchProjectProcessDetails(pid))
        dispatch(fetchProjectMonitorDetails(pid))
        dispatch(fetchProjectStatusDetails(pid))
        dispatch(fetchProjectLocationDetails(pid))
    }
    return (
        <div className="project-card-item">
            <div className="project-card-item-title"  projectid={props.item.projectId} onClick={handleClick}>{props.item.projectName}</div>
            <div>项目：{props.item.projectNum}</div>
            <div>人数：{props.item.staffNum}</div>
        </div>
    )
}