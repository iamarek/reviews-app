import { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

type ErrorProps = {
  className?: string
}

const ErrorMessage = ({
  className,
  children,
  ...props
}: PropsWithChildren<ErrorProps>) => (
  <span className={cn(className, "text-red-500 text-xs")} {...props}>
    {children}
  </span>
)

export default ErrorMessage
