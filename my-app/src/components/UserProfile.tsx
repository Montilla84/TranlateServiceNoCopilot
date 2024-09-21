import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';

interface UserProfileProps {
  username: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username }) => {
  console.log('Username:', username); // Agregar console.log para depuración
  const initials = username ? username.split(' ').map(name => name[0]).join('') : '';

  return (
    <Box display="flex" alignItems="center">
      <Avatar>{initials}</Avatar>
      <Typography variant="h6" style={{ marginLeft: '8px' }}>
        {username}
      </Typography>
    </Box>
  );
};

export default UserProfile;