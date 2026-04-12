import React, { useState, useEffect } from 'react';
import { Brain, Activity, RefreshCcw, AlertTriangle, Wind, Heart, ShieldAlert, Zap, Users, CloudFog, Hourglass, Calculator, Coins } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('brain');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-white relative overflow-hidden">
      {/* 底部全局环境光晕 */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent blur-[100px] z-0"></div>

      <div className="relative z-10">
        {/* Header区 */}
        <header className="pt-20 pb-12 px-6 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            科学揭秘专题
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 drop-shadow-sm">
            抽烟的悖论
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            短暂的愉悦 <span className="text-slate-600 mx-2">|</span> 长期的代价<br />
            <span className="text-base md:text-lg text-slate-500 mt-3 block font-normal">一场关于尼古丁、多巴胺与身体器官的隐秘博弈</span>
          </p>
        </header>

        {/* 悬浮导航栏 (吸顶 & 毛玻璃) */}
        <div className="sticky top-4 md:top-8 z-50 px-4 mb-16 max-w-5xl mx-auto">
          <nav className="flex justify-start md:justify-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap md:flex-wrap gap-2 p-2 bg-slate-800/70 backdrop-blur-2xl rounded-full border border-slate-700/50 shadow-2xl">
            {[
              { id: 'brain', icon: <Brain size={18} />, label: '大脑骗局' },
              { id: 'body', icon: <ShieldAlert size={18} />, label: '身体抗议' },
              { id: 'cycle', icon: <RefreshCcw size={18} />, label: '成瘾循环' },
              { id: 'psychology', icon: <Users size={18} />, label: '心理陷阱' },
              { id: 'ecig', icon: <CloudFog size={18} />, label: '电子烟迷思' },
              { id: 'longterm', icon: <AlertTriangle size={18} />, label: '长期代价' },
              { id: 'calculator', icon: <Calculator size={18} />, label: '财富账单' },
              { id: 'quit', icon: <Hourglass size={18} />, label: '戒烟奇迹' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center whitespace-nowrap gap-2 px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm md:text-base ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/50 scale-105'
                  : 'bg-transparent text-slate-400 hover:bg-slate-700/50 hover:text-slate-100 border border-transparent'
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* 主内容展示区 */}
        <main className="max-w-5xl mx-auto px-6 pb-24 min-h-[60vh]">
          {activeTab === 'brain' && <BrainSection />}
          {activeTab === 'body' && <BodySection />}
          {activeTab === 'cycle' && <CycleSection />}
          {activeTab === 'psychology' && <PsychologySection />}
          {activeTab === 'ecig' && <EcigSection />}
          {activeTab === 'longterm' && <LongTermSection />}
          {activeTab === 'calculator' && <CalculatorSection />}
          {activeTab === 'quit' && <QuitSection />}
        </main>

        {/* 页脚 */}
        <footer className="border-t border-slate-800/50 bg-slate-900/30 backdrop-blur-sm py-12 text-center text-slate-500">
          <div className="max-w-4xl mx-auto px-6">
            <p className="flex items-center justify-center gap-2 mb-2 text-slate-400">
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>为了您和家人的健康，请尽早戒烟。</span>
            </p>
            <p className="text-sm opacity-50">交互式医学科普演示 · 抽烟的悖论</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

/* --- 拆分的各个内容模块 --- */

const BrainSection = () => {
  const [dopamine, setDopamine] = useState(20);
  const [isSmoking, setIsSmoking] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDopamine((prev) => (prev > 10 ? prev - 0.5 : prev));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleSmoke = () => {
    setIsSmoking(true);
    setDopamine(100);
    setTimeout(() => setIsSmoking(false), 2000);
  };

  const getDopamineStatus = () => {
    if (dopamine > 80) return { text: "极度愉悦、放松 (被强制激活)", color: "text-emerald-400" };
    if (dopamine > 50) return { text: "感觉良好、平静", color: "text-blue-400" };
    if (dopamine > 20) return { text: "逐渐空虚、轻微焦虑", color: "text-yellow-400" };
    return { text: "强烈渴望下一根烟 (戒断反应)", color: "text-red-400" };
  };

  const status = getDopamineStatus();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        {/* 右上角光晕 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400 rounded-2xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <Zap size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">只需7秒的“多巴胺劫持”</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-10 relative z-10">
          为什么人们会觉得抽烟很爽？答案是<strong className="text-blue-300 font-semibold mx-1">尼古丁</strong>。当吸入烟雾时，尼古丁通过肺部进入血液，只需7到10秒就能冲破血脑屏障，到达大脑。它伪装成神经递质“乙酰胆碱”，强行开启大脑的“奖赏中心”，促使大脑瞬间释放大量的<strong className="text-blue-300 font-semibold mx-1">多巴胺</strong>。
        </p>

        {/* 交互模拟器 */}
        <div className="mt-12 p-8 md:p-10 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] relative z-10">
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-white">互动演示：多巴胺水平模拟器</h3>

          <div className="flex flex-col items-center gap-8">
            <button
              onClick={handleSmoke}
              disabled={isSmoking}
              className={`px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 ${isSmoking
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.4)] border border-orange-400/50'
                }`}
            >
              {isSmoking ? '正在吸收尼古丁...' : '点击模拟：吸一口烟'}
            </button>

            <div className="w-full max-w-lg bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-inner">
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">大脑多巴胺浓度</span>
                <span className={`text-lg font-bold ${status.color}`}>{Math.round(dopamine)}%</span>
              </div>
              <div className="h-8 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-700/50 shadow-inner p-1">
                <div
                  className={`h-full rounded-full transition-all duration-100 ease-linear ${dopamine > 50 ? 'bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400' : 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500'
                    }`}
                  style={{ width: `${dopamine}%` }}
                ></div>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-slate-400 text-sm block mb-1">当前生理感受：</span>
                <span className={`text-xl font-bold tracking-wide ${status.color}`}>{status.text}</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-500 text-center mt-8 bg-slate-800/30 inline-block px-4 py-2 rounded-full max-w-2xl mx-auto flex">
            * 观察多巴胺是如何快速冲顶，随后又无情跌落的。这种跌落带来的空虚和焦虑，就是促使人抽下一根烟的罪魁祸首。
          </p>
        </div>
      </div>
    </div>
  );
};

const BodySection = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="p-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-400 rounded-2xl border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <ShieldAlert size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">身体最初的抗议</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-10 relative z-10">
          任何一个第一次抽烟的人，几乎都不会觉得“好受”。身体其实非常聪明，它会本能地排斥这些有毒物质。那为什么人们还能坚持抽下去？因为大脑的多巴胺强行压制了身体的警告。
        </p>

        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <div className="group bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20">
            <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-500/20">
              <Wind className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">剧烈咳嗽与喉咙痛</h3>
            <p className="text-slate-400 leading-relaxed">
              烟雾中含有数千种化学物质（包括焦油、氨气等）。它们会直接刺激呼吸道黏膜，破坏气管内负责清扫灰尘的纤毛。咳嗽是肺部试图排出毒素的绝望尝试。
            </p>
          </div>

          <div className="group bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-900/20">
            <div className="bg-yellow-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-yellow-500/20">
              <Activity className="text-yellow-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">头晕与心悸（醉烟）</h3>
            <p className="text-slate-400 leading-relaxed">
              烟雾中的<strong className="text-yellow-200 font-semibold mx-1">一氧化碳</strong>会抢夺血液中的氧气，导致大脑瞬间缺氧而产生头晕。同时，尼古丁会刺激肾上腺素分泌，导致心跳异常加速、血压升高。
            </p>
          </div>

          <div className="group bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 md:col-span-2 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-900/20 flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-orange-500/10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 group-hover:bg-orange-500/20">
              <AlertTriangle className="text-orange-400" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">恶心与肠胃不适</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                尼古丁不仅作用于大脑，也会刺激胃肠道的平滑肌和迷走神经，导致初学者经常感到恶心甚至想呕吐。这是身体在识别出“中毒”后全面启动的防御机制。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CycleSection = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 rounded-2xl border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <RefreshCcw size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">完美的陷阱：耐受与戒断</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-16 relative z-10">
          抽烟不仅是一个生理过程，更是一个被尼古丁精心设计的“恶性循环”。很多人以为抽烟是为了“缓解压力”，但实际上，抽烟缓解的<strong className="text-purple-300 font-semibold mx-1">只是由上一根烟引起的戒断压力</strong>。
        </p>

        <div className="relative z-10">
          {/* 桌面端连接线 */}
          <div className="hidden md:block absolute top-24 left-10 right-10 h-1.5 bg-gradient-to-r from-blue-900 via-yellow-900 to-red-900 rounded-full z-0 opacity-50"></div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {/* Step 1 */}
            <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-700/80 shadow-xl relative group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-top-6 md:-left-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center font-black text-2xl border-4 border-slate-900 shadow-lg group-hover:scale-110 transition-transform duration-300">1</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 mt-6 md:mt-2">耐受性建立</h3>
              <p className="text-slate-400 leading-relaxed">
                随着长期吸烟，大脑为了保护自己，会减少多巴胺受体的数量。这意味着，你需要抽<strong className="text-white font-semibold mx-1">更多、更频繁</strong>的烟，才能达到当初一根烟带来的愉悦感。
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-700/80 shadow-xl relative group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-top-6 md:-left-6 w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-2xl flex items-center justify-center font-black text-2xl border-4 border-slate-900 shadow-lg group-hover:scale-110 transition-transform duration-300">2</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400 mt-6 md:mt-2">戒断反应</h3>
              <p className="text-slate-400 leading-relaxed">
                一旦停止吸烟几小时，体内尼古丁水平下降。大脑习惯了高浓度多巴胺，突然断供会导致极度焦虑、烦躁（这不是真实生活压力，纯粹是缺药了）。
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-700/80 shadow-xl relative group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-top-6 md:-left-6 w-14 h-14 bg-gradient-to-br from-red-500 to-rose-700 text-white rounded-2xl flex items-center justify-center font-black text-2xl border-4 border-slate-900 shadow-lg group-hover:scale-110 transition-transform duration-300">3</div>
              <h3 className="text-2xl font-bold mb-4 text-red-400 mt-6 md:mt-2">虚假的“解压”</h3>
              <p className="text-slate-400 leading-relaxed">
                为了消除这种烦躁，你点燃了下一根烟。尼古丁重新进入大脑，消除了戒断反应。你以为抽烟让你放松了，其实它只是<strong className="text-white font-semibold mx-1">把自身造成的痛苦暂时移除</strong>。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 shadow-inner relative z-10 flex items-center gap-6">
          <div className="hidden md:block w-1.5 h-16 bg-purple-500 rounded-full"></div>
          <p className="text-xl md:text-2xl italic text-slate-300 font-medium">
            "吸烟就像是故意穿上一双挤脚的鞋，<br className="md:hidden" />只为了享受脱下它那一瞬间的快感。"
          </p>
        </div>
      </div>
    </div>
  );
};

const PsychologySection = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="p-4 bg-gradient-to-br from-pink-500/20 to-rose-500/20 text-pink-400 rounded-2xl border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
            <Users size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">心理与社会的隐形锁链</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-10 relative z-10">
          烟草工业最成功的营销，就是将吸烟与“成熟”、“叛逆”或“灵感”绑定在一起。除了生理成瘾，心理暗示同样致命。
        </p>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-900/20">
            <div className="inline-block px-4 py-1.5 bg-pink-500/10 text-pink-400 rounded-full text-sm font-bold mb-4 border border-pink-500/20">谎言一</div>
            <h3 className="text-2xl font-bold mb-4 text-white">“抽烟能缓解压力”</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              很多烟民遇到烦心事就点一根烟，觉得压力减轻了。实际上，<strong className="text-pink-200 font-semibold">医学测试表明，吸烟者的平均基础压力水平高于非吸烟者。</strong> 抽烟时感觉到的“放松”，其实是因为抽烟时的<strong className="text-pink-200 font-semibold mx-1">深呼吸</strong>动作，以及尼古丁暂时解除了你因缺烟而产生的戒断焦虑。
            </p>
          </div>
          <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-900/20">
            <div className="inline-block px-4 py-1.5 bg-pink-500/10 text-pink-400 rounded-full text-sm font-bold mb-4 border border-pink-500/20">谎言二</div>
            <h3 className="text-2xl font-bold mb-4 text-white">“递烟是社交破冰”</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              在特定文化中，递烟被视为一种拉近关系的手段。这导致很多人在青少年或初入职场时，为了“合群”而强行忍受初次吸烟的恶心感。一旦这层社交属性成为习惯，戒烟就意味着需要打破现有的社交舒适区，这也是复吸率极高的原因之一。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const EcigSection = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        {/* 背景巨型图标装饰 */}
        <div className="absolute top-0 right-0 p-8 opacity-5 text-cyan-500 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <CloudFog size={300} />
        </div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-5 mb-8">
            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-2xl border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <CloudFog size={36} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">电子烟：披着羊皮的狼</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-10">
            “没有焦油，口味丰富，看起来很潮。” 电子烟用这些噱头吸引了大量原本不会碰香烟的年轻人，但这往往是一个更深的陷阱。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 border-t-4 border-t-cyan-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300">
              <h4 className="font-bold text-2xl mb-4 text-white">更狠的“尼古丁盐”</h4>
              <p className="text-slate-400 leading-relaxed text-lg">
                传统香烟由于刺激性大，抽几口会有“阻力”。而电子烟广泛使用<strong className="text-cyan-300 mx-1">尼古丁盐技术</strong>，它去除了呛人的感觉，极其顺滑，这导致用户会在不知不觉中吸入远超传统香烟的尼古丁量，成瘾速度更快、程度更深。
              </p>
            </div>
            <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 border-t-4 border-t-cyan-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300">
              <h4 className="font-bold text-2xl mb-4 text-white">未知的化学盲盒</h4>
              <p className="text-slate-400 leading-relaxed text-lg">
                虽然没有焦油，但电子烟的烟液在加热金属丝时，会释放甲醛、重金属颗粒以及各种未经验证的挥发性香精。某些香精（如双乙酰）吸入肺部后，已被证实会导致不可逆的<strong className="text-cyan-300 mx-1">“爆米花肺”</strong>。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LongTermSection = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-slate-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="p-4 bg-gradient-to-br from-slate-600/30 to-slate-700/30 text-slate-300 rounded-2xl border border-slate-600/50 shadow-[0_0_15px_rgba(71,85,105,0.2)]">
            <Heart size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">不可逆转的账单</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-12 relative z-10">
          大脑的骗局偷走了你的情绪控制权，而在日复一日的循环中，身体的每一个器官都在默默承受着真实的物理伤害。
        </p>

        <div className="space-y-6 relative z-10">
          <div className="group flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 hover:shadow-xl">
            <div className="p-5 bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-500">
              <Wind size={40} className="text-slate-400" />
            </div>
            <div className="w-full text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 text-white">肺部：焦油的垃圾场</h3>
              <p className="text-slate-400 mb-5 leading-relaxed">
                焦油在肺泡表面形成薄膜，降低氧气交换效率。长期导致慢性阻塞性肺病(COPD)并大幅增加肺癌风险。
              </p>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                <div className="bg-gradient-to-r from-slate-600 to-slate-400 h-full w-[85%] rounded-full"></div>
              </div>
              <p className="text-sm text-slate-500 mt-2 md:text-right">肺功能衰退幅度</p>
            </div>
          </div>

          <div className="group flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 hover:border-red-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/10">
            <div className="p-5 bg-red-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-500">
              <Activity size={40} className="text-red-400" />
            </div>
            <div className="w-full text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 text-red-200">心血管：老化的定时炸弹</h3>
              <p className="text-slate-400 mb-5 leading-relaxed">
                一氧化碳损伤血管壁，尼古丁让血管收缩，导致血液粘稠、动脉粥样硬化加速。
              </p>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                <div className="bg-gradient-to-r from-red-600 to-red-400 h-full w-[70%] rounded-full"></div>
              </div>
              <p className="text-sm text-slate-500 mt-2 md:text-right">心血管硬化指数</p>
            </div>
          </div>

          <div className="group flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/10">
            <div className="p-5 bg-emerald-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-500">
              <ShieldAlert size={40} className="text-emerald-400" />
            </div>
            <div className="w-full text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 text-emerald-200">免疫系统与全身炎症</h3>
              <p className="text-slate-400 leading-relaxed">
                吸烟使人体处于慢性低度炎症状态。不仅伤口愈合慢，还会导致牙周炎发黄，加速皮肤老化。可以说是以透支生命力换取短暂快感。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CalculatorSection = () => {
  const [price, setPrice] = useState(25);
  const [packs, setPacks] = useState(1);

  // 基础计算
  const dailyCost = price * packs;
  const yearlyCost = dailyCost * 365;

  // 智能奖励匹配系统：根据金额自动分配不同的奖励文案和颜色
  const getReward = (amount) => {
    if (amount < 3000) return { text: "几顿豪华海鲜大餐", style: "text-blue-300 bg-blue-900/30 border-blue-800/50" };
    if (amount < 8000) return { text: "一台高配平板电脑", style: "text-indigo-300 bg-indigo-900/30 border-indigo-800/50" };
    if (amount < 15000) return { text: "一台顶级旗舰手机", style: "text-emerald-300 bg-emerald-900/30 border-emerald-800/50" };
    if (amount < 50000) return { text: "一次豪华海外双人游", style: "text-teal-300 bg-teal-900/30 border-teal-800/50" };
    if (amount < 150000) return { text: "一辆不错的代步汽车", style: "text-yellow-300 bg-yellow-900/30 border-yellow-800/50" };
    if (amount < 300000) return { text: "一辆豪华品牌B级车", style: "text-orange-300 bg-orange-900/30 border-orange-800/50" };
    if (amount < 800000) return { text: "二三线城市一套首付", style: "text-rose-300 bg-rose-900/30 border-rose-800/50" };
    return { text: "一笔丰厚的提前退休金", style: "text-fuchsia-300 bg-fuchsia-900/30 border-fuchsia-800/50" };
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 text-yellow-400 rounded-2xl border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            <Calculator size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">点燃的健康与财富</h2>
        </div>

        <p className="text-slate-300 mb-10 text-lg md:text-xl relative z-10">
          我们常常忽略了每天几十块钱的开销。算一算，如果不抽烟，这些钱能为你买到什么？
        </p>

        <div className="grid lg:grid-cols-2 gap-10 relative z-10">
          {/* 左侧：控制器面板 */}
          <div className="space-y-8 bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 shadow-xl">
            <div>
              <label className="flex justify-between text-base text-slate-400 mb-4">
                <span>每包烟平均价格</span>
                <span className="font-bold text-yellow-400 text-xl bg-yellow-400/10 px-3 py-1 rounded-lg">¥ {price}</span>
              </label>
              <input
                type="range" min="10" max="100" step="5"
                value={price} onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-yellow-400 h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer border border-slate-700"
              />
            </div>

            <div>
              <label className="flex justify-between text-base text-slate-400 mb-4">
                <span>平均每天消耗量</span>
                <span className="font-bold text-yellow-400 text-xl bg-yellow-400/10 px-3 py-1 rounded-lg">{packs} 包</span>
              </label>
              <input
                type="range" min="0.5" max="3" step="0.5"
                value={packs} onChange={(e) => setPacks(Number(e.target.value))}
                className="w-full accent-yellow-400 h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer border border-slate-700"
              />
            </div>

            <div className="p-6 bg-gradient-to-r from-yellow-900/40 to-amber-900/20 rounded-2xl border border-yellow-700/50 flex items-center justify-between shadow-[inset_0_0_20px_rgba(234,179,8,0.1)] mt-8">
              <span className="text-slate-300 text-lg">每日烧钱：</span>
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-600">¥ {dailyCost}</span>
            </div>
          </div>

          {/* 右侧：动态计算结果区 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Coins size={28} className="text-yellow-400" />
              这笔钱的未来价值
            </h3>

            {[
              { label: "1年后可省下", years: 1 },
              { label: "5年后可省下", years: 5 },
              { label: "10年后可省下", years: 10 },
              { label: "20年后可省下", years: 20 },
            ].map((item, index) => {
              const totalAmount = yearlyCost * item.years;
              const reward = getReward(totalAmount);

              return (
                <div key={index} className="group bg-slate-900/80 p-5 rounded-2xl border border-slate-700/50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 hover:border-slate-500/40 transition-all duration-300 hover:shadow-lg">
                  <div>
                    <div className="text-slate-400 text-sm mb-1">{item.label}</div>
                    <div className="text-white font-bold text-2xl tracking-wide transition-all">
                      ¥ {totalAmount.toLocaleString()}
                    </div>
                  </div>
                  <div className={`text-sm font-medium px-4 py-2 rounded-full border text-center transition-all duration-500 ${reward.style}`}>
                    {reward.text}
                  </div>
                </div>
              );
            })}

            <p className="text-sm text-slate-500 text-right mt-4 italic">* 未包含通货膨胀和理财复利，实际损失将更惊人。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuitSection = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-2xl border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Hourglass size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">身体的奇迹修复：时间线</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-12 relative z-10">
          人体是一台有着惊人自愈能力的机器。无论你抽了多久，从你掐灭最后一根烟的那一刻起，奇迹就开始发生了。
        </p>

        {/* 垂直时间轴 */}
        <div className="relative border-l-4 border-slate-700/50 ml-4 md:ml-8 space-y-12 pb-8 relative z-10">

          <div className="relative pl-10 md:pl-12 group">
            <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-3">20 分钟后</h3>
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
              <p className="text-slate-300 leading-relaxed text-lg">因尼古丁飙升的心率和血压开始下降，手脚的温度恢复正常。</p>
            </div>
          </div>

          <div className="relative pl-10 md:pl-12 group">
            <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-emerald-400 border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-300 mb-3">12 小时后</h3>
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-400/30 transition-colors">
              <p className="text-slate-300 leading-relaxed text-lg">血液中的一氧化碳（毒气）浓度降至正常水平，血液含氧量恢复，身体器官终于能“大口呼吸”了。</p>
            </div>
          </div>

          <div className="relative pl-10 md:pl-12 group">
            <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-teal-400 border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-xl md:text-2xl font-bold text-teal-300 mb-3">2 到 3 周后</h3>
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700/50 hover:border-teal-400/30 transition-colors">
              <p className="text-slate-300 leading-relaxed text-lg">戒断反应的高峰期过去。肺部功能显著改善，走路、爬楼梯不再气喘吁吁，血液循环大幅增强。</p>
            </div>
          </div>

          <div className="relative pl-10 md:pl-12 group">
            <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-cyan-400 border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-xl md:text-2xl font-bold text-cyan-300 mb-3">1 到 9 个月内</h3>
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-400/30 transition-colors">
              <p className="text-slate-300 leading-relaxed text-lg">肺部的纤毛（清扫灰尘的毛刷）重新长出，清理肺部焦油和粘液的能力恢复，咳嗽和气短大幅减少。</p>
            </div>
          </div>

          <div className="relative pl-10 md:pl-12 group">
            <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-blue-400 border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-3">1 年后</h3>
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-400/30 transition-colors">
              <p className="text-slate-300 leading-relaxed text-lg">你患上冠心病的风险骤降了一半，与持续吸烟者相比，心脏病发作的风险大幅降低。</p>
            </div>
          </div>

          <div className="relative pl-10 md:pl-12 group">
            <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-indigo-400 border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-xl md:text-2xl font-bold text-indigo-300 mb-3">10 年后</h3>
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-400/30 transition-colors">
              <p className="text-slate-300 leading-relaxed text-lg">死于肺癌的风险降至吸烟者的一半左右。口腔癌、喉癌、食道癌的风险显著降低。</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;