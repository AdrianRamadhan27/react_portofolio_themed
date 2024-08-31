import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/ProjectData';

const Projects = () => {
  const history = useNavigate();

  const handleDetailClick = (id) => {
    history(`/project/details/${id}`);
  };

  return (
    <div>
      <h2>My Projects</h2>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Tech Stacks</th>
              <th>Associated With</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.title}</td>
                <td>{project.techStack.join(', ')}</td>
                <td>{project.association}</td>
                <td>
                  <button onClick={() => handleDetailClick(project.id)}>
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
  );
};

export default Projects;
