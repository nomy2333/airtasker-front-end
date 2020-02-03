import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: '#98c5e9',
                    boxShadow: 'none',
                    padding: '10px 0',
                    borderBottom: '2px solid #00285e'

                }}
            >
                <Toolbar style={{ display: 'flex' }}>
                    <div style={{ flexGrow: 1 }}>
                        airtasker_logo
                    </div>
                    <Link to="/sign_up">
                        <Button color="inherit">sign up</Button>
                    </Link>
                    <Link to="/log_in">
                        <Button color="inherit">log in</Button>
                    </Link>

                </Toolbar>

            </AppBar>
        );
    }
}
export default Header;