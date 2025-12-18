"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ModalNewsViewer from "@/components/modal-news-viewer"
import { newsData } from "@/lib/news-data"
import { NewsCard } from "@/components/news-card"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMode, setSelectedMode] = useState<"audio" | "text" | "sensory">("audio")
  
  const handleModeClick = (mode: "audio" | "text" | "sensory") => {
    setSelectedMode(mode)
    setIsModalOpen(true)
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center animate-fade-in-up">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/logo.png" 
                alt="حِسّ Logo" 
                width={48} 
                height={48}
                className="object-contain drop-shadow-md"
              />
            </div>
            <h1 className="text-3xl font-bold text-primary transition-colors duration-300 group-hover:text-orange-500">حِسّ</h1>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/hero" className="text-accent hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="/about" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 animate-pulse hover:animate-none transition-all duration-300">
              لماذا حس !
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-5xl font-bold text-foreground text-balance">اكتشف الخبر بطريقتك المفضلة</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              منصة إدراكية تعرض الأخبار بثلاث طرق مختلفة: السمعية، الكتابية، والحسية
            </p>
          </div>
          
          {/* Three Modes Preview - CLICKABLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news, index) => (
              <div key={news.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <NewsCard news={news} />
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <Link href="/news">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              ابدأ التجربة <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </Link>
        </div>
      </main>
      
      <ModalNewsViewer 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        news={newsData} 
        mode={selectedMode} 
      />
    </div>
  )
}