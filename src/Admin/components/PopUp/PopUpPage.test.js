import React from "react";

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import PopUp from ".";
describe("PopUp tests", () => {
    it('should test PopUp content', () => {
        let popUp = new PopUp();

        const { getByText, debug, getByRole, getByPlaceholderText } = render(<PopUp
                                                onChangeInput={()=>{}} 
                                                onClickNewWashingMachine={()=>{}}
                                            />);

        getByText('Washing Machine ID');
        const inputField = getByPlaceholderText('Enter Id')
        const addButtonField = getByRole('button', { name: 'ADD' });
        const washingMachineNumber = "123"
        fireEvent.change(inputField, { target: { value: washingMachineNumber } })
        fireEvent.click(addButtonField);


    })

});
