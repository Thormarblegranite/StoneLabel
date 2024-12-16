
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateProjectPage from './pages/CreateProjectPage';
import ProjectPage from './pages/ProjectPage';
import PrintPage from './pages/PrintPage';
import { AppBar, Toolbar, Typography, Button, Container, ThemeProvider } from '@mui/material';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Stone Label
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/create">New Project</Button>
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateProjectPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/project/:id/print" element={<PrintPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
