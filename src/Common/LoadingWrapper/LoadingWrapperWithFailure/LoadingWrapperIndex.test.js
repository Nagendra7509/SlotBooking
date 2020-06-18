import React from "react";
import { render } from "@testing-library/react";
import LoadingWrapperWithFailure from ".";
describe("LoadingWrapperWithFailure test", () => {

    it('should test LoadingWrapperWithFailure', () => {
        const { debug, getByText, getByRole } = render(<LoadingWrapperWithFailure 
                                    apiStatus={400} 
                                    renderSuccessUI={()=>{}}
                                    onRetryClick={()=>{}}
                                    apiError={null}
                                    />)
        // debug();
        getByText(`We're having some trouble completing your request. Please try again.`);
        getByRole('button', { name: "Retry" })

    })
})
