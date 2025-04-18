import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Loading from '../components/Loading';

const ProjectsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ProjectCard = styled(motion.div)`
  background: #1e293b;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div<{ $imageUrl?: string }>`
  width: 100%;
  height: 200px;
  background: ${props => props.$imageUrl ? `url(${props.$imageUrl})` : '#334155'};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #f8fafc;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #cbd5e1;
  margin-bottom: 15px;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  background: #334155;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  color: #e2e8f0;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  color: #60a5fa;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
}

const Projects = () => {
  const [loading] = useState(false);

  const projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'Современная платформа электронной коммерции с использованием React и TypeScript',
      tags: ['React', 'TypeScript', 'Node.js'],
      imageUrl: 'https://via.placeholder.com/400x200',
      link: 'https://github.com/yourusername/ecommerce'
    },
    {
      title: 'Task Manager',
      description: 'Приложение для управления задачами с drag-and-drop функционалом',
      tags: ['React', 'Redux', 'Firebase'],
      imageUrl: 'https://via.placeholder.com/400x200',
      link: 'https://github.com/yourusername/taskmanager'
    },
    {
      title: 'Weather App',
      description: 'Приложение для просмотра погоды с использованием OpenWeather API',
      tags: ['React', 'API', 'CSS'],
      imageUrl: 'https://via.placeholder.com/400x200',
      link: 'https://github.com/yourusername/weather-app'
    },
  ];

  if (loading) {
    return <Loading />;
  }

  return (
    <ProjectsContainer>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Мои проекты
      </motion.h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectImage $imageUrl={project.imageUrl} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </ProjectTags>
              {project.link && (
                <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                  Посмотреть проект →
                </ProjectLink>
              )}
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects; 