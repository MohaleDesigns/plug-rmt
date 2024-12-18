import { render } from '@redwoodjs/testing/web'

import CallToAction from './CallToAction'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CallToAction', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CallToAction />)
    }).not.toThrow()
  })
})
