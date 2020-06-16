import React from "react";

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import Settings from ".";
describe("Settings tests", () => {
    it('should test Settings content', () => {

        const { getByText } = render(<Settings/>);
        getByText('ISSUES');
        getByText('WASHING MACHINE');
        getByText('SETTINGS');
        getByText('Profile');
        getByText('Settings');


    })

});
