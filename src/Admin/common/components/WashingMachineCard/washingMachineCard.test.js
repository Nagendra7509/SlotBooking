import React from "react";

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import WashingMachineCard from ".";
describe("WashingMachineCard tests", () => {
    it('should test WashingMachineCard content', () => {

        const washingMachineId = "01",
            washingMachineStatus = "ACTIVE";

        const { getByText } = render(<WashingMachineCard
                                washingMachineId={washingMachineId} 
                                washingMachineStatus={washingMachineStatus}
                                    />);
        getByText(`Washing Machine ID :${washingMachineId}`);

        getByText('Mark As Inactive');
    })

});
