
import React from 'react';
import './Footer.css';

function Footer({ data }) {
  const middleIndex = Math.ceil(data.length / 2);

  const firstColumn = data.slice(0, middleIndex);
  const secondColumn = data.slice(middleIndex);

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <a
        key={`${project.title}-${index}`}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="footerText my-1"
      >
        {project.title}
      </a>
    ));

  return (
    <div className="d-flex flex-wrap Footer py-3 px-5 mt-5 container-fluid">
      <div className="col-11 col-sm-6 navLogo logoFooter">
        kal's
      </div>

      <div className="col-11 col-sm-6 d-flex FooterRightSide">
        <div className="d-flex flex-column mx-2">
          {renderProjects(firstColumn)}
        </div>

        <div className="d-flex flex-column mx-2">
          {renderProjects(secondColumn)}
        </div>
      </div>
    </div>
  );
}

export default Footer;
