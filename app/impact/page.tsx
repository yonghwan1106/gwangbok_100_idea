'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, BookOpen, Globe, TrendingUp, Heart, Zap } from 'lucide-react';

export default function ImpactPage() {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });

  const impacts = [
    {
      icon: Users,
      title: "세대 간 통합",
      description: "가족 공동체의 회복과 살아있는 역사 교육",
      stat: "모든 세대",
      details: [
        "손주가 할아버지의 6.25 전쟁 경험을 인터뷰하여 아카이브에 기록",
        "할아버지는 손주의 2045년 꿈을 응원하며 타임캡슐에 메시지 작성",
        "개인의 기억을 국가의 역사로 함께 만들어가는 공동 경험",
        "이념, 지역, 세대 갈등을 치유하고 하나 된 정체성 확인"
      ]
    },
    {
      icon: BookOpen,
      title: "민중사 아카이브",
      description: "아래로부터의 역사, 귀중한 연구 자료",
      stat: "영구 보존",
      details: [
        "거시적 사건 중심의 공식 역사가 담지 못하는 평범한 삶의 궤적",
        "미래의 역사학자, 사회학자, 예술가들을 위한 귀중한 연구 자료",
        "20세기와 21세기 초를 살았던 선조들의 생생한 삶 이해",
        "타임캡슐로서 후손들에게 전하는 생생한 증언"
      ]
    },
    {
      icon: Globe,
      title: "소프트파워 자산",
      description: "대한민국의 여정을 세계에 알리는 국가 브랜딩",
      stat: "750만 재외동포",
      details: [
        "다국어 서비스를 통한 전 세계 재외동포 참여",
        "이국땅에서 대한민국 정체성을 지켜온 이야기 수집",
        "원조 수혜국에서 문화·경제 강국으로의 기적적 여정 전파",
        "강력한 국가 브랜딩 도구이자 소프트파워 자산"
      ]
    }
  ];

  const paradigmShifts = [
    {
      icon: TrendingUp,
      title: "일회성 → 상시적",
      description: "광복절 당일 집중 행사에서 365일 살아있는 기념으로"
    },
    {
      icon: Heart,
      title: "하향식 → 상향식",
      description: "정부 주도 사업에서 국민이 주도하는 참여형 프로젝트로"
    },
    {
      icon: Zap,
      title: "단기 → 장기",
      description: "단기 이벤트에서 영원히 성장하는 국가 자산으로"
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
            기대 효과
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            국가적 영향력과 지속 가능한 유산
          </p>
        </motion.div>
      </section>

      {/* Main Impacts */}
      <section ref={ref1} className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                <div className="bg-gradient-to-br from-indigo-400 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {impact.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {impact.description}
                </p>

                <div className="text-4xl font-bold text-indigo-600 mb-6">
                  {impact.stat}
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-indigo-50 p-6 rounded-2xl">
                  <h4 className="text-sm font-bold text-gray-700 mb-3">세부 효과</h4>
                  <ul className="space-y-2">
                    {impact.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Paradigm Shift */}
      <section ref={ref2} className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            기념사업의 패러다임 전환
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {paradigmShifts.map((shift, index) => (
              <motion.div
                key={shift.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg h-full text-center border border-blue-100">
                  <div className="bg-gradient-to-br from-blue-400 to-indigo-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <shift.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {shift.title}
                  </h3>
                  <p className="text-gray-600">
                    {shift.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView2 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl text-white text-center shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              상시적이고 살아있는 기념
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              일회성 이벤트를 넘어,<br />
              광복의 의미를 일상 속에서 지속적으로 성찰하고<br />
              미래를 가꾸어 나가는 기념으로
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Long-term Vision */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            장기적 비전
          </h2>
          <div className="space-y-6">
            <div className="flex items-start p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2045년 광복 100주년
                </h3>
                <p className="text-gray-700">
                  전 국민이 참여한 디지털 아카이브 완성 및 타임캡슐 봉인, 국가 상징 공간에 미디어 아트 조형물 제막
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2045년 이후
                </h3>
                <p className="text-gray-700">
                  교육 현장에서 영구적 학습 자원으로 활용, 문화 콘텐츠 창작의 무한한 원천으로 지속 성장
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  광복 150주년 (2095년)
                </h3>
                <p className="text-gray-700">
                  타임캡슐 개봉, 2045년 세대가 남긴 약속 확인, 새로운 100년을 향한 또 다른 약속 시작
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final Message */}
      <section className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 p-12 rounded-3xl text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            대한민국이 존재하는 한<br />
            영원히 성장할 국가적 자산
          </h3>
          <p className="text-xl leading-relaxed">
            과거의 기억을 동력으로 현재를 통합하고,<br />
            미래 세대를 위한 지속 가능한 유산을 창조하는<br />
            민주적이고 미래지향적인 국가적 과업
          </p>
        </motion.div>
      </section>
    </div>
  );
}
