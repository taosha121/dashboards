import React from 'react';
import ReactECharts from 'echarts-for-react';

const Page = () => {
    let option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            right: 10,
            top: 20,
            textStyle: {
                color: "white"
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 1048, name: '搜索引擎'},
                    {value: 735, name: '直接访问'},
                    {value: 580, name: '邮件营销'},
                    {value: 484, name: '联盟广告'},
                    {value: 300, name: '视频广告'}
                ]
            }
        ]
    };

  return <ReactECharts option={option} />;
};
export default Page;