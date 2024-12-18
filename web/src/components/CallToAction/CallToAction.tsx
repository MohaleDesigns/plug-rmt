import { Button, Flex, Text } from '@mantine/core'

import Image from '../../assets/image.png'
import Company from '../../assets/image10.png'

const CallToAction = () => {
  const str =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas venenatis enim vitae tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris volutpat,'

  const slicedStr = str.slice(0, 100)

  return (
    <div className="my-48">
      <div className="grid grid-cols-2 gap-5 rounded-md bg-secondary p-5">
        <div className="py-20 pl-5">
          <h4 className="mb-10 font-Gabarito text-2xl font-bold text-white md:text-4xl">
            Why businesses and people trust Plug
          </h4>

          <div className="mb-5 flex flex-col gap-4">
            <Flex direction={'column'}>
              <h4 className="font-Gabarito text-xl font-semibold text-white ">
                Promotes Economic Growth
              </h4>
              <Text className="font-Montserrat text-xs font-normal text-white md:text-sm">
                By connecting job seekers with employment opportunities, Plug
                contributes to overall economic development, fostering a robust
                job market.
              </Text>
            </Flex>

            <Flex direction={'column'}>
              <h4 className="font-Gabarito text-xl font-semibold text-white ">
                Diverse Talent Pool
              </h4>
              <Text className="font-Montserrat text-xs font-normal text-white md:text-sm">
                Plug offers access to a diverse range of candidates, enabling
                businesses to tap into various skill sets and perspectives,
                which enhances creativity and innovation.
              </Text>
            </Flex>

            <Flex direction={'column'}>
              <h4 className="font-Gabarito text-xl font-semibold text-white ">
                Dedicated Support Services
              </h4>
              <Text className="font-Montserrat text-xs font-normal text-white md:text-sm">
                Plug provides comprehensive support to both employers and job
                seekers, ensuring a smooth onboarding process and addressing any
                concerns promptly.
              </Text>
            </Flex>
          </div>

          <Button variant="outline" color="white" radius="md">
            Browse Jobs
          </Button>
        </div>

        <div className="relative flex items-center">
          <div className="absolute -top-20 left-14 flex flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/40 md:max-w-[200px]">
            <div>
              <img
                alt="profile"
                src={Image}
                className="h-full w-full object-cover"
              />
            </div>

            <Flex direction={'column'} px={'sm'}>
              <Text className="font-Montserrat text-base font-bold text-paragraph">
                Tokoloho Mohale
              </Text>
              <Text className="mb-2 font-Montserrat text-xs font-normal text-paragraph">
                Johannesburg, Soweto
              </Text>
              <Text className="font-Montserrat text-xs font-normal text-paragraph">
                {`${slicedStr}...`}
              </Text>
            </Flex>

            <Flex
              p={'sm'}
              align={'center'}
              className="items-center gap-2 border-t border-secondary/20"
            >
              <Text className="font-Montserrat text-[10px] font-medium text-paragraph">
                Previously Worked at SABC for 3 years as Radio Presenter
              </Text>
              <img
                alt="company"
                src={Company}
                className="h-full w-full object-cover"
              />
            </Flex>
          </div>

          <div className="absolute right-10 top-10 flex flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/40 md:max-w-[200px]">
            <div>
              <img
                alt="profile"
                src={Image}
                className="h-full w-full object-cover"
              />
            </div>

            <Flex direction={'column'} px={'sm'}>
              <Text className="font-Montserrat text-base font-bold text-paragraph">
                Tokoloho Mohale
              </Text>
              <Text className="mb-2 font-Montserrat text-xs font-normal text-paragraph">
                Johannesburg, Soweto
              </Text>
              <Text className="font-Montserrat text-xs font-normal text-paragraph">
                {`${slicedStr}...`}
              </Text>
            </Flex>

            <Flex
              p={'sm'}
              align={'center'}
              className="items-center gap-2 border-t border-secondary/20"
            >
              <Text className="font-Montserrat text-[10px] font-medium text-paragraph">
                Previously Worked at SABC for 3 years as Radio Presenter
              </Text>
              <img
                alt="company"
                src={Company}
                className="h-full w-full object-cover"
              />
            </Flex>
          </div>

          <div className="absolute -bottom-24 right-40 flex flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/40 md:max-w-[200px]">
            <div>
              <img
                alt="profile"
                src={Image}
                className="h-full w-full object-cover"
              />
            </div>

            <Flex direction={'column'} px={'sm'}>
              <Text className="font-Montserrat text-base font-bold text-paragraph">
                Tokoloho Mohale
              </Text>
              <Text className="mb-2 font-Montserrat text-xs font-normal text-paragraph">
                Johannesburg, Soweto
              </Text>
              <Text className="font-Montserrat text-xs font-normal text-paragraph">
                {`${slicedStr}...`}
              </Text>
            </Flex>

            <Flex
              p={'sm'}
              align={'center'}
              className="items-center gap-2 border-t border-secondary/20"
            >
              <Text className="font-Montserrat text-[10px] font-medium text-paragraph">
                Previously Worked at SABC for 3 years as Radio Presenter
              </Text>
              <img
                alt="company"
                src={Company}
                className="h-full w-full object-cover"
              />
            </Flex>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
