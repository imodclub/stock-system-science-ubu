import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const MainLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}));

const PageMain = (props) => {
  const { children } = props;

  return (
    <>
      <MainLayout>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
            minHeight: 'auto',
          }}
        >
          {children}
        </Box>
      </MainLayout>
    </>
  );
};


export default PageMain;