import React, { useState } from 'react';
import { Avatar, Typography, Box, Menu, MenuItem } from '@mui/material';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

interface UserProfileProps {
  username: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/login');
  };

  const initials = username ? username.split(' ').map(name => name[0]).join('') : '';

  return (
    <Box display="flex" alignItems="center">
      <Avatar onClick={handleClick} style={{ cursor: 'pointer' }}>{initials}</Avatar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem disabled>{username}</MenuItem>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </Menu>
    </Box>
  );
};

export default UserProfile;