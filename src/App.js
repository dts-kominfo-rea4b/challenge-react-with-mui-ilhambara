import { useState } from "react";
import { Container, Grid } from "@mui/material";

// Uncomment untuk memuat daftar kontak
import "./App.css";
import contactsJSON from "./data/contacts.json";

import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">
      <Header />

      <Container maxWidth="lg" sx={{ marginY: "3rem" }}>
        <Grid container rowSpacing={1} columnSpacing={4}>
          <Grid item xs={6}>
            <h2>List contacts</h2>
            {contacts.map((contact) => (
              <Contact key={contact.email} data={contact} />
            ))}
          </Grid>

          <Grid item xs={6}>
            <h2>Add new contact</h2>
            <ContactForm addContact={addContact} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
