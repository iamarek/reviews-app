"use client"

import { useReviewsContext } from "@/context/feedback.context"

const ReviewsList = () => {
  const { state } = useReviewsContext()

  return (
    <div className="grid md:grid-cols-2 gap-3 my-3 max-w-3xl">
      {state.map((review) => (
        <div key={review.email} className="p-3 border rounded-md">
          <span className="text-sm text-gray-400">{review.email}</span>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default ReviewsList
