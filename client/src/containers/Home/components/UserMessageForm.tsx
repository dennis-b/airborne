import {
    Button,
    Card,
    CardActions,
    CardContent,
    createStyles,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Theme,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Root } from 'common';
import { useApi } from 'hooks';
import React, { useState } from 'react';
import Loader from 'react-loader-spinner'

import { Margin, Padding } from '../../../app/styled';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: { minWidth: 345, },
        formControl: {
            margin: 2,
            minWidth: 120,
            width: '100%',
        },
    }),
);

enum Commands {
    FLY = 'fly',
    LAND = 'land'
}

export function UserMessageForm() {
    const classes = useStyles();

    const [cmd, setCmd] = useState(Commands.FLY)
    const handleChange = ({ target: { value } }) => setCmd(value);
    const { loading, doPost } = useApi();
    const onSend = () => {
        doPost({ url: '/events', config: { payload: { cmd } } })
    }

    return (
        <Root>
            <Padding p={3}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Send Event
                        </Typography>
                        <Margin mt={1} mb={1} />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Select Command</InputLabel>
                            <Select
                                value={cmd}
                                onChange={handleChange}
                                inputProps={{ name: 'cmd' }}
                            >
                                <MenuItem value={Commands.FLY}>{Commands.FLY}</MenuItem>
                                <MenuItem value={Commands.LAND}>{Commands.LAND}</MenuItem>
                            </Select>
                        </FormControl>
                    </CardContent>
                    <Margin mt={1} mb={1} />
                    <CardActions>
                        {
                            loading
                                ?
                                <Margin ml={2}>
                                    <Loader
                                        type="Bars"
                                        color="green"
                                        height="20"
                                        width="20"
                                    />
                                </Margin>

                                :
                                <Button size="small" color="primary" onClick={onSend}>
                                    Send
                                </Button>
                        }
                    </CardActions>
                </Card>
            </Padding>

        </Root>


    )

}
