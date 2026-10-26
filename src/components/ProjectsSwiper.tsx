import { A11y, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsSwiperProps {
  projects: Project[];
  images: string[];
  awardSlugs: Set<string>;
  /** object-position per project index (mirrors the :nth-child tweaks of the grid). */
  imagePositions?: Record<number, string>;
  onOpen: (slug: string) => void;
}

/**
 * Touch-friendly replacement for the projects grid: an endless swiper whose
 * cards are always in their "hovered" state, since there's no hover on touch.
 */
export default function ProjectsSwiper({
  projects,
  images,
  awardSlugs,
  imagePositions = {},
  onOpen,
}: ProjectsSwiperProps) {
  return (
    <div className="projects-swiper-wrap">
      <Swiper
        className="projects-swiper"
        modules={[Pagination, Keyboard, A11y]}
        loop
        centeredSlides
        grabCursor
        speed={500}
        slidesPerView={1.14}
        spaceBetween={14}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        breakpoints={{
          640: { slidesPerView: 1.4, spaceBetween: 16 },

          736: { slidesPerView: 1.8, spaceBetween: 16 },

          896: { slidesPerView: 2.2, spaceBetween: 16 },

          928: { slidesPerView: 2.2, spaceBetween: 18 },

          960: { slidesPerView: 2.4, spaceBetween: 18 },

          1024: { slidesPerView: 2.6, spaceBetween: 18 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <ProjectCard
              project={project}
              image={images[index]}
              awarded={awardSlugs.has(project.slug)}
              imagePosition={imagePositions[index]}
              onOpen={onOpen}
              revealed
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
