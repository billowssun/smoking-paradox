import { ShieldAlert, Wind, Activity, AlertTriangle } from 'lucide-react';
import { ANIMATION_CLASS } from '../constants';

const BodySection = () => {
  return (
    <div className={`space-y-8 ${ANIMATION_CLASS}`}>
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="p-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-400 rounded-2xl border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <ShieldAlert size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">身体最初的抗议</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-10 relative z-10">
          大多数第一次尝试吸烟的人，几乎都不会觉得"好受"。身体会本能地排斥这些有毒物质——咽喉刺痛、剧烈咳嗽、头晕恶心——这是健康的防御反应。但尼古丁释放的多巴胺会不断驱动人"再试一次"，直到身体逐渐麻木、反应减弱。
        </p>

        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <div className="group bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20">
            <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-500/20">
              <Wind className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">剧烈咳嗽与喉咙痛</h3>
            <p className="text-slate-400 leading-relaxed">
              烟雾中含有数千种化学物质（包括焦油、氨气等）。它们直接刺激呼吸道黏膜，破坏气管内负责清扫灰尘的纤毛。咳嗽是肺部试图排出毒素的本能反应。
            </p>
          </div>

          <div className="group bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-900/20">
            <div className="bg-yellow-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-yellow-500/20">
              <Activity className="text-yellow-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">头晕与心悸（醉烟）</h3>
            <p className="text-slate-400 leading-relaxed">
              烟雾中的<strong className="text-yellow-200 font-semibold mx-1">一氧化碳</strong>会与血红蛋白结合，降低血液携氧能力，导致大脑供氧不足而产生头晕。同时，尼古丁刺激肾上腺素分泌，引发心跳加速、血压升高。
            </p>
          </div>

          <div className="group bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 md:col-span-2 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-900/20 flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-orange-500/10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 group-hover:bg-orange-500/20">
              <AlertTriangle className="text-orange-400" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">恶心与肠胃不适 — 以及二手烟的危害</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                尼古丁刺激胃肠道平滑肌和迷走神经，导致初学者常感恶心甚至呕吐——这是身体识别"中毒"后启动的防御机制。同时要警惕：<strong className="text-orange-200 font-semibold mx-1">二手烟</strong>同样含有 70 多种致癌物。即使你不吸烟，长期暴露在他人的烟雾中，患肺癌的风险也会增加 20–30%（WHO 数据）。对孕妇而言，二手烟还会增加胎儿畸形、早产和低出生体重的风险。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
