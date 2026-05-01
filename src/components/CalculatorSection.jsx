import { useState } from 'react';
import { Calculator, Coins } from 'lucide-react';
import { ANIMATION_CLASS } from '../constants';

const REWARD_ITEMS = [
  { price: 30, name: "杯高端咖啡", icon: "☕", style: "text-amber-300 bg-amber-900/30 border-amber-800/50" },
  { price: 2000, name: "双限量版潮鞋", icon: "👟", style: "text-blue-300 bg-blue-900/30 border-blue-800/50" },
  { price: 8000, name: "部顶级旗舰手机", icon: "📱", style: "text-emerald-300 bg-emerald-900/30 border-emerald-800/50" },
  { price: 20000, name: "台顶配生产力电脑", icon: "💻", style: "text-cyan-300 bg-cyan-900/30 border-cyan-800/50" },
  { price: 50000, name: "次海外豪华双人游", icon: "✈️", style: "text-teal-300 bg-teal-900/30 border-teal-800/50" },
  { price: 120000, name: "辆家用代步汽车", icon: "🚗", style: "text-yellow-300 bg-yellow-900/30 border-yellow-800/50" },
  { price: 300000, name: "辆豪华B级轿车", icon: "🏎️", style: "text-orange-300 bg-orange-900/30 border-orange-800/50" },
  { price: 600000, name: "套核心区房产首付", icon: "🏠", style: "text-rose-300 bg-rose-900/30 border-rose-800/50" },
  { price: 1500000, name: "套全款精装房产", icon: "🏡", style: "text-purple-300 bg-purple-900/30 border-purple-800/50" }
];

const getEquivalents = (amount) => {
  let affordables = REWARD_ITEMS.filter(item => amount >= item.price && (amount / item.price) <= 60);
  if (affordables.length === 0) {
    const maxItem = REWARD_ITEMS[REWARD_ITEMS.length - 1];
    return [{ ...maxItem, count: Math.floor(amount / maxItem.price) }];
  }
  return affordables.slice(-2).reverse().map(item => ({
    ...item,
    count: Math.floor(amount / item.price)
  }));
};

const calculateCompound = (yearlyCost, years) => {
  const rate = 0.04;
  return Math.round(yearlyCost * (Math.pow(1 + rate, years) - 1) / rate);
};

const CalculatorSection = () => {
  const [price, setPrice] = useState(25);
  const [packs, setPacks] = useState(1);

  const handlePriceChange = (e) => {
    const val = Number(e.target.value);
    if (val >= 10 && val <= 100) setPrice(val);
  };

  const handlePacksChange = (e) => {
    const val = Number(e.target.value);
    if (val >= 0.5 && val <= 4) setPacks(val);
  };

  const dailyCost = price * packs;
  const yearlyCost = dailyCost * 365;

  return (
    <div className={`space-y-6 md:space-y-8 ${ANIMATION_CLASS}`}>
      <div className="bg-slate-800/40 backdrop-blur-md p-5 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 md:w-80 h-48 md:h-80 bg-yellow-500/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-3 md:gap-5 mb-5 md:mb-8 relative z-10">
          <div className="p-3 md:p-4 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 text-yellow-400 rounded-xl md:rounded-2xl border border-yellow-500/20">
            <Calculator className="size-7 md:size-9" />
          </div>
          <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white">点燃的健康与财富</h2>
        </div>

        <p className="text-slate-300 mb-5 md:mb-10 text-sm md:text-lg relative z-10">
          除了看得见的烟钱，你还损失了这笔钱本可以带来的<strong className="text-yellow-400 mx-1">理财收益（机会成本）</strong>。
        </p>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-5 md:gap-10 relative z-10">
          <div className="lg:col-span-5 space-y-5 md:space-y-8 bg-slate-900/80 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50 shadow-xl lg:sticky lg:top-24 h-fit">
            <div>
              <label className="flex justify-between text-xs md:text-base text-slate-400 mb-3 md:mb-4">
                <span>每包烟平均价格</span>
                <span className="font-bold text-yellow-400 text-base md:text-xl bg-yellow-400/10 px-2 md:px-3 py-0.5 md:py-1 rounded-lg">¥ {price}</span>
              </label>
              <input
                type="range" min="10" max="100" step="5"
                value={price} onChange={handlePriceChange}
                className="w-full accent-yellow-400 h-2 md:h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer border border-slate-700"
              />
            </div>

            <div>
              <label className="flex justify-between text-xs md:text-base text-slate-400 mb-3 md:mb-4">
                <span>平均每天消耗量</span>
                <span className="font-bold text-yellow-400 text-base md:text-xl bg-yellow-400/10 px-2 md:px-3 py-0.5 md:py-1 rounded-lg">{packs} 包</span>
              </label>
              <input
                type="range" min="0.5" max="4" step="0.5"
                value={packs} onChange={handlePacksChange}
                className="w-full accent-yellow-400 h-2 md:h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer border border-slate-700"
              />
            </div>

            <div className="p-4 md:p-6 bg-gradient-to-r from-yellow-900/40 to-amber-900/20 rounded-xl md:rounded-2xl border border-yellow-700/50 flex flex-col gap-1 md:gap-2 mt-4 md:mt-8">
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm md:text-base">每日直接烧钱：</span>
                <span className="text-xl md:text-2xl font-black text-white">¥ {dailyCost}</span>
              </div>
              <div className="flex justify-between items-center border-t border-yellow-800/50 pt-1.5 md:pt-2 mt-1">
                <span className="text-slate-400 text-xs md:text-sm">每年浪费本金：</span>
                <span className="text-base md:text-lg font-bold text-yellow-500">¥ {yearlyCost.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3 md:space-y-5">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
              <Coins className="size-6 md:size-7 text-yellow-400" />
              这笔钱的真实未来价值
            </h3>

            {[1, 5, 10, 20].map((years, index) => {
              const principal = yearlyCost * years;
              const compoundTotal = calculateCompound(yearlyCost, years);
              const rewards = getEquivalents(compoundTotal);

              return (
                <div key={index} className="group bg-slate-900/80 p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-700/50 flex flex-col gap-3 md:gap-5 hover:border-slate-500/40 transition-all duration-300 md:hover:shadow-xl">
                  <div>
                    <div className="text-slate-400 text-xs md:text-sm mb-1">{years} 年后 <span className="text-yellow-600/80 ml-1 text-[10px] md:text-xs">(含4%保守理财复利)</span></div>
                    <div className="text-white font-black text-xl md:text-3xl tracking-wide">
                      ¥ {compoundTotal.toLocaleString()}
                    </div>
                    <div className="text-slate-500 text-[10px] md:text-xs mt-1">纯本金为 ¥{principal.toLocaleString()}</div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 md:gap-2 border-t border-slate-800 pt-3 md:pt-4">
                    <span className="text-slate-400 text-xs md:text-sm self-center mr-1 md:mr-2">约等于：</span>
                    {rewards.map((r, i) => (
                      <div key={i} className={`flex items-center gap-1 md:gap-2 text-xs md:text-sm font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-full border ${r.style}`}>
                        <span className="text-sm md:text-base">{r.icon}</span>
                        <span>{r.count} {r.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;
