import { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import { cn } from "@/lib/utils"
import { ReviewsContextProvider } from "@/context/feedback.context"
import { BASE_URL, PATHS } from "@/constants"
import { ReviewType } from "@/types"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Feedback Application",
  description: "Simple feedback application",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
}

// Fetch reviews from the API on server side and pass them to the context
// so that they are available to all components in the app.
async function getReviews(): Promise<ReviewType[]> {
  try {
    const res = await fetch(`${BASE_URL}${PATHS.API.REVIEWS}`)

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const { data } = await res.json()

    return data
  } catch (err) {
    console.error(err)
    return []
  }
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const reviews = await getReviews()

  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen")}>
        <ReviewsContextProvider initialState={reviews}>
          <Header />
          <main className="my-20">{children}</main>
        </ReviewsContextProvider>
      </body>
    </html>
  )
}
