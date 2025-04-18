import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 120px;
  margin-bottom: 20px;
  color: #f8fafc;
`;

const Subtitle = styled(motion.p)`
  font-size: 24px;
  color: #cbd5e1;
  margin-bottom: 30px;
`;

const BackButton = styled(motion(Link))`
  padding: 12px 24px;
  background-color: #1e293b;
  color: #f8fafc;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #334155;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Страница не найдена
      </Subtitle>
      <BackButton
        to="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        Вернуться на главную
      </BackButton>
    </NotFoundContainer>
  );
};

export default NotFound; 