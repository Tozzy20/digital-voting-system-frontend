// import { useEffect } from 'react';
// import { PieChart, Pie, Cell } from 'recharts';
// import { Progress } from "@material-tailwind/react";
// import { getVotingStats } from '../../services/api';

// const data = [
//   { name: 'Зарегистрировано', value: 10000, color: '#f0f0f0' }, // Серый фон
//   { name: 'Проголосовало', value: 7000, color: '#8884d8' }, // Часть, которая заполнена
// ];

// const COLORS = ['#f0f0f0', '#ffc658', '#82ca9d', '#ff8042']; // Цвета для сегментов


// const Stats = ({ votingStats, quorum }) => {

//   const registered = votingStats.total_registered_users;
//   const voted = votingStats.total_votes_cast;

//   const pieData = [
//     { value: voted, color: COLORS[1] }, // Проголосовало
//     { value: registered - voted, color: COLORS[0] } // Остаток (не проголосовало)
//   ];

//   return (
//     <div className="p-8 bg-white rounded-[20px] w-full shadow-lg">
//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="flex flex-col items-start gap-4 w-full lg:w-1/2">
//           <div className="text-black text-xl font-bold">Ход регистрации и голосования</div>
//           <div className="flex items-center gap-4">
//             <div className="text-black text-base font-normal">Обновлено:</div>
//             <div className="flex items-center gap-2.5">
//               <div className="w-6 h-6 relative overflow-hidden">
//                 <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Updated Date" />
//               </div>
//               <div className="text-black text-base font-normal">11.08.2025</div>
//             </div>
//             <div className="flex items-center gap-2.5">
//               <div className="w-6 h-6 relative overflow-hidden">
//                 <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Updated Time" />
//               </div>
//               <div className="text-black text-base font-normal">10:48</div>
//             </div>
//           </div> 

//           <div className="flex flex-wrap items-end gap-5">
//             <div className="flex items-end gap-2.5">
//               <div className="w-5 h-5 bg-amber-200 rounded-full"></div>
//               <div className="text-black text-base font-normal">Зарегистрированы ({votingStats.total_registered_users})</div>
//             </div>

//             <div className="flex items-end gap-2.5">
//               <div className="w-5 h-5 bg-green-400 rounded-full"></div>
//               <div className="text-black text-base font-normal">Проголосовали ({votingStats.total_votes_cast})</div>
//             </div>
//             <div className="flex items-end gap-2.5">
//               <div className="w-5 h-5 bg-rose-500 rounded-full"></div>
//               <div className="text-black text-base font-normal">Не проголосовали ({votingStats.total_registered_users - votingStats.total_votes_cast})</div>
//             </div>
//           </div>


//             <PieChart width={400} height={400}>
//       <Pie
//         data={pieData}
//         cx={200}
//         cy={200}
//         innerRadius={140}
//         outerRadius={160}
//         fill="#8884d8"
//         paddingAngle={0}
//         dataKey="value"
//         startAngle={90}
//         endAngle={450}
//       >
//         {pieData.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={entry.color} />
//         ))}
//       </Pie>
//       <text x={200} y={180} textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold">
//         {registered.toLocaleString()}
//       </text>
//       <text x={200} y={210} textAnchor="middle" dominantBaseline="middle" className="text-sm text-gray-500">
//         зарегистрировано
//       </text>
//       <text x={200} y={250} textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold">
//         {voted.toLocaleString()}
//       </text>
//       <text x={200} y={280} textAnchor="middle" dominantBaseline="middle" className="text-sm text-gray-500">
//         проголосовало
//       </text>
//     </PieChart>

//         </div>

//         <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
//           <div>
//             <div className="text-stone-300 text-base font-normal">Условия кворума:</div>
//             <div className="text-black text-base font-semibold mt-2">
//               {quorum}%
//             </div>
//           </div>
//           <div>
//             <div className="text-stone-300 text-base font-normal">Статус:</div>
//             <div className="flex items-center gap-2.5 mt-2">
//               <div className="w-6 h-6 relative overflow-hidden">
//                 <img src="/src/assets/images/detaliAndMain/Component 114.png" alt="Status Icon" />
//               </div>
//               <div className={`text-green-400 text-base font-semibold`}>
//                 Условия выполнены
//               </div>
//             </div>
//           </div>
//           <div className="w-full">
//             <div className="text-stone-300 text-base font-normal mb-2">Электронная явка ({votingStats.turnout_percentage.toFixed(1)})</div>
//              <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-gray-200 font-sans text-xs font-medium">
//       <div className={`flex h-full w-[${votingStats.turnout_percentage}%] items-center justify-center overflow-hidden break-all rounded-full bg-gray-900 text-white`}></div>
//     </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import { useEffect, useState } from 'react'
import { StatisticCircle } from '../details/ProgressCircle'
import { AlarmClock, Calendar1, Check, X } from 'lucide-react'
import { Chart1 } from '../Charts'


