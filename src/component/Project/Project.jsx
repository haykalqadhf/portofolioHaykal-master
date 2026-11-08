
import React from 'react';
import './Project.css';

import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Project({ data }) {
  return (
    <>
      <div className="d-flex flex-wrap my-4" id="project">
        <div className="d-flex flex-wrap projectImageKecil col-12 col-md-6 pe-2">
          <div className="col-11 col-md-12 borderImage rounded-4">
            <img
              src="assets/1.png"
              alt="Project showcase"
              className="img-fluid col-12"
            />
          </div>
          <span className="titleProject col-11 col-md-6">
            PROJECT SHOWCASE
          </span>
        </div>

        <div className="d-flex flex-wrap col-12 col-md-6 ps-2">
          <div className="col-11 col-md-12 borderImageBesar">
            <img
              src="assets/5.png"
              alt="Project showcase detail"
              className="img-fluid col-12"
            />
          </div>
        </div>
      </div>

      {data.map((project, index) => (
        <div
          className="d-flex flex-wrap align-items-center justify-content-center my-5"
          key={`${project.title}-${index}`}
        >
          <Swiper
            className="col-11 col-lg-4"
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
          >
            {project.image.map((image, imageIndex) => (
              <SwiperSlide
                key={`${project.title}-image-${imageIndex}`}
              >
                <img
                  src={image}
                  alt={`${project.title} preview ${imageIndex + 1}`}
                  className="img-fluid"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="d-flex flex-column col-11 col-lg-8 descProject">
            <span className="textBesar my-1">
              {project.title}
            </span>

            <span className="textKecil my-1">
              {project.technology}
            </span>

            <span className="textKecil my-1">
              {project.description}
            </span>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="col-12 buttonHeader rounded-4 text-center py-2"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Project;
