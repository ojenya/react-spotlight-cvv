import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 0;
`;

const ContactSection = styled(motion.section)`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #f8fafc;
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
`;

const ContactItem = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #f8fafc;
  margin-right: 10px;
`;

const Value = styled.span`
  color: #cbd5e1;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  color: #60a5fa;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #93c5fd;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Контакты</Title>
        <ContactInfo>
          <ContactItem>
            <Label>Email:</Label>
            <Value>your.email@example.com</Value>
          </ContactItem>
          <ContactItem>
            <Label>Телефон:</Label>
            <Value>+7 (XXX) XXX-XX-XX</Value>
          </ContactItem>
          <ContactItem>
            <Label>Локация:</Label>
            <Value>Москва, Россия</Value>
          </ContactItem>
        </ContactInfo>
        <SocialLinks>
          <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </SocialLink>
          <SocialLink href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
            Telegram
          </SocialLink>
        </SocialLinks>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact; 