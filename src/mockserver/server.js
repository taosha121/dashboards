const express = require('express')
const cors = require("cors")
const app = express()
const port = 3003

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/projects', (req, res) => {
  const projects =  [
    {
        projectName: "华为群",
        projectNum: 30,
        staffNum: 1782,
        projectId: 0
    },
    {
        projectName: "中国区企业",
        projectNum: 30,
        staffNum: 1782,
        projectId: 1
    },
    {
        projectName: "云核心网",
        projectNum: 30,
        staffNum: 1782,
        projectId: 2
    },
    {
        projectName: "IT",
        projectNum: 30,
        staffNum: 1782,
        projectId: 3
    },
    {
        projectName: "云应用与服务",
        projectNum: 30,
        staffNum: 1782,
        projectId: 4
    },
    {
        projectName: "2021实验室",
        projectNum: 30,
        staffNum: 1782,
        projectId: 5
    },
    {
        projectName: "消费者",
        projectNum: 30,
        staffNum: 1782,
        projectId: 6
    },
    {
        projectName: "流程IT",
        projectNum: 30,
        staffNum: 1782,
        projectId: 7
    },
    {
        projectName: "海思",
        projectNum: 30,
        staffNum: 1782,
        projectId: 8
    },
    {
        projectName: "无线",
        projectNum: 30,
        staffNum: 1782,
        projectId: 9
    },
    {
        projectName: "技术服务",
        projectNum: 30,
        staffNum: 1782,
        projectId: 10
    },
    {
        projectName: "荣耀",
        projectNum: 30,
        staffNum: 1782,
        projectId: 11
    }
  ];
  
  setTimeout(()=> res.send(projects), 5000);
  
})


app.get('/api/projectsCommon/:id', (req, res) => {
	let projectDetailIndustry =  {
			
			industryInfo: [
					{value: 1, name: '制造流量'},
                    {value: 2, name: '轨道交通'},
                    {value: 3, name: '金融'},
                    {value: 4, name: '政府'},
					{value: 5, name: '通信'}],
			categoryInfo: [{value: 1, name: 'CIG'},
                    {value: 2, name: 'TPG'},
                    {value: 3, name: 'IIG'},
                    {value: 4, name: '其他'},
					{value: 5, name: '二次'}],
			qualityInfo: [{value: 1, name: '红色预警'},
                    {value: 2, name: '黄色预警'},
                    {value: 3, name: '正常状态'},
                    {value: 4, name: '未知状态'}]
			
			
			
			
			
			
		};
  
                    
  
  setTimeout(()=> res.send(projectDetailIndustry), 2000);
  
})


app.get('/api/projectsAlert/:id', (req, res) => {
	let alerts = [
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
  
                    
  
  setTimeout(()=> res.send(alerts), 5000);
  
})



app.get('/api/projectsProcess/:id', (req, res) => {
	let process = [
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
  
  setTimeout(()=> res.send(process), 2000);
})

app.get('/api/projectsMonitor/:id', (req, res) => {
	let events = [
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
  
  setTimeout(()=> res.send(events), 2000);
})


app.get('/api/projectsStatus/:id', (req, res) => {
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
    children: [{
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
  
  setTimeout(()=> res.send(statusArr), 2000);
})


app.get('/api/projectsLocation/:id', (req, res) => {
	console.log("333333333");
	const pointData = [
        {
          name: '上海',
          value: [121.47,31.23, 55]
        },
        {
          name: '北京',
          value: [116.40,39.90, 110]
        },
        {
          name: '重庆',
          value: [106.55,29.56, 32]   
        }
      ];
  
  setTimeout(()=> res.send(pointData), 2000);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
