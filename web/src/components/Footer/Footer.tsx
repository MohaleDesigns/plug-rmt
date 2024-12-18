import { Text } from '@mantine/core'

import Logo from '../Logo/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const forClients = [
    'How to hire',
    'How to hire',
    'How to hire',
    'How to hire',
  ]

  return (
    <div className="bg-heading p-4 md:rounded-md md:p-10">
      <div className="mb-10 flex flex-col gap-5 md:mb-0 md:grid md:grid-cols-4 md:p-10 lg:grid-cols-6">
        <div className="col-span-2  hidden lg:block">
          <div className="-mt-5">
            <Logo />
          </div>

          <Text className="mt-4 font-Montserrat text-white">
            We empower South Africa’s Workforce by creating job opportunities
            for aspiring individuals across the nation.
          </Text>
        </div>

        <div>
          <h4 className="mb-3 font-Gabarito text-lg font-bold text-white">
            For Clients
          </h4>

          <ul>
            {forClients.map((c, i) => {
              return (
                <li
                  key={i}
                  className="font-Montserrat text-base text-white transition-all delay-75 duration-150 hover:cursor-pointer hover:text-primary"
                >
                  {c}
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-Gabarito text-lg font-bold text-white">
            For Clients
          </h4>

          <ul>
            {forClients.map((c, i) => {
              return (
                <li
                  key={i}
                  className="font-Montserrat text-base text-white transition-all delay-75 duration-150 hover:cursor-pointer hover:text-primary"
                >
                  {c}
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-Gabarito text-lg font-bold text-white">
            For Clients
          </h4>

          <ul>
            {forClients.map((c, i) => {
              return (
                <li
                  key={i}
                  className="font-Montserrat text-base text-white transition-all delay-75 duration-150 hover:cursor-pointer hover:text-primary"
                >
                  {c}
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-Gabarito text-lg font-bold text-white">
            For Clients
          </h4>

          <ul>
            {forClients.map((c, i) => {
              return (
                <li
                  key={i}
                  className="font-Montserrat text-base text-white transition-all delay-75 duration-150 hover:cursor-pointer hover:text-primary"
                >
                  {c}
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center border-t border-paragraph pt-4">
        <Text className="font-Montserrat text-xs text-white">
          © 2015 - {currentYear} Plug® Inc.
        </Text>
      </div>
    </div>
  )
}

export default Footer
