import React from "react";
import { motion } from "framer-motion";
import { Mail, BookOpen, Brain, Trophy, Piano, Target, Github, Linkedin, FileText, Calendar, ArrowRight, GraduationCap, Stethoscope } from "lucide-react";

const navItems = [
  { href: "#about", label: "소개" },
  { href: "#focus", label: "집중영역" },
  { href: "#timeline", label: "타임라인" },
  { href: "#writing", label: "글/노트" },
  { href: "#contact", label: "연락" },
];

const tags = [
  { icon: <Stethoscope className="w-4 h-4" />, text: "의대 목표" },
  { icon: <Brain className="w-4 h-4" />, text: "MENSA" },
  { icon: <GraduationCap className="w-4 h-4" />, text: "수능 2026·2027" },
  { icon: <Piano className="w-4 h-4" />, text: "피아노" },
  { icon: <BookOpen className="w-4 h-4" />, text: "고전 독서" },
];

const focusCards = [
  { icon: <Target className="w-5 h-5" />, title: "의대 합격 로드맵", desc: "2026은 발판, 2027은 실력 극대화, 2028은 합격.", link: "#" },
  { icon: <Brain className="w-5 h-5" />, title: "학습 시스템", desc: "빠른 회독 + 진도 중심(Art149). 두통 컨디션 기반 스케줄.", link: "#" },
  { icon: <BookOpen className="w-5 h-5" />, title: "글과 사고", desc: "『파우스트』·『코스모스』에서 배우는 사고 확장.", link: "#" },
];

const timeline = [
  { time: "2020", text: "MENSA 통과" },
  { time: "2021~2023", text: "수능 도전과 학습 전략 재설계" },
  { time: "2024.07", text: "전역 및 본격 재도전 시작" },
  { time: "2025", text: "학습 시스템 고도화·건강 관리 병행" },
  { time: "2026", text: "발판: 집중력·습관 정비" },
  { time: "2027", text: "실력 극대화" },
  { time: "2028", text: "의대 합격" },
];

