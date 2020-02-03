import React from 'react';
import { link, Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
const AdminNav = () => {
    const links = [
        {
            title: 'Activity Feed',
            linkTo: '/activity_feed'
        },
        {
            title: 'Locations',
            linkTo: '/locations'
        },
        {
            title: 'Profiles',
            linkTo: '/profiles'
        },
        {
            title: 'Tasks',
            linkTo: '/tasks'
        }
    ]

    const style = {
        color: '#ffffff',
        fontWeight: '300',
        borderBottom: '1px solid #353535'
    }
    const renderItems = () => (
        links.map(link => (
            <Link to={link.linkTo} key={link.title}>
                <ListItem button style={style}>
                    {link.title}
                </ListItem>
            </Link>
        ))

    )

    return (
        <div >
            {renderItems()}

        </div>
    )
};
export default AdminNav;