import React from "react";

/*global jest*/
/*global expect*/
import { create } from 'apisauce'
import { render, fireEvent } from '@testing-library/react'
import { networkCallWithApisauce, getUserDisplayableErrorMessage, getFormattedError } from "./APIUtils";


describe("APIUtils tests", () => {

    let api;
    beforeEach(() => {
        api = create({
            baseURL: "trg"
        })
    });


    it('should test networkCallWithApisauce content', async() => {
                    expect(networkCallWithApisauce(api)).toBeDefined;
    
                });
    
                // it('should test getUserDisplayableErrorMessage content', async() => {
                //     expect(getUserDisplayableErrorMessage()).toBeDefined;

                // });

                // it('should test getFormattedError content', async() => {
                //     expect(getFormattedError()).toBeDefined;
                // });

});
