import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectLocationDetails, selectProjectLocation } from '../features/projectsSlice';
import china from '../map-data/json/china.json';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

const ProjectLocation = () => {
    echarts.registerMap('china', china);


    const dispatch = useDispatch()
    const projectDetails = useSelector(selectProjectLocation)
    const projectDetailsStatus = useSelector(state => state.projects.statusForProLocationRequest)
    let currentProjectId = useSelector(state => state.projects.currentProjectId)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            if (!currentProjectId) currentProjectId = 0
            dispatch(fetchProjectLocationDetails(currentProjectId))
        }
    }, [projectDetailsStatus, dispatch])

    
    const option = {
        geo: {
          map: 'china',
          roam: false,
          zoom: 1.2,
          silent: true,
          emphasis: {
            label: {
                show: 'none'
            },
          },
          itemStyle: {
            normal: {
              areaColor: '#122861',
              borderColor: '#2fbedb',
              borderWidth: 1,
            },
          },
          zlevel: 1,
        },
        tooltip: {
          formatter: function(params) {
            var value = params.value
            return params.name + ': ' + value[2];
          }  
        },
        series: [
          {
            type: 'effectScatter',
            animation: false,
            data: projectDetails,
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
              scale: 3,
              brushType: 'fill',
            },
            itemStyle: {
              normal: {
                color: 'red',
                shadowBlur: 5,
                shadowColor: 'red',
              },
            },
            zlevel: 1,
          },
        ],
      };

      let content
      if (projectDetailsStatus === 'loading') {
          content = <div className="loader"><h1>Loading...</h1></div>
      } else if (projectDetailsStatus === 'succeeded') {
        content = <ReactECharts option={option} style={{height: '280px'}}/>
      }

  return <div>{content}</div>;
};
export default ProjectLocation;