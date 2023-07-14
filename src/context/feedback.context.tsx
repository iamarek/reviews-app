"use client"

import { ReviewType } from "@/types"
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react"

type StateType = ReviewType[]

enum Types {
  ADD_REVIEW = "ADD_REVIEW",
  ADD_REVIEWS = "ADD_REVIEWS",
}

type ActionType =
  | {
      type: Types.ADD_REVIEW
      payload: ReviewType
    }
  | {
      type: Types.ADD_REVIEWS
      payload: ReviewType[]
    }

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case Types.ADD_REVIEW:
      return [...state, action.payload]
    case Types.ADD_REVIEWS:
      return action.payload
    default:
      return state
  }
}

export const ReviewsContext = createContext<{
  state: StateType
  dispatch: Dispatch<ActionType>
}>({ state: [], dispatch: () => null })

export const ReviewsContextProvider = ({
  children,
  initialState,
}: {
  children: ReactNode
  initialState: ReviewType[]
}) => {
  const [state, dispatch] = useReducer(reducer, initialState as never)

  return (
    <ReviewsContext.Provider value={{ state, dispatch }}>
      {children}
    </ReviewsContext.Provider>
  )
}

export const useReviewsContext = () => {
  const { state, dispatch } = useContext(ReviewsContext)

  // Use to add a single review to the current set of reviews
  const addReview = (review: ReviewType) => {
    dispatch({ type: Types.ADD_REVIEW, payload: review })
  }

  // Use to replace current reviews with new set of reviews
  const addReviews = (reviews: ReviewType[]) => {
    dispatch({ type: Types.ADD_REVIEWS, payload: reviews })
  }

  return {
    state,
    addReview,
    addReviews,
  }
}
