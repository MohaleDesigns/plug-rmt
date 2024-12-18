import { Flex, Text } from '@mantine/core'

import Building from '../icons/Building/Building'
import Location from '../icons/Location/Location'
import Posts from '../icons/Posts/Posts'
import User from '../icons/User/User'

const Stats = () => {
  const stats = [
    {
      icon: <Location />,
      title: '9',
      subTitle: 'Provinces',
    },
    {
      icon: <Posts />,
      title: '64,214,851',
      subTitle: 'Jobs Posted',
    },
    {
      icon: <User />,
      title: 'Free',
      subTitle: 'Account',
    },
    {
      icon: <Building />,
      title: 'Trusted By',
      subTitle: 'Companies',
    },
    {
      icon: <Building />,
      title: 'Trusted By',
      subTitle: 'Companies',
    },
    {
      icon: <Building />,
      title: 'Trusted By',
      subTitle: 'Companies',
    },
    {
      icon: <Building />,
      title: 'Trusted By',
      subTitle: 'Companies',
    },
    {
      icon: <Building />,
      title: 'Trusted By',
      subTitle: 'Companies',
    },
  ]

  return (
    // <div className="h-screen w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#23486F] via-[#192532] to-[#10131C]"></div>
    <div className="flex items-center justify-between gap-5">
      {stats.map((s, i) => (
        <Flex
          key={i}
          className="flex flex-col items-center gap-3 rounded-md px-6 py-5 pt-3 shadow-2xl shadow-black/40 transition-all delay-75 duration-150 ease-in-out hover:cursor-pointer hover:bg-primary/20"
        >
          {s.icon}

          <div>
            <Text className="text-center font-Montserrat text-sm font-medium text-paragraph">
              {s.title}
            </Text>
            <Text className="text-center font-Montserrat text-sm font-medium text-paragraph">
              {s.subTitle}
            </Text>
          </div>
        </Flex>
      ))}
    </div>
  )
}

export default Stats
