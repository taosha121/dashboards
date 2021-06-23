import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectBasicInfo, selectProjectBasicInfo } from '../features/pipelinesSlice';
import { FaSpinner } from 'react-icons/fa';

const BasicInfo = () => {
    const mockdata = {
        projectId: 1,
        owner: "周XX111",
        type: "交付项目",
        staffNum: 30,
        period: 1342,
        mileStone: 6,
        deadline: "2022-09-08"
    }
    // const dispatch = useDispatch()
    // const projectDetails = useSelector(selectProjectBasicInfo)
    // const projectDetailsStatus = useSelector(state => state.pipelines.statusForProBasicInfoRequest)
    // useEffect(() => {
    //     if(projectDetailsStatus === 'idle') {
    //         dispatch(fetchProjectBasicInfo(1))
    //     }
    // }, [projectDetailsStatus, dispatch])

    // let content
    // if (projectDetailsStatus === 'loading') {
    //     content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    // } else if (projectDetailsStatus === 'succeeded') {
    //     content = (
    //         <div className="dbnew-basicinfo-container">
    //             <div className="dbnew-basicinfo-item">
    //                 <div className="dbnew-basicinfo-item-title">项目管理员</div>
    //                 <div className="dbnew-basicinfo-item-value">{mockdata.owner}</div>
    //             </div>
    //             <div className="dbnew-basicinfo-item">
    //                 <div className="dbnew-basicinfo-item-title">项目类别</div>
    //                 <div className="dbnew-basicinfo-item-value">{mockdata.type}</div>
    //             </div>
    //             <div className="dbnew-basicinfo-item">
    //                 <div className="dbnew-basicinfo-item-title">项目人力</div>
    //                 <div className="dbnew-basicinfo-item-value">{mockdata.staffNum}人</div>
    //             </div>
    //             <div className="dbnew-basicinfo-item">
    //                 <div className="dbnew-basicinfo-item-title">项目开发周期</div>
    //                 <div className="dbnew-basicinfo-item-value">{mockdata.period}天</div>
    //             </div>
    //             <div className="dbnew-basicinfo-item">
    //                 <div className="dbnew-basicinfo-item-title">项目里程碑</div>
    //                 <div className="dbnew-basicinfo-item-value">{mockdata.mileStone}个</div>
    //             </div>
    //             <div className="dbnew-basicinfo-item">
    //                 <div className="dbnew-basicinfo-item-title">项目Deadline</div>
    //                 <div className="dbnew-basicinfo-item-value">{mockdata.deadline}</div>
    //             </div>
    //         </div>
    //     )
    // }

    // return <div>{content}</div>

    return <h1>Basic Info</h1>
}

export default BasicInfo;