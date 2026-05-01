import { Heart, Wind, Activity, ShieldAlert } from 'lucide-react';
import { ANIMATION_CLASS } from '../constants';

const LongTermSection = () => {
  return (
    <div className={`space-y-6 md:space-y-8 ${ANIMATION_CLASS}`}>
      <div className="bg-slate-800/40 backdrop-blur-md p-5 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-32 md:w-64 h-32 md:h-64 bg-slate-500/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 mb-5 md:mb-8 relative z-10">
          <div className="p-3 md:p-4 bg-gradient-to-br from-slate-600/30 to-slate-700/30 text-slate-300 rounded-xl md:rounded-2xl border border-slate-600/50 shadow-[0_0_15px_rgba(71,85,105,0.2)]">
            <Heart className="size-7 md:size-9" />
          </div>
          <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white">不可逆转的账单</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-sm md:text-lg mb-8 md:mb-12 relative z-10">
          大脑的骗局偷走了你的情绪控制权，而在日复一日的循环中，身体的每一个器官都在默默承受着真实的物理伤害。以下为吸烟人群相对于非吸烟人群的患病风险增幅（参考 WHO 与 CDC 流行病学数据）。
        </p>

        <div className="space-y-6 relative z-10">
          <div className="group flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-900/80 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 md:hover:shadow-xl">
            <div className="p-4 md:p-5 bg-slate-800 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform duration-500">
              <Wind className="text-slate-400 size-8 md:size-10" />
            </div>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-bold mb-3 text-white">肺部：焦油的垃圾场</h3>
              <p className="text-slate-400 mb-5 leading-relaxed">
                焦油在肺泡表面形成薄膜，降低氧气交换效率。长期导致慢性阻塞性肺病(COPD)并大幅增加肺癌风险——吸烟者患肺癌的几率约为非吸烟者的<strong className="text-white mx-1">15–30 倍</strong>。
              </p>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                <div className="bg-gradient-to-r from-slate-600 to-slate-400 h-full w-[85%] rounded-full"></div>
              </div>
              <p className="text-xs md:text-sm text-slate-500 mt-2">吸烟者肺功能衰退相对风险指数</p>
            </div>
          </div>

          <div className="group flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-900/80 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50 hover:border-red-500/40 transition-all duration-300 md:hover:shadow-xl md:hover:shadow-red-900/10">
            <div className="p-4 md:p-5 bg-red-900/30 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform duration-500">
              <Activity className="text-red-400 size-8 md:size-10" />
            </div>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-bold mb-3 text-red-200">心血管：老化的定时炸弹</h3>
              <p className="text-slate-400 mb-5 leading-relaxed">
                一氧化碳损伤血管壁，尼古丁让血管收缩，导致血液粘稠、动脉粥样硬化加速——吸烟者冠心病风险为非吸烟者的<strong className="text-red-200 mx-1">2–4 倍</strong>，中风风险提升至少<strong className="text-red-200 mx-1">2 倍</strong>。
              </p>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                <div className="bg-gradient-to-r from-red-600 to-red-400 h-full w-[70%] rounded-full"></div>
              </div>
              <p className="text-xs md:text-sm text-slate-500 mt-2">吸烟者心血管疾病相对风险指数</p>
            </div>
          </div>

          <div className="group flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-900/80 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50 hover:border-emerald-500/40 transition-all duration-300 md:hover:shadow-xl md:hover:shadow-emerald-900/10">
            <div className="p-4 md:p-5 bg-emerald-900/30 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform duration-500">
              <ShieldAlert className="text-emerald-400 size-8 md:size-10" />
            </div>
            <div className="w-full text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-bold mb-3 text-emerald-200">免疫系统与全身炎症</h3>
              <p className="text-slate-400 leading-relaxed">
                吸烟使人体处于慢性低度炎症状态。伤口愈合迟缓，牙周炎与口腔疾病高发，皮肤胶原蛋白加速流失导致早衰。此外，吸烟还被证实与<strong className="text-emerald-200 mx-1">膀胱癌、胃癌、宫颈癌</strong>等多种癌症相关。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongTermSection;
