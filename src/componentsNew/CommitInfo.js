import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ReactECharts from 'echarts-for-react';
import { fetchProjectCommitInfo, selectProjectCommitInfo } from '../features/pipelinesSlice'
import { FaSpinner } from 'react-icons/fa';

const CommitInfo = () => {
    const dispatch = useDispatch()
    const projectDetails = useSelector(selectProjectCommitInfo)

    const projectDetailsStatus = useSelector(state => state.pipelines.statusForProCommitInfoRequest)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjectCommitInfo(1))
        }
    }, [projectDetailsStatus, dispatch])

    let content, option
    if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectDetailsStatus === 'succeeded') {

        let timeSeries = []
        let commits = []

        projectDetails.forEach((item) => {
            timeSeries.push(item.date)
            commits.push(item.totalNum)
        })
        // let mockdata = {
        //     timeSeries: ['04-10','04-11','04-12','04-13','04-14','04-15','04-16','04-17','04-18','04-19'],
        //     commits: [20, 32, 41, 34, 90, 80, 20, 20, 29, 53]
        
        // };
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
                    name: '代码提交数量',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {
                    },
                    symbol: 'circle',
                    data: commits
                }
            ],
            color: ['#99ffb6', '#e56b51']
        };

        content = <ReactECharts option={option} style={{height: '220px'}} />
    }

    

  return <div>{content}</div>;
};
export default CommitInfo;