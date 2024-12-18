import { Flex, Text, TextInput } from '@mantine/core'
import { CiSearch } from 'react-icons/ci'
import { TiWeatherPartlySunny } from 'react-icons/ti'

import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between gap-5 p-3 pb-5">
        <Logo />

        <Flex align={'center'} gap={'sm'}>
          <TextInput
            rightSectionPointerEvents="none"
            rightSection={<CiSearch />}
            placeholder="Search..."
          />
          <Flex align={'center'} gap={'5px'}>
            <TiWeatherPartlySunny size={'20px'} />
            <Text
              size="sm"
              className="border-l border-secondary/20 pl-2 font-Montserrat"
            >
              Tuesday, November 26, 2024
            </Text>
          </Flex>
          {/* <Text>Tuesday, November 26, 2024</Text> */}
        </Flex>
      </div>
      <div className="">
        <ul className="flex items-center justify-between font-Montserrat text-sm">
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
          <li className="border-y border-secondary/20 p-3 hover:cursor-pointer hover:border-b-2 hover:border-b-red-400 hover:text-red-400">
            Category
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
