'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Rocket, BookOpen, Users2, Clock, Database } from 'lucide-react';

export default function ConceptPage() {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });

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
            핵심 개념
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            과거와 미래를 잇는 두 개의 기둥
          </p>
        </motion.div>
      </section>

      {/* 기억의 빛 Section */}
      <section ref={ref1} className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl shadow-xl border border-amber-100">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mr-6">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">기억의 빛</h2>
                <p className="text-xl text-gray-700">Light of Memory</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              광복의 순간부터 오늘에 이르기까지, 대한민국 국민 개개인의 다채롭고 생생한 삶의 이야기를 수집, 보존하고, 세상에 비추는 기능입니다.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: Users2,
                  title: '독립운동가 후손들의 이야기',
                  description: '숨겨진 이야기와 개인적 기록을 디지털로 영구 보존'
                },
                {
                  icon: BookOpen,
                  title: '전쟁과 분단의 증언',
                  description: '6.25 전쟁과 분단을 겪은 세대의 생생한 증언'
                },
                {
                  icon: Clock,
                  title: '산업화·민주화 역군',
                  description: '대한민국 발전의 기반을 만든 이들의 땀과 눈물'
                },
                {
                  icon: Database,
                  title: 'K-컬처 창작자들',
                  description: '세계를 이끄는 문화 창작자들의 열정과 도전'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView1 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md"
                >
                  <div className="flex items-start">
                    <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">핵심 가치</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">공식적인 역사 기록을 넘어, 살아 숨 쉬는 &apos;민중의 역사&apos; 완성</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">텍스트, 사진, 음성, 영상 등 다양한 형태의 멀티미디어 기록</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">시대, 주제, 지역별 체계적 분류 및 큐레이션</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">미래 세대를 위한 귀중한 연구 자료 및 문화 콘텐츠 원천</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 미래의 길 Section */}
      <section ref={ref2} className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl shadow-xl border border-blue-100">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 w-20 h-20 rounded-2xl flex items-center justify-center mr-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">미래의 길</h2>
                <p className="text-xl text-gray-700">Path to the Future</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              현세대가 2045년의 대한민국과 그 이후의 미래를 향한 소망, 비전, 그리고 다짐을 기록하는 기능입니다. 디지털 타임캡슐에 봉인되어, 현재가 미래에게 보내는 장엄한 약속이 됩니다.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">평화와 통일</h3>
                <p className="text-gray-700 leading-relaxed">
                  한반도의 평화로운 미래와 통일에 대한 국민들의 염원을 담아 미래 세대에게 전달합니다.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">세계 선도국</h3>
                <p className="text-gray-700 leading-relaxed">
                  세계를 선도하는 대한민국의 위상과 역할에 대한 비전을 기록합니다.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">국민 통합</h3>
                <p className="text-gray-700 leading-relaxed">
                  모든 세대와 계층이 화합하는 사회에 대한 꿈을 함께 만들어갑니다.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">지속 가능성</h3>
                <p className="text-gray-700 leading-relaxed">
                  환경, 사회, 경제적으로 지속 가능한 미래에 대한 책임과 다짐을 표현합니다.
                </p>
              </motion.div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">디지털 타임캡슐</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">암호화 기술과 디지털 타임스탬프로 무결성 보장</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">2045년 광복 100주년 또는 지정된 개봉일까지 봉인</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">텍스트, 음성, 영상 형태의 다양한 메시지 수용</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">•</span>
                  <span className="text-gray-700">미래 세대에 대한 현세대의 책임과 애정 표현</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Integration Message */}
      <section className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-amber-500 via-blue-500 to-indigo-600 p-12 rounded-3xl text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-6">
            과거와 미래의 완벽한 연결
          </h3>
          <p className="text-xl leading-relaxed">
            <span className="font-bold">&apos;기억의 빛&apos;</span>으로 과거를 보존하고,<br />
            <span className="font-bold">&apos;미래의 길&apos;</span>로 미래를 설계합니다
          </p>
        </motion.div>
      </section>
    </div>
  );
}
