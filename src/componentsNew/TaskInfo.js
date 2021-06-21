import React from 'react';

const TaskInfo = () => {
    const mockdata = {
        projectId: 1,
        total: 30,
        todo: 13,
        complete: 15,
        verified: 13,
        rules: 25,
        repos: 32,
        codemgmt: 23
    }
    return (
        <div className="dbnew-taskinfo-container">
            <div className="dbnew-taskinfo-title-container">
                <div className="dbnew-taskinfo-title-item">
                    <div className="dbnew-basicinfo-item-value" style={{fontSize: '36px', color: '#28c7ff'}}>{mockdata.total}</div>
                    <div className="gradient-separator-horizontal" />
                    <div className="dbnew-basicinfo-item-text">总任务量</div>
                </div>
                <div className="dbnew-taskinfo-title-item">
                    <div className="dbnew-basicinfo-item-value" style={{fontSize: '36px', color: '#f8ea37'}}>{mockdata.todo}</div>
                    <div className="gradient-separator-horizontal" />
                    <div className="dbnew-basicinfo-item-text">待办任务</div>
                </div>
                <div className="dbnew-taskinfo-title-item">
                    <div className="dbnew-basicinfo-item-value" style={{fontSize: '36px', color: '#67f191'}}>{mockdata.complete}</div>
                    <div className="gradient-separator-horizontal" />
                    <div className="dbnew-basicinfo-item-text">已完成</div>
                </div>
            </div>
            <div className="dbnew-taskinfo-table-container">
                    <div className="dbnew-basicinfo-table-row">
                        <div className="dbnew-basicinfo-table-row-text">用户验证</div>
                        <div className="dbnew-basicinfo-table-row-value">{mockdata.verified}</div>
                    </div>
                    <div className="dbnew-basicinfo-table-row">
                        <div className="dbnew-basicinfo-table-row-text">代码检验规则</div>
                        <div className="dbnew-basicinfo-table-row-value">{mockdata.rules}</div>
                    </div>
                    <div className="dbnew-basicinfo-table-row">
                        <div className="dbnew-basicinfo-table-row-text">代码库</div>
                        <div className="dbnew-basicinfo-table-row-value">{mockdata.repos}</div>
                    </div>
                    <div className="dbnew-basicinfo-table-row">
                        <div className="dbnew-basicinfo-table-row-text">代码质量管理</div>
                        <div className="dbnew-basicinfo-table-row-value">{mockdata.codemgmt}</div>
                    </div>
            </div>
        </div>
    )
}

export default TaskInfo;