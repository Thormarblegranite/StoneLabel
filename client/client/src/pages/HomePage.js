
import React, { useEffect, useState } from 'react';
import API from '../api';
import { Typography, Grid, Paper } from '@mui/material';
import ProjectList from '../components/ProjectList';

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get('/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="fade-in">
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Grid container spacing={3}>
        {projects.length > 0 ? (
          <Grid item xs={12}>
            <ProjectList projects={projects} />
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Typography>No projects found. Create a new project!</Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default HomePage;
