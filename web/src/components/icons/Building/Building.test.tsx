import { render } from '@redwoodjs/testing/web'

import Building from './Building'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Building', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Building />)
    }).not.toThrow()
  })
})
