import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ReactECharts from 'echarts-for-react';
import { fetchProjectBugInfo, selectProjectBugInfo } from '../features/pipelinesSlice'
import { FaSpinner } from 'react-icons/fa';

const BugInfo = () => {
    const dispatch = useDispatch()
    const projectDetails = useSelector(selectProjectBugInfo)

    const projectDetailsStatus = useSelector(state => state.pipelines.statusForProBugInfoRequest)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjectBugInfo(1))
        }
    }, [projectDetailsStatus, dispatch])

    let content, option
    if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectDetailsStatus === 'succeeded') {
        let mockdata = [{
            name: '致命缺陷',
            value: 0.09
        },{
            name: '严重缺陷',
            value: 0.13
        },{
            name: '一般缺陷',
            value: 0.4
        },{
            name: '轻微缺陷',
            value: 0.4
        }]

        let formattedData = projectDetails.map((item) => {
            return {
                name: item.defectsType,
                value: item.defectsNum
            }
        })
        option = {
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
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        color: 'white',
                        formatter: (params) => {
                            return params.name + '\n' + (Number(params.value) + '%')
                        }
                    },
                    labelLine: {
                        show: true
                    },
                    data: formattedData
                }
            ]
        }

        content = <ReactECharts option={option} style={{height: '220px'}} />
    }
    

  return <div>{content}</div>;
};
export default BugInfo;