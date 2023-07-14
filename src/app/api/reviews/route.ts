import { NextResponse } from "next/server"

import { REVIEWS } from "./data"

// Return a list of reviews stored in the data file.
// This is temporary solution to present the way front end layer can fetch data from the API.
export async function GET() {
  return NextResponse.json({ data: REVIEWS })
}

// This mocks the POST request to the API. As a process of adding new row
// API would return a date of creation of the row.
export async function POST(request: Request) {
  const res = await request.json()

  return NextResponse.json({ ...res, date: new Date() })
}
