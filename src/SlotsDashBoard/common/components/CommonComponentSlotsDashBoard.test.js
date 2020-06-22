import React from 'react'

import { ColorLabels } from '.'

describe('ColorLabels tests', () => {
   it('should test ColorLabels', () => {
      const props = {
         colorValue: 'white',
         children: 'Hello'
      }
      expect(ColorLabels(props)).toBeDefined
   })
})
