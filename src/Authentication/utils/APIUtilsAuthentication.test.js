import React from 'react'

/*global jest*/
/*global expect*/
import { create } from 'apisauce'

import { render, fireEvent } from '@testing-library/react'
import {
   networkCallWithApisauce,
   getUserDisplayableErrorMessage
}
from './APIUtils'

describe('APIUtils tests', () => {
   let api, url, requestObject, type;


   it('should test networkCallWithApisauce content', async() => {
      api = create({
         baseURL: 'trg'
      })

      expect(networkCallWithApisauce(api)).toBeDefined
   })

   it('should test getUserDisplayableErrorMessage content', async() => {
      expect(getUserDisplayableErrorMessage()).toBeDefined
      expect(
         getUserDisplayableErrorMessage({ message: 'error' })
      ).toBe('Something went wrong please try again')
   })



   // it('should test getFormattedError content', async() => {
   //     expect(getFormattedError()).toBeDefined;
   // });
})
