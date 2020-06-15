import React from "react";

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import ActiveAndInactiveState from ".";
describe("ActiveAndInactiveState tests", () => {
    it('should test ActiveAndInactiveState content', () => {

        const { getByText } = render(<ActiveAndInactiveState/>);

        getByText('ACTIVE');
        getByText('INACTIVE');
    })

});
