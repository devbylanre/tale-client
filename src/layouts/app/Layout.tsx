import React from 'react';
import SideBar from './components/SideBar';
import useUser from '../../hooks/useUser';
import Error from './components/Error';
import Progress from './components/Progress';
import Section from '../../components/Section/Section';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const { isLoading, error } = useUser();

  switch (true) {
    case isLoading:
      return <Progress />;
    case error !== undefined:
      return <Error />;
    default:
      return (
        <React.Fragment>
          <SideBar />
          <Section
            as={'main'}
            mx={'auto'}
            style={{
              width: 'calc(100% - var(--sidebar-panel))',
              marginLeft: 'var(--sidebar-panel)',
            }}
          >
            <Outlet />
          </Section>
        </React.Fragment>
      );
  }
};

export default AppLayout;