const writings = [
  { title: "국어/수학 빠른 회독 설계 노트", desc: "회독 속도와 정확도의 균형, 단계별 난도 배치.", href: "#" },
  { title: "두통 관리 기반 공부 스케줄", desc: "컨디션 가중치로 시간·과목 배분 최적화.", href: "#" },
  { title: "고전에서 뽑은 사고 프롬프트", desc: "『파우스트』·『코스모스』 질문 리스트.", href: "#" },
];

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">SANGHUN</a>
          <nav className="hidden md:flex gap-6 text-sm">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:opacity-80">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="px-3 py-1.5 rounded-xl bg-slate-900 text-white text-sm">연락하기</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                sanghun · 의대 준비생
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                ENTJ | 고전 독서 | 논리적 사고 | 집중형 학습. 장기 목표: 의사로서 안정성과 전문성 확보.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((t, i) => (
                  <span key={i} className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-slate-100 border">
                    {t.icon}
                    {t.text}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <a href="#about" className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm inline-flex items-center">더 알아보기 <ArrowRight className="w-4 h-4 ml-1" /></a>
                <a href="#writing" className="px-4 py-2 rounded-xl border text-sm inline-flex items-center"><FileText className="w-4 h-4 mr-2"/>글/노트</a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
                <a className="inline-flex items-center gap-2 hover:opacity-80" href="#" aria-label="github"><Github className="w-4 h-4"/>GitHub</a>
                <a className="inline-flex items-center gap-2 hover:opacity-80" href="#" aria-label="linkedin"><Linkedin className="w-4 h-4"/>LinkedIn</a>
                <a className="inline-flex items-center gap-2 hover:opacity-80" href="#" aria-label="resume"><FileText className="w-4 h-4"/>이력서</a>
              </div>
            </div>
            <div>
              <div className="rounded-2xl shadow-sm p-6 bg-white border">
                <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-slate-200 to-slate-100 grid place-items-center text-slate-500">
                  <span className="text-sm">여기에 프로필 사진 또는 심플 로고</span>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  “우리는 알아야 한다, 우리는 알게 될 것이다.”
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">소개</h2>
            <p className="mt-3 text-slate-700 leading-7">
              목표는 명확하고, 경로는 체계적입니다. 공부는 감(感)이 아니라 시스템으로 굴립니다. 
              빠른 회독과 진도 중심 전략을 기반으로, 두통 컨디션에 맞춘 스케줄링으로 지속 가능한 성장을 추구합니다.
            </p>
            <ul className="mt-4 text-slate-700 space-y-2">
              <li className="flex items-start gap-2"><Brain className="w-4 h-4 mt-1"/> MENSA 통과(상위 1~2%), 논리적 사고 중심</li>
              <li className="flex items-start gap-2"><BookOpen className="w-4 h-4 mt-1"/> 『파우스트』·『코스모스』 다독, 고전 기반 사고 확장</li>
              <li className="flex items-start gap-2"><Piano className="w-4 h-4 mt-1"/> 피아노(쇼팽 적합 손), 집중과 섬세함 훈련</li>
              <li className="flex items-start gap-2"><Trophy className="w-4 h-4 mt-1"/> 피파 온라인 챔피언스 티어 경험: 몰입·집중의 증거</li>
            </ul>
          </div>
          <div>
            <div className="rounded-2xl border p-5 bg-white">
              <h3 className="font-semibold">지금 하는 일</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Calendar className="w-4 h-4"/> 2026 수능: 발판 만들기</li>
                <li className="flex items-center gap-2"><Calendar className="w-4 h-4"/> 2027 수능: 실력 극대화</li>
                <li className="flex items-center gap-2"><Calendar className="w-4 h-4"/> 2028 수능: 의대 합격</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section id="focus" className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl font-bold">집중하는 영역</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {focusCards.map((c, i) => (
            <div key={i} className="rounded-2xl border p-5 bg-white hover:shadow-md transition">
              <div className="flex items-center gap-2 text-slate-600">{c.icon}<span className="font-medium">{c.title}</span></div>
              <p className="mt-2 text-sm text-slate-700">{c.desc}</p>
              <a href={c.link} className="mt-4 inline-flex items-center gap-1 text-sm hover:opacity-80">
                자세히 보기 <ArrowRight className="w-4 h-4"/>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl font-bold">타임라인</h2>
        <ol className="relative mt-6 border-l pl-6 space-y-6">
          {timeline.map((t, i) => (
            <li key={i} className="relative">
              <div className="absolute -left-2.5 w-5 h-5 rounded-full bg-slate-900"></div>
              <div className="text-sm text-slate-500">{t.time}</div>
              <div className="font-medium">{t.text}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* Writing */}
      <section id="writing" className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl font-bold">글/노트</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {writings.map((w, i) => (
            <div key={i} className="rounded-2xl border p-5 bg-white hover:shadow-md transition">
              <div className="font-medium">{w.title}</div>
              <p className="mt-2 text-sm text-slate-700">{w.desc}</p>
              <a href={w.href} className="mt-4 inline-flex items-center gap-1 text-sm hover:opacity-80">
                읽기 <ArrowRight className="w-4 h-4"/>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">연락</h2>
            <p className="mt-3 text-slate-700">협업·자문·스터디 문의는 아래 채널로.</p>
            <div className="mt-5 space-y-3">
              <a className="flex items-center gap-2 hover:opacity-80" href="mailto:di2460219@gmail.com"><Mail className="w-4 h-4"/> di2460219@gmail.com</a>
              <a className="flex items-center gap-2 hover:opacity-80" href="#"><Github className="w-4 h-4"/> github.com/your-id</a>
              <a className="flex items-center gap-2 hover:opacity-80" href="#"><Linkedin className="w-4 h-4"/> linkedin.com/in/your-id</a>
            </div>
          </div>
          <div className="rounded-2xl border p-6 bg-white">
            <form className="space-y-3">
              <input className="w-full border rounded-xl px-3 py-2" placeholder="이름" />
              <input className="w-full border rounded-xl px-3 py-2" placeholder="이메일" />
              <textarea className="w-full border rounded-xl px-3 py-2 h-28" placeholder="메시지"></textarea>
              <button className="rounded-xl w-full px-4 py-2 bg-slate-900 text-white">메시지 보내기</button>
            </form>
            <p className="text-xs text-slate-500 mt-2">* 데모 폼 – 실제 전송 연결 전</p>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-4 text-xs text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} SANGHUN. All rights reserved.</span>
          <a href="#" className="hover:opacity-80">최상단으로</a>
        </div>
      </footer>
    </div>
  );
}
