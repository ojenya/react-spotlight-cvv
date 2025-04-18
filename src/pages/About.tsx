import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
`;

const Section = styled(motion.section)`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #f8fafc;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #cbd5e1;
  margin-bottom: 20px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const SkillItem = styled.li`
  background: #1e293b;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  color: #e2e8f0;
`;

const About = () => {
  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Git',
    'Responsive Design',
    'Webpack',
    'Node.js',
  ];

  return (
    <AboutContainer>
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Обо мне</Title>
        <Text>
          Я frontend разработчик с passion к созданию красивых и функциональных веб-приложений. 
          Мой подход сочетает в себе внимание к деталям дизайна с глубоким пониманием технических аспектов разработки.
        </Text>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Title>Навыки</Title>
        <SkillsList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </Section>
    </AboutContainer>
  );
};

export default About; 