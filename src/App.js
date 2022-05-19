import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Routers from './router';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
