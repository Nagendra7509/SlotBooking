import React from "react";
import { withKnobs, text } from '@storybook/addon-knobs';
import { color, array } from '@storybook/addon-knobs';
import '../../../styles/tailwind.css';
import { NoDataViewContainer, NoDataViewText } from './styledComponents';
import NoDataView from ".";

export default {


    component: NoDataView,
    title: 'Common/NoDataView'


};


const label = 'Styles';
const defaultValue = '#3300ff';

// const tailwindStyleLabel = "Styles";
// const defaultValueofTailwindStyle = ['border border-solid border-black'];
// const separator = ",";


export const defaultView = () => <NoDataViewContainer 
                                    style={{backgroundColor:color(label, defaultValue)}}
                                    >
                                    <NoDataViewText>{text("message","No data found!")}</NoDataViewText>
                                </NoDataViewContainer>;

defaultView.story = {

    decorators: [withKnobs]
};




//className={array(tailwindStyleLabel,defaultValueofTailwindStyle,separator)}>
