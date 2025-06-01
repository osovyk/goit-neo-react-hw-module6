import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { ListItem, ListItemText, Button, Typography } from '@mui/material';
import { motion as MotionDiv } from 'framer-motion';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <ListItem
        secondaryAction={
          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        }
        sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, mb: 2 }}
      >
        <ListItemText
          primary={
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '300px',
              }}
            >
              {contact.name}
            </Typography>
          }
          secondary={
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '300px',
              }}
            >
              {contact.number}
            </Typography>
          }
        />
      </ListItem>
    </MotionDiv>
  );
}
