"use client"

import Link from "next/link"
import { ArrowRight, Target, Users, Brain, Lightbulb, MessageSquare } from "lucide-react"

export default function AboutPage() {
  const goals = [
    {
      icon: Brain,
      title: "تجربة متعددة الحواس",
      description: "توفير تجربة إعلامية متعددة الحواس"
    },
    {
      icon: Users,
      title: "احترام الفروقات",
      description: "احترام الفروقات الفردية في أنماط الإدراك والتعلم"
    },
    {
      icon: Target,
      title: "تعميق الفهم",
      description: "تعميق فهم الأخبار من خلال عرض متنوع"
    },
    {
      icon: Lightbulb,
      title: "منصة مبتكرة",
      description: "بناء منصة إعلامية عربية مبتكرة"
    },
    {
      icon: MessageSquare,
      title: "تفاعل فعال",
      description: "تشجيع التفاعل الفعال مع المحتوى الإعلامي"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 hover:opacity-75 transition">
              <ArrowRight className="w-5 h-5" />
              <span>العودة</span>
            </Link>
            <Link href="/hero" className="text-accent hover:text-primary transition-colors">
              الرئيسية
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-foreground">عن المشروع</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-12 text-right">
          {/* Project Idea */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">فكرة المشروع</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              حس هو مشروع إعلامي رقمي يهدف إلى تغيير طريقة تفاعلنا مع الأخبار. نحن نؤمن بأن طريقة عرض الخبر تؤثر بشكل
              مباشر على فهمنا واستيعابنا له. لذلك، نقدم الأخبار بثلاث طرق إدراكية مختلفة لتناسب جميع أنماط التعلم
              والإدراك.
            </p>
          </section>

          {/* Goals - Now as Cards */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">الأهداف</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goals.map((goal, i) => {
                const Icon = goal.icon
                return (
                  <div 
                    key={i} 
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-2 group"
                  >
                    <div className="flex flex-col items-end gap-4">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <h3 className="font-bold text-xl text-gray-800 mb-2">{goal.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Target Audience */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">الفئة المستهدفة</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "الطلاب والأكاديميون", desc: "يستفيدون من التنوع في عرض المعلومات لفهم أعمق" },
                { title: "المحترفون", desc: "يحصلون على معلومات سريعة وفعالة بطرق متعددة" },
                { title: "الجمهور العام", desc: "يجدون طريقة مشوقة وممتعة لقراءة الأخبار" },
                { title: "ذوو الاحتياجات الخاصة", desc: "الخيارات المتعددة توفر إمكانية وصول أفضل" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-card border border-border rounded-lg text-right hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg text-accent mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Perception Patterns */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">الأنماط الإدراكية في الإعلام الرقمي</h2>
            <div className="space-y-6">
              <div className="border-r-4 border-primary pr-6">
                <h3 className="font-bold text-xl mb-2">🎧 المتعلمون السمعيون</h3>
                <p className="text-muted-foreground">
                  يتعلمون بشكل أفضل من خلال الاستماع والصوت. نوفر لهم مشغل صوتي احترافي يقرأ الخبر بجودة عالية.
                </p>
              </div>
              <div className="border-r-4 border-accent pr-6">
                <h3 className="font-bold text-xl mb-2">👁️ المتعلمون البصريون</h3>
                <p className="text-muted-foreground">
                  يفضلون القراءة والصور. نقدم نصوصاً منسقة بشكل احترافي مع صور معبرة.
                </p>
              </div>
              <div className="border-r-4 border-secondary pr-6">
                <h3 className="font-bold text-xl mb-2">🎬 المتعلمون الحسيون</h3>
                <p className="text-muted-foreground">
                  يتعلمون من خلال التجربة والمشاعر. نوفر مقاطع فيديو معبرة مع جمل قصيرة تثير المشاعر.
                </p>
              </div>
            </div>
          </section>

          {/* Importance */}
          <section className="bg-primary/10 p-8 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">لماذا هذا مهم؟</h2>
            <p className="text-lg text-foreground leading-relaxed">
              في العصر الرقمي، نتعرض لآلاف المعلومات يومياً. الطريقة التي يتم بها عرض هذه المعلومات تؤثر بشكل كبير على
              فهمنا واستيعابنا وحتى تفاعلنا معها. من خلال توفير خيارات إدراكية متعددة، نساعد الأفراد على اختيار الطريقة
              التي تناسب أسلوبهم في التعلم، مما يزيد من فعالية التواصل الإعلامي ويحسن تجربة المستخدم بشكل عام.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}