import React from 'react'
import {List as MUIList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core';
import {Delete,MoneyOff} from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
    const classes=useStyles();
    
    const transactions=[
        {id:1,type:"Income",category:"Salary",amount:50,date:"wed Dec 16"},
        {id:2,type:"Expense",category:"Pets",amount:50,date:"wed Dec 16"},
        {id:3,type:"Income",category:"Business",amount:150,date:"wed Dec 16"}

    ];
  return (
    <MUIList dense={false} className={classes.list}>
        {transactions.map((transition) => (
            <Slide direction='down' in mountOnEnter unmountOnExit key={transition.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transition.type==='Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transition.category} secondary={`$${transition.amount} - ${transition.date}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick="">
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
    </MUIList>
  )
}

export default List
