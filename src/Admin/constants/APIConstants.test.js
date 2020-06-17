import React from 'react'

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'

import { apiMethods } from './APIConstants'
describe('apiMethods tests', () => {
   it('should test apiMethods content', () => {
      expect(apiMethods).toBeDefined
   })
})
