import { useState } from 'react';
import { Brain, ShieldAlert, RefreshCcw, Users, CloudFog, AlertTriangle, Calculator, Hourglass, Heart } from 'lucide-react';
import BrainSection from './components/BrainSection';
import BodySection from './components/BodySection';
import CycleSection from './components/CycleSection';
import PsychologySection from './components/PsychologySection';
import EcigSection from './components/EcigSection';
import LongTermSection from './components/LongTermSection';
import CalculatorSection from './components/CalculatorSection';
import QuitSection from './components/QuitSection';
import { TABS } from './constants';

const TAB_ICONS = {
  brain: <Brain className="size-4 md:size-[18px]" />,
  body: <ShieldAlert className="size-4 md:size-[18px]" />,
  cycle: <RefreshCcw className="size-4 md:size-[18px]" />,
  psychology: <Users className="size-4 md:size-[18px]" />,
  ecig: <CloudFog className="size-4 md:size-[18px]" />,
  longterm: <AlertTriangle className="size-4 md:size-[18px]" />,
  calculator: <Calculator className="size-4 md:size-[18px]" />,
  quit: <Hourglass className="size-4 md:size-[18px]" />,
};

const SECTION_COMPONENTS = {
  brain: BrainSection,
  body: BodySection,
  cycle: CycleSection,
  psychology: PsychologySection,
  ecig: EcigSection,
  longterm: LongTermSection,
  calculator: CalculatorSection,
  quit: QuitSection,
};

const App = () => {
  const [activeTab, setActiveTab] = useState('brain');
  const ActiveSection = SECTION_COMPONENTS[activeTab];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-white relative overflow-hidden">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[300px] md:h-[500px] opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent blur-[80px] md:blur-[100px] z-0"></div>

      <div className="relative z-10">
        <header className="pt-12 pb-6 md:pt-20 md:pb-12 px-4 md:px-6 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-3 md:mb-4 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            科学揭秘专题
          </div>
          <h1 className="text-3xl md:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 drop-shadow-sm">
            抽烟的悖论
          </h1>
          <p className="text-base md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            短暂的愉悦 <span className="text-slate-600 mx-2">|</span> 长期的代价<br />
            <span className="text-xs md:text-lg text-slate-500 mt-2 md:mt-3 block font-normal">一场关于尼古丁、多巴胺与身体器官的隐秘博弈</span>
          </p>
        </header>

        <div className="sticky top-3 md:top-8 z-50 px-2 md:px-4 mb-10 md:mb-16 max-w-5xl mx-auto">
          <nav className="flex justify-start md:justify-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap md:flex-wrap gap-1.5 md:gap-2 p-1.5 md:p-2 bg-slate-800/70 backdrop-blur-2xl rounded-full border border-slate-700/50 shadow-2xl">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center whitespace-nowrap gap-1 md:gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full transition-all duration-300 font-medium text-xs md:text-sm ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/50 md:scale-105'
                  : 'bg-transparent text-slate-400 hover:bg-slate-700/50 hover:text-slate-100 border border-transparent'
                  }`}
              >
                {TAB_ICONS[tab.id]}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <main className="max-w-5xl mx-auto px-3 md:px-6 pb-16 md:pb-24 min-h-[60vh]">
          <ActiveSection />
        </main>

        <footer className="border-t border-slate-800/50 bg-slate-900/30 backdrop-blur-sm py-8 md:py-12 text-center text-slate-500">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <p className="flex items-center justify-center gap-2 mb-2 text-slate-400 text-sm md:text-base">
              <Heart size={14} className="text-red-500 animate-pulse md:size-4" />
              <span>为了您和家人的健康，请尽早戒烟。</span>
            </p>
            <p className="text-xs md:text-sm opacity-50 mb-3 md:mb-4">交互式医学科普演示 · 抽烟的悖论</p>
            <div className="text-[10px] md:text-xs opacity-30 max-w-lg mx-auto leading-relaxed">
              <p>数据参考：世界卫生组织 (WHO) 全球烟草流行报告、美国疾控中心 (CDC) 吸烟与健康报告、美国国家癌症研究所 (NCI)、中国疾控中心 (CCDC) 烟草调查。</p>
              <p className="mt-1">免责声明：本页面为医学科普演示，不构成医疗建议。如需戒烟，请咨询专业医生。</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
