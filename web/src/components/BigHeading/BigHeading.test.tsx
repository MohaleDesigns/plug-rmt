import { render } from '@redwoodjs/testing/web'

import BigHeading from './BigHeading'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BigHeading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BigHeading />)
    }).not.toThrow()
  })
})
