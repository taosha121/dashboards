import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectStatusDetails, selectProjectStatus } from '../features/projectsSlice';
import { FaSpinner } from 'react-icons/fa';

const ProjectStatusNew = () => {
  
  // const dispatch = useDispatch()
  // const projectDetails = useSelector(selectProjectStatus)
  // const projectDetailsStatus = useSelector(state => state.projects.statusForProStatusRequest)
  // useEffect(() => {
  //     if(projectDetailsStatus === 'idle') {
  //         dispatch(fetchProjectStatusDetails(1))
  //     }
  // }, [projectDetailsStatus, dispatch])

  let projectDetails = [{
    statusName: "To Do",
    children: [{
      statusName: "流水线列表字段缺失问题",
      owner: "赵庆鹏",
    },{
      statusName: "用户故事指标",
      owner: "赵庆鹏",
    }]
  },{
    statusName: "处理中",
    children: [{
      statusName: "代码编辑，管理，删除代码库",
      owner: "赵庆鹏",
    },{
      statusName: "流水线列表字段缺失问题",
      owner: "赵庆鹏",
    },{
      statusName: "性能优化的调研",
      owner: "赵庆鹏",
    },{
      statusName: "流水线运行状态",
      owner: "赵庆鹏",
    },{
      statusName: "流水线运行日志",
      owner: "赵庆鹏",
    }]
  },{
    statusName: "评审",
    children: [{
      statusName: "代码管理列表，创建代码库",
      owner: "赵庆鹏",
    },{
      statusName: "查看流水线",
      owner: "赵庆鹏",
    }]
  },{
    statusName: "阻塞",
    children: [{
      statusName: "用户鉴权管理",
      owner: "赵庆鹏",
    }]
  },{
    statusName: "测试",
    children: [{
      statusName: "文件上传失败",
      owner: "赵庆鹏",
    },{
      statusName: "列表-添加缺陷",
      owner: "赵庆鹏",
    }]
  }]

  let content
  // if (projectDetailsStatus === 'loading') {
  //   content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
  // } else if (projectDetailsStatus === 'succeeded') {
  //   let listItem = projectDetails.map((statusObj) => {
  //     return (
  //         <StatusCard item={statusObj} key={statusObj.id}/>
  //     )
  // })

  let listItem = projectDetails.map((statusObj) => {
    return (
        <StatusCard item={statusObj} key={statusObj.id}/>
    )
    
  })
  content = 
    (<div className="db-project-status-container flex-box">
        {listItem}
    </div>)

  return <div>{content}</div>;
};

export default ProjectStatusNew;

const StatusCard = (props) => {
  let childArr = props.item.children;
  let childItem = childArr.map((obj) => {
    return (
      <li key={obj.id}><span className="align-left">{obj.statusName}</span><span className="align-right">{obj.owner}</span></li>
    )
  });
  
  return (
  <div className="db-project-status-card">
  <div className="db-project-status-list dbnew-status-list">
    <div>{props.item.statusName}</div>
    <ul>{childItem}</ul>
    
  </div>
  <div className="gradient-separator" />
  </div>)
}