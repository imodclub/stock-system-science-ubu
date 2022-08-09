import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import AddMaterialForm from './AddMaterialForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import {
  Grid,
  TextField,
  Box,
  Paper,
  CssBaseline,
  Container,
  Alert,
  AlertTitle,
} from '@mui/material';



import ProgressLoading from './ProgessLoading';


//database and service
import { db } from '../../../services/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'


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
  const [validatorForm, setValidatorForm] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  const [nameBrand, setNameBrand] = React.useState(null);
  const [nameMaterial, setNameMaterial] = React.useState(null);
  const [categories, setCategories] = React.useState(null);
  const [unit, setUnit] = React.useState(null)
  const [priceOfUnit, setPriceOfUnit] = React.useState(null);
  const [detail, setDetail] = React.useState(null);

  //hook data
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //validate form
  React.useEffect(() => {
    const validate =
      nameBrand?.trim().length > 0 &&
      nameMaterial?.trim().length > 0 &&
      unit?.trim().length > 0 &&
      priceOfUnit?.trim().length > 0 &&
      categories?.trim().length;

    if (validate) {
      setValidatorForm(true);
      setLoading(true);
    } else {
      setValidatorForm(false);
    }
  }, [nameBrand, nameMaterial,unit, priceOfUnit, categories]);

  const PrepareData = async () => {
    try {
      if (loading === true) {
        setErrors(null);
        setData(null);
        const docRef = await addDoc(collection(db, 'Material'), {
          NameMaterial: nameMaterial,
          NameBrand: nameBrand,
          Categories: categories,
          Unit:unit,
          PriceOfUnit: priceOfUnit,
          Detail: detail,
        });
      }
    } catch (error) {
      setErrors(error.toString());
    } finally {
      setLoading(false);
      setAlert(true);
      setTimeout(() => {
        <ProgressLoading />;
        window.location.reload();
      }, 3000);
    }
  };

  //บันทึกข้อมูล
  const handleSave = async (e) => {
    e.preventDefault();
    PrepareData();
  };
  //จบ บันทึกข้อมูล

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
                  disabled={!validatorForm}
                  onClick={handleSave}
                >
                  บันทึกข้อมูล
                </Button>
              </Toolbar>
            </AppBar>

            {/**Alert */}
            {alert ? (
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">
                  <AlertTitle>[บันทึกข้อมูลสำเร็จ]</AlertTitle>
                  บันทึกข้อมูลผู้ใช้งานสำเร็จ —{' '}
                  <strong>กำลังกลับสู่หน้าแรก</strong>
                </Alert>
              </Stack>
            ) : (
              <></>
            )}
            {/**Close Alert */}

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
                      name="NameMaterial"
                      required
                      fullWidth
                      id="NameMaterial"
                      label="ชื่อวัสดุ"
                      onChange={(event) => setNameMaterial(event.target.value)}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="Categories"
                      label="หมวดหมู่วัสดุ"
                      name="Categories"
                      onChange={(even) => setCategories(even.target.value)}
                      autoComplete="false"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      id="NameBrand"
                      label="ยี่ห้อ"
                      name="NameBrand"
                      onChange={(event) => setNameBrand(event.target.value)}
                      autoComplete="false"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      id="Unit"
                      label="หน่วย"
                      name="Unit"
                      onChange={(event) => setUnit(event.target.value)}
                      autoComplete="false"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      name="PriceOfUnit"
                      label="ราคาซื้อต่อหน่วย"
                      id="PriceOfUnit"
                      onChange={(event) => setPriceOfUnit(event.target.value)}
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
                      onChange={(event) => setDetail(event.target.value)}
                      name="Detail"
                      id="Detail"
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
