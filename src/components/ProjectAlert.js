import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectAlertDetails, selectProjectAlert } from '../features/projectsSlice';

const ProjectAlert = () => {

  const dispatch = useDispatch()
  const projectDetails = useSelector(selectProjectAlert)
  const projectDetailsStatus = useSelector(state => state.projects.statusForProAlertRequest)
  let currentProjectId = useSelector(state => state.projects.currentProjectId)
  useEffect(() => {
      if(projectDetailsStatus === 'idle') {
          if (!currentProjectId) currentProjectId = 0
          dispatch(fetchProjectAlertDetails(currentProjectId))
      }
  }, [projectDetailsStatus, dispatch])

  let content
  if (projectDetailsStatus === 'loading') {
      content = <div className="loader"><h1>Loading...</h1></div>
  } else if (projectDetailsStatus === 'succeeded') {
      let listItem = projectDetails.map((alert) => {
        return (
            <AlertItem item={alert} key={alert.projectId}/>
        )
    })

    content = 
      (<div className="db-alertgrid-container">
          <div className="db-alertgrid-header">
            <div style={{flex: '4'}}>事件</div>
            <div style={{flex: '1'}}>业务线</div>
            <div style={{flex: '1'}}>时间</div>
            <div style={{flex: '1'}}>责任人</div>
          </div>
          {listItem}
      </div>)
  }
  return <div>{content}</div>;
};

export default ProjectAlert;

const AlertItem = (props) => {
  return (<div className="db-alertgrid-row">
    <div style={{flex: '4', color: props.item.alertLevel == '1' ? '#cb6777' : '#bbb631'}}>{props.item.event}</div>
    <div style={{flex: '1'}}>{props.item.projectGroup}</div>
    <div style={{flex: '1'}}>{props.item.time}</div>
    <div style={{flex: '1'}}>{props.item.owner}</div>
  </div>)
}