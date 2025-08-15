export const ProgressCircle = ({ progress }) => {
	// Нормализуем прогресс (0-100)
	const normalizedProgress = Math.min(100, Math.max(0, progress))
	// Рассчитываем параметры для SVG circle
	const radius = 45
	const circumference = 2 * Math.PI * radius
	const strokeDashoffset = circumference * (1 - normalizedProgress / 100)

	return (
		<div className='w-full h-full flex justify-center items-center'>
			<div className='w-64 h-64 md:w-100 md:h-100 auto border-dashed border-4 md:border-40 rounded-full border-[#f4f4f4] relative flex justify-center items-center'>
				<div
					className={`w-64 h-64 md:w-100 md:h-100 absolute drop-shadow-lg md:drop-shadow-xl ${
						progress <= 25
							? ' drop-shadow-[#EE5B5B30] md:drop-shadow-[#EE5B5B50] stroke-[#EE5B5B]'
							: progress <= 50
							? 'drop-shadow-[#FFa05a30] md:drop-shadow-[#FFa05a50] stroke-[#FFa05a]'
							: progress <= 75
							? 'drop-shadow-[#FFD17D30] md:drop-shadow-[#FFD17D50] stroke-[#FFD17D]'
							: 'drop-shadow-[#5BC25B30] md:drop-shadow-[#5BC25B50] stroke-[#5BC25B]'
					} transition-all duration-500`}
				>
					<svg className='w-full h-full' viewBox='0 0 100 100' transform='scale(-1, 1)'>
						<circle
							cx='50'
							cy='50'
							r={radius}
							fill='none'
							strokeWidth='8'
							strokeDasharray={circumference}
							strokeDashoffset={strokeDashoffset}
							transform='rotate(-90 50 50)'
						/>
					</svg>
				</div>

				<div className='flex flex-col items-center absolute'>
					<p className='font-black text-3xl md:text-[48px]'>
						{Math.round(normalizedProgress)}%
					</p>
					<p className='font-normal text-sm md:text-lg text-[#ccc]'>Времени осталось</p>
				</div>
			</div>
		</div>
	)
}

export const StatisticCircle = ({
	totalPeople,
	registeredCount,
	votedCount,
}) => {
	// Рассчитываем проценты
	const registeredPercent = registeredCount / totalPeople
	const votedPercent = votedCount / totalPeople
	const notVotedPercent = registeredPercent - votedPercent

	// Проверка на валидность данных
	if (registeredCount > totalPeople) {
		console.error(
			'Количество зарегистрированных не может быть больше общего количества людей'
		)
		return null
	}

	if (votedCount > registeredCount) {
		console.error(
			'Количество проголосовавших не может быть больше зарегистрированных'
		)
		return null
	}

	// Функция для создания дуги
	const describeArc = (x, y, radius, startAngle, endAngle) => {
		const start = polarToCartesian(x, y, radius, endAngle)
		const end = polarToCartesian(x, y, radius, startAngle)
		const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'
		return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`
	}

	const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
		const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
		return {
			x: centerX + radius * Math.cos(angleInRadians),
			y: centerY + radius * Math.sin(angleInRadians),
		}
	}

	// Рассчитываем углы для каждой дуги
	const fullCircle = 360
	const registeredStartAngle = 0
	const registeredEndAngle =
		registeredStartAngle + fullCircle * registeredPercent

	const votedStartAngle = 0
	const votedEndAngle = votedStartAngle + fullCircle * votedPercent

	const notVotedStartAngle = votedEndAngle
	const notVotedEndAngle = notVotedStartAngle + fullCircle * notVotedPercent

	return (
		<div className='w-full h-full flex justify-center items-center'>
			<div className='relative flex justify-center items-center'>
				<div className='w-64 h-64 md:w-[360px] md:h-[360px]'>
					<svg width='100%' height='100%' viewBox='0 0 360 360' fill='none'>
						<path
							d={describeArc(
								180,
								180,
								100,
								registeredStartAngle,
								registeredEndAngle
							)}
							stroke='#FFD17D'
							strokeWidth='25'
							className='md:strokeWidth-40'
						/>

						<path
							d={describeArc(180, 180, 115, votedStartAngle, votedEndAngle)}
							stroke='#5BC25B'
							strokeWidth='15'
							className='md:strokeWidth-20'
						/>

						<path
							d={describeArc(
								180,
								180,
								115,
								notVotedStartAngle,
								notVotedEndAngle
							)}
							stroke='#EE5B5B'
							strokeWidth='15'
							className='md:strokeWidth-20'
						/>

						<path
							d={describeArc(180, 180, 100, registeredEndAngle, fullCircle)}
							stroke='#F4F4F4'
							strokeWidth='25'
							className='md:strokeWidth-40'
						/>
					</svg>
				</div>

				<div className='flex flex-col items-center absolute px-4'>
					<p className='font-semibold text-lg md:text-xl'>{registeredCount}</p>
					<p className='font-normal text-xs md:text-base text-[#ccc] text-center'>Зарегистрировано</p>
					<p className='font-semibold text-lg md:text-xl mt-3 md:mt-5'>{votedCount}</p>
					<p className='font-normal text-xs md:text-base text-[#ccc] text-center'>Проголосовало</p>
				</div>
			</div>
		</div>
	)
}