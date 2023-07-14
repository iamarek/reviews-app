import { PropsWithChildren, ReactElement } from "react"

import { cn } from "@/lib/utils"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({
  className,
  children,
  ...props
}: PropsWithChildren<LabelProps>): ReactElement => (
  <label className={cn(className, "text-sm text-gray-500")} {...props}>
    {children}
  </label>
)

export default Label
