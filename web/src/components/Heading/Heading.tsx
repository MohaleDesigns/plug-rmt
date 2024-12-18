import { Text } from '@mantine/core'

interface Prop {
  heading: string
  subHeading?: string
  big?: boolean
  align?: string
}

const Heading = ({ heading, subHeading, big, align }: Prop) => {
  return (
    <div className="mb-10">
      <h4
        className={`${align === 'center' ? 'text-center ' : 'left-center '} font-Gabarito ${big ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'} font-bold text-heading `}
      >
        {heading}
      </h4>
      <Text
        className={`${align === 'center' ? 'text-center ' : 'left-center '} font-Montserrat ${big ? 'text-xs md:text-base' : ''}  font-normal text-paragraph`}
      >
        {subHeading}
      </Text>
    </div>
  )
}

export default Heading
