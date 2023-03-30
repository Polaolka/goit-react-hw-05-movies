import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from '../Loader/Loader';
import { Header, UlNav } from './Layout.styled';
import { BiCameraMovie } from 'react-icons/bi';
import { FiHome } from 'react-icons/fi';


const StyledLink = styled(NavLink)`
  font-size: 24px;
  color: #320e0e;
  text-decoration: none;
  &.active {
    color: #ffffff;
    
  }
`;

const Layout = () => {
  return (
    <>
      <Header>
        <UlNav>
          <li>
            <StyledLink to="/">
              <FiHome/>  Home
              </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">
            <BiCameraMovie/>  Movies
              </StyledLink>
          </li>
        </UlNav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
