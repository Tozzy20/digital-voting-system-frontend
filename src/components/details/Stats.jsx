import { PieChart, Pie, Cell } from 'recharts'
import { Progress } from "@material-tailwind/react";

const data = [
  { name: 'Зарегистрировано', value: 10000, color: '#f0f0f0' }, // Серый фон
  { name: 'Проголосовало', value: 7000, color: '#8884d8' }, // Часть, которая заполнена
];

const COLORS = ['#f0f0f0', '#ffc658', '#82ca9d', '#ff8042']; // Цвета для сегментов


const Stats = ({ votingData }) => {

  const registered = 10000;
  const voted = 7000;

  const pieData = [
    { value: voted, color: COLORS[1] }, // Проголосовало
    { value: registered - voted, color: COLORS[0] } // Остаток (не проголосовало)
  ];

  return (
    <div className="p-8 bg-white rounded-[20px] w-full shadow-lg">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col items-start gap-4 w-full lg:w-1/2">
          <div className="text-black text-xl font-bold">Ход регистрации и голосования</div>
          <div className="flex items-center gap-4">
            <div className="text-black text-base font-normal">Обновлено:</div>
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Updated Date" />
              </div>
              <div className="text-black text-base font-normal">11.08.2025</div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Updated Time" />
              </div>
              <div className="text-black text-base font-normal">10:48</div>
            </div>
          </div> 

          <div className="flex flex-wrap items-end gap-5">
            <div className="flex items-end gap-2.5">
              <div className="w-5 h-5 bg-amber-200 rounded-full"></div>
              <div className="text-black text-base font-normal">Зарегистрированы (87)</div>
            </div>
            <div className="flex items-end gap-2.5">
              <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
              <div className="text-black text-base font-normal">Не зарегистрированы (13)</div>
            </div>
            <div className="flex items-end gap-2.5">
              <div className="w-5 h-5 bg-green-400 rounded-full"></div>
              <div className="text-black text-base font-normal">Проголосовали (72)</div>
            </div>
            <div className="flex items-end gap-2.5">
              <div className="w-5 h-5 bg-rose-500 rounded-full"></div>
              <div className="text-black text-base font-normal">Не проголосовали (15)</div>
            </div>
          </div>

          
            <PieChart width={400} height={400}>
      <Pie
        data={pieData}
        cx={200}
        cy={200}
        innerRadius={140}
        outerRadius={160}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        startAngle={90}
        endAngle={450}
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <text x={200} y={180} textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold">
        {registered.toLocaleString()}
      </text>
      <text x={200} y={210} textAnchor="middle" dominantBaseline="middle" className="text-sm text-gray-500">
        зарегистрировано
      </text>
      <text x={200} y={250} textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold">
        {voted.toLocaleString()}
      </text>
      <text x={200} y={280} textAnchor="middle" dominantBaseline="middle" className="text-sm text-gray-500">
        проголосовало
      </text>
    </PieChart>
         
        </div>

        <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
          <div>
            <div className="text-stone-300 text-base font-normal">Условия кворума:</div>
            <div className="text-black text-base font-semibold mt-2">
              {votingData.voting_full_info.quorum}%
            </div>
          </div>
          <div>
            <div className="text-stone-300 text-base font-normal">Статус:</div>
            <div className="flex items-center gap-2.5 mt-2">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/Component 114.png" alt="Status Icon" />
              </div>
              <div className={`text-green-400 text-base font-semibold`}>
                Условия выполнены
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="text-stone-300 text-base font-normal mb-2">Электронная явка (70%)</div>
            <Progress
  value={70}
  size="lg" // или h-8, если это требуется для кастомной высоты
  className="rounded-full bg-gray-50" // Только стили для контейнера
  barClassName="rounded-full bg-[#7DD4FF]" // Только стили для заполненной части
/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;