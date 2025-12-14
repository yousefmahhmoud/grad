"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AudioPlayer } from "./audio-player"
import { TextView } from "./text-view"
import { SensoryView } from "./sensory-view"
import { Film, Newspaper, Headphones, Calendar, X } from "lucide-react"
import type { News } from "@/lib/news-data"

type ViewMode = "audio" | "text" | "sensory"

interface NewsCardProps {
  news: News
}

export function NewsCard({ news }: NewsCardProps) {
  const [activeMode, setActiveMode] = useState<ViewMode | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModeClick = (mode: ViewMode, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveMode(mode)
    setIsModalOpen(true)
  }

  const closeModal = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setIsModalOpen(false)
    setActiveMode(null)
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 h-80 flex flex-col">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 flex-shrink-0">
          <h2 className="text-2xl font-bold text-white leading-relaxed text-right mb-3 line-clamp-2">
            {news.title}
          </h2>
          <div className="flex items-center justify-end gap-2 text-white/90">
            <span className="text-sm">{news.date}</span>
            <Calendar size={16} />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="p-6 bg-gray-50 flex-1 flex items-center justify-center">
          <div className="flex gap-3 justify-center flex-wrap">
            <Button
              onClick={(e) => handleModeClick("audio", e)}
              type="button"
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-md font-medium bg-orange-500 text-white hover:bg-orange-600"
            >
              <Headphones size={18} />
              <span>صوتي</span>
            </Button>

            <Button
              onClick={(e) => handleModeClick("text", e)}
              type="button"
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-md font-medium bg-blue-500 text-white hover:bg-blue-600"
            >
              <Newspaper size={18} />
              <span>نصي</span>
            </Button>

            <Button
              onClick={(e) => handleModeClick("sensory", e)}
              type="button"
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-md font-medium bg-purple-500 text-white hover:bg-purple-600"
            >
              <Film size={18} />
              <span>مرئي</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          style={{ position: 'fixed' }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={(e) => closeModal(e)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in z-10">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 flex justify-between items-start">
              <button
                onClick={(e) => closeModal(e)}
                type="button"
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <div className="text-right flex-1 mr-4">
                <h2 className="text-2xl font-bold text-white leading-relaxed mb-2">
                  {news.title}
                </h2>
                <div className="flex items-center justify-end gap-2 text-white/90">
                  <span className="text-sm">{news.date}</span>
                  <Calendar size={16} />
                </div>
              </div>
            </div>

            {/* Mode Indicator */}
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                {activeMode === "audio" && (
                  <>
                    <Headphones size={20} className="text-orange-500" />
                    <span className="font-medium">الوضع الصوتي</span>
                  </>
                )}
                {activeMode === "text" && (
                  <>
                    <Newspaper size={20} className="text-blue-500" />
                    <span className="font-medium">الوضع النصي</span>
                  </>
                )}
                {activeMode === "sensory" && (
                  <>
                    <Film size={20} className="text-purple-500" />
                    <span className="font-medium">الوضع المرئي</span>
                  </>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              {activeMode === "audio" && <AudioPlayer news={news} />}
              {activeMode === "text" && <TextView news={news} />}
              {activeMode === "sensory" && <SensoryView news={news} />}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        body.modal-open {
          overflow: hidden;
        }
      `}</style>
    </>
  )
}