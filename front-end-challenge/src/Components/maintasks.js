import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

import { fireAct } from '../firebase';
import { firebaseLooper, checkArray } from '../hoc/minifun';
import AdLayout from '../hoc/adlayout';

import CircularProgress from '@material-ui/core/CircularProgress';

class MainTasks extends Component {
    state = {
        isloading: true,
        activities: []
    }
    componentDidMount() {
        fireAct.once('value').then((snapshot) => {
            const act = firebaseLooper(snapshot, () => {
                this.setState({
                    isloading: false,
                    activities: checkArray(act)
                });
            });
        });
    }

    render() {
        return (
            <AdLayout>

                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>USER</TableCell>
                                    <TableCell>EVENT</TableCell>
                                    <TableCell>TASK</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.activities ?
                                    this.state.activities.map((activity, i) => (
                                        <TableRow key={i}>
                                            <TableCell>
                                                <Link to={`/users/${activity.sulg}`} >
                                                    {activity.abbreviated_name}
                                                </Link>

                                            </TableCell>
                                            <TableCell>
                                                {activity.action}
                                            </TableCell>
                                            <TableCell>
                                                <Link to={`/tasks/${activity.tslug}`} >
                                                    {activity.tname}
                                                </Link>

                                            </TableCell>

                                        </TableRow>

                                    ))
                                    :
                                    null}
                            </TableBody>

                        </Table>
                    </Paper>


                </div>
                <div className="admin_progress">
                    {this.state.isloading ?
                        <CircularProgress thickness={7} style={{ color: "#98c5e9" }} />
                        :

                        null
                    }

                </div>


            </AdLayout>

        )



    }
}
export default MainTasks;