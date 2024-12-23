import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {[...Array(6)].map((_, index) => (
          <ListItem button key={index}>
            <ListItemIcon>   
            </ListItemIcon>
            <ListItemText primary="List item" />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
export default Sidebar;