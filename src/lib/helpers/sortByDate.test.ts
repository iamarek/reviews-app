import { ReviewType } from "@/types"
import sortByDate from "./sortByDate"

describe("sortByDate", () => {
  it("sortByDate", () => {
    const inputData: ReviewType[] = [
      {
        name: "Test User",
        rating: "5",
        email: "test@example.com",
        comment: "test",
        date: new Date("2021-06-02").toISOString(),
      },
      {
        name: "Test User 2",
        rating: "4",
        email: "test2@example.com",
        comment: "test",
        date: new Date("2021-07-01").toISOString(),
      },
      {
        name: "Test User 2",
        rating: "4",
        email: "test2@example.com",
        comment: "test",
        date: new Date("2021-07-04").toISOString(),
      },
    ]

    const output: ReviewType[] = [
      {
        name: "Test User 2",
        rating: "4",
        email: "test2@example.com",
        comment: "test",
        date: new Date("2021-07-04").toISOString(),
      },
      {
        name: "Test User 2",
        rating: "4",
        email: "test2@example.com",
        comment: "test",
        date: new Date("2021-07-01").toISOString(),
      },
      {
        name: "Test User",
        rating: "5",
        email: "test@example.com",
        comment: "test",
        date: new Date("2021-06-02").toISOString(),
      },
    ]

    let input = sortByDate(inputData)

    expect(input).toEqual(output)
  })
})