const VotingStatistic = ({
	conditionPercent,
	UpdateDate,
	UpdateTime,
	totalPeople,
	registeredCount,
	votedCount,
	votingStats,
	quorum
}) => {
	const [conditionStatus, setConditionStatus] = useState(false)

	useEffect(() => {
		if (votingStats.total_registered_users > 0) {
			const currentPercent = (votingStats.total_votes_cast / votingStats.total_registered_users) * 100
			if (currentPercent >= quorum) {
				setConditionStatus(true)
			} else {
				setConditionStatus(false)
			}
		}
	}, [votingStats.total_votes_cast, votingStats.total_registered_users, quorum])

	return (
		<div className='flex flex-col gap-3'>
			<div className='bg-white shadow-sm rounded-[20px] h-fit p-6'>
				<div className='flex flex-col gap-2 mb-6'>
					<p className='text-xl font-bold'>Ход регистрации и голосования</p>
					<div className='flex gap-4 mb-4'>
						<p className='text-base font-normal'>Обновлено:</p>
						<div className='flex gap-2'>
							<Calendar1 />
							<p className='text-base font-normal'>{UpdateDate}</p>
						</div>
						<div className='flex gap-2'>
							<AlarmClock />
							<p className='text-base font-normal'>{UpdateTime}</p>
						</div>
					</div>
					<div className='flex gap-6'>
						<div className='flex gap-2'>
							<div className='rounded-full h-5 w-5 bg-[#FFD17D]'></div>
							<p className='text-base font-normal'>Зарегистрированы ({votingStats.total_registered_users})</p>
						</div>
						{/* <div className='flex gap-2'>
							<div className='rounded-full h-5 w-5 bg-[#f4f4f4]'></div>
							<p className='text-base font-normal'>Не зарегистрированы</p>
						</div> */}
						<div className='flex gap-2'>
							<div className='rounded-full h-5 w-5 bg-[#5BC25B]'></div>
							<p className='text-base font-normal'>Проголосовали ({votingStats.total_votes_cast})</p>
						</div>
						<div className='flex gap-2'>
							<div className='rounded-full h-5 w-5 bg-[#EE5B5B]'></div>
							<p className='text-base font-normal'>Не проголосовали ({votingStats.total_registered_users - votingStats.total_votes_cast})</p>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-3 gap-5'>
					<div className='col-span-1'>
						<StatisticCircle
							totalPeople={votingStats.total_registered_users}
							registeredCount={votingStats.total_registered_users}
							votedCount={votingStats.total_votes_cast}
						/>
					</div>
					<div className='col-span-2 flex flex-col gap-10 my-auto'>
						<div className='flex flex-col gap-2'>
							<p className='font-normal text-base text-[#ccc]'>Условия кворума:</p>
							<p className='font-semibold text-base'>
								{quorum}%
							</p>
						</div>
						<div className='flex flex-col gap-4'>
							<p className='font-normal text-base text-[#ccc]'>Статус:</p>
							{conditionStatus ? (
								<div className='flex gap-2 text-[#5BC25B]'>
									<Check />
									<p className='font-semibold text-base '>Условия выполнены</p>
								</div>
							) : (
								<div className='flex gap-4 text-[#EE5B5B]'>
									<X />
									<p className='font-semibold text-base '>
										Условия не выполнены
									</p>
								</div>
							)}
						</div>
						<div className='flex flex-col gap-4'>
							<p className='font-normal text-base text-[#ccc]'>
								Электронная явка [{votingStats.turnout_percentage}%]
							</p>
							<div className='rounded-full w-2/3 bg-gray-700 h-4 overflow-hidden'>
								<div
									className='rounded-full bg-[#7DD4FF] h-full'
									style={{ width: `${votingStats.turnout_percentage}%` }}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white shadow-sm rounded-[20px] h-fit p-6'>
				<div className='flex flex-col gap-2'>
					<p className='text-xl font-bold'>Ход регистрации и голосования</p>
					<Chart1
						series={[
							{
								name: 'Общая явка',
								data: [95, 82, 65, 59, 55, 52, 49, 39, 30, 32, 35, 30, 30, 35, 40, 36, 50],
							},
							{
								name: 'Явка голосующих',
								data: [25, 22, 20, 28, 38, 42, 45, 48, 53, 70, 88, 45, 45, 55, 64, 64, 50],
							},
						]}
						colors={['#7DD4FF', '#5BC25B']}
					/>
				</div>
			</div>
		</div>
	)
}
export default VotingStatistic;
