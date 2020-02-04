import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import Kitchen from './components/views/Kitchen/Kitchen';
import OrderNew from './components/views/Waiter/OrderNew';
import OrderID from './components/views/Waiter/OrderID';
import BookingNew from './components/views/Tables/BookingNew';
import BookingID from './components/views/Tables/BookingID';
import EventsNew from './components/views/Tables/EventsNew';
import EventsID from './components/views/Tables/EventsID';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';



const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    //secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
                <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrderNew}/>
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={OrderID}/>
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={BookingNew}/>
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookingID}/>
                <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={EventsNew}/>
                <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={EventsID}/>
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}
export default App;