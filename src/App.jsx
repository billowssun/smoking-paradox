import React, { useState, useEffect } from 'react';
import { Brain, Activity, RefreshCcw, AlertTriangle, Wind, Heart, ShieldAlert, Zap } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('brain');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      {/* Header */}
      <header className="pt-16 pb-12 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          抽烟的悖论
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 font-light">
          短暂的愉悦 vs 长期的代价：解密尼古丁背后的生理博弈
        </p>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center flex-wrap gap-2 px-4 mb-12 max-w-4xl mx-auto">
        {[
          { id: 'brain', icon: <Brain size={20} />, label: '大脑的骗局' },
          { id: 'body', icon: <ShieldAlert size={20} />, label: '身体的抗议' },
          { id: 'cycle', icon: <RefreshCcw size={20} />, label: '成瘾循环' },
          { id: 'longterm', icon: <AlertTriangle size={20} />, label: '长期代价' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-24">
        {activeTab === 'brain' && <BrainSection />}
        {activeTab === 'body' && <BodySection />}
        {activeTab === 'cycle' && <CycleSection />}
        {activeTab === 'longterm' && <LongTermSection />}
      </main>
    </div>
  );
};

/* --- Sections --- */

const BrainSection = () => {
  const [dopamine, setDopamine] = useState(20);
  const [isSmoking, setIsSmoking] = useState(false);

  // Dopamine drain effect
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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl">
            <Zap size={32} />
          </div>
          <h2 className="text-3xl font-bold">只需7秒的“多巴胺劫持”</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg mb-6">
          为什么人们会觉得抽烟很爽？答案是<strong className="text-white font-semibold">尼古丁</strong>。当吸入烟雾时，尼古丁通过肺部进入血液，只需7到10秒就能冲破血脑屏障，到达大脑。它伪装成神经递质“乙酰胆碱”，强行开启大脑的“奖赏中心”，促使大脑瞬间释放大量的<strong className="text-white font-semibold">多巴胺</strong>。
        </p>
        
        {/* Interactive Simulator */}
        <div className="mt-10 p-6 bg-slate-900 rounded-2xl border border-slate-700 shadow-inner">
          <h3 className="text-xl font-semibold mb-4 text-center">互动演示：多巴胺水平模拟器</h3>
          
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={handleSmoke}
              disabled={isSmoking}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                isSmoking 
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.4)]'
              }`}
            >
              {isSmoking ? '正在吸收尼古丁...' : '模拟吸一口烟'}
            </button>

            <div className="w-full max-w-md">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-400">大脑多巴胺浓度</span>
                <span className={`text-sm font-bold ${status.color}`}>{Math.round(dopamine)}%</span>
              </div>
              <div className="h-6 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div 
                  className={`h-full transition-all duration-100 ease-linear ${
                    dopamine > 50 ? 'bg-gradient-to-r from-blue-500 to-emerald-400' : 'bg-gradient-to-r from-red-500 to-yellow-500'
                  }`}
                  style={{ width: `${dopamine}%` }}
                ></div>
              </div>
              <p className="text-center mt-4 text-lg">
                当前状态：<span className={`font-semibold ${status.color}`}>{status.text}</span>
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500 text-center mt-6">
            * 观察多巴胺是如何快速冲顶，随后又无情跌落的。这种跌落带来的焦虑，就是促使人抽下一根烟的元凶。
          </p>
        </div>
      </div>
    </div>
  );
};

const BodySection = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-red-500/20 text-red-400 rounded-2xl">
            <ShieldAlert size={32} />
          </div>
          <h2 className="text-3xl font-bold">身体最初的抗议</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg mb-8">
          任何一个第一次抽烟的人，几乎都不会觉得“好受”。身体其实非常聪明，它会本能地排斥这些有毒物质。那为什么人们还能坚持抽下去？因为大脑的多巴胺强行压制了身体的警告。
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
            <Wind className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">剧烈咳嗽与喉咙痛</h3>
            <p className="text-slate-400">
              烟雾中含有数千种化学物质（包括焦油、氨气等）。它们会直接刺激呼吸道黏膜，破坏气管内负责清扫灰尘的纤毛。咳嗽是肺部试图排出毒素的绝望尝试。
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
            <Activity className="text-yellow-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">头晕与心悸（醉烟）</h3>
            <p className="text-slate-400">
              烟雾中的<strong className="text-white font-semibold">一氧化碳</strong>会抢夺血液中的氧气，导致大脑瞬间缺氧而产生头晕（俗称醉烟）。同时，尼古丁会刺激肾上腺素分泌，导致心跳异常加速、血压升高。
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 md:col-span-2">
            <AlertTriangle className="text-orange-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">恶心与肠胃不适</h3>
            <p className="text-slate-400">
              尼古丁不仅作用于大脑，也会刺激胃肠道的平滑肌和迷走神经，导致初学者经常感到恶心甚至想呕吐。这是身体在识别出“中毒”后启动的防御机制。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CycleSection = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-purple-500/20 text-purple-400 rounded-2xl">
            <RefreshCcw size={32} />
          </div>
          <h2 className="text-3xl font-bold">完美的陷阱：耐受与戒断</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg mb-12">
          抽烟不仅是一个生理过程，更是一个被尼古丁精心设计的“恶性循环”。很多人以为抽烟是为了“缓解压力”，但实际上，抽烟缓解的<strong className="text-white font-semibold">只是由上一根烟引起的戒断压力</strong>。
        </p>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-700 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {/* Step 1 */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-600 shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-slate-900">1</div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">耐受性建立</h3>
              <p className="text-slate-400 text-sm">
                随着长期吸烟，大脑为了保护自己，会减少多巴胺受体的数量。这意味着，你需要抽<strong className="text-white font-semibold">更多、更频繁</strong>的烟，才能达到当初一根烟带来的愉悦感。
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-600 shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-slate-900">2</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">戒断反应</h3>
              <p className="text-slate-400 text-sm">
                一旦停止吸烟几小时，体内尼古丁水平下降。大脑习惯了高浓度的多巴胺，突然断供会导致极度的焦虑、烦躁、注意力无法集中（这不是真正的生活压力，而是缺药了）。
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-600 shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-slate-900">3</div>
              <h3 className="text-xl font-bold mb-3 text-red-400">虚假的“解压”</h3>
              <p className="text-slate-400 text-sm">
                为了消除这种极度的烦躁，你点燃了下一根烟。尼古丁重新进入大脑，消除了戒断反应。你以为抽烟让你“放松”了，其实它只是把<strong className="text-white font-semibold">它自己造成的痛苦暂时移除</strong>罢了。
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-slate-900 p-6 rounded-xl border border-slate-700 text-center">
          <p className="text-lg italic text-slate-300">
            "吸烟就像是故意穿上一双挤脚的鞋，只为了享受脱下它那一瞬间的快感。"
          </p>
        </div>
      </div>
    </div>
  );
};

const LongTermSection = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-slate-700 text-slate-300 rounded-2xl">
            <Heart size={32} />
          </div>
          <h2 className="text-3xl font-bold">不可逆转的账单</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg mb-8">
          大脑的骗局不仅偷走了你的情绪控制权，在日复一日的循环中，身体的每一个器官都在默默承受着真实的、累积的物理伤害。这是一张迟早要兑现的账单。
        </p>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-start gap-6 bg-slate-900 p-6 rounded-2xl border border-slate-700">
            <div className="p-4 bg-slate-800 rounded-xl">
              <Wind size={40} className="text-slate-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">肺部：焦油的垃圾场</h3>
              <p className="text-slate-400 mb-3">
                焦油会在肺泡表面形成一层黑色的粘稠薄膜，大幅降低氧气交换效率。长期下来会导致慢性阻塞性肺疾病（COPD）、肺气肿，并使肺癌的风险增加近20倍。
              </p>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-slate-500 h-full w-[85%]"></div>
              </div>
              <p className="text-xs text-slate-500 mt-1 text-right">肺功能随烟龄衰退幅度剧增</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6 bg-slate-900 p-6 rounded-2xl border border-slate-700">
            <div className="p-4 bg-red-900/30 rounded-xl">
              <Activity size={40} className="text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-red-200">心血管：老化的定时炸弹</h3>
              <p className="text-slate-400 mb-3">
                一氧化碳损伤血管内壁，尼古丁让血管收缩。这两者结合会导致血液粘稠、动脉粥样硬化加速。冠心病、心肌梗死和中风的几率成倍增加。
              </p>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-red-500 h-full w-[70%]"></div>
              </div>
              <p className="text-xs text-slate-500 mt-1 text-right">心血管硬化风险指数</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6 bg-slate-900 p-6 rounded-2xl border border-slate-700">
             <div className="p-4 bg-emerald-900/30 rounded-xl">
              <ShieldAlert size={40} className="text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-emerald-200">免疫系统与全身炎症</h3>
              <p className="text-slate-400">
                吸烟使人体处于慢性的低度炎症状态。不仅伤口愈合变慢，牙齿发黄松动（牙周炎），还会加速皮肤老化（破坏胶原蛋白）。可以说，抽烟是在以透支全身生命力为代价换取多巴胺。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;