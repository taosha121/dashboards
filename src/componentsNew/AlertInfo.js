import React, { useEffect } from 'react';
import { ImFire } from 'react-icons/im';
import { HiFire } from 'react-icons/hi';
import { FaGripfire } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectAlertInfo, selectProjectAlertInfo } from '../features/pipelinesSlice';
import { FaSpinner } from 'react-icons/fa';


const AlertInfo = () => {

    const dispatch = useDispatch()
    const projectDetails = useSelector(selectProjectAlertInfo)
    const projectDetailsStatus = useSelector(state => state.pipelines.statusForProAlertInfoRequest)
    useEffect(() => {
        if(projectDetailsStatus === 'idle') {
            dispatch(fetchProjectAlertInfo(1))
        }
    }, [projectDetailsStatus, dispatch])

    let content
    if (projectDetailsStatus === 'loading') {
        content = <div className="loading-frame"><FaSpinner className="spinner"/></div>
    } else if (projectDetailsStatus === 'succeeded') {
        let listItem = projectDetails.map((item) => {
            let icon
            if(item.warType === 'high'){
                icon = <ImFire />
            }else if(item.warType === 'mid'){
                icon = <HiFire />
            }else{
                icon = <FaGripfire />
            }
            return (<div className="dbnew-alertinfo-row">
                <div className="dbnew-alertinfo-name">
                    <div className="dbnew-alertinfo-icon">{icon}</div>
                    <div className="dbnew-alertinfo-text">{item.title}</div>
                </div>
                <div className="dbnew-alertinfo-details">{item.warDesc}</div>
            </div>)
        })
        content = (
            <><div className="dbnew-alertinfo-legend">
                    <ImFire style={{color: '#ff5b5a'}}/><span style={{color: '#47aadc', padding: '0 8px'}}>严重</span>
                    <HiFire style={{color: '#ff5b5a'}}/><span style={{color: '#47aadc', padding: '0 8px'}}>一般</span>
                    <FaGripfire style={{color: '#ff5b5a'}}/><span style={{color: '#47aadc', padding: '0 8px'}}>轻微</span>
                </div>
            <div className="dbnew-alertinfo-container">
                {listItem}
            </div></>
        )
    }
    
    return <div>{content}</div>
}

export default AlertInfo;