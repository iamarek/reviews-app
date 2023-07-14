import { PropsWithChildren, ReactElement } from "react"

import { cn } from "@/lib/utils"

const H_STYLES = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
}

type HeadingProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5"
  className?: string
}

const Heading = ({
  children,
  tag,
  className,
}: PropsWithChildren<HeadingProps>): ReactElement => {
  const Component = tag

  let styles = H_STYLES[tag]

  return <Component className={cn(className, styles)}>{children}</Component>
}

export default Heading
