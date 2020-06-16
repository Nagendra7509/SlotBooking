import React from "react";

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import ProfilePage from ".";
describe("ProfilePage tests", () => {
    it('should test ProfilePage content', () => {

        const { getByText, debug, getByRole, queryByRole } = render(<ProfilePage/>);
        getByText('ISSUES');
        getByText('WASHING MACHINE');
        getByText('SETTINGS');
        getByText('Profile');
        getByRole('button', { name: 'LogOut' });
        // fireEvent.click(logOutButtonField);
        // expect(
        //     getByText('LogOut')
        // ).not.toBeDefined();


    })

});
