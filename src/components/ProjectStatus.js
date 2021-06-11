import React from 'react';
import ReactECharts from 'echarts-for-react';

const ProjectStatus = () => {
  
  const statusArr = [{
    statusName: "规划项目阶段",
    completeRate: 0.5,
    children: [{
      statusName: "技术DTRB评审",
      projectNum: 5,
    },{
      statusName: "应标书/合同评审",
      projectNum: 6,
    },{
      statusName: "准备DRB评审",
      projectNum: 8,
    }]
  },{
    statusName: "建立项目阶段",
    completeRate: 0.75,
    children: [{
      statusName: "技术DTRB评审",
      projectNum: 3,
    },{
      statusName: "准备DRB评审",
      projectNum: 2,
    }]
  },{
    statusName: "实施项目阶段",
    completeRate: 0.25,
    children: [{
      statusName: "技术DTRB评审",
      projectNum: 6,
    },{
      statusName: "准备DRB评审",
      projectNum: 6,
    }]
  },{
    statusName: "验收项目阶段",
    completeRate: 0.5,
    children: [,{
      statusName: "准备DRB评审",
      projectNum: 2,
    }]
  },{
    statusName: "关闭项目阶段",
    completeRate: 0.75,
    children: [{
      statusName: "准备DRB评审",
      projectNum: 8,
    }]
  }]

  let listItem = statusArr.map((statusObj) => {
      return (
          <StatusCard item={statusObj} key={statusObj.statusName}/>
          
      )
  })

  let res = 
    (<div className="db-project-status-container flex-box">
        <div className="db-project-status-header">
          <div>任务分布</div>
          <div>DR评审通过率</div>
        </div>
        <div className="gradient-separator" />
        {listItem}
    </div>)
  return res;
};

export default ProjectStatus;

const StatusCard = (props) => {
  let childArr = props.item.children;
  let childItem = childArr.map((obj) => {
    return (
      <li>{obj.statusName}: {obj.projectNum}</li>
    )
  });
  let colorStr
  if(props.item.completeRate > 0.5){
    colorStr = '#5ed5ff'
  }else if(props.item.completeRate == 0.5){
    colorStr = '#69f592'
  }else{
    colorStr = '#ff7475'
  }

  let labelStr = props.item.completeRate * 100 + "%"
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