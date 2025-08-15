import {
	AlarmClock,
	Calendar1,
	ChartColumn,
	ChevronLeft,
	ChevronRight,
	FileArchive,
	Flame,
	Globe,
	ScanFace,
	Trash2,
} from 'lucide-react'
import { GrayTag, GreenTag, YellowTag } from './Tags'
import { BlueButton, GreenButton } from './Buttons'
import { ProgressCircle } from './ProgressCircle'
import { NavLink } from 'react-router-dom'

const DateRow = ({ date, time, title }) => {
	return (
		<>
			<p className='text-base font-normal whitespace-nowrap text-[#ccc] mb-2'>
				{title}
			</p>
			<div className='flex gap-3 items-center text-xl'>
				<div className='flex gap-2 items-center'>
					<Calendar1 />
					<p className='font-normal text-base mt-[2px]'>{date}</p>
				</div>
				<div className='flex gap-2 items-center'>
					<AlarmClock />
					<p className='font-normal text-base mt-[2px]'>{time}</p>
				</div>
			</div>
		</>
	)
}

export const VoteCard = ({ title, description, timezone, deadlines }) => {
	return (
		<>
			<div className='bg-white flex flex-col gap-3 rounded-[20px] p-5 shadow-sm'>
				<p className='text-xl font-bold'>{title}</p>
				<div className='flex justify-between'>
					<p className='text-base font-normal text-[#ccc]'>{description}</p>
					<div className='flex items-center gap-3'>
						<Globe />
						<p className='text-base font-normal text-[#212121]'>{timezone}</p>
					</div>
				</div>
				<div className='grid grid-cols-3'>
					<div className='col-span-1 flex flex-col gap-2'>
						<GreenTag>
							<Flame />
							<p>Голосование активно</p>
						</GreenTag>
						<YellowTag>
							<ScanFace />
							<p>Голосование на этапе регистрации</p>
						</YellowTag>
					</div>
					<div className='col-span-1 grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-5'>
						{deadlines.map((item, index) => {
							return (
								<div key={index} className='col-span-1 row-span-1 order-1'>
									<DateRow
										title={item.title}
										date={item.date}
										time={item.time}
									/>
								</div>
							)
						})}
					</div>
					<div className='col-span-1 relative'>
						<div className='flex gap-3 absolute bottom-0 right-0'>
							<NavLink
								to={'/details'}
								className=' bg-[#f4f4f4] hover:bg-[#ccc] transition-all rounded-lg p-2 cursor-pointer'
							>
								<ChartColumn />
							</NavLink>
							<button className=' bg-[#f4f4f4] hover:bg-[#EE5B5B] hover:text-[#FFE3E3] transition-all rounded-lg p-2 cursor-pointer'>
								<Trash2 />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export const MinInfoVoteCard = ({
	title,
	description,
	timezone,
	date,
	time,
}) => {
	return (
		<>
			<div className='bg-white flex flex-col gap-3 rounded-[20px] p-5 border-1 border-[#f4f4f4]'>
				<p className='text-base font-bold'>{title}</p>
				<div className='flex justify-between'>
					<p className='text-base font-normal text-[#ccc]'>{description}</p>
					<div className='flex items-center gap-3'>
						<Globe />
						<p className='text-base font-normal text-[#212121]'>{timezone}</p>
					</div>
				</div>
				<div className='grid grid-cols-7 gap-2'>
					<div className='col-span-4 flex flex-col gap-2'>
						<YellowTag wfull={true} px={'px-1'}>
							<ScanFace />
							<p className='whitespace-nowrap text-base font-medium'>
								Голосование на этапе регистрации
							</p>
						</YellowTag>
						<GrayTag px={'px-1'}>
							<FileArchive />
							<p className='whitespace-nowrap text-base font-medium'>Тайное</p>
						</GrayTag>
					</div>
					<div className='flex items-start'>
						<div className='col-span-3 bg-[#FFF6F6] rounded-xl px-5 py-2'>
							<DateRow
								title={'Окончание регистрации'}
								date={date}
								time={time}
							/>
						</div>
					</div>
				</div>
				<div className='flex items-center gap-3 mt-5'>
					<div className='w-1/3'>
						<BlueButton>
							<p className='text-base font-semibold'>Зарегистрироваться</p>
						</BlueButton>
					</div>
					<p className='font-semibold text-[#EE5B5B] text-base'>
						Вы не зарегистрированы
					</p>
				</div>
			</div>
		</>
	)
}

export const ActualVoteCard = ({
	title,
	startdate,
	starttime,
	enddate,
	endtime,
	progress,
}) => {
	return (
		<>
			<div className='flex flex-col h-full justify-between rounded-[20px] '>
				<div className='flex flex-col gap-3'>
					<p className='text-base font-bold'>{title}</p>
					<div className='grid grid-cols-2 gap-2'>
						<div className='col-span-1 bg-[#F6FFF9] rounded-xl px-5 py-2'>
							<DateRow
								title={'Начало голосования'}
								date={startdate}
								time={starttime}
							/>
						</div>
						<div className='col-span-1 bg-[#FFF6F6] rounded-xl px-5 py-2'>
							<DateRow
								title={'Окончание голосования'}
								date={enddate}
								time={endtime}
							/>
						</div>
					</div>
				</div>
				<div className='h-fit flex justify-between items-center'>
					<ChevronLeft color='#ccc' size={48} />
					<ProgressCircle progress={progress} />
					<ChevronRight color='#ccc' size={48} />
				</div>
				<div className='flex items-center gap-3 mt-5'>
					<div className='w-1/2 mb-8'>
						<GreenButton>
							<p>Проголосовать</p>
						</GreenButton>
					</div>
				</div>
			</div>
		</>
	)
}
