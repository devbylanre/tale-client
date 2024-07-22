import React from 'react';
import SideBar from './components/SideBar';
import useUser from '../../hooks/useUser';
import Error from './components/Error';
import Progress from './components/Progress';

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
        </React.Fragment>
      );
  }
};

export default AppLayout;
