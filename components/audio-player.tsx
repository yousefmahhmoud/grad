"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Play, Pause, Volume2 } from "lucide-react"
import type { News } from "@/lib/news-data"

interface AudioPlayerProps {
  news: News
}

export function AudioPlayer({ news }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime
      const duration = audioRef.current.duration
      setProgress(duration > 0 ? (current / duration) * 100 : 0)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      audioRef.current.currentTime = percent * audioRef.current.duration
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-8 flex flex-col items-center justify-center animate-fade-in-up">
        <Volume2 className="w-16 h-16 text-primary mb-4 animate-pulse-soft" />
        <p className="text-lg text-muted-foreground text-center">استمع إلى الخبر بصوت واضح ومعبر</p>
      </div>

      {/* Audio Player */}
      <div className="bg-muted/30 rounded-lg p-6 space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        {/* Play Button */}
        <div className="flex justify-center">
          <button
            onClick={handlePlayPause}
            className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-all shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95"
          >
            {isPlaying ? <Pause className="w-8 h-8 animate-pulse-soft" /> : <Play className="w-8 h-8 ml-1" />}
          </button>
        </div>

        {/* Progress Bar */}
        <div
          onClick={handleProgressClick}
          className="w-full h-2 bg-border rounded-full cursor-pointer hover:h-3 transition-all"
        >
          <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-center text-sm">انقر على شريط التقدم للتنقل</p>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying(false)} className="hidden">
        <source src={news.audioUrl} type="audio/mpeg" />
      </audio>

      {/* News Description */}
      <div className="text-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <p className="mb-4">{news.shortDescription}</p>
        <p className="text-muted-foreground">{news.content.substring(0, 200)}...</p>
      </div>
    </div>
  )
}

export default AudioPlayer
