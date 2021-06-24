import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectStatus, selectProjectStatus } from '../features/pipelinesSlice';
import { FaSpinner } from 'react-icons/fa';

const ProjectStatusNew = () => {
  
  const dispatch = useDispatch()
  const projectDetails = useSelector(selectProjectStatus)
  const projectDetailsStatus = useSelector(state => state.pipelines.statusForProStatusRequest)
  useEffect(() => {
      if(projectDetailsStatus === 'idle') {
          dispatch(fetchProjectStatus(1))
      }
  }, [projectDetailsStatus, dispatch])

  const titleMap = {
    todo: "To Do",
    doing: "处理中",
    review: "评审",
    block: "阻塞",
    test: "测试"
  }

  let content
  if (projectDetailsStatus === 'loading') {
    content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
  } else if (projectDetailsStatus === 'succeeded') {
    let proArr = []
    
    for(let attr in projectDetails[0]){
      let obj = {
        statusTitle: titleMap[attr],
        statusEvents: projectDetails[0][attr]
      }
      proArr.push(obj)
    }
    let listItem = proArr.map((obj) => {
      return (
          <StatusCard item={obj.statusEvents} title={obj.statusTitle}/>
      )
  })

  
  content = 
    (<div className="db-project-status-container flex-box">
        {listItem}
    </div>)
  }
  return <div>{content}</div>;
};

export default ProjectStatusNew;

const StatusCard = (props) => {
  let childItem = props.item.map((obj) => {
    return (
      <li key={obj.id}><span className="align-left">{obj.title}</span><span className="align-right">{obj.staffName}</span></li>
    )
  });
  
  return (
  <div className="db-project-status-card">
  <div className="db-project-status-list dbnew-status-list">
    <div style={{fontSize: '22px'}}>{props.title}</div>
    <ul>{childItem}</ul>
    
  </div>
  <div className="gradient-separator" />
  </div>)
}