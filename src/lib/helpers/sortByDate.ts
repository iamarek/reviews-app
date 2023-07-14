import { ReviewType } from "@/types"

const sortByDate = (items: ReviewType[]) => {
  return items.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export default sortByDate
