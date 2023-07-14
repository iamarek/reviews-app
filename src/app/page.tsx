import { ReactElement } from "react"
import Heading from "@/components/Heading"
import Container from "@/components/Container"
import FeedbackForm from "@/components/FeedbackForm"

const Homepage = (): ReactElement => {
  return (
    <Container>
      <Heading tag="h1">Feedback form</Heading>
      <FeedbackForm />
    </Container>
  )
}

export default Homepage
