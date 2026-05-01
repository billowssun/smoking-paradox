import { CloudFog } from 'lucide-react';
import { ANIMATION_CLASS } from '../constants';

const EcigSection = () => {
  return (
    <div className={`space-y-8 ${ANIMATION_CLASS}`}>
      <div className="bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
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
            "没有焦油，口味丰富，看起来很潮。" 电子烟用这些噱头吸引了大量原本不会碰香烟的年轻人。尽管它对已吸烟者作为减害替代可能有其价值，但对从未吸烟者来说，仍是一个危险入口。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 border-t-4 border-t-cyan-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300">
              <h4 className="font-bold text-2xl mb-4 text-white">更顺滑的"尼古丁盐"</h4>
              <p className="text-slate-400 leading-relaxed text-lg">
                传统香烟由于刺激性大，抽几口会有自然"阻力"。而电子烟广泛使用<strong className="text-cyan-300 mx-1">尼古丁盐技术</strong>，去除了呛人的刺激感，极其顺滑。这导致部分用户在不经意间持续吸入，摄入的尼古丁量可能超过传统香烟，成瘾更快、更深。
              </p>
            </div>
            <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700/50 border-t-4 border-t-cyan-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300">
              <h4 className="font-bold text-2xl mb-4 text-white">雾化产生的化学风险</h4>
              <p className="text-slate-400 leading-relaxed text-lg">
                烟液在加热金属丝的过程中，可能释放甲醛、重金属颗粒等副产物。某些奶油/黄油口味香精含有的<strong className="text-cyan-300 mx-1">双乙酰</strong>，已被证实可导致慢性呼吸系统损伤（"爆米花肺"）。需指出的是，传统香烟烟雾中双乙酰含量更高，但这并不意味着电子烟就安全——长期影响尚不完全明确。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcigSection;
