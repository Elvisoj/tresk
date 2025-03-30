import React from 'react'

function ProjectLink(props) {
  return (
    <div className="projectLink">
        <i className="fa-solid fa-link"></i>
        <a href={props.projectLink} className="singleProject">{props.projectName}</a>
      </div>
  )
}

export default ProjectLink
