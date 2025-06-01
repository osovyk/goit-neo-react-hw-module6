import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { ListItem, ListItemText, Button, Tooltip } from '@mui/material';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <ListItem
      className="fade"
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
          <Tooltip title={contact.name} placement="top-start">
            <span
              style={{
                display: 'block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '300px',
              }}
            >
              {contact.name}
            </span>
          </Tooltip>
        }
        secondary={
          <Tooltip title={contact.number} placement="top-start">
            <span
              style={{
                display: 'block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '300px',
              }}
            >
              {contact.number}
            </span>
          </Tooltip>
        }
      />
    </ListItem>
  );
}
