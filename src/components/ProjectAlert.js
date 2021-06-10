import React from 'react';
import china from '../map-data/json/china.json';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

const ProjectAlert = () => {
  
  const alerts = [
    {
      event: "中小逆变器委托测试项目 人员延迟到位",
      projectGroup: "无线",
      projectId: 1,
      time: "2021-02-23",
      owner: "彭本武",
      alertLevel: 1,
    },
    {
      event: "中小逆变器委托测试项目 人员延迟到位",
      projectGroup: "无线",
      projectId: 2,
      time: "2021-02-23",
      owner: "彭本武",
      alertLevel: 1,
    },
    {
      event: "中小逆变器委托测试项目 人员延迟到位",
      projectGroup: "无线",
      time: "2021-02-23",
      projectId: 3,
      owner: "彭本武",
      alertLevel: 2,
    },
    {
      event: "中小逆变器委托测试项目 人员延迟到位",
      projectGroup: "无线",
      time: "2021-02-23",
      projectId: 4,
      owner: "彭本武",
      alertLevel: 1,
    }
  ]

  let listItem = alerts.map((alert) => {
      return (
          <AlertItem item={alert} key={alert.projectId}/>
      )
  })

  let res = 
    (<div className="db-alertgrid-container">
        <div className="db-alertgrid-header">
          <div style={{flex: '4'}}>事件</div>
          <div style={{flex: '1'}}>业务线</div>
          <div style={{flex: '1'}}>时间</div>
          <div style={{flex: '1'}}>责任人</div>
        </div>
        {listItem}
    </div>)
  return res;
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