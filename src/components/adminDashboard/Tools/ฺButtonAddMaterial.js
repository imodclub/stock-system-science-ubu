import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import AddMaterialForm from './AddMaterialForm';
import { width } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import TextareaAutosize from '@mui/material/TextareaAutosize'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const theme = createTheme();

export default function ButtonAddMaterial() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <CssBaseline />
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  รายการวัสดุ
                </Typography>
                <Button
                  autoFocus
                  size="large"
                  color="inherit"
                  onClick={handleClose}
                >
                  บันทึกข้อมูล
                </Button>
              </Toolbar>
            </AppBar>

            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                รายละเอียดวัสดุ
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="false"
                      name="MaterialName"
                      required
                      fullWidth
                      id="MaterialName"
                      label="ชื่อวัสดุ"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="MaterialCategories"
                      label="หมวดหมู่วัสดุ"
                      name="MaterialCategories"
                      autoComplete="false"
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      required
                      fullWidth
                      id="MaterialBrand"
                      label="ยี่ห้อ"
                      name="MaterialBrand"
                      autoComplete="false"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      name="MaterialPrice"
                      label="ราคาซื้อ"
                      id="MaterialPrice"
                      autoComplete="false"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      aria-label="รายละเอียด"
                      placeholder="รายละเอียด / บันทึก"
                      multiline
                      fullWidth
                      row={5}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Dialog>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                <CardActions>
                  <AddIcon color="primary" fontSize="large" />
                  <Button size="large" onClick={handleClickOpen}>
                    เพิ่มรายการวัสดุ
                  </Button>
                </CardActions>
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
