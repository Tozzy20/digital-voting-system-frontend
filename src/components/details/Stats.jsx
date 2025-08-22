import { useEffect, useState } from 'react'
import { StatisticCircle } from '../details/ProgressCircle'
import { AlarmClock, Calendar1, Check, X } from 'lucide-react'
import { Chart1 } from '../Charts'


const VotingStatistic = ({
	UpdateDate,
	UpdateTime,
	votingStats,
	quorum,
	votingData
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

	const votesPerHour = votingData.votes_per_hour.map(item => item.votes)
	const registrationsPerHour = votingData.registrations_per_hour.map(item => item.votes)

	const chartSeriesData = [
    {
        name: 'Количество регистраций', // Название серии
        data: registrationsPerHour, // Массив значений голосов
    },
    {
        name: 'Количество голосов', // Название серии
        data: votesPerHour, // Массив значений регистраций
    }
];

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
							<div className='rounded-full w-2/3 bg-[#F4F4F4] h-4 overflow-hidden'>
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
						votingData={votingData}
						series={chartSeriesData}
						colors={['#7DD4FF', '#5BC25B']}
					/>
				</div>
			</div>
		</div>
	)
}
export default VotingStatistic;
