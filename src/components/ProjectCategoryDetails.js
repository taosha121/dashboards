import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ReactECharts from 'echarts-for-react';
import { fetchProjectCommonDetails, selectProjectCommon } from '../features/projectsSlice'
import { FaSpinner } from 'react-icons/fa';

const ProjectCategoryDetails = () => {
    const dispatch = useDispatch()
    const projectDetails = useSelector(selectProjectCommon)

    const projectDetailsStatus = useSelector(state => state.projects.statusForProCommonRequest)
    let currentProjectId = useSelector(state => state.projects.currentProjectId)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            if (!currentProjectId) currentProjectId = 1
            dispatch(fetchProjectCommonDetails(currentProjectId))
        }
    }, [projectDetailsStatus, dispatch])

    let content, option
    if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectDetailsStatus === 'succeeded') {
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
                    data: projectDetails.categoryInfo
                }
            ]
        }

        content = <ReactECharts option={option} />
    }
    

  return <div>{content}</div>;
};
export default ProjectCategoryDetails;