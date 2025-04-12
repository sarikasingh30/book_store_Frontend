import {CssBaseline,Box} from '@mui/material';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import MainRoutes from './Pages/MainRoutes';

function App() {
return (
  <>
      <CssBaseline/>
        <Navbar/>
        <Box sx={{ pt: { xs: 7, sm: 8 } }}><MainRoutes/></Box>
      
      <Footer/>
      </>

)
}

export default App;
