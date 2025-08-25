import { useEffect, useState } from 'react'
import { StatisticCircle } from '../details/ProgressCircle'
import { AlarmClock, Calendar1, Check, X } from 'lucide-react'
import { Chart1 } from '../Charts'

const VotingStatistic = ({

}) => {
    const [conditionStatus, setConditionStatus] = useState(false)

    useEffect(() => {
        // Убеждаемся, что total_registered_users - число и больше нуля
        const registered = Number(votingStats.total_registered_users);
        const votes = Number(votingStats.total_votes_cast);
        const quorumValue = Number(quorum);

        if (registered > 0) {
            const currentPercent = (votes / registered) * 100
            if (currentPercent >= quorumValue) {
                setConditionStatus(true)
            } else {
                setConditionStatus(false)
            }
        } else {
            setConditionStatus(false);
        }
    }, [votingStats.total_votes_cast, votingStats.total_registered_users, quorum])

    return (
        <div className='flex flex-col lg:gap-[10px] gap-3'> {/* Увеличен gap для лучшего вида на мобильных */}
            <div className='bg-white shadow-sm rounded-[20px] h-fit p-4 sm:p-6'> {/* Адаптивный padding */}
                <div className='flex flex-col gap-2 mb-6'>
                    <p className='text-xl font-bold'>Ход регистрации и голосования</p>
                    
                    {/* Адаптивный блок даты и времени: используем flex-wrap */}
                    <div className='flex flex-wrap gap-x-4 gap-y-2 mb-4'>
                        <p className='text-base font-normal min-w-full sm:min-w-0'>Обновлено:</p>
                        <div className='flex items-center gap-2'>
                            <Calendar1 className='w-5 h-5' /> {/* Добавлена фиксация размера иконки */}
                            <p className='text-base font-normal'>{UpdateDate}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <AlarmClock className='w-5 h-5' /> {/* Добавлена фиксация размера иконки */}
                            <p className='text-base font-normal'>{UpdateTime}</p>
                        </div>
                    </div>
                    
                    {/* Адаптивный блок легенды: используем flex-wrap и justify-start */}
                    <div className='flex flex-wrap gap-x-6 gap-y-3 justify-start'>
                        <div className='flex gap-2 items-center'>
                            <div className='rounded-full h-5 w-5 bg-[#FFD17D] shrink-0'></div> {/* shrink-0 для фиксации размера */}
                            <p className='text-base font-normal'>Зарегистрированы ({votingStats.total_registered_users})</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='rounded-full h-5 w-5 bg-[#5BC25B] shrink-0'></div>
                            <p className='text-base font-normal'>Проголосовали ({votingStats.total_votes_cast})</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='rounded-full h-5 w-5 bg-[#EE5B5B] shrink-0'></div>
                            <p className='text-base font-normal'>Не проголосовали ({votingStats.total_registered_users - votingStats.total_votes_cast})</p>
                        </div>
                    </div>
                </div>

                {/* Основная сетка статистики: 1 колонка на мобильных, 3 на больших */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5'>
                    <div className='md:col-span-1 flex justify-center'>
                        {/* Circle всегда по центру на мобильных */}
                        <StatisticCircle
                            // Передаем правильные props
                            totalPeople={votingStats.total_registered_users}
                            registeredCount={votingStats.total_registered_users}
                            votedCount={votingStats.total_votes_cast}
                        />
                    </div>
                    {/* Данные кворума и явки: занимают оставшуюся ширину */}
                    <div className='md:col-span-2 flex flex-col gap-6 md:gap-10 mt-4 md:mt-0'> {/* Уменьшен gap на мобильных */}
                        <div className='flex flex-col gap-2'>
                            <p className='font-normal text-base text-[#ccc]'>Условия кворума:</p>
                            <p className='font-semibold text-base'>
                                {quorum}%
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='font-normal text-base text-[#ccc]'>Статус:</p>
                            {conditionStatus ? (
                                <div className='flex gap-2 text-[#5BC25B] items-center'>
                                    <Check className='w-6 h-6' />
                                    <p className='font-semibold text-base'>Условия выполнены</p>
                                </div>
                            ) : (
                                <div className='flex gap-2 text-[#EE5B5B] items-center'> {/* Изменен gap с 4 на 2 */}
                                    <X className='w-6 h-6' />
                                    <p className='font-semibold text-base'>
                                        Условия не выполнены
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='font-normal text-base text-[#ccc]'>
                                Электронная явка [{votingStats.turnout_percentage}%]
                            </p>
                            {/* Прогресс-бар занимает всю доступную ширину родителя */}
                            <div className='rounded-full w-full bg-[#F4F4F4] h-4 overflow-hidden'>
                                <div
                                    className='rounded-full bg-[#7DD4FF] h-full transition-all duration-500'
                                    style={{ width: `${votingStats.turnout_percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Блок с графиком */}
            <div className='bg-white shadow-sm rounded-[20px] h-fit p-4 sm:p-6'>
                <div className='flex flex-col gap-2'>
                    <p className='text-xl font-bold'>Ход регистрации и голосования (График)</p>
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
