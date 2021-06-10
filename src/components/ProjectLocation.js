import React from 'react';
import china from '../map-data/json/china.json';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

const ProjectLocation = () => {
    echarts.registerMap('china', china);
    const mapData = [
        { name: '北京', value: 99 },
        { name: '天津', value: 58 },
        { name: '上海', value: 5 },
        { name: '重庆', value: 6 },
        { name: '河北', value: 76 },
        { name: '河南', value: 96 },
        { name: '云南', value: 9 },
        { name: '辽宁', value: 50 },
        { name: '黑龙江', value: 24 },
        { name: '湖南', value: 27 },
        { name: '安徽', value: 60 },
        { name: '山东', value: 5 },
        { name: '新疆', value: 48 },
        { name: '江苏', value: 21 },
        { name: '浙江', value: 76 },
        { name: '江西', value: 49 },
        { name: '湖北', value: 40 },
        { name: '广西', value: 46 },
        { name: '甘肃', value: 96 },
        { name: '山西', value: 44 },
        { name: '内蒙古', value: 76 },
        { name: '陕西', value: 74 },
        { name: '吉林', value: 29 },
        { name: '福建', value: 65 },
        { name: '贵州', value: 20 },
        { name: '广东', value: 18 },
        { name: '青海', value: 86 },
        { name: '西藏', value: 75 },
        { name: '四川', value: 47 },
        { name: '宁夏', value: 71 },
        { name: '海南', value: 71 },
        { name: '台湾', value: 50 },
        { name: '香港', value: 40 },
        { name: '澳门', value: 20 },
        { name: '北京', value: 99 },
        { name: '天津', value: 58 },
      ];
      
      const pointData = [
        { name: 'point1', value: [125.03, 46.58, 20] },
        { name: 'point2', value: [114.31, 30.52, 40] },
        { name: 'point3', value: [117.27, 31.86, 25] },
        { name: 'point4', value: [113, 28.21, 70] },
        { name: 'point5', value: [119.57, 39.95, 30] },
      ];

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
        tooltip : {
            trigger: 'item'
        },
        series: [
          {
            name: 'bar',
            type: 'effectScatter',
            animation: false,
            data: pointData,
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

  return <ReactECharts option={option} style={{height: '280px'}}/>;
};
export default ProjectLocation;