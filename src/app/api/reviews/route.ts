import { NextResponse } from "next/server"

import { REVIEWS } from "./data"

// Return a list of reviews stored in the data file.
// This is temporary solution to present the way front end layer can fetch data from the API.
export async function GET() {
  return NextResponse.json({ data: REVIEWS })
}

export async function POST(request: Request) {
  const res = await request.json()
  return NextResponse.json({ res })
}
