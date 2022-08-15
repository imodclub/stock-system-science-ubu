import { Container,Box } from '@mui/material'
import React, { Fragment } from 'react'
import Copyright from './copyright/Copyright'

function Footer() {
  return (
      <Fragment>
    <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
          >
              <Container maxWidth='sm'>
                  <Copyright />
              </Container>
      </Box>
</Fragment>
    )
}

export default Footer