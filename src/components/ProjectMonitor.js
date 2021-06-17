import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectMonitorDetails, selectProjectMonitor } from '../features/projectsSlice';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';

const ProjectMonitor = () => {
  const dispatch = useDispatch()
  const projectDetails = useSelector(selectProjectMonitor)
  const projectDetailsStatus = useSelector(state => state.projects.statusForProMonitorRequest)
  useEffect(() => {
      if(projectDetailsStatus === 'idle') {
          dispatch(fetchProjectMonitorDetails(1))
      }
  }, [projectDetailsStatus, dispatch])



  let content
  if (projectDetailsStatus === 'loading') {
    content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
  } else if (projectDetailsStatus === 'succeeded') {
    let listItem = projectDetails.map((p) => {
        return (
            <EventItem item={p} key={p.name}/>
        )
    })
  
    content = 
      (<div className="db-event-container">
          {listItem}
      </div>)
  }
  
  return <div>{content}</div>;
};

export default ProjectMonitor;

const EventItem = (props) => {

  return (<div className="db-event-item">
    <div>{props.item.name}</div>
    <div className="db-event-stats-row">
      <div>{props.item.currentNum}</div>
      <div className="db-event-stats-row-indicator" style={{color: ((props.item.currentNum - props.item.previousNum) > 0 ? '#46b089' : '#dc2f33')}}>{(props.item.currentNum - props.item.previousNum) > 0 ? <BsArrowUp /> : <BsArrowDown />}</div>
      <div>{(Math.abs(props.item.currentNum - props.item.previousNum)).toFixed(2)}</div>
    </div>
  </div>)
}