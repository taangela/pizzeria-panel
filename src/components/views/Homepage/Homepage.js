import React from 'react';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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

const waiter = [
  {status: 'free', number: 20},
  {status: 'thinking', number: 3},
  {status: 'ordered', number: 2},
  {status: 'prepared', number: 2},
  {status: 'delivered', number: 5},
  {status: 'paid', number: 3},
];

const kitchen = [
  {status: 'done', number: 20},
  {status: 'during preparation', number: 2},
  {status: 'readty to go', number: 5},
  {status: 'ordered', number: 2},
];

const orders =[
  {place: 'lokal', number: 10},
  {place: 'with delivery', number: 15},
];



const Homepage = () => (
  <Container >
    <Grid container spacing={5} className={styles.component}>
      <Grid item xs={4}>
        <Paper>
          <h3>Orders</h3>
          <Table>
            <TableHead> 
              <TableRow>
                <TableCell>Place</TableCell>
                <TableCell>Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map(row => (
                <TableRow key={row.place}>
                  <TableCell component="th" scope="row">
                    {row.place}
                  </TableCell>
                  <TableCell>
                    {row.number}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> 
          </Table>    
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <h3>Waiter</h3>
          <Table>
            <TableHead> 
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {waiter.map(row => (
                <TableRow key={row.status}>
                  <TableCell component="th" scope="row">
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.number}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> 
          </Table>    
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <h3>Kitchen</h3>
          <Table>
            <TableHead> 
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {kitchen.map(row => (
                <TableRow key={row.status}>
                  <TableCell component="th" scope="row">
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.number}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> 
          </Table>    
        </Paper>
      </Grid>
    </Grid>
    <Paper className={styles.component}>
      <h3>Bookings</h3>
      <Table>
        <TableHead> 
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
      <h3>Events</h3>
      <Table>
        <TableHead>
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
  </Container>
);

export default Homepage;