import { Hourglass } from 'lucide-react';
import { ANIMATION_CLASS } from '../constants';

const QuitSection = () => {
  return (
    <div className={`space-y-8 ${ANIMATION_CLASS}`}>
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-2xl border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Hourglass size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">身体的修复进程：时间线</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-8 relative z-10">
          人体有着惊人的自愈能力。无论你吸了多久，从掐灭最后一根烟的那一刻起，修复就开始了。需要注意的是，某些结构性损伤（如肺气肿导致的肺泡破坏）可能无法完全逆转，但戒烟依然能显著减缓病程恶化、延长健康寿命。
        </p>
        <div className="mb-8 p-4 bg-slate-900/80 rounded-2xl border border-slate-700/50 relative z-10">
          <p className="text-slate-400 text-sm leading-relaxed">
            <strong className="text-emerald-400">戒烟辅助建议：</strong>
            可咨询医生了解<strong className="text-emerald-300 mx-1">尼古丁替代疗法</strong>（贴片、口香糖等）、
            <strong className="text-emerald-300 mx-1">伐尼克兰</strong>（畅沛）或
            <strong className="text-emerald-300 mx-1">安非他酮</strong>等处方药物，它们被 WHO 列为一线戒烟方案，可大幅提高成功率。
          </p>
        </div>

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
              <p className="text-slate-300 leading-relaxed text-lg">血液中的一氧化碳（毒气）浓度降至正常水平，血液含氧量恢复，身体器官终于能"大口呼吸"了。</p>
            </div>
          </div>

          <div className="relative pl-10 md:pl-12 group">
            <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-teal-400 border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-xl md:text-2xl font-bold text-teal-300 mb-3">2 到 3 周后</h3>
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700/50 hover:border-teal-400/30 transition-colors">
              <p className="text-slate-300 leading-relaxed text-lg">戒断反应的高峰期逐渐过去。肺功能开始改善，血液循环增强。对于无基础肺病者，日常活动已能明显感觉更轻松。</p>
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
              <p className="text-slate-300 leading-relaxed text-lg">患上冠心病的风险降至吸烟时的约一半，与持续吸烟者相比，心脏病发作风险大幅降低。</p>
            </div>
          </div>

          <div className="relative pl-10 md:pl-12 group">
            <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-indigo-400 border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>
            <h3 className="text-xl md:text-2xl font-bold text-indigo-300 mb-3">10 年后</h3>
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-400/30 transition-colors">
              <p className="text-slate-300 leading-relaxed text-lg">死于肺癌的风险降至吸烟时的一半左右。口腔癌、喉癌、食道癌、膀胱癌等风险也显著降低。需注意：对于曾长期重度吸烟者，部分癌症风险仍高于从未吸烟者，但已远低于持续吸烟者。</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuitSection;
