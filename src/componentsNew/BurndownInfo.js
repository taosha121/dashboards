import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ReactECharts from 'echarts-for-react';
import { fetchProjectBurndownInfo, selectProjectBurndownInfo } from '../features/pipelinesSlice'
import { FaSpinner } from 'react-icons/fa';

const BurndownInfo = () => {
    const dispatch = useDispatch()
    const projectDetails = useSelector(selectProjectBurndownInfo)

    const projectDetailsStatus = useSelector(state => state.pipelines.statusForProBurndownInfoRequest)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjectBurndownInfo(1))
        }
    }, [projectDetailsStatus, dispatch])

    let content, option
    if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectDetailsStatus === 'succeeded') {

        let timeSeries = []
        let expect = []
        let actual = []
        projectDetails[0].reference.forEach((item) => {
            expect.push(item.totalNum)
            timeSeries.push(item.month)
        })
        projectDetails[0].actual.forEach((item) => {
            actual.push(item.totalNum)
        })
        // let mockdata = {
        //     timeSeries: ['04-10','04-11','04-12','04-13','04-14','04-15','04-16','04-17','04-18','04-19'],
        //     expect: [900, 800, 700, 600, 500, 400, 300, 200, 100, 0],
        //     actual: [890, 650, 600, 400, 300, 280, 200, 150, 100, 0]
        
        // };
    
        let option = {
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
                    data: timeSeries,
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
                    data: expect
                },
                {
                    name: '实际',
                    type: 'line',
                    symbol: 'circle',
                    data: actual
                }
            ],
            color: ['#5ed5ff', '#e56b51']
        };
    
        content = <ReactECharts option={option} style={{height: '220px'}} />
    }

    

    

  return <div>{content}</div>;
};
export default BurndownInfo;