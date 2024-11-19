// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const LandingPage = () => {
  return (
    <>
      <Metadata title="Landing" description="Landing page" />

      <h1 className="text-heading font-Gabarito text-4xl font-bold">
        LandingPage
      </h1>
      <h1 className="text-heading font-Montserrat text-4xl font-bold">
        LandingPage
      </h1>
      <p>
        Find me in <code>./web/src/pages/LandingPage/LandingPage.tsx</code>
      </p>
      {/*
          My default route is named `landing`, link to me with:
          `<Link to={routes.landing()}>Landing</Link>`
      */}
    </>
  )
}

export default LandingPage
