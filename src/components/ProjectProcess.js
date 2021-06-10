import React from 'react';

const ProjectProcess = () => {
  
  const process = [
    {
      projectName: "户小逆变器委托测试项目 售前阶段跟踪",
      projectId: 1,
      percentage: "0.3",
      owner: "彭本武",
    },
    {
      projectName: "中核welink实施 网络安全项目",
      projectId: 2,
      percentage: "0.5",
      owner: "丁凯",
    },
    {
      projectName: "富平水泥厂签单追踪",
      projectId: 3,
      percentage: "0.8",
      owner: "周涛",
    },
    {
      projectName: "延长能源互联网二期",
      projectId: 4,
      percentage: "0.3",
      owner: "刘瑶",
    }
  ]

  let listItem = process.map((p) => {
      return (
          <ProcessItem item={p} key={p.projectId}/>
      )
  })

  let res = 
    (<div className="db-alertgrid-container">
        <div className="db-alertgrid-header">
          <div style={{flex: '4'}}>项目</div>
          <div style={{flex: '4'}}>项目进度</div>
          <div style={{flex: '2'}}>责任人</div>
        </div>
        {listItem}
    </div>)
  return res;
};

export default ProjectProcess;

const ProcessItem = (props) => {
  let colorClassName

  let percentageValue = Number(props.item.percentage)
  props.item.percentage = Number(props.item.percentage * 100) + "%";
  if( percentageValue > 0.5){
    colorClassName = 'good';
  }else if(percentageValue == 0.5){
    colorClassName = "normal";
  }else{
    colorClassName = "bad";
  }
  return (<div className="db-alertgrid-row">
    <div style={{flex: '4'}}>{props.item.projectName}</div>
    <div style={{display: 'flex', alignItems: 'center', marginRight: '20px', flex: '4'}}>
      <div className="db-alertgrid-percentage-bg">
      <div className={"db-alertgrid-percentage-process db-alertgrid-percentage-" + (colorClassName)} style={{width: (props.item.percentage)}}></div>
      </div>
      <div className="db-alertgrid-percentage-value">{props.item.percentage}</div>
    </div>
    <div style={{flex: '2'}}>{props.item.owner}</div>
  </div>)
}