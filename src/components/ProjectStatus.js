import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectStatusDetails, selectProjectStatus } from '../features/projectsSlice';
import ReactECharts from 'echarts-for-react';
import { FaSpinner } from 'react-icons/fa';

const ProjectStatus = () => {
  
  const dispatch = useDispatch()
  const projectDetails = useSelector(selectProjectStatus)
  const projectDetailsStatus = useSelector(state => state.projects.statusForProStatusRequest)
  useEffect(() => {
      if(projectDetailsStatus === 'idle') {
          dispatch(fetchProjectStatusDetails(1))
      }
  }, [projectDetailsStatus, dispatch])



  let content
  if (projectDetailsStatus === 'loading') {
    content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
  } else if (projectDetailsStatus === 'succeeded') {
    let listItem = projectDetails.map((statusObj) => {
      return (
          <StatusCard item={statusObj} key={statusObj.id}/>
      )
  })
    content = 
    (<div className="db-project-status-container flex-box">
        <div className="db-project-status-header">
          <div>任务分布</div>
          <div>DR评审通过率</div>
        </div>
        <div className="gradient-separator" />
        {listItem}
    </div>)
  }

  return <div>{content}</div>;
};

export default ProjectStatus;

const StatusCard = (props) => {
  let childArr = props.item.children;
  let childItem = childArr.map((obj) => {
    return (
      <li key={obj.id}>{obj.statusName}: {obj.projectNum}</li>
    )
  });
  let colorStr
  let rate = Number(props.item.completeRate)
  if( rate > 0.5){
    colorStr = '#5ed5ff'
  }else if(rate  === 0.5){
    colorStr = '#69f592'
  }else{
    colorStr = '#ff7475'
  }

  let labelStr = rate * 100 + "%"
  let option = {
      tooltip: {
          trigger: 'item'
      },
      series: [
          {
              type: 'pie',
              radius: ['50%', '70%'],
              clockwise: true,
              label: {
                show: true,
                position: 'center',
                color: colorStr,
                fontWeight: 'normal'
              },
              labelLine: {
                  show: false
              },
              data: [
                  { value: props.item.completeRate, 
                    itemStyle: {
                      color: colorStr
                    },
                    name: labelStr
                  },
                  {value: (1 - props.item.completeRate),
                  // set labelStr to both the two object since the latter one actually is a fake data
                    name: labelStr}
              ]
          }
      ]
  };
  return (
  <div className="db-project-status-card">
  <div className="db-project-status-list">
    <div>{props.item.statusName}</div>
    <ul>{childItem}</ul>
    <ReactECharts option={option} style={{height: '100px', width: '100px'}} />
  </div>
  <div className="gradient-separator" />
  </div>)
}