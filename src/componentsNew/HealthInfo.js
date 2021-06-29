import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ReactECharts from 'echarts-for-react';
import { fetchProjectHealthInfo, selectProjectHealthInfo } from '../features/pipelinesSlice'
import { FaSpinner } from 'react-icons/fa';

const HealthInfo = () => {
    const dispatch = useDispatch()
    const projectDetails = useSelector(selectProjectHealthInfo)

    const projectDetailsStatus = useSelector(state => state.pipelines.statusForProHealthInfoRequest)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjectHealthInfo(1))
        }
    }, [projectDetailsStatus, dispatch])

    let content, option
    if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectDetailsStatus === 'succeeded') {
    // let mockdata = {
    //     healthValue: 0.8,
    //     codeNum: 58146,
    //     testCaseRate: 0.56,
    //     testCaseCoveryRate: 0.75,
    //     manualTestCase: 4522,
    //     autoTestCase: 482
    // }

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
                value: projectDetails[0].codeHealth * 100
            }]
        }]
    };

        content = <div className="dbnew-health-container flex-box">
            <div className="dbnew-health-left-pane">
                <ReactECharts option={option} style={{width: '220px', height: '180px'}} />
                <div className="dbnew-health-left-title">总代码行数: {projectDetails[0].totalLineNum}</div>
            </div>
            <div className="dbnew-health-right-pane">
                <div>测试用例执行率: {projectDetails[0].testCasePerform}</div>
                <div>测试用例覆盖率: {projectDetails[0].testCaseCover}</div>
                <div>手动测试用例: {projectDetails[0].manualTestCase}</div>
                <div>自动化测试用例: {projectDetails[0].autoTestCase}</div>
            </div>

        </div>
        
        
        
    }
    

  return <div>{content}</div>;
};
export default HealthInfo;