import { render } from '@redwoodjs/testing/web'

import SmallHeading from './SmallHeading'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SmallHeading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SmallHeading />)
    }).not.toThrow()
  })
})
