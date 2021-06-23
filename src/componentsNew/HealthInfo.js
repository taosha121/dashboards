import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ReactECharts from 'echarts-for-react';
import { fetchProjectQualityDetails, selectProjectQuality } from '../features/projectsSlice'
import { FaSpinner } from 'react-icons/fa';

const HealthInfo = () => {
    // const dispatch = useDispatch()
    // const projectDetails = useSelector(selectProjectQuality)

    // const projectDetailsStatus = useSelector(state => state.projects.statusForProQualityRequest)
    // useEffect(() => {
    //     if(projectDetailsStatus === 'idle') {
    //         dispatch(fetchProjectQualityDetails(1))
    //     }
    // }, [projectDetailsStatus, dispatch])

    let content, option
    // if (projectDetailsStatus === 'loading') {
    //     content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    // } else if (projectDetailsStatus === 'succeeded') {
    let mockdata = {
        healthValue: 0.8,
        codeNum: 58146,
        testCaseRate: 0.56,
        testCaseCoveryRate: 0.75,
        manualTestCase: 4522,
        autoTestCase: 482
    }
    option = {
        series: [{
            type: 'gauge',
            radius: '100%',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            itemStyle: {
                color: '#69f592'
            },
            progress: {
                show: true,
                width: 28
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 28,
                    // backgroundColor: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                backgroundColor: 'transparent',
                offsetCenter: [0, '-20%'],
                fontSize: 24,
                color: "#69f592",
                formatter: function (value) {
                    return value + '%';
                }
            },
            data: [{
                value: mockdata.healthValue * 100
            }]
        }]
    };

        content = <div className="dbnew-health-container flex-box">
            <div className="dbnew-health-left-pane">
                <ReactECharts option={option} style={{width: '220px', height: '180px'}} />
                <div className="dbnew-health-left-title">总代码行数: {mockdata.codeNum}</div>
            </div>
            <div className="dbnew-health-right-pane">
                <div>测试用例执行率: {mockdata.testCaseRate}</div>
                <div>测试用例覆盖率: {mockdata.testCaseCoveryRate}</div>
                <div>手动测试用例: {mockdata.manualTestCase}</div>
                <div>自动化测试用例: {mockdata.autoTestCase}</div>
            </div>

        </div>
        
        
        
    // }
    

  return <div>{content}</div>;
};
export default HealthInfo;