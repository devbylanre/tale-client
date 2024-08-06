import React from 'react';
import SideBar from './components/SideBar';
import useUser from '../../hooks/useUser';
import Error from './components/Error';
import Progress from './components/Progress';
import Section from '../../components/Section/Section';
import { Outlet } from 'react-router-dom';
import { GET_USER } from '../../apis/userApi';
import { useQuery } from '@apollo/client';
import User from '../../types/user';
import useAuth from '../../hooks/useAuth';

const AppLayout = () => {
  const { user, setUser } = useUser();
  const { isLoggedIn } = useAuth();

  const { loading, error } = useQuery<{ user: User.Type }>(GET_USER, {
    onCompleted: ({ user }) => setUser({ type: 'GET', payload: user }),
    onError: (error) => console.log({ error }),
  });

  switch (true) {
    case loading:
      return <Progress />;
    case !isLoggedIn:
      return <Error message={'You are logged out'} />;
    case error !== undefined:
      return <Error message={error && error.message} />;
    default:
      return (
        <React.Fragment>
          <SideBar />
          <Section
            as={'main'}
            mx={'auto'}
            style={{
              opacity: user ? 1 : 0,
              transition: 'opacity .3s ease-in .2s',
              marginLeft: 'var(--sidebar-panel)',
              width: 'calc(100% - var(--sidebar-panel))',
            }}
          >
            <Outlet />
          </Section>
        </React.Fragment>
      );
  }
};

export default AppLayout;
