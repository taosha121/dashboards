import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectMonitorDetails, selectProjectMonitor } from '../features/projectsSlice';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
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
  let cv, cvStr, currentStr
  if(Number(props.item.currentNum) < 1){
    // this should be a percentage value
    cv = Number(props.item.currentNum - props.item.previousNum).toPrecision(2)
    cvStr = Math.abs(cv * 100).toPrecision(2) + "%"
    currentStr = ((props.item.currentNum) * 100).toPrecision(2) + "%"
  }else{
    // this should be an int number value
    cv = props.item.currentNum - props.item.previousNum
    cvStr = Math.abs(cv)
    currentStr = props.item.currentNum
  }
  let isGoodIn = props.item.isGoodIndicator === "true" ? true : false
  // good indicator increase and bad indicator decrease use green arrow
  let arrowColor = ((cv > 0 && isGoodIn) || (cv < 0 && !isGoodIn)) ? '#46b089' : '#dc2f33'
  return (<div className="db-event-item">
    <div>{props.item.name}</div>
    <div className="db-event-stats-row">
      <div>{currentStr}</div>
      <div className="db-event-stats-row-indicator" style={{color: (arrowColor)}}>{cv > 0 ? <FaArrowUp /> : <FaArrowDown />}</div>
      <div>{cvStr}</div>
    </div>
  </div>)
}