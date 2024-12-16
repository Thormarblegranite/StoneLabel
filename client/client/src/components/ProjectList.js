import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const ProjectList = ({ projects }) => {
  return (
    <Paper elevation={2} sx={{ mt: 2 }}>
      <List>
        {projects.map(p => (
          <ListItem button component={Link} to={`/project/${p._id}`} key={p._id}>
            <ListItemText primary={`${p.customerName} - ${p.jobName}`} secondary={p.address} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ProjectList;