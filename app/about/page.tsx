'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Target, Users, Globe2 } from 'lucide-react';

export default function AboutPage() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

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
            프로젝트 소개
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            광복 100주년을 맞아 대한민국 국민과 함께하는 혁신적인 디지털 아카이브
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl shadow-xl mb-12 border border-blue-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">프로젝트 비전</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            본 프로젝트는 광복 100주년을 맞아 대한민국 국민이 직접 만들고, 국민을 위해 영구히 보존되며, 다음 세대와 소통하는 살아있는 디지털 아카이브이자 타임캡슐, <span className="font-bold text-indigo-600">&apos;광복 100년의 약속&apos;</span>을 구축할 것을 제안합니다.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            이 사업은 광복의 첫 100년(1945~2045)과 다가올 100년을 잇는 견고한 다리 역할을 수행할 것입니다.
          </p>
        </motion.div>

        {/* Two Pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full border border-gray-100">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">기억의 빛</h3>
              <p className="text-gray-700 mb-4">과거와 현재의 기록</p>
              <p className="text-gray-600 leading-relaxed">
                광복의 순간부터 오늘에 이르기까지, 대한민국 국민 개개인의 다채롭고 생생한 삶의 이야기를 수집, 보존하고, 세상에 비추는 기능입니다. 독립운동가 후손들의 숨겨진 이야기부터 K-컬처를 이끄는 창작자들의 열정까지, 살아 숨 쉬는 &apos;민중의 역사&apos;를 완성합니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full border border-gray-100">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">미래의 길</h3>
              <p className="text-gray-700 mb-4">미래를 향한 약속</p>
              <p className="text-gray-600 leading-relaxed">
                현세대가 2045년의 대한민국과 그 이후의 미래를 향한 소망, 비전, 그리고 다짐을 기록하는 기능입니다. 디지털 타임캡슐에 봉인된 희망의 메시지들은 현재가 미래에게 보내는 장엄한 약속이 되어, 미래 세대에 대한 책임과 애정을 구체적으로 표현합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Significance */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            프로젝트의 의의
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: '국민 참여형',
                description: '특정 인물이나 단체가 주도하는 것이 아닌, 국민 한 사람 한 사람의 이야기가 주인공이 되는 프로젝트'
              },
              {
                icon: Globe2,
                title: '영구 보존',
                description: '디지털 기술을 활용하여 국민의 기억과 염원을 영원히 보존하고 미래 세대에 전승'
              },
              {
                icon: Target,
                title: '통합과 소통',
                description: '세대, 지역, 이념을 넘어 모든 국민이 함께 만들고 공유하는 통합의 장'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center h-full border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-indigo-400 to-purple-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            공모전의 근본 취지 구현
          </h3>
          <p className="text-xl leading-relaxed mb-6">
            &apos;국민과 함께하는 광복 100년 실현&apos;을 정면으로 구현하는 프로젝트
          </p>
          <p className="text-lg opacity-90">
            1차 단계부터 100주년, 그리고 그 이후까지 지속 가능한 국가적 유산을 만들어갑니다
          </p>
        </motion.div>
      </section>
    </div>
  );
}
