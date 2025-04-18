import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(motion.h1)`
  font-size: 48px;
  margin-bottom: 20px;
  color: #f8fafc;
`;

const Subtitle = styled(motion.p)`
  font-size: 24px;
  color: #cbd5e1;
  max-width: 600px;
  line-height: 1.6;
`;

const TechStack = styled(motion.div)`
  margin-top: 30px;
  color: #94a3b8;
  font-size: 18px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Привет, я Frontend Разработчик
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Создаю современные веб-приложения с фокусом на производительность, 
        доступность и пользовательский опыт.
      </Subtitle>
      <TechStack
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        React • TypeScript • Next.js • Node.js
      </TechStack>
    </HomeContainer>
  );
};

export default Home; 