import { Card, CardContent, createStyles, Theme, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import { Root } from 'common';
import React from 'react';
import { Padding } from '../../app/styled';


const useStyles = makeStyles((theme: Theme) => createStyles({ card: { minWidth: 345, } }));


export function EventsComponent({ data }) {

    const classes = useStyles();

    return (
        <Root>
            <Padding p={3}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Data From Server
                        </Typography>

                        <Typography gutterBottom variant="body1">
                            {data}
                        </Typography>

                    </CardContent>
                </Card>
            </Padding>
        </Root>
    )

}
