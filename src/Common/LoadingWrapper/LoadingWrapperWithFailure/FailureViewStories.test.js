import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react';

import { defaultView, withOnRetryAndErrorMessageProp, knobs } from "./FailureView.stories";

describe('FailureView Stories tests', () => {

    it('should test defaultView ', () => {


        expect(defaultView()).toBeDefined;
        expect(withOnRetryAndErrorMessageProp()).toBeDefined;
        expect(knobs()).toBeDefined;


    });

})
