import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

const rows = [
  { name: 'Prabodhan Fitzgerald', location: 'Izaiahport', status: 'Active' },
  { name: 'Hiro Joyce', location: 'Strackeside', status: 'Active' },
  { name: 'Lloyd Jefferson', location: 'Texas City', status: 'Active' },
  { name: 'Ceiran Mayo', location: 'Lake Esmeralda', status: 'Active' },
  { name: 'Thumbiko James', location: 'East Paige', status: 'Suspended' },
];

const Content = () => {
  return (
    <Box sx={{ padding: 3, flexGrow: 1 }}>
      <Box display="flex" mb={2} alignItems="end">
        <Button variant="contained">ACTION</Button>
        <Button variant="contained" color="primary">NEW</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Account Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar sx={{ mr: 2 }}>{row.name[0]}</Avatar>
                    <Typography>{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>Cell</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={row.status === 'Active' ? 'success' : 'error'}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Content