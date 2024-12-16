import React from 'react';
import { Typography, Box } from '@mui/material';

const ProjectDetail = ({ project }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5">{project.customerName} - {project.jobName}</Typography>
      <Typography variant="body1">{project.address}</Typography>
      {project.logo && <img src={project.logo} alt="Logo" style={{ height: '50px', marginTop: '10px' }} />}
    </Box>
  );
};

export default ProjectDetail;