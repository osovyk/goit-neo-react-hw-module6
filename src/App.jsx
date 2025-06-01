import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { Container, Typography } from '@mui/material';

export default function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" color="primary" gutterBottom>
        Phonebook
      </Typography>
      <ContactForm />
      <Typography variant="h4" align="center" sx={{ mt: 4 }}>
        Contacts
      </Typography>
      <SearchBox />
      <ContactList />
    </Container>
  );
}
