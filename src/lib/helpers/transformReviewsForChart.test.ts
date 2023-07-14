import transformReviewsForChart from "./transformReviewsForChart"

describe("transformReviewsForChart", () => {
  it("Returns calculated values for chart", () => {
    const input = [
      {
        name: "Test User",
        rating: "5",
        email: "test@example.com",
        comment: "test",
      },
      {
        name: "Test User 2",
        rating: "4",
        email: "test2@example.com",
        comment: "test",
      },
      {
        name: "Test User 2",
        rating: "4",
        email: "test2@example.com",
        comment: "test",
      },
    ]

    const output = [
      {
        name: "1",
        total: 0,
      },
      {
        name: "2",
        total: 0,
      },
      {
        name: "3",
        total: 0,
      },
      {
        name: "4",
        total: 2,
      },
      {
        name: "5",
        total: 1,
      },
    ]

    expect(transformReviewsForChart(input)).toEqual(output)
  })

  it("Returns empty objects in array even if data not provided", () => {
    const output = [
      {
        name: "1",
        total: 0,
      },
      {
        name: "2",
        total: 0,
      },
      {
        name: "3",
        total: 0,
      },
      {
        name: "4",
        total: 0,
      },
      {
        name: "5",
        total: 0,
      },
    ]

    expect(transformReviewsForChart([])).toEqual(output)
  })
})
