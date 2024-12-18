import { Avatar, Flex, Text } from '@mantine/core'

import Heading from '../Heading/Heading'

const Testimonials = () => {
  const testimonials = [
    {
      image: 'N/A',
      name: 'John Doe',
      role: 'Carpenter',
      feedback:
        'Medium reach Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit',
    },
    {
      image: 'N/A',
      name: 'Jane Mol',
      role: 'Carpenter',
      feedback:
        'Medium reach Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit',
    },
    {
      image: 'N/A',
      name: 'Alex Lump',
      role: 'Carpenter',
      feedback:
        'Medium reach Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit',
    },
    {
      image: 'N/A',
      name: 'Sarah Condor',
      role: 'Carpenter',
      feedback:
        'Medium reach Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit',
    },
    {
      image: 'N/A',
      name: 'Mike Johnson',
      role: 'Carpenter',
      feedback:
        'Medium reach Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit',
    },
    {
      image: 'N/A',
      name: 'Tom Smith',
      role: 'Carpenter',
      feedback:
        'Medium reach Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit, Medium reach Lorem ipsum dolor sit amet.',
    },
    {
      image: 'N/A',
      name: 'Kate Kok',
      role: 'Carpenter',
      feedback:
        'Medium reach Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit',
    },
  ]

  return (
    <div className="mb-40 p-3 sm:p-0">
      <Heading
        big
        align="center"
        heading="Clients feedback about plug"
        subHeading="Proof that you're in good hands! Here's what they have to say about our language workbooks."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex w-full flex-col justify-between rounded-md border-2 border-secondary/20 bg-secondary/5 p-5 shadow-2xl shadow-black/15"
          >
            <Text className="font-Montserrat text-sm font-normal text-paragraph">
              {t.feedback}
            </Text>

            <Flex className="mt-3 items-center gap-3 border-t border-secondary/20 pt-3">
              <Avatar name={t.name} color="initials" />
              <div>
                <Text className="font-Montserrat text-sm font-bold text-paragraph">
                  {t.name}
                </Text>
                <Text className="font-Montserrat text-xs font-light text-paragraph">
                  {t.role}
                </Text>
              </div>
            </Flex>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
