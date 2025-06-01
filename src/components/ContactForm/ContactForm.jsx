import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { Box, Button, TextField, Paper } from '@mui/material';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact(form.name.value, form.number.value));
    form.reset();
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: 'auto', my: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <TextField name="name" label="Name" variant="outlined" required />
        <TextField name="number" label="Number" variant="outlined" required />
        <Button type="submit" variant="contained" color="primary">
          Add Contact
        </Button>
      </Box>
    </Paper>
  );
}
