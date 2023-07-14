import { FormSettingsType } from "./types"

export const FORM_SETTINGS: FormSettingsType = {
  fields: [
    {
      id: "name",
      name: "Name",
      validation: { required: true },
      errorMessage: "This field is required",
      type: "text",
      className: "md:col-start-1 md:row-start-1",
    },
    {
      id: "email",
      name: "Email",
      validation: { required: true, pattern: /^\S+@\S+$/i },
      errorMessage: "Correct email is required",
      type: "text",
      className: "md:col-start-1 md:row-start-2",
    },
    {
      id: "rating",
      name: "Rating",
      validation: { required: true },
      errorMessage: "This field is required",
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
      className: "md:col-start-1 md:row-start-3",
    },
    {
      id: "comment",
      name: "Comment",
      validation: { required: true },
      errorMessage: "This field is required",
      type: "textarea",
      className: "md:col-start-2 md:row-span-3 flex flex-col",
    },
  ],
}
