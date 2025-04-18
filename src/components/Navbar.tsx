import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  padding: 20px 0;
  margin-bottom: 40px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  a {
    color: #e2e8f0;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #94a3b8;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/">Главная</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">Обо мне</Link>
        </NavItem>
        <NavItem>
          <Link to="/projects">Проекты</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Контакты</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar; 