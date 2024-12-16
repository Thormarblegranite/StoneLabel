import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ProjectForm = ({ onSubmit }) => {
  const [customerName, setCustomerName] = useState('');
  const [jobName, setJobName] = useState('');
  const [address, setAddress] = useState('');
  const [logoFile, setLogoFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ customerName, jobName, address, logo: logoFile });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
      <TextField label="Customer Name" value={customerName} onChange={e => setCustomerName(e.target.value)} fullWidth margin="normal" required />
      <TextField label="Job Name" value={jobName} onChange={e => setJobName(e.target.value)} fullWidth margin="normal" required />
      <TextField label="Address" value={address} onChange={e => setAddress(e.target.value)} fullWidth margin="normal" required />
      <Box sx={{ mt: 2 }}>
        <input type="file" onChange={e => setLogoFile(e.target.files[0])} accept="image/*" />
      </Box>
      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Create Project</Button>
    </Box>
  );
};

export default ProjectForm;
