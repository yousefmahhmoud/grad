"use client"

import { X } from "lucide-react"
import type { News } from "@/lib/news-data"
import AudioPlayer from "./audio-player"
import TextView from "./text-view"
import SensoryView from "./sensory-view"

interface ModalNewsViewerProps {
  isOpen: boolean
  onClose: () => void
  news: News[]
  mode: "audio" | "text" | "sensory"
}

export default function ModalNewsViewer({ isOpen, onClose, news, mode }: ModalNewsViewerProps) {
  if (!isOpen) return null

  const modeConfig = {
    audio: {
      title: "الأخبار السمعية",
      icon: "🎧",
    },
    text: {
      title: "الأخبار الكتابية",
      icon: "📰",
    },
    sensory: {
      title: "الأخبار الحسية",
      icon: "✨",
    },
  }

  const config = modeConfig[mode]

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in-up">
      <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{config.icon}</span>
            <h2 className="text-2xl font-bold text-foreground">{config.title}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-accent/20 rounded-lg transition-colors hover:scale-110">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {news.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">لا توجد أخبار في هذا الوضع</p>
            </div>
          ) : (
            news.map((item, index) => (
              <div
                key={item.id}
                className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{item.date}</p>

                {mode === "audio" && <AudioPlayer news={item} />}
                {mode === "text" && <TextView news={item} />}
                {mode === "sensory" && <SensoryView news={item} />}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
