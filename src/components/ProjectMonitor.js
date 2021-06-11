import React from 'react';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

const ProjectMonitor = () => {
  
  const events = [
    {
      name: "高风险预警",
      currentNum: 19,
      previousNum: 16
    },
    {
      name: "中风险预警",
      currentNum: 25,
      previousNum: 30
    },
    {
      name: "低风险预警",
      currentNum: 38,
      previousNum: 31
    },
    {
      name: "任务完成率",
      currentNum: 0.786,
      previousNum: 0.77
    },
    {
      name: "项目进度偏差率",
      currentNum: 0.041,
      previousNum: 0.056
    },
    {
      name: "里程碑达成率",
      currentNum: 0.895,
      previousNum: 0.865
    },
    {
      name: "人员稳定度",
      currentNum: 0.462,
      previousNum: 0.459
    },
    {
      name: "及时到位率",
      currentNum: 0.657,
      previousNum: 0.696
    },
    {
      name: "人员增长率",
      currentNum: 0.277,
      previousNum: 0.223
    }
    
  ]

  let listItem = events.map((p) => {
    let cv = p.currentNum - p.previousNum
    p.cv = cv;
    p.indicator = cv > 0 ? <BsArrowUp /> : <BsArrowDown />;
    p.changedNum = (Math.abs(cv)).toFixed(2);
      return (
          <EventItem item={p} key={p.name}/>
      )
  })

  let res = 
    (<div className="db-event-container">
        {listItem}
    </div>)
  return res;
};

export default ProjectMonitor;

const EventItem = (props) => {

  return (<div className="db-event-item">
    <div>{props.item.name}</div>
    <div className="db-event-stats-row">
      <div>{props.item.currentNum}</div>
      <div className="db-event-stats-row-indicator" style={{color: (props.item.cv > 0 ? '#46b089' : '#dc2f33')}}>{props.item.indicator}</div>
      <div>{props.item.changedNum}</div>
    </div>
  </div>)
}