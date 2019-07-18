import { UserMessageForm } from 'containers/Home/components';
import React from 'react';
import { Root } from './styled';


export const HomeComponent: any = ({ url, location }) => (
    <Root>
        <UserMessageForm />
    </Root>
);
