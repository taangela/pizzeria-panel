import React from 'react';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';

import styles from './Homepage.module.scss';

const bookings = [
  {id: 1, hour: '12:00', table: 1, peopleNumber: 1, starter: ['bread, ', 'water']},
  {id: 2, hour: '12:30', table: 2, peopleNumber: 2, starter: ['water']},
  {id: 3, hour: '14:00', table: 2, peopleNumber: 3, starter: ['-']},
];

const events = [
  {id: 1, hour: '15:00', table: 1, peopleNumber: 4, starter: ['-']},
  {id: 2, hour: '17:30', table: 2, peopleNumber: 5, starter: ['bread, ', 'water']},
  {id: 3, hour: '20:00', table: 3, peopleNumber: 6, starter: ['water']},
];

const Homepage = () => (
  <div>
    <Paper className={styles.component}>
      <Table>
        <TableHead> 
          <Typography variant="subtilte1">Bookings</Typography>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>People Number</TableCell>
            <TableCell>Starter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map(row => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.peopleNumber}
              </TableCell>
              <TableCell>
                {row.starter}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <Typography variant="subtilte2">Events</Typography>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>People Number</TableCell>
            <TableCell>Starter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map(row => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.peopleNumber}
              </TableCell>
              <TableCell>
                {row.starter}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Homepage;