import React from "react";

import AppFooter from '../../onepirate/modules/views/AppFooter';
import AppAppBar from '../../onepirate/modules/views/AppAppBar';
import Calendar from "@ericz1803/react-google-calendar";
import {Container,Paper} from "@material-ui/core";
import withRoot from "../../onepirate/modules/withRoot";
import makeStyles from "@material-ui/core/styles/makeStyles";

const calendar_key = "AIzaSyDR4rE1jSfgxGqLfcRMVOX_5Q0BRd8FFvA";
const calendar_id = '5k5ak8miiagrpmjbf7qd9u18k4@group.calendar.google.com';
let calendars = [
    {
        calendarId: '5k5ak8miiagrpmjbf7qd9u18k4@group.calendar.google.com',
    }
];

const useStyles = makeStyles({
    calendarStyle: {
        marginBottom: "100px"
    },
});

function Workshops() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppAppBar />
            <h1 style={{ 'text-align': 'center', 'font-size': '60px'}}>WORKSHOPS</h1>
            <Container maxWidth={'lg'} className={classes.calendarStyle}>
                <Paper elevation={3}>
                    <Calendar apiKey={calendar_key} calendars={calendars} showFooter={false}/>
                </Paper>
            </Container>
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(Workshops);