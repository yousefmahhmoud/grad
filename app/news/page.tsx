"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { NewsCard } from "@/components/news-card"
import { newsData } from "@/lib/news-data"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-75 transition">
            <ArrowRight className="w-5 h-5" />
            <span className="text-primary font-bold text-2xl">حس</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">الأخبار</h1>
        </div>
      </header>

      {/* News Grid */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </main>
    </div>
  )
}
