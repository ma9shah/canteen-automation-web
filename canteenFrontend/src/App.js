import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import AppBar from "./components/AppBar";
import HomePage from "./homepage/HomePage";
import OrdersPage from "./orderspage/OrdersPage";

import "./App.css";

function App() {
    return (
        <React.Fragment>
            <MuiThemeProvider theme={theme}>
                <Router>
                    <div className='App'>
                        <AppBar />
                        <Route exact path='/' component={HomePage} />
                        <Route path='/orders' component={OrdersPage} />
                    </div>
                </Router>
            </MuiThemeProvider>
        </React.Fragment>
    );
}

export default App;
