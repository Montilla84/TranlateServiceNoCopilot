import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, CircularProgress } from '@mui/material';

interface Location {
  'place name': string;
  'state': string;
}

const PostalZip: React.FC = () => {
  const [country, setCountry] = useState('us');
  const [postalCode, setPostalCode] = useState('');
  const [data, setData] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    fetch(`https://api.zippopotam.us/${country}/${postalCode}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data.places);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Postal Zip Information
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Country Code"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          style={{ marginRight: 10 }}
        />
        <TextField
          label="Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginLeft: 10 }}>
          Fetch Data
        </Button>
      </form>
      {loading && <CircularProgress />}
      {error && <Typography variant="h6" color="error">{error}</Typography>}
      <List>
        {data.map((location, index) => (
          <ListItem key={index}>
            <ListItemText primary={location['place name']} secondary={location.state} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PostalZip;
