import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react';

import NoDataView from ".";

describe('NoDataView tests', () => {

    it('should test NoDataView ', () => {

        const { getByText } = render(<NoDataView/>)

        getByText("No data found!")
    });

})
