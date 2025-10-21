'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Sparkles,
  Clock,
  Users,
  Globe,
  Lightbulb,
  BookOpen,
  Rocket,
  Target,
  Heart,
  Award
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Core Concept Section */}
      <CoreConceptSection />

      {/* 4 Themes Section */}
      <FourThemesSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* Conclusion Section */}
      <ConclusionSection />
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  // Pre-generate random values to avoid hydration mismatch
  const stars = Array.from({ length: 50 }, (_, i) => ({
    key: i,
    width: (i * 13) % 4 + 1,
    height: (i * 13) % 4 + 1,
    left: (i * 17) % 100,
    top: (i * 23) % 100,
    duration: (i * 7) % 3 + 2,
    delay: (i * 11) % 2,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0 opacity-20">
          {stars.map((star) => (
            <motion.div
              key={star.key}
              className="absolute bg-white rounded-full"
              style={{
                width: star.width,
                height: star.height,
                left: `${star.left}%`,
                top: `${star.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
              <p className="text-white/90 text-sm md:text-base font-medium">
                광복 100년 기념사업 아이디어 공모전
              </p>
            </div>
          </motion.div>

          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-16 h-16 text-yellow-300 mx-auto" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            광복 100년의 약속
          </h1>

          <div className="text-3xl md:text-5xl font-semibold text-blue-100 mb-8">
            <span className="text-yellow-300">기억의 빛</span>, <span className="text-pink-300">미래의 길</span>
          </div>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            국민이 직접 만들고, 영구히 보존되며, 다음 세대와 소통하는<br />
            살아있는 디지털 아카이브
          </p>

          <motion.button
            className="bg-white text-indigo-700 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('core-concept')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            자세히 알아보기
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => {
          document.getElementById('core-concept')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// Core Concept Section
function CoreConceptSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="core-concept" ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            두 개의 기둥
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            과거와 미래를 잇는 혁신적인 디지털 플랫폼
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 기억의 빛 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-amber-100">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                기억의 빛
              </h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                과거와 현재의 기록
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>광복부터 오늘까지 국민 개개인의 생생한 이야기</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>독립운동가 후손들의 숨겨진 이야기</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>전쟁과 분단을 겪은 세대의 증언</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>산업화·민주화·K-컬처의 살아있는 역사</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* 미래의 길 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-blue-100">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                미래의 길
              </h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                미래를 향한 약속
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>2045년 대한민국을 향한 소망과 비전</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>현세대가 미래에게 보내는 약속</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>디지털 타임캡슐에 영구 보존</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>미래 세대에 대한 책임과 애정의 표현</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Four Themes Section
function FourThemesSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const themes = [
    {
      number: "1",
      title: "광복 상징물 개발",
      icon: Sparkles,
      color: "from-blue-400 to-cyan-500",
      description: "유형의 상징물 및 공간 조성",
      detail: "매일 성장하는 살아있는 상징물"
    },
    {
      number: "2",
      title: "독립 역사와 헌신",
      icon: Award,
      color: "from-red-400 to-orange-500",
      description: "다양한 독립 활동 주체 조명",
      detail: "살아있는 역사로 되살리는 새로운 예우"
    },
    {
      number: "3",
      title: "광복 정신의 계승·확산",
      icon: Heart,
      color: "from-pink-400 to-rose-500",
      description: "문화·예술을 통한 공감대 형성",
      detail: "개인의 기억을 우리의 문화로"
    },
    {
      number: "4",
      title: "광복 100년의 미래비전",
      icon: Target,
      color: "from-purple-400 to-pink-500",
      description: "평화·통일·세계선도·국민통합",
      detail: "국민이 직접 그리는 상향식 미래 설계도"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            4가지 주제의 완벽한 융합
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            개별 주제를 넘어 시너지를 창출하는 통합 프로젝트
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative">
                  <div className={`bg-gradient-to-br ${theme.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <theme.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="text-sm font-bold text-gray-500 mb-2">
                    주제 {theme.number}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                    {theme.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    {theme.description}
                  </p>

                  <p className="text-sm text-gray-500 italic">
                    {theme.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-3xl text-white text-center shadow-xl"
        >
          <p className="text-2xl font-semibold mb-2">
            역사와 헌신(주제 2) → 문화 창작(주제 3) → 상징물(주제 1) → 미래비전(주제 4)
          </p>
          <p className="text-lg opacity-90">
            유기적으로 연결된 통합적·입체적 구조
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Timeline Section
function TimelineSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const phases = [
    {
      year: "1차년도",
      title: "디지털 초석",
      subtitle: "플랫폼 설계 및 개발",
      icon: BookOpen,
      color: "bg-blue-500",
      items: [
        "플랫폼 아키텍처 설계",
        "UI/UX 디자인",
        "핵심 모듈 개발",
        "캠페인 론칭"
      ]
    },
    {
      year: "2차년도",
      title: "국민적 메아리",
      subtitle: "참여 및 수집 캠페인",
      icon: Users,
      color: "bg-purple-500",
      items: [
        "베타 테스트",
        "전국 캠페인 전개",
        "콘텐츠 제작 착수",
        "학교 연계 프로그램"
      ]
    },
    {
      year: "3차년도",
      title: "창의적 만개",
      subtitle: "콘텐츠 전환 및 확산",
      icon: Globe,
      color: "bg-pink-500",
      items: [
        "다큐멘터리 제작",
        "웹툰/단행본 공개",
        "전시 디자인",
        "100주년 행사 기획"
      ]
    },
    {
      year: "100주년",
      title: "백년의 순간",
      subtitle: "완성 및 유산화",
      icon: Sparkles,
      color: "bg-amber-500",
      items: [
        "대국민 공개",
        "타임캡슐 봉인식",
        "상징물 제막",
        "교육 커리큘럼 배포"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            추진 계획
          </h2>
          <p className="text-xl text-gray-600">
            체계적인 단계별 로드맵
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className={`${phase.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="text-sm font-bold text-gray-500 mb-1">
                      {phase.year}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {phase.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {phase.subtitle}
                    </p>

                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block relative">
                  <motion.div
                    className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center shadow-lg z-10`}
                    animate={inView ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  >
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                <div className="flex-1 w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Impact Section
function ImpactSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const impacts = [
    {
      icon: Users,
      title: "세대 간 통합",
      description: "가족 공동체의 회복과 살아있는 역사 교육",
      stat: "모든 세대"
    },
    {
      icon: BookOpen,
      title: "민중사 아카이브",
      description: "아래로부터의 역사, 귀중한 연구 자료",
      stat: "영구 보존"
    },
    {
      icon: Globe,
      title: "소프트파워 자산",
      description: "대한민국의 여정을 세계에 알리는 국가 브랜딩",
      stat: "750만 재외동포"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            기대 효과
          </h2>
          <p className="text-xl text-gray-600">
            국가적 영향력과 지속 가능한 유산
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full border border-gray-100 hover:border-indigo-200">
                <div className="bg-gradient-to-br from-indigo-400 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {impact.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {impact.description}
                </p>

                <div className="text-3xl font-bold text-indigo-600">
                  {impact.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            기념사업의 패러다임 전환
          </h3>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            일회성 이벤트를 넘어,<br className="md:hidden" />
            <span className="font-bold"> 상시적이고 살아있는 기념</span>으로<br />
            대한민국이 존재하는 한 영원히 성장할 국가적 자산
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Conclusion Section
function ConclusionSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <Sparkles className="w-20 h-20 text-indigo-600 mx-auto mb-6" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            국민 한 사람 한 사람의 삶이<br />
            곧 대한민국의 역사입니다
          </h2>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            과거의 기억을 동력으로 현재를 통합하고,<br />
            미래 세대를 위한 지속 가능한 유산을 창조하는<br />
            <span className="font-bold text-indigo-600">민주적이고 미래지향적인 국가적 과업</span>
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
              함께 만들어갈 미래
            </button>
          </motion.div>

          <div className="mt-16 pt-12 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              광복 80주년 기념사업추진위원회 아이디어 공모전
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
