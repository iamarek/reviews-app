import { ReactElement } from "react"
import Link from "next/link"

import { PATHS } from "@/constants"
import Container from "@/components/Container"

const Header = (): ReactElement => (
  <header>
    <Container className="flex justify-between items-center py-4 border-b border-gray-200">
      <Link href={PATHS.PAGES.HOME} className="font-bold">
        feedback.io
      </Link>
      <Link
        href={PATHS.PAGES.RESULTS}
        className="text-sm underline underline-offset-4 hover:underline-offset-2 transition-all"
      >
        Results
      </Link>
    </Container>
  </header>
)

export default Header
