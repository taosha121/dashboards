import React from 'react';

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {projectList: [
            {
                group: "华为群",
                projectNum: 30,
                staffNum: 1782
            },
            {
                group: "中国区企业",
                projectNum: 30,
                staffNum: 1782
            },
            {
                group: "云核心网",
                projectNum: 30,
                staffNum: 1782
            },
            {
                group: "IT",
                projectNum: 30,
                staffNum: 1782
            },
            {
                group: "云应用与服务",
                projectNum: 30,
                staffNum: 1782
            },
            {
                group: "2021实验室",
                projectNum: 30,
                staffNum: 1782
            },
            {
                group: "消费者",
                projectNum: 30,
                staffNum: 1782
            },
            {
                group: "流程IT",
                projectNum: 30,
                staffNum: 1782
            },
            {
                group: "海思",
                projectNum: 30,
                staffNum: 1782
            },
            {
                group: "无线",
                projectNum: 30,
                staffNum: 1782
            },
            {
                group: "技术服务",
                projectNum: 30,
                staffNum: 1782
            },
            {
                group: "荣耀",
                projectNum: 30,
                staffNum: 1782
            }
        ]};
    }

    render() {
        const list = this.state.projectList;
        const listItem = list.map((item) => {
            return (
                <ProjectCardItem item={item} />
            )
        })
        return (<div className="project-card-container">{listItem}</div>)
            
    }
}

export default ProjectCard;

function ProjectCardItem(props) {
    return (
        <div className="project-card-item" key={props.item.group}>
            <div className="project-card-item-title">{props.item.group}</div>
            <div>项目：{props.item.projectNum}</div>
            <div>人数：{props.item.staffNum}</div>
        </div>
    )
}