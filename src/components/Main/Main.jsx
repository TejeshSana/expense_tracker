import React from 'react';
import { Card,CardHeader,CardContent,Typography,Grid,Divider } from '@material-ui/core';

import useStyles from './styles';

const Main = () => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardHeader title='Expense Tracker' />
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance $100</Typography>
            <Typography variant='subtitle1' style={{lineheight:'1.5rem', marginTop:'20px'}}>
                {/*InfoCard */}
                Try saying : Add income for $100 in category Salary for Monday...
            </Typography>
            <Divider />
                {/*form*/}
        </CardContent>
        
    </Card>
  )
}

export default Main
