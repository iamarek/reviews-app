"use client"

import { useReviewsContext } from "@/context/feedback.context"

const ReviewsList = () => {
  const { state } = useReviewsContext()

  return (
    <div className="grid md:grid-cols-2 gap-3 my-3 max-w-3xl">
      {state.map((review) => (
        <div
          key={review.email}
          className="p-3 border rounded-md flex flex-col justify-between"
        >
          <div>
            <span className="text-sm text-gray-400">{review.email}</span>
            <p>{review.comment}</p>
          </div>
          <span className="text-xs text-gray-300 mt-3">
            {new Date(review.date).toLocaleString("en-GB")}
          </span>
        </div>
      ))}
    </div>
  )
}

export default ReviewsList
