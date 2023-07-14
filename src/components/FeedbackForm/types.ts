import { ReviewType } from "@/types"

type FieldBaseType = {
  id: keyof ReviewType
  name: string
  validation: Record<string, unknown>
  errorMessage: string
  // className is used to pass classes that will be applied to the form fields in the grid
  className: string
}

type FieldTextType = FieldBaseType & {
  type: "text" | "textarea"
  options?: never
}

type FieldRadioType = FieldBaseType & {
  type: "radio"
  options: string[]
}

export type FormSettingsType = {
  fields: Array<FieldTextType | FieldRadioType>
}
