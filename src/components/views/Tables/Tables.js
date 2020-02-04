import React from 'react';
import { Link } from 'react-router-dom';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styles from './Tables.module.scss';



const intervals = [
  {hour: '12:00', table1: 'booked', table2: null, table3: null, table4: null},
  {hour: '12:30', table1: 'booked', table2: 'event', table3: null, table4: null},
  {hour: '13:00', table1: 'booked', table2: 'event', table3: 'booked', table4: null},
  {hour: '13:30', table1: null, table2: 'event', table3: 'booked', table4: 'booked'},
  {hour: '14:00', table1: null, table2: null, table3:'booked', table4: 'booked'},
  {hour: '14:30', table1: 'event', table2: 'booked', table3: null, table4: 'event'},
  {hour: '15:00', table1: 'event', table2: 'booked', table3: null, table4: 'event'},

];

const renderActions1 = table1 => {
  switch (table1) {
    case 'booked':
      return (
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/id`}>booked</Link>
      );
    case 'event':
      return (
        <Link to={`${process.env.PUBLIC_URL}/tables/events/id`}>event</Link>
      );
    default:
      return null;
  }
};

const renderActions2 = table2 => {
  switch (table2) {
    case 'booked':
      return (
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/id`}>booked</Link>
      );
    case 'event':
      return (
        <Link to={`${process.env.PUBLIC_URL}/tables/events/id`}>event</Link>
      );
    default:
      return null;
  }
};

const renderActions3 = table3 => {
  switch (table3) {
    case 'booked':
      return ( 
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/id`}>booked</Link>
      );
    case 'event':
      return (
        <Link to={`${process.env.PUBLIC_URL}/tables/events/id`}>event</Link>
      );
    default:
      return null;
  }
};

const renderActions4 = table4 => {
  switch (table4) {
    case 'booked':
      return (
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/id`}>booked</Link>
      );
    case 'event':
      return (
        <Link to={`${process.env.PUBLIC_URL}/tables/events/id`}>event</Link>
      );
    default:
      return null;
  }
};
  
const Tables = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <Paper className={styles.component}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          className={styles.margin}
          value={selectedDate}
          onChange={handleDateChange}
          animateYearScrolling
        />
        <TimePicker
          className={styles.margin}
          clearable
          ampm={false}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
      <TableHead>
        <TableRow>
          <TableCell>Hour/Table</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell>Table 4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {intervals.map(row => (
          <TableRow key={row.hour}>
            <TableCell component="th" scope="row">
              {row.hour}
            </TableCell>
            <TableCell>
              {renderActions1(row.table1)}
            </TableCell>
            <TableCell>
              {renderActions2(row.table2)}
            </TableCell>
            <TableCell>
              {renderActions3(row.table3)}
            </TableCell>
            <TableCell>
              {renderActions4(row.table4)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <Button className={styles.margin} variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>new booking</Button>
      <Button className={styles.margin}  variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>New event</Button>
    </Paper>

  );
};

export default Tables;