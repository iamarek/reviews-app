"use client"

import { Fragment, ReactElement } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

import { ReviewType } from "@/types"
import { cn } from "@/lib/utils"
import { useReviewsContext } from "@/context/feedback.context"
import { BASE_URL, PATHS } from "@/constants"
import Input from "@/components/Input"
import Textarea from "@/components/Textarea"
import Label from "@/components/Label"
import ErrorMessage from "@/components/ErrorMessage"
import { FORM_SETTINGS } from "./constants"

const FeedbackForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<ReviewType>()
  const { addReview } = useReviewsContext()
  const router = useRouter()

  // Submit form data to the API and redirect to the results page
  const onSubmit: SubmitHandler<ReviewType> = async (data) => {
    try {
      const res = await fetch(`${BASE_URL}${PATHS.API.REVIEWS}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error("Failed to submit data")
      }

      addReview(data)
      router.push(PATHS.PAGES.RESULTS)
    } catch (err) {
      setError("root.serverError", {
        type: "manual",
        message: "There was a problem with a request. Please try again later.",
      })
      console.error(err)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-4 gap-5 max-w-2xl my-8"
    >
      {FORM_SETTINGS.fields.map(
        ({ id, name, validation, errorMessage, type, options, className }) => (
          <fieldset key={id} className={cn(className, "")}>
            <Label htmlFor={id}>{name}</Label>
            {type === "text" && <Input id={id} {...register(id, validation)} />}
            {type === "textarea" && (
              <Textarea
                id={id}
                {...register(id, validation)}
                className="h-full"
              />
            )}
            {type === "radio" && options && (
              <div className="flex gap-3 mt-1 overflow-hidden">
                {Array.from(options, (e, i) => (
                  <Fragment key={i}>
                    <Input
                      type="radio"
                      id={`${id}${i + 1}`}
                      value={`${i + 1}`}
                      {...register(id, validation)}
                      className="sr-only w-auto"
                    />
                    <label
                      htmlFor={`${id}${i + 1}`}
                      className={cn(
                        "px-2 border rounded-md cursor-pointer border-input",
                        watch("rating") === `${i + 1}`
                          ? "bg-yellow-300 border-yellow-300 font-bold"
                          : ""
                      )}
                    >
                      {i + 1}
                    </label>
                  </Fragment>
                ))}
              </div>
            )}
            {errors[id] && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </fieldset>
        )
      )}
      <div className="md:col-span-2 md:row-start-4 flex flex-col items-start gap-4">
        <input
          type="submit"
          className="bg-yellow-300 hover:bg-yellow-300 hover:-translate-y-[2px] transition-all px-8 py-2 font-bold rounded-md cursor-pointer"
        />
        {errors.root?.serverError && (
          <ErrorMessage>{errors.root?.serverError.message}</ErrorMessage>
        )}
      </div>
    </form>
  )
}

export default FeedbackForm
