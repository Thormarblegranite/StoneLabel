import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const widths = ["4x6", "4x4", "4x8", "4x1", "4x0.75"];

const StickerForm = ({ onSubmit }) => {
  const [partName, setPartName] = useState('');
  const [widthPreset, setWidthPreset] = useState('4x6');
  const [file, setFile] = useState(null);
  const [isDXF, setIsDXF] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ partName, widthPreset, file, isDXF });
    setPartName('');
    setFile(null);
    setIsDXF(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
      <TextField label="Part Name" value={partName} onChange={e => setPartName(e.target.value)} required fullWidth margin="normal" />
      <FormControl fullWidth margin="normal">
        <InputLabel>Width Preset</InputLabel>
        <Select value={widthPreset} onChange={e => setWidthPreset(e.target.value)}>
          {widths.map(w => <MenuItem key={w} value={w}>{w}</MenuItem>)}
        </Select>
      </FormControl>
      <Box sx={{ mt: 2 }}>
        <input type="file" onChange={e => {
          setFile(e.target.files[0]);
          const name = e.target.files[0]?.name?.toLowerCase() || "";
          setIsDXF(name.endsWith('.dxf'));
        }} />
      </Box>
      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Add Sticker</Button>
    </Box>
  );
};

export default StickerForm;
