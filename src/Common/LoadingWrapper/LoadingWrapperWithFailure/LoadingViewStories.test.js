import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'

import { defaultView } from './LoadingView.stories'

describe('FailureView Stories tests', () => {
   it('should test defaultView ', () => {
      expect(defaultView()).toBeDefined
   })
})
