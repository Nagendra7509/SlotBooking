import React from 'react'
import ReactDOM from 'react-dom'

jest.mock('react-dom')

require('./index')

describe('index test', () => {
   it('Renders the application', () => {
      expect(ReactDOM.render).toBeCalled()
   })
})
