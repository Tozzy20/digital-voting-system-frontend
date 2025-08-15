import {
	format,
	startOfMonth,
	endOfMonth,
	getDay,
	eachDayOfInterval,
	isToday,
} from 'date-fns'
import { ru } from 'date-fns/locale'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Calendar = () => {
	const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
	const [currentDate, setCurrentDate] = useState(new Date())
	const [activeIndex, setActiveIndex] = useState(null)

	const start = startOfMonth(currentDate)
	const end = endOfMonth(currentDate)
	const allDays = eachDayOfInterval({ start, end })

	// getDay() возвращает 0 (вс)–6 (сб), нужно сместить: Пн = 0 => Вс = 6
	const startOffset = (getDay(start) + 6) % 7
	const totalCells = startOffset + allDays.length
	const endOffset = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7)

	const prevMonth = () => {
		setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
		setActiveIndex(null)
	}

	const nextMonth = () => {
		setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
		setActiveIndex(null)
	}

	return (
		<div className=''>
			<div className='flex justify-between items-end mb-2'>
				<div className='flex gap-5 mb-1'>
					<div className='flex items-center gap-2'>
						<div className='h-4 w-4 bg-[#FFD17D] rounded-full'></div>
						<p className='text-lg font-normal'>Запланировано</p>
					</div>
					<div className='flex items-center gap-2'>
						<div className='h-4 w-4 bg-[#437DE9] rounded-full'></div>
						<p className='text-lg font-normal'>Активно</p>
					</div>
					<div className='flex items-center gap-2'>
						<div className='h-4 w-4 bg-[#EE5B5B] rounded-full'></div>
						<p className='text-lg font-normal'>Завершено</p>
					</div>
				</div>
				<div className='inline-flex justify-between items-center border-1 border-[#ccc] rounded-lg py-2 px-3 uppercase w-[218px]'>
					<p className='text-base font-normal'>
						{format(currentDate, 'LLLL yyyy', { locale: ru })}
					</p>
					<div className='flex'>
						<ChevronLeft
							onClick={prevMonth}
							className='text-[var(--secondary-text)] bg-[var(--bg-sidebar)] hover:bg-[var(--gray)] rounded-lg transition-all '
							size={22}
						/>
						<ChevronRight
							onClick={nextMonth}
							className='text-[var(--secondary-text)] bg-[var(--bg-sidebar)] hover:bg-[var(--gray)] rounded-lg transition-all '
							size={22}
						/>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-7 gap-1 text-[#212121] uppercase mb-2 font-semibold'>
				{weekdays.map((day, index) => (
					<div
						className='flex justify-center bg-[#D2F0FF] rounded-xl h-16 items-center text-2xl font-medium p-4'
						key={index}
					>
						<p>{day}</p>
					</div>
				))}
			</div>

			<div className='grid grid-cols-7 gap-1'>
				{Array.from({ length: startOffset }).map((_, index) => (
					<div key={`empty-start-${index}`} />
				))}

				{allDays.map((date, index) => {
					const today = isToday(date)
					return (
						<div
							key={index}
							onClick={() => setActiveIndex(index)}
							className={`relative h-16 flex justify-start items-end select-none border-1 pl-2 pb-1 border-[#F4F4F4] transition-colors text-2xl rounded-xl`}
						>
							{today && (
								<div className=' bg-[var(--color1)] rounded-lg flex justify-start items-end'>
									{format(date, 'd')}
								</div>
							)}
							<span
								className={`${
									!today && 'flex justify-start items-end w-10 h-10'
								} `}
							>
								{!today && format(date, 'd')}
							</span>
						</div>
					)
				})}

				{Array.from({ length: endOffset }).map((_, index) => (
					<div key={`empty-end-${index}`} />
				))}
			</div>
		</div>
	)
}

export default Calendar
