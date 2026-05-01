import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { ANIMATION_CLASS } from '../constants';

const BrainSection = () => {
  const [dopamine, setDopamine] = useState(20);
  const [isSmoking, setIsSmoking] = useState(false);
  const [smokeCount, setSmokeCount] = useState(0);

  const tolerance = smokeCount;
  const floor = 10 + tolerance * 3;
  const decayPerTick = 0.15 + tolerance * 0.04;

  useEffect(() => {
    const t = setInterval(() => {
      setDopamine((prev) => (prev > floor ? Math.max(prev - decayPerTick, floor) : prev));
    }, 200);
    return () => clearInterval(t);
  }, [floor, decayPerTick]);

  const handleSmoke = () => {
    if (isSmoking) return;
    setIsSmoking(true);
    setSmokeCount((c) => c + 1);
    const boost = Math.max(100 - tolerance * 5, 50);
    setDopamine((prev) => Math.max(prev, boost));
    setTimeout(() => setIsSmoking(false), 1500);
  };

  const statusText = dopamine > 75 ? "多巴胺大幅超标" : dopamine > 45 ? "感觉良好" : dopamine > 25 ? "逐渐回到基线" : "戒断不适";
  const statusColor = dopamine > 75 ? "text-emerald-400" : dopamine > 45 ? "text-blue-400" : dopamine > 25 ? "text-slate-400" : "text-red-400";

  return (
    <div className={`space-y-8 ${ANIMATION_CLASS}`}>
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400 rounded-2xl border border-blue-500/20">
            <Zap size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">只需7秒的"多巴胺劫持"</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-10 relative z-10">
          为什么人们会觉得抽烟很爽？答案是<strong className="text-blue-300 font-semibold mx-1">尼古丁</strong>。当吸入烟雾时，尼古丁通过肺部进入血液，只需7到10秒就能到达大脑。它模仿神经递质"乙酰胆碱"，激活大脑奖赏回路，促使多巴胺大量释放——远超日常自然愉悦的水平。
        </p>

        <div className="mt-12 p-8 md:p-10 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] relative z-10">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-white">互动演示：多巴胺水平模拟器</h3>
          <p className="text-slate-400 text-sm text-center mb-6">
            每次吸烟都会抬升多巴胺，但随着耐受度增加，<strong className="text-yellow-400">戒断谷底越来越高、跌落越来越快</strong>。试试连续点击。
          </p>

          <div className="flex flex-col items-center gap-8">
            <button
              type="button"
              onClick={handleSmoke}
              disabled={isSmoking}
              className={`px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 ${
                isSmoking
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                  : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white cursor-pointer hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.4)] border border-orange-400/50'
              }`}
            >
              {isSmoking ? '尼古丁吸收中…' : '点击模拟：吸一口烟'}
            </button>

            <div className="w-full max-w-lg bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">突触多巴胺水平</span>
                <span className={`text-lg font-bold ${statusColor}`}>{Math.round(dopamine)} / 100</span>
              </div>
              <div className="h-8 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-700/50 p-1">
                <div
                  className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400"
                  style={{ width: `${Math.min(dopamine, 100)}%` }}
                />
              </div>
              <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <span className={`text-lg font-bold ${statusColor}`}>{statusText}</span>
                {smokeCount > 0 && (
                  <div className="mt-2 pt-2 border-t border-slate-800 flex justify-center gap-5 text-sm text-slate-500">
                    <span>已吸 <strong className="text-white">{smokeCount}</strong> 次</span>
                    <span>耐受 <strong className="text-yellow-400">+{tolerance}</strong></span>
                    <span>谷底 <strong className="text-red-400">{floor}</strong></span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-500 text-center mt-8 bg-slate-800/30 inline-block px-4 py-2 rounded-full max-w-2xl mx-auto">
            * 每吸一口，多巴胺立即飙升；但大脑会逐渐调节受体敏感度（耐受性），使戒断反应越来越难熬。更多细节见「成瘾循环」章节。
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrainSection;
