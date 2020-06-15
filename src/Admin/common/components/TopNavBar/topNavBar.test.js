import React from "react";

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import TopNavBar from ".";
describe("TopNavBar tests", () => {
    it('should test TopNavBar content', () => {

        const { getByText } = render(<TopNavBar/>);

        getByText('Profile');
    })

});
