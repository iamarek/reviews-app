import Link from "next/link"

import Chart from "@/components/Chart"
import Container from "@/components/Container"
import Heading from "@/components/Heading"
import ReviewsList from "@/components/ReviewsList"
import { PATHS } from "@/constants"

const Results = () => {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <Heading tag="h1">Results</Heading>
        <Link href={PATHS.PAGES.HOME}>Go back</Link>
      </div>
      <Chart />
      <Heading tag="h2">Latest comments</Heading>
      <ReviewsList />
    </Container>
  )
}

export default Results
