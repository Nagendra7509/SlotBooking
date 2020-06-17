import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react';

import FailureView from "./FailureView";

describe('FailureView tests', () => {

    it('should test FailureView ', () => {

        const { getByText } = render(<FailureView errorMessage={"Something went wrong!"} onRetryClick={()=>{}}/>)

        getByText("Something went wrong!")
    });

})
