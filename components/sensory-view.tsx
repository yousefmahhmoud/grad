"use client"

import type { News } from "@/lib/news-data"

interface SensoryViewProps {
  news: News
}

export function SensoryView({ news }: SensoryViewProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4">
        {news.videos.map((video, i) => (
          <div
            key={i}
            className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20"
          >
            <video
              src={video || "/placeholder.mp4"}
              controls
              className="w-full h-full object-cover"
              poster={news.images[i] || "/placeholder.svg"}
            >
              متصفحك لا يدعم عرض الفيديو
            </video>
          </div>
        ))}
      </div>

      {/* Emotional Description */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-primary text-right">الحس والشعور</h3>
        <div className="space-y-3">
          {news.sensoryDescriptions.map((desc, i) => (
            <p
              key={i}
              className="text-lg text-foreground leading-relaxed p-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg border-r-4 border-primary text-right"
            >
              {desc}
            </p>
          ))}
        </div>
      </div>

      {/* Emotional Indicators */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 text-right">
        <h4 className="font-bold text-primary mb-4">المشاعر المرتبطة</h4>
        <div className="flex flex-wrap gap-3 justify-end">
          {news.emotions.map((emotion, i) => (
            <span key={i} className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
              {emotion}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SensoryView
