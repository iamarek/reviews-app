import { ReviewType } from "@/types"

export type ReviewForChart = {
  name: string
  total: number
}

// This function takes an array of reviews and returns an array of objects that can be
// then used to render a chart in Results page. The chart will show how many reviews
// were given for each rating.
const transformReviewsForChart = (reviews: ReviewType[]): ReviewForChart[] => {
  const transformedArray = reviews.reduce((acc, rating) => {
    const index = parseInt(rating.rating) - 1
    acc[index] = acc[index] ? acc[index] + 1 : 1
    return acc
  }, [] as number[])

  const result = transformedArray.map((count, index) => {
    return { name: `${index + 1}`, total: count }
  })

  // Add missing ratings with a total of 0
  for (let i = 0; i < 5; i++) {
    if (!result[i]) {
      result[i] = { name: `${i + 1}`, total: 0 }
    }
  }

  return result
}

export default transformReviewsForChart
