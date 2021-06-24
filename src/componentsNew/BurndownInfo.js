import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ReactECharts from 'echarts-for-react';
import { fetchProjectQualityDetails, selectProjectQuality } from '../features/projectsSlice'
import { FaSpinner } from 'react-icons/fa';

const BurndownInfo = () => {
    // const dispatch = useDispatch()
    // const projectDetails = useSelector(selectProjectQuality)

    // const projectDetailsStatus = useSelector(state => state.projects.statusForProQualityRequest)
    // useEffect(() => {
    //     if(projectDetailsStatus === 'idle') {
    //         dispatch(fetchProjectQualityDetails(1))
    //     }
    // }, [projectDetailsStatus, dispatch])

    // let content, option
    // if (projectDetailsStatus === 'loading') {
    //     content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    // } else if (projectDetailsStatus === 'succeeded') {
    //     option = {
    //         tooltip: {
    //             trigger: 'item'
    //         },
    //         legend: {
    //             orient: 'vertical',
    //             right: 10,
    //             top: 20,
    //             textStyle: {
    //                 color: "white"
    //             }
    //         },
    //         series: [
    //             {
    //                 name: '访问来源',
    //                 type: 'pie',
    //                 radius: ['40%', '70%'],
    //                 avoidLabelOverlap: false,
    //                 label: {
    //                     show: false,
    //                     position: 'center'
    //                 },
    //                 emphasis: {
    //                     label: {
    //                         show: true,
    //                         fontSize: '40',
    //                         fontWeight: 'bold'
    //                     }
    //                 },
    //                 labelLine: {
    //                     show: false
    //                 },
    //                 data: projectDetails
    //             }
    //         ]
    //     }

    //     content = <ReactECharts option={option} />
    // }

    let mockdata = {
            timeSeries: ['04-10','04-11','04-12','04-13','04-14','04-15','04-16','04-17','04-18','04-19'],
            expect: [900, 800, 700, 600, 500, 400, 300, 200, 100, 0],
            actual: [890, 650, 600, 400, 300, 280, 200, 150, 100, 0]
        
        };
    
    let option, content
    option = {
        legend: {
            data: ['参考', '实际'],
            right: 10,
            top: 20,
            textStyle: {
                color: 'white',
            },
            lineStyle: {
                width: 0,
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: mockdata.timeSeries,
                axisLabel: {
                    color: '#47aadc',
                    interval: 2
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: '#47aadc'
                },
                splitLine: {
                    lineStyle: {
                        color: '#47aadc'
                    }
                }
            }
        ],
        series: [
            {
                name: '参考',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                data: mockdata.expect
            },
            {
                name: '实际',
                type: 'line',
                symbol: 'circle',
                data: mockdata.actual
            }
        ],
        color: ['#5ed5ff', '#e56b51']
    };

    content = <ReactECharts option={option} style={{height: '220px'}} />

  return <div>{content}</div>;
};
export default BurndownInfo;