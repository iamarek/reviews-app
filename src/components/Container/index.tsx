import { PropsWithChildren, ReactElement } from "react"

import { cn } from "@/lib/utils"

type ContainerProps = {
  className?: string
}

const Container = ({
  children,
  className,
  ...props
}: PropsWithChildren<ContainerProps>): ReactElement => (
  <div className={cn(className, "container mx-auto px-2")} {...props}>
    {children}
  </div>
)

export default Container
