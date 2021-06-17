import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectProcessDetails, selectProjectProcess } from '../features/projectsSlice';
import { FaSpinner } from 'react-icons/fa';

const ProjectProcess = () => {

  const dispatch = useDispatch()
  const projectDetails = useSelector(selectProjectProcess)
  const projectDetailsStatus = useSelector(state => state.projects.statusForProProcessRequest)
  useEffect(() => {
      if(projectDetailsStatus === 'idle') {
          dispatch(fetchProjectProcessDetails(1))
      }
  }, [projectDetailsStatus, dispatch])

  let content
  if (projectDetailsStatus === 'loading') {
      content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
  } else if (projectDetailsStatus === 'succeeded') {
      let listItem = projectDetails.map((p) => {
        return (
            <ProcessItem item={p} key={p.id}/>
        )
    })
    content = (<div className="db-alertgrid-container">
      <div className="db-alertgrid-header">
        <div style={{flex: '4'}}>项目</div>
        <div style={{flex: '4'}}>项目进度</div>
        <div style={{flex: '2'}}>责任人</div>
      </div>
      {listItem}
  </div>)
  }
    
  return <div>{content}</div>;
};

export default ProjectProcess;

const ProcessItem = (props) => {
  let colorClassName
  let percentageValue = Number(props.item.percentage)
  let perV = Number(percentageValue * 100) + "%";
  if( percentageValue > 0.5){
    colorClassName = 'good';
  }else if(percentageValue === 0.5){
    colorClassName = "normal";
  }else{
    colorClassName = "bad";
  }
  return (<div className="db-alertgrid-row">
    <div style={{flex: '4'}}>{props.item.projectName}</div>
    <div style={{display: 'flex', alignItems: 'center', marginRight: '20px', flex: '4'}}>
      <div className="db-alertgrid-percentage-bg">
      <div className={"db-alertgrid-percentage-process db-alertgrid-percentage-" + (colorClassName)} style={{width: (perV)}}></div>
      </div>
      <div className="db-alertgrid-percentage-value">{perV}</div>
    </div>
    <div style={{flex: '2'}}>{props.item.owner}</div>
  </div>)
}