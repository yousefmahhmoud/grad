"use client"

import type { News } from "@/lib/news-data"

interface TextViewProps {
  news: News
}

export function TextView({ news }: TextViewProps) {
  return (
    <div className="space-y-6 text-justify">
      {/* Header Info */}
      <div className="border-r-4 border-primary pr-4 py-2">
        <p className="text-sm text-muted-foreground mb-2">المصدر: {news.source}</p>
        <p className="text-sm text-muted-foreground">{news.date}</p>
      </div>

      {/* Subtitle */}
      <p className="text-xl text-accent font-semibold italic">{news.shortDescription}</p>

      {/* Main Content */}
      <div className="space-y-4 text-lg leading-relaxed text-foreground">
        {news.content.split("\n").map((paragraph, i) => (
          <p key={i} className={i === 0 ? "font-semibold text-primary" : ""}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-border pt-4 mt-8">
        <p className="text-sm text-muted-foreground text-center">تم النشر بواسطة منصة حس الإعلامية</p>
      </div>
    </div>
  )
}

export default TextView
