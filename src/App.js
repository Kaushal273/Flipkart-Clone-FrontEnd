
//components
import Header from './components/header/header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <DataProvider >
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Home />
            <DetailView />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
