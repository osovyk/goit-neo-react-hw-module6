import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { List, Paper, Typography } from '@mui/material';
import { AnimatePresence } from 'framer-motion';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (visibleContacts.length === 0) {
    return (
      <Typography align="center" color="textSecondary" sx={{ mt: 2 }}>
        No contacts found.
      </Typography>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 500, mx: 'auto', mt: 2 }}>
      <List>
        <AnimatePresence>
          {visibleContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </AnimatePresence>
      </List>
    </Paper>
  );
}
