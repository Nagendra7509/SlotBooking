import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import App from './App'

describe('APP Route Tests', () => {
   it('should test navigating', () => {
      const { container, getByText } = render(<App />)

      fireEvent.click(getByText('Page 1'))
      expect(container.innerHTML).toMatch('Page 1')
   })
})
