import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />

        </div>

    )
};
export default Layout;