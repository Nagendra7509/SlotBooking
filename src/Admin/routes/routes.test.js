import React from 'react'

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'

import { adminPageRoutes } from '.'
describe('adminPageRoutes tests', () => {
   it('should test apiMethods content', () => {
      expect(adminPageRoutes).toBeDefined
   })
})
