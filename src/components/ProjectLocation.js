import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectLocationDetails, selectProjectLocation } from '../features/projectsSlice';
import china from '../map-data/json/china.json';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { FaSpinner } from 'react-icons/fa';

const ProjectLocation = () => {
    let echartRef
    let tooltipIndex = 0
    echarts.registerMap('china', china);
    const dispatch = useDispatch()
    let projectDetails = useSelector(selectProjectLocation)
    
    const projectDetailsStatus = useSelector(state => state.projects.statusForProLocationRequest)
    useEffect(() => {
        if(echartRef) {
          setInterval(() => {
            echartRef && echartRef.getEchartsInstance().dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: tooltipIndex
            });
            tooltipIndex++;
            if(tooltipIndex > projectDetails.length) {
              tooltipIndex = 0;
            }
          }, 2000)
        }
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjectLocationDetails(1))
        }
    }, [projectDetailsStatus, dispatch])

    
    

      let content
      if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
      } else if (projectDetailsStatus === 'succeeded') {

        projectDetails = projectDetails.map((item) => {
          return {
            name: item.name,
            value: [item.lon, item.lat, item.projectNum, item.staffNum]
          }
        });

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
            backgroundColor: "#2b6ba9",
            borderColor: "#5b80ab",
            borderWidth: "2px",
            position: "right",
            textStyle: {
              color: "#0bd8de",
              fontSize: "24px"
            },
            formatter: function(params) {
              var value = params.value
              var htmlStr = "<div><div style='text-align:center;'>" + params.name + "</div><div>项目数量: " + value[2] + "个</div><div>项目人数: " + value[3] + "个</div><div>";
              return htmlStr;
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
        content = <ReactECharts ref={(e) => { echartRef = e; }} option={option} style={{height: '280px'}}/>
      }

  return <div>{content}</div>;
};
export default ProjectLocation;