import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ReactECharts from 'echarts-for-react';
import { fetchProjectQualityDetails, selectProjectQuality } from '../features/projectsSlice'
import { FaSpinner } from 'react-icons/fa';

const BugInfo = () => {
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
                            return params.name + '\n' + (Number(params.value)*100 + '%')
                        }
                    },
                    labelLine: {
                        show: true
                    },
                    data: mockdata
                }
            ]
        }

        content = <ReactECharts option={option} style={{height: '220px'}} />
    // }
    

  return <div>{content}</div>;
};
export default BugInfo;