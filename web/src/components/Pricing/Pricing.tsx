import { Button } from '@mantine/core'
import { GiCheckMark } from 'react-icons/gi'

import Heading from '../Heading/Heading'

const Pricing = () => {
  return (
    <div className="my-40">
      <Heading
        big
        align="center"
        heading="Get the Best freelancer In South Africa"
        subHeading="Simply post your job opportunity and watch as qualified freelancers reach out to you. It’s that easy!"
      />

      <div className="relative flex items-center justify-between gap-5 rounded-md border-2 border-secondary/20 bg-secondary/5 p-5">
        <div className="p-5">
          <Heading heading="Why businesses & Individuals trust Plug" />

          <ul>
            <li className="mb-1 flex items-center gap-2 font-Montserrat text-lg font-medium text-heading">
              <GiCheckMark color="#333C4D" size={'16px'} />
              No middle man
            </li>
            <li className="mb-1 flex items-center gap-2 font-Montserrat text-lg font-medium text-heading">
              <GiCheckMark color="#333C4D" size={'16px'} />
              Promotes economic growth
            </li>
            <li className="mb-1 flex items-center gap-2 font-Montserrat text-lg font-medium text-heading">
              <GiCheckMark color="#333C4D" size={'16px'} />
              Diverse talent pool
            </li>
            <li className="mb-1 flex items-center gap-2 font-Montserrat text-lg font-medium text-heading">
              <GiCheckMark color="#333C4D" size={'16px'} />
              Dedicated Support Services
            </li>
            <li className="mb-1 flex items-center gap-2 font-Montserrat text-lg font-medium text-heading">
              <GiCheckMark color="#333C4D" size={'16px'} />
              Free to use
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col gap-5 rounded-s-lg border-b-2 border-l-2 border-t-2 border-secondary/20 bg-secondary/5 p-5 md:max-w-[250px]">
            <div>
              <h4 className="text-center font-Gabarito text-xl font-bold text-heading md:text-xl">
                Two Weeks Deal
              </h4>
              <h4 className="text-center font-Gabarito text-2xl font-bold text-heading md:text-5xl">
                R90
                <span className="ml-[2px] text-xs font-normal md:text-base">
                  for 2 week
                </span>
              </h4>
            </div>

            <ul>
              <li className="text-center font-Montserrat text-base font-medium text-heading">
                Medium reach
              </li>
              <li className="text-center font-Montserrat text-base font-medium text-heading">
                Aapproximately 40% of freelancers
              </li>
            </ul>

            <Button variant="filled" color="green" radius="md" fullWidth>
              Post Job
            </Button>
          </div>

          <div className="flex flex-col gap-10 rounded-lg border-2 border-secondary/20 bg-secondary/5 p-5 shadow-2xl shadow-black/20 md:max-w-[250px]">
            <div>
              <h4 className="text-center font-Gabarito text-xl font-bold text-heading md:text-xl">
                Month Deal
              </h4>
              <h4 className="text-center font-Gabarito text-2xl font-bold text-heading md:text-5xl">
                R150
                <span className="ml-[2px] text-xs font-normal md:text-base">
                  for a month
                </span>
              </h4>
            </div>

            <ul>
              <li className="text-center font-Montserrat text-base font-medium text-heading">
                Medium reach
              </li>
              <li className="text-center font-Montserrat text-base font-medium text-heading">
                Aapproximately 40% of freelancers
              </li>
            </ul>

            <Button variant="filled" color="green" radius="md" fullWidth>
              Post Job
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
