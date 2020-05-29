import React from "react";
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import '../../../styles/tailwind.css';
import FailureView from './FailureView';

export default {
    component: FailureView,
    title: 'Common/FailureView1'
};


export const defaultView = () => <FailureView/>;


export const withOnRetryAndErrorMessageProp = () => (
    <FailureView
        onRetryClick={action('retry clicked')}
        errorMessage={'Failed'}
    />
);


export const knobs = () => (
    <FailureView
        onRetryClick={action('retry clicked')}
        errorMessage={text('errorMessage','failed message')}
    />
);


knobs.story = {
    decorators: [withKnobs]
};
