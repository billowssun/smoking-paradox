import { RefreshCcw } from 'lucide-react';
import { ANIMATION_CLASS } from '../constants';

const CycleSection = () => {
  return (
    <div className={`space-y-8 ${ANIMATION_CLASS}`}>
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 rounded-2xl border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <RefreshCcw size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">完美的陷阱：耐受与戒断</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-16 relative z-10">
          抽烟不仅是一个生理过程，更是一个被尼古丁精心设计的"恶性循环"。很多人以为抽烟是为了"缓解压力"，但实际上，抽烟缓解的<strong className="text-purple-300 font-semibold mx-1">只是由上一根烟引起的戒断压力</strong>。
        </p>

        <div className="relative z-10">
          <div className="hidden md:block absolute top-24 left-10 right-10 h-1.5 bg-gradient-to-r from-blue-900 via-yellow-900 to-red-900 rounded-full z-0 opacity-50"></div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-700/80 shadow-xl relative group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-top-6 md:-left-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center font-black text-2xl border-4 border-slate-900 shadow-lg group-hover:scale-110 transition-transform duration-300">1</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 mt-6 md:mt-2">耐受性建立</h3>
              <p className="text-slate-400 leading-relaxed">
                随着长期吸烟，大脑为了保护自己，会减少多巴胺受体的数量。这意味着，你需要抽<strong className="text-white font-semibold mx-1">更多、更频繁</strong>的烟，才能达到当初一根烟带来的愉悦感。
              </p>
            </div>

            <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-700/80 shadow-xl relative group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-top-6 md:-left-6 w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-2xl flex items-center justify-center font-black text-2xl border-4 border-slate-900 shadow-lg group-hover:scale-110 transition-transform duration-300">2</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400 mt-6 md:mt-2">戒断反应</h3>
              <p className="text-slate-400 leading-relaxed">
                一旦停止吸烟几小时，体内尼古丁水平下降。大脑习惯了高浓度多巴胺，突然断供会导致极度焦虑、烦躁（这不是真实生活压力，纯粹是缺药了）。
              </p>
            </div>

            <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-700/80 shadow-xl relative group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-top-6 md:-left-6 w-14 h-14 bg-gradient-to-br from-red-500 to-rose-700 text-white rounded-2xl flex items-center justify-center font-black text-2xl border-4 border-slate-900 shadow-lg group-hover:scale-110 transition-transform duration-300">3</div>
              <h3 className="text-2xl font-bold mb-4 text-red-400 mt-6 md:mt-2">虚假的"解压"</h3>
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

export default CycleSection;
