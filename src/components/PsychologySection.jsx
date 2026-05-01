import { Users } from 'lucide-react';
import { ANIMATION_CLASS } from '../constants';

const PsychologySection = () => {
  return (
    <div className={`space-y-8 ${ANIMATION_CLASS}`}>
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="p-4 bg-gradient-to-br from-pink-500/20 to-rose-500/20 text-pink-400 rounded-2xl border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
            <Users size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">心理与社会的隐形锁链</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-10 relative z-10">
          烟草工业最成功的营销，就是将吸烟与"成熟"、"叛逆"或"灵感"绑定在一起。除了生理成瘾，心理暗示与社会压力同样致命。
        </p>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-900/20">
            <div className="inline-block px-4 py-1.5 bg-pink-500/10 text-pink-400 rounded-full text-sm font-bold mb-4 border border-pink-500/20">谎言一</div>
            <h3 className="text-2xl font-bold mb-4 text-white">"抽烟能缓解压力"</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              很多烟民遇到烦心事就点一根烟，觉得压力减轻了。实际上，<strong className="text-pink-200 font-semibold">多项流行病学研究发现，吸烟者的基础压力与焦虑水平普遍高于非吸烟者。</strong> 抽烟时的"放松感"，更多来自慢速深呼吸的行为本身（深呼吸激活副交感神经系统），以及尼古丁短暂解除了戒断引发的焦虑。这并不是在处理真实的生活压力，而是在"灭火"——火就是尼古丁自己点燃的。
            </p>
          </div>
          <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-900/20">
            <div className="inline-block px-4 py-1.5 bg-pink-500/10 text-pink-400 rounded-full text-sm font-bold mb-4 border border-pink-500/20">谎言二</div>
            <h3 className="text-2xl font-bold mb-4 text-white">"递烟是社交破冰"</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              在特定文化中，递烟被视为拉近关系的手段。很多人在青少年或初入职场时，为了"合群"而强行忍受初次吸烟的恶心感。一旦吸烟被绑定为社交习惯，戒烟就意味着需要重新定义自己在群体中的角色——孤立感和社交压力是极高的复吸诱因之一。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologySection;
