import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Requests from ".";

describe('Requests test', () => {

    it('should test requests', () => {
        const { getByText } = render(<Requests/>);
        getByText('Requests Page');
    });

});
