import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects, selectAllProjects } from '../features/pipelinesSlice';
import { FaSpinner } from 'react-icons/fa';

const ProjectList = () => {
    const mockdata = [
        {
            id: 1,
            projectId: 1,
            projectName: "Price_TM_Billing_VDS_定制_产品服务"
        },
        {
            id: 2,
            projectId: 2,
            projectName: "上海移动SD-WAN网络编排器_委托开发项目"
        },
        {
            id: 3,
            projectId: 3,
            projectName: "Price_TM_Billing_VDS_定制_产品服务"
        },
        {
            id: 4,
            projectId: 4,
            projectName: "上海移动SD-WAN网络编排器_委托开发项目"
        },
        {
            id: 5,
            projectId: 5,
            projectName: "Price_TM_Billing_VDS_定制_产品服务"
        },
        {
            id: 6,
            projectId: 6,
            projectName: "上海移动SD-WAN网络编排器_委托开发项目"
        },
        {
            id: 7,
            projectId: 7,
            projectName: "Price_TM_Billing_VDS_定制_产品服务"
        },
        {
            id: 8,
            projectId: 8,
            projectName: "上海移动SD-WAN网络编排器_委托开发项目"
        },
        {
            id: 9,
            projectId: 9,
            projectName: "Price_TM_Billing_VDS_定制_产品服务"
        },
        {
            id: 10,
            projectId: 10,
            projectName: "上海移动SD-WAN网络编排器_委托开发项目"
        },
        {
            id: 11,
            projectId: 11,
            projectName: "Price_TM_Billing_VDS_定制_产品服务"
        },
        {
            id: 12,
            projectId: 12,
            projectName: "上海移动SD-WAN网络编排器_委托开发项目"
        },
        {
            id: 13,
            projectId: 13,
            projectName: "无线网络软件平台-维测增强委托开发项目4期还有一些文字测增强委托开发项目4期还有一些文字"
        },
        {
            id: 14,
            projectId: 14,
            projectName: "无线网络软件平台-维测增强委托开发项目4期还有一些文字"
        },
        {
            id: 15,
            projectId: 15,
            projectName: "无线网络软件平台-维测增强委托开发项目4期还有一些文字"
        },
        {
            id: 16,
            projectId: 16,
            projectName: "无线网络软件平台-维测增强委托开发项目4期还有一些文字"
        },
        {
            id: 17,
            projectId: 17,
            projectName: "无线网络软件平台-维测增强委托开发项目4期还有一些文字"
        },
        {
            id: 18,
            projectId: 18,
            projectName: "无线网络软件平台-维测增强委托开发项目4期还有一些文字"
        }
    ];



    const dispatch = useDispatch()
    const projectDetails = useSelector(selectAllProjects)
    const projectDetailsStatus = useSelector(state => state.pipelines.status)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjects(1))
        }
    }, [projectDetailsStatus, dispatch])

    let content
    if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectDetailsStatus === 'succeeded') {
        let listItem = projectDetails.map((item) => {
            return <li key={item.id}>{item.projectName}</li>
        });
        content = (
            <div className="flex-box"><ul className="dbnew-project-list-container">{listItem}</ul>
            <div className="gradient-separator-new" /></div>
        )
    
    }

    return <div>{content}</div>
}

export default ProjectList;