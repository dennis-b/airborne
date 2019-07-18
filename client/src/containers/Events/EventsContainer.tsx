import { Root } from 'common';
import { EventsComponent } from 'containers/Events/EventsComponent';
import React, { useEffect, useState } from 'react';
import { subscribeToData } from '../../events/events';

const EventsContainer = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        subscribeToData((err, res) => {
            console.log(res)
            setData(res.data)
        });
    }, [])

    return (
        <Root>
            <EventsComponent data={data} />
        </Root>
    )
};

export default EventsContainer;
