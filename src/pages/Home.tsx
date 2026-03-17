import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";

const HomeContainer = styled.div`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const StatusBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: var(--accent-hover);
  width: fit-content;
  letter-spacing: 0.02em;
`;

const StatusDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-top: 16px;
`;

const WaveEmoji = styled(motion.span)`
  display: inline-block;
  margin-left: 4px;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(16px, 2vw, 19px);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-top: 12px;
  font-weight: 400;
`;

const TechStack = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
`;

const TechBadge = styled.span`
  padding: 5px 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 13px;
  font-family: var(--font-mono);
  font-weight: 500;
  color: var(--text-secondary);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.12);
    color: var(--text-primary);
  }
`;

const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 6px;
  margin-top: 28px;
`;

const IconLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  color: var(--text-secondary);
  font-size: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    color: var(--text-primary);
    transform: translateY(-2px);
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const techs = [
  "React",
  "Vite",
  "TypeScript",
  "Electron",
  "Node.js",
  "Tauri",
  "Rust",
];

const socials = [
  { href: "https://github.com/ojenya", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/oseledets/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://t.me/oseledets", icon: FaTelegram, label: "Telegram" },
  { href: "mailto:jeenjenya@gmail.com", icon: FaEnvelope, label: "Email" },
];

const Home = () => {
  return (
    <HomeContainer>
      <motion.div variants={container} initial="hidden" animate="show">
        <StatusBadge variants={item}>
          <StatusDot />
          Открыт к предложениям
        </StatusBadge>

        <Title variants={item}>
          Привет, я Женя!
          <WaveEmoji
            animate={{
              rotate: [0, -14, 8, -14, 4, -10, 0],
              transformOrigin: "bottom",
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            {"\u{1F44B}"}
          </WaveEmoji>
        </Title>

        <Subtitle variants={item}>
          Создаю современные веб-приложения с фокусом на производительность,
          доступность и пользовательский опыт.
        </Subtitle>

        <TechStack variants={item}>
          {techs.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </TechStack>

        <SocialIcons variants={item}>
          {socials.map(({ href, icon: Icon, label }) => (
            <IconLink
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto") ? undefined : "noopener noreferrer"
              }
              aria-label={label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon />
            </IconLink>
          ))}
        </SocialIcons>
      </motion.div>
    </HomeContainer>
  );
};

export default Home;
