import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ReactECharts from 'echarts-for-react';
import { fetchProjectBuildInfo, selectProjectBuildInfo } from '../features/pipelinesSlice'
import { FaSpinner } from 'react-icons/fa';

const BuildInfo = () => {
    const dispatch = useDispatch()
    const projectDetails = useSelector(selectProjectBuildInfo)

    const projectDetailsStatus = useSelector(state => state.pipelines.statusForProBuildInfoRequest)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjectBuildInfo(1))
        }
    }, [projectDetailsStatus, dispatch])

    let content, option
    if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectDetailsStatus === 'succeeded') {
        let timeSeries = []
        let buildSuccessSeries = []
        let buildFailSeries = []
        projectDetails[0].buildSuccess.forEach((item) => {
            timeSeries.push(item.date)
            buildSuccessSeries.push(item.totalNum)
        })

        projectDetails[0].buildFail.forEach((item )=> {
            buildFailSeries.push(item.totalNum)
        })
        option = {
            legend: {
                data: ['构建成功数', '构建失败数'],
                right: 10,
                top: 20,
                lineStyle: {
                    width: 0,
                },
                textStyle: {
                    color: 'white',
                },
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
                    name: '构建成功数',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {
                    },
                    symbol: 'circle',
                    data: buildSuccessSeries
                },
                {
                    name: '构建失败数',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {
                    },
                    symbol: 'circle',
                    data: buildFailSeries
                }
            ],
            color: ['#5ed5ff', '#e56b51']
        };
    
        content = <ReactECharts option={option} style={{height: '220px'}} />
    }

    

  return <div>{content}</div>;
};
export default BuildInfo;