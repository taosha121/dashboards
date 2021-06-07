import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { projectSelect, fetchProjects, selectAllProjects } from '../features/projectsSlice'

export const ProjectCard = () => {
    // const projectList = useSelector(state => state.projects.projectList)
    // console.log(projectList)
    const dispatch = useDispatch()
    const projects = useSelector(selectAllProjects)

    const projectStatus = useSelector(state => state.projects.status)

    useEffect(() => {
        console.log("abc")
        if(projectStatus === 'idle') {
            dispatch(fetchProjects())
        }
    }, [projectStatus, dispatch])


    let listItem

    if (projectStatus === 'loading') {
        listItem = <div className="loader">Loading...</div>
    } else if (projectStatus === 'succeeded') {
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
    const dispatch = useDispatch()
    const handleClick = (e) => {
        console.log("====" + e.target.getAttribute("projectid"))
        dispatch(projectSelect({projectId: 1}))
    }
    return (
        <div className="project-card-item">
            <div className="project-card-item-title"  projectid={props.item.projectId} onClick={handleClick}>{props.item.group}</div>
            <div>项目：{props.item.projectNum}</div>
            <div>人数：{props.item.staffNum}</div>
        </div>
    )
}