import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.array,
    updateStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(orderId, status){
    const { updateStatus} = this.props;
    switch (status) {
      case 'free':
        return (
          <>
            <Button className={styles.button} onClick={() => updateStatus(orderId, 'thinking')} color="secondary" variant="contained">thinking</Button>
            <Button className={styles.button} onClick={() => updateStatus(orderId, 'ordered')} color="secondary" variant="contained">new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button className={styles.button} onClick={() => updateStatus(orderId, 'ordered')} color="secondary" variant="contained">new order</Button>
        );
      case 'ordered':
        return (
          <Button className={styles.button} onClick={() => updateStatus(orderId, 'prepared')} color="secondary" variant="contained">prepared</Button>
        );
      case 'prepared':
        return (
          <Button className={styles.button} onClick={() => updateStatus(orderId, 'delivered')} color="secondary" variant="contained">delivered</Button>
        );
      case 'delivered':
        return (
          <Button className={styles.button} onClick={() => updateStatus(orderId, 'paid')} color="secondary" variant="contained">paid</Button>
        );
      case 'paid':
        return (
          <Button className={styles.button} onClick={() => updateStatus(orderId, 'free')} variant="contained" color="secondary">free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (    
                      <Button className={styles.button} vriant="contained" color="primary"component ={Link} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>{row.order}</Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.id, row.status)}
                  </TableCell>
                </TableRow>
              ))}
              <Button className={styles.icon} variant="contained" color="primary" component ={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;