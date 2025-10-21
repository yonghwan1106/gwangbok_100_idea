'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Award, Heart, Sparkles } from 'lucide-react';

export default function ThemesPage() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const themes = [
    {
      number: "1",
      title: "광복 상징물 개발",
      icon: Sparkles,
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      description: "유형의 상징물 및 공간 조성",
      detail: "매일 성장하는 살아있는 상징물",
      content: [
        "디지털 아카이브와 실시간 연동되는 영구적인 미디어 아트 조형물",
        "광화문 광장, 대한민국역사박물관 등 대한민국을 대표하는 공간에 설치",
        "끊임없이 추가되는 국민들의 이야기를 빛과 소리, 데이터 시각화로 표현",
        "고정된 기념비가 아닌 국민의 참여로 매일 성장하는 살아있는 상징물"
      ]
    },
    {
      number: "2",
      title: "독립 역사와 헌신",
      icon: Award,
      color: "from-red-400 to-orange-500",
      bgColor: "from-red-50 to-orange-50",
      description: "다양한 독립 활동 주체 조명",
      detail: "살아있는 역사로 되살리는 새로운 예우",
      content: [
        "독립운동가 후손들이 간직해 온 구술사, 사진, 편지 등 개인적 기록을 디지털로 영구 보존",
        "공식적으로 기록되지 않았거나 시간 속에 잊혀가던 역사 발굴",
        "교과서에 기록된 박제된 역사가 아닌, 감정과 온기가 담긴 살아있는 역사로 되살림",
        "독립을 위해 헌신한 분들과 가족들에게 물질적 보상을 넘어선 새로운 차원의 예우 실현"
      ]
    },
    {
      number: "3",
      title: "광복 정신의 계승·확산",
      icon: Heart,
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      description: "문화·예술을 통한 공감대 형성",
      detail: "개인의 기억을 우리의 문화로",
      content: [
        "국민들의 이야기를 다큐멘터리, 웹툰, 연극, 영화, 음악, 출판 등 다양한 문화 콘텐츠로 재창조",
        "개인의 기억이 우리 모두의 공유된 문화가 될 때 광복 정신이 다음 세대에게 감동으로 전달",
        "교훈이 아닌 감동으로, 암기해야 할 역사가 아닌 가슴으로 느끼는 공감대로 전환",
        "무한한 문화 콘텐츠 원천 소스 제공"
      ]
    },
    {
      number: "4",
      title: "광복 100년의 미래비전",
      icon: Target,
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      description: "평화·통일·세계선도·국민통합",
      detail: "국민이 직접 그리는 상향식 미래 설계도",
      content: [
        "국민들이 직접 평화로운 한반도, 세계를 선도하는 대한민국, 모든 세대와 계층이 화합하는 사회에 대한 비전을 기록",
        "'미래 비전'이라는 추상적 가치를 실체적이고 집단적인 참여 행위로 전환",
        "정부나 특정 단체가 제시하는 하향식 비전이 아닌 국민의 염원이 모여 만드는 상향식 미래 설계도",
        "2045년을 향한 약속을 디지털 타임캡슐로 영구 보존"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            4가지 주제의 완벽한 융합
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            개별 주제를 넘어 시너지를 창출하는 통합 프로젝트
          </p>
        </motion.div>
      </section>

      {/* Themes */}
      <section ref={ref} className="max-w-7xl mx-auto px-4 mb-20">
        <div className="space-y-12">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.number}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`bg-gradient-to-br ${theme.bgColor} p-10 rounded-3xl shadow-xl border border-gray-200`}>
                <div className="flex items-start mb-6">
                  <div className={`bg-gradient-to-br ${theme.color} w-20 h-20 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                    <theme.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-500 mb-2">
                      주제 {theme.number}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      {theme.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-2">{theme.description}</p>
                    <p className="text-md text-gray-600 italic">{theme.detail}</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">주요 내용</h3>
                  <ul className="space-y-3">
                    {theme.content.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`bg-gradient-to-br ${theme.color} bg-clip-text text-transparent mr-3 text-xl font-bold`}>
                          {i + 1}.
                        </span>
                        <span className="text-gray-700 flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integration Flow */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 p-12 rounded-3xl text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-8">유기적 연결 구조</h3>
          <div className="text-xl md:text-2xl font-semibold mb-4 leading-relaxed">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-2 md:mb-0 md:mr-2">
              역사와 헌신 (주제 2)
            </div>
            <span className="text-3xl mx-2">→</span>
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-2 md:mb-0 md:mr-2">
              문화 창작 (주제 3)
            </div>
            <span className="text-3xl mx-2">→</span>
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-2 md:mb-0 md:mr-2">
              상징물 (주제 1)
            </div>
            <span className="text-3xl mx-2">→</span>
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              미래비전 (주제 4)
            </div>
          </div>
          <p className="text-lg opacity-90 mt-6">
            통합적·입체적 구조로 4개 주제의 시너지 창출
          </p>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            100년이라는 역사적 이정표에 걸맞은
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">깊이</div>
              <p className="text-gray-700">각 주제의 본질을 깊이 있게 구현</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">넓이</div>
              <p className="text-gray-700">모든 주제를 아우르는 통합적 접근</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
