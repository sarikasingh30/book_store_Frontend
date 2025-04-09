import {CssBaseline} from '@mui/material';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import MainRoutes from './Pages/MainRoutes';
import { ThemeContextProvider } from './ThemeContext';

function App() {
return (
  <ThemeContextProvider>
      <CssBaseline/>
        <Navbar/>
      <MainRoutes/>
      <Footer/>
    </ThemeContextProvider>
)
}

export default App;
