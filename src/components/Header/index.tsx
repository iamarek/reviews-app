import { ReactElement } from "react"

import Container from "@/components/Container"

const Header = (): ReactElement => (
  <header>
    <Container className="flex py-4 border-b border-gray-200">
      <span className="font-bold">feedback.io</span>
    </Container>
  </header>
)

export default Header
