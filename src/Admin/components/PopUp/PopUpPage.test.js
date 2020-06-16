import React from "react";

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import PopUp from ".";
describe("PopUp tests", () => {
    it('should test PopUp content', () => {
        let popUp = new PopUp();

        const { getByText, debug, getByRole } = render(<PopUp
                                                onChangeInput={()=>{}} 
                                                onClickNewWashingMachine={()=>{}}
                                            />);

        getByText('Washing Machine ID');
        getByRole('button', { name: 'ADD' });
        // fireEvent.click(addButtonField);
        // const mockFunction = jest.fn();
        // mockFunction.mockReturnValue(1);
        // popUp.onClickAddNewWashingMachine = mockFunction;
        // //console.log(new PopUp);
        // expect(popUp.onClickAddNewWashingMachine).toBeCalled();
    })

});
