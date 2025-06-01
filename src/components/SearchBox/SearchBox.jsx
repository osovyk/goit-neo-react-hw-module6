import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { TextField, Box } from '@mui/material';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Search contacts"
        value={filter}
        onChange={handleChange}
      />
    </Box>
  );
}
