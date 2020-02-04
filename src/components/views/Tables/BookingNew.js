import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './Tables.module.scss';

const demoStarters = ['water', 'bread'];

const BookingNew = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [value, setValue] = React.useState({
    tableValue: '',
    guestValue: '',
  });
  const handleValueChange = name => event => {
    setValue({...value, [name]: event.target.value});
  };

  const [checked, setChecked] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleCheckboxChange = name => event => {
    setChecked({ ...checked, [name]: event.target.checked });
  };

  return (
    <Container>
      <Paper className={styles.component}>
        <h2>New booking</h2>
        <Grid container spacing={4}>
          <Grid item lg={2} sm={12} container direction="column" justify="space-between">
            <Grid item>
              <Paper>
                <Typography variant="h6">ID</Typography>
                <Divider />
                <Typography variant="h3">1</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper>
                <Typography variant="h6">Table</Typography>
                <Divider />
                <FormControl>
                  <InputLabel id="table"></InputLabel>
                  <Select
                    labelId="table"
                    id="table"
                    value={value.tableValue}
                    onChange={handleValueChange('tableValue')}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>

                  </Select>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item>
              <Paper>
                <Typography variant="h6">Guests</Typography>
                <Divider />
                <FormControl>
                  <InputLabel id="table"></InputLabel>
                  <Select
                    labelId="table"
                    id="table"
                    value={value.guestValue}
                    onChange={handleValueChange('guestValue')}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                  </Select>
                </FormControl>
              </Paper>
            </Grid>
          </Grid>
          <Grid item lg={5} container>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                className={styles.datePicker}
                value={selectedDate}
                onChange={handleDateChange}
                autoOk
                orientation="landscape"
                variant="static"
                openTo="date"
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item lg={5} container>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <TimePicker
                autoOk
                ampm={false}
                variant="static"
                orientation="landscape"
                openTo="minutes"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item>
            <Paper>
              <Typography variant="h6">Starters</Typography>
              <Divider />
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.checkedA}
                      onChange={handleCheckboxChange('checkedA')}
                      value={demoStarters[0]}
                      color="primary"
                    />
                  }
                  label={demoStarters[0]}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.checkedB}
                      onChange={handleCheckboxChange('checkedB')}
                      value={demoStarters[1]}
                      color="primary"
                    />
                  }
                  label={demoStarters[1]}
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default BookingNew;