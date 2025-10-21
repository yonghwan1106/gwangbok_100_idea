'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Globe, Sparkles, Clock } from 'lucide-react';

export default function PlanPage() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const phases = [
    {
      year: "1차년도",
      title: "디지털 초석",
      subtitle: "플랫폼 설계 및 개발",
      icon: BookOpen,
      color: "bg-blue-500",
      items: [
        "플랫폼 아키텍처 설계 및 UI/UX 디자인",
        "핵심 모듈 개발 (기억의 빛, 미래의 길 포털)",
        "AI 기반 큐레이션 엔진 구축",
        "캠페인 론칭 및 파트너십 MOU 체결"
      ],
      details: "기술적 안정성, 확장성, 전 세대를 아우르는 사용자 편의성에 최우선 가치를 두고 개발합니다."
    },
    {
      year: "2차년도",
      title: "국민적 메아리",
      subtitle: "참여 및 수집 캠페인",
      icon: Users,
      color: "bg-purple-500",
      items: [
        "베타 테스트 및 모바일 앱 출시",
        "전국 및 해외 캠페인 전개",
        "학교 연계 프로그램 시작",
        "찾아가는 '기억 부스' 운영"
      ],
      details: "\"당신의 이야기가 대한민국의 역사가 됩니다\"라는 슬로건으로 전 국민의 참여를 유도합니다."
    },
    {
      year: "3차년도",
      title: "창의적 만개",
      subtitle: "콘텐츠 전환 및 확산",
      icon: Globe,
      color: "bg-pink-500",
      items: [
        "다큐멘터리 시리즈 제작 착수",
        "웹툰/단행본 공개",
        "전시 디자인 및 전국 순회",
        "100주년 행사 기획"
      ],
      details: "수집된 이야기를 고품질 문화 콘텐츠로 재창조하여 광복 정신의 계승·확산을 실현합니다."
    },
    {
      year: "100주년",
      title: "백년의 순간",
      subtitle: "완성 및 유산화",
      icon: Sparkles,
      color: "bg-amber-500",
      items: [
        "대국민 공개 및 국가 헌정",
        "타임캡슐 봉인식",
        "물리적 상징물 제막",
        "교육 커리큘럼 배포"
      ],
      details: "모든 기능이 완성된 아카이브를 공개하고, 미래 세대를 위한 영구적 학습 자원으로 활용합니다."
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
            추진 계획
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            체계적인 단계별 로드맵으로 100주년까지
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section ref={ref} className="max-w-7xl mx-auto px-4 mb-20">
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500" />

          <div className="space-y-16">
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
                  <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className={`${phase.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="text-sm font-bold text-gray-500 mb-2">
                      {phase.year}
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {phase.title}
                    </h3>

                    <p className="text-lg text-gray-600 mb-6">
                      {phase.subtitle}
                    </p>

                    <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                      <ul className="space-y-3">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <Clock className="w-5 h-5 mr-3 mt-0.5 text-gray-400 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-gray-600 italic">
                      {phase.details}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block relative">
                  <motion.div
                    className={`w-20 h-20 ${phase.color} rounded-full flex items-center justify-center shadow-2xl z-10`}
                    animate={inView ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  >
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                <div className="flex-1 w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            사업 거버넌스
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">추진 체계</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• (가칭)광복100주년기념사업위원회 주도</li>
                <li>• 관련 정부 부처 참여</li>
                <li>• 민간 기술 기업 협력</li>
                <li>• 문화예술 기관 및 학계 전문가 참여</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">운영 원칙</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 민관 협력 컨소시엄 형태</li>
                <li>• 공공성과 전문성 확보</li>
                <li>• 효율적인 사업 추진</li>
                <li>• 투명한 예산 집행</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-6">
            2045년 8월 15일을 향하여
          </h3>
          <p className="text-xl leading-relaxed">
            단계적이고 체계적인 추진으로<br />
            대한민국이 존재하는 한 영원히 성장할<br />
            국가적 자산을 만들어갑니다
          </p>
        </motion.div>
      </section>
    </div>
  );
}
