import { Flame, Rocket, ScanFace } from 'lucide-react'
import { AltBlueButton, BlueButton, RedButton } from '../components/main/Buttons'
import { GreenTag, YellowTag } from '../components/main/Tags'
import { useState } from 'react'
import Calendar from '../components/main/Calendar'
import { ActualVoteCard, MinInfoVoteCard } from '../components/main/VoteCard'
import { LinkText } from '../components/main/Components'
import { Chart2 } from '../components/main/Charts'

const MainPage = () => {
	const heights = [
		'30%',
		'45%',
		'60%',
		'25%',
		'75%',
		'90%',
		'35%',
		'50%',
		'65%',
		'80%',
		'95%',
		'44%',
	]
	const colors = ['#BD3636', '#FFE3E3', '#E87C7C', '#F2A4A4']
	const [role, setRole] = useState('админ')
	return (
		<>
			{role !== 'админ' && (
				<>
					<div className='relative 2xl:px-40 lg:px-10 px-1  -z-1'>
						<p className='mak text-[40px] mb-5 text-white absolute mt-16 ml-20 max-lg:ml-5 max-lg:mt-10 max-md:text-[32px] max-md:mt-8'>
							Главная
						</p>
						<img
							className='rounded-[20px] object-cover w-full'
							src='/src/assets/images/detaliandMain/bfbfe1dc293cbe00c215ff63f52772875e1e8d9c.png'
							alt=''
						/>
						<p className='text-[48px] text-white absolute bottom-[40px] ml-20 uppercase font-bold w-1/3 max-lg:ml-5 max-lg:text-[36px] max-md:text-[28px] max-md:w-2/3 max-sm:text-[24px] max-sm:bottom-[20px]'>
							криптоголосвание на блокчейне
						</p>
					</div>
				</>
			)}

			<div
				className={`3xl:mx-80 2xl:mx-60 lg:mx-20 mx-3 ${
					role === 'админ' ? 'my-[99px]' : 'mb-[99px] mt-3'
				}  text-[#212121] max-md:mx-2 max-sm:mx-1`}
			>
				{role === 'админ' && <p className='mak text-[40px] mb-5 max-md:text-[32px]'>Главная</p>}

				<div className='grid grid-cols-6 gap-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
					<div className='bg-white col-span-1 h-50 rounded-[20px] flex flex-col justify-center p-5 max-sm:col-span-1'>
						<p className='text-[38px] font-bold max-md:text-[32px] max-sm:text-[28px]'>3.000</p>
						<p className='text-base font-light max-sm:text-sm'>Голосований</p>
					</div>
					<div className='bg-white col-span-2 h-50 rounded-[20px] p-5 relative overflow-hidden max-sm:col-span-1'>
						<div className='flex flex-col justify-center h-full'>
							<p className='text-[38px] font-bold max-md:text-[32px] max-sm:text-[28px]'>4.000.000</p>
							<p className='text-base font-base max-sm:text-sm'>Транзакций</p>
							<img
								className='h-full absolute right-0 max-md:h-4/5 max-sm:h-3/4'
								src='/src/assets/images/detaliandMain/img1.svg'
								alt=''
							/>
						</div>
					</div>
					<div className='bg-white col-span-1 h-50 rounded-[20px] flex flex-col justify-center p-5 max-sm:col-span-1 max-md:col-span-2'>
						<p className='text-[38px] font-bold max-md:text-[32px] max-sm:text-[28px]'>150</p>
						<p className='text-[18px] font-base max-sm:text-base'>Администраторов</p>
					</div>
					<div className='bg-white col-span-2 h-50 rounded-[20px] p-5 relative overflow-hidden max-sm:col-span-1 max-md:col-span-2'>
						<div className='flex flex-col justify-center h-full'>
							<p className='text-[38px] font-bold max-md:text-[32px] max-sm:text-[28px]'>1.500</p>
							<p className='text-base font-base max-sm:text-sm'>Уникальных пользователей</p>
							<img
								className='h-full absolute right-0 max-md:h-4/5 max-sm:h-3/4'
								src='/src/assets/images/detaliandMain/img2.svg'
								alt=''
							/>
						</div>
					</div>
				</div>
				{role === 'админ' && (
					<>
						<p className='mak text-[40px] mb-5 mt-[99px] max-md:text-[32px] max-md:mt-[60px]'>
							Управление голосованием
						</p>
						<div className='flex gap-2 max-lg:flex-col'>
							<div className='flex flex-col gap-2 w-5/11 max-lg:w-full'>
								<div className='bg-white rounded-[20px] px-6 py-8 max-h-100 flex gap-2 max-lg:flex-col max-md:px-4 max-md:py-5'>
									<div className='col-span-3 flex flex-col justify-between h-full max-lg:order-2'>
										<p className='font-bold text-xl leading-5 max-md:text-lg'>
											Ваш голос — неприкосновенен.
										</p>
										<p className='text-base font-base leading-5 max-md:text-sm'>
											Участвуйте в голосованиях с криптографической защитой, где
											каждый выбор остаётся в вечном блокчейне. Влияйте на
											решения по-настоящему — без посредников, без
											фальсификаций. Присоединяйтесь к революции прозрачных
											решений!
										</p>
										<BlueButton className='max-md:py-2'>
											<Rocket className='max-md:w-4 max-md:h-4' />
											<p className='font-medium text-base max-md:text-sm'>
												Создать голосование
											</p>
										</BlueButton>
									</div>
									<img
										className='col-span-2 h-full rounded-[12px] max-lg:order-1 max-lg:w-full max-lg:h-48 max-md:h-40'
										src='/src/assets/images/detaliandMain/ca5f98a87def00ad482c1f2027c8e36dd917f611.png'
										alt=''
									/>
								</div>
								<div className='bg-white rounded-[20px] inline-flex flex-col justify-between p-5 h-[481px] max-md:h-auto max-md:p-4'>
									<p className='font-bold text-xl max-md:text-lg'>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the
									</p>
									<p className='font-base text-base text-[#CCCCCC] max-md:text-sm'>
										Группа пользователей
									</p>
									<YellowTag wfull={false} className='max-md:py-1'>
										<ScanFace className='max-md:w-4 max-md:h-4' />
										<p className='font-medium text-base max-md:text-sm'>
											Голосование на этапе регистрации
										</p>
									</YellowTag>
									<div className='grid grid-cols-2 gap-2 max-md:grid-cols-1'>
										<div className='col-span-1 rounded-2xl flex flex-col justify-between border-1 border-[#ccc] h-[150px] p-4 max-md:h-auto max-md:p-3'>
											<p className='text-base font-normal text-[#212121] max-md:text-sm'>
												Проголосовало человек
											</p>
											<div className='flex items-center gap-2'>
												<p className='text-[32px] font-bold max-md:text-[24px]'>141</p>
												<p className='bg-[#E6FFDD] text-[#135617] text-base font-medium rounded-lg p-1 max-md:text-sm'>
													+60%
												</p>
											</div>
											<p className='text-base font-normal text-[#ccc] max-md:text-xs'>
												За последние 24 часа
											</p>
										</div>
										<div className='col-span-1 rounded-2xl border-1 border-[#ccc] max-md:h-auto'>
											<Chart2
												chartData={[0, 5, 6, 8, 7, 10]}
												title={'Динамика регистрации'}
												deadlines={'C 01.07.2025 по 31.07.2025'}
												className='max-md:h-32'
											/>
										</div>
										<BlueButton className='max-md:py-2'>
											<p className='text-base font-semibold max-md:text-sm'>
												Завершить регистрацию
											</p>
										</BlueButton>
										<AltBlueButton className='max-md:py-2'>
											<p className='text-base font-semibold max-md:text-sm'>
												Начать голосование
											</p>
										</AltBlueButton>
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-2 w-6/11 max-lg:w-full'>
								<div className='bg-white rounded-[20px] inline-flex flex-col justify-between p-5 h-[431px] max-md:h-auto max-md:p-4'>
									<p className='font-bold text-xl max-md:text-lg'>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the
									</p>
									<p className='font-light text-base text-[#CCCCCC] max-md:text-sm'>
										Группа пользователей
									</p>
									<GreenTag className='max-md:py-1'>
										<Flame className='max-md:w-4 max-md:h-4' />
										<p className='max-md:text-sm'>Голосование активно</p>
									</GreenTag>
									<div className='grid grid-cols-2 gap-2 max-md:grid-cols-1'>
										<div className='col-span-1 rounded-2xl flex flex-col justify-between border-1 border-[#ccc] h-[150px] p-4 max-md:h-auto max-md:p-3'>
											<p className='text-base font-normal text-[#212121] max-md:text-sm'>
												Проголосовало человек
											</p>
											<div className='flex items-center gap-2'>
												<p className='text-[32px] font-bold max-md:text-[24px]'>48</p>
												<p className='bg-[#E6FFDD] text-[#135617] font-medium rounded-lg p-1 max-md:text-sm'>
													+10%
												</p>
											</div>
											<p className='text-base font-normal text-[#ccc] max-md:text-xs'>
												За последние 24 часа
											</p>
										</div>
										<div className='col-span-1 rounded-2xl border-1 border-[#ccc] h-[150px] max-md:h-auto'>
											<Chart2
												chartData={[0, 5, 6, 8, 7, 10]}
												title={'Динамика голосов'}
												deadlines={'C 01.07.2025 по 31.07.2025'}
												className='max-md:h-32'
											/>
										</div>
										<RedButton title={'Завершить голосование'} className='max-md:py-2 max-md:text-sm' />
									</div>
								</div>
								<div className='bg-white rounded-[20px] inline-flex flex-col justify-between p-5 h-[450px] max-md:h-auto max-md:p-4'>
									<p className='font-bold text-xl max-md:text-lg'>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the
									</p>
									<p className='font-normal text-base text-[#CCCCCC] max-md:text-sm'>
										Группа пользователей
									</p>
									<YellowTag wfull={false} className='max-md:py-1'>
										<ScanFace className='max-md:w-4 max-md:h-4' />
										<p className='max-md:text-sm'>Голосование на этапе регистрации</p>
									</YellowTag>
									<div className='grid grid-cols-2 gap-2 max-md:grid-cols-1'>
										<div className='col-span-1 rounded-2xl flex flex-col justify-between border-1 border-[#ccc] h-[150px] p-4 max-md:h-auto max-md:p-3'>
											<p className='text-base font-normal text-[#212121] max-md:text-sm'>
												Проголосовало человек
											</p>
											<div className='flex items-center gap-2'>
												<p className='text-[32px] font-bold max-md:text-[24px]'>99</p>
												<p className='bg-[#E6FFDD] text-[#135617] font-medium rounded-lg p-1 max-md:text-sm'>
													+16%
												</p>
											</div>
											<p className='text-base font-normal text-[#ccc] max-md:text-xs'>
												За последние 24 часа
											</p>
										</div>
										<div className='col-span-1 rounded-2xl border-1 border-[#ccc] h-[150px] max-md:h-auto'>
											<Chart2
												chartData={[0, 7, 6, 8, 7, 10]}
												title={'Динамика регистрации'}
												deadlines={'C 01.07.2025 по 31.07.2025'}
												className='max-md:h-32'
											/>
										</div>
										<BlueButton className='max-md:py-2'>
											<p className='max-md:text-sm'>Завершить регистрацию</p>
										</BlueButton>
										<AltBlueButton className='max-md:py-2'>
											<p className='max-md:text-sm'>Начать голосование</p>
										</AltBlueButton>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
				{role === 'админ' && (
					<p className='mak text-[40px] mb-5 mt-[99px] max-md:text-[32px] max-md:mt-[60px]'>Общая статистика</p>
				)}
				{role !== 'админ' && (
					<div className='grid grid-cols-9 gap-2 mt-2 max-lg:grid-cols-1 max-lg:gap-4'>
						<div className='bg-white rounded-[20px] col-span-5 h-[782px] flex flex-col justify-between p-6 max-lg:col-span-1 max-md:h-auto max-md:p-4'>
							<p className='font-semibold text-2xl max-md:text-xl'>Мои голосования</p>
							<div className='flex flex-col gap-4 max-md:gap-3'>
								<MinInfoVoteCard
									title={'выфв ыфвыф выфв ыф вфывфыв фыавы пвы'}
									description={'dsadsad dsa dsa dsd'}
									timezone={'(UTC+3) Россия - Москва (MSK)'}
									date={'06.07.2025'}
									time={'10:00'}
									className='max-md:p-3'
								/>
								<MinInfoVoteCard
									title={'выфв ыфвыф выфв ыф вфывфыв фыавы пвы'}
									description={'dsadsad dsa dsa dsd'}
									timezone={'(UTC+3) Россия - Москва (MSK)'}
									date={'06.07.2025'}
									time={'10:00'}
									className='max-md:p-3'
								/>
							</div>
							<LinkText
								title={'Показать больше'}
								size={'text-xl max-md:text-lg'}
								width={'font-semibold'}
							/>
						</div>
						<div className='bg-white rounded-[20px] col-span-4 h-[782px] p-6 max-lg:col-span-1 max-md:h-auto max-md:p-4'>
							<p className='font-bold text-xl max-md:text-lg'>Актуальные</p>
							<ActualVoteCard
								title={'Очень длинное название актуального голосования'}
								startdate={'06.07.2025'}
								starttime={'10:00'}
								enddate={'06.07.2025'}
								endtime={'10:00'}
								progress={65}
								className='max-md:p-3'
							/>
						</div>
					</div>
				)}

				<div
					className={`grid ${
						role === 'админ' ? 'grid-cols-3' : 'grid-cols-6 grid-rows-2 mt-2'
					}  gap-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1`}
				>
					<div
						className={`bg-white rounded-[20px] flex flex-col ${
							role !== 'админ' && 'col-span-2 row-span-1'
						} justify-between h-70 p-5 max-md:p-4 max-sm:col-span-1`}
					>
						<p className='font-bold text-xl max-md:text-lg'>Регистрация и голосование</p>
						<p className='font-normal text-base text-[#CCCCCC] max-md:text-sm'>
							Соотношение регистраций и голосов
						</p>
						<div className='grid grid-cols-12 gap-1 h-40 items-end max-md:h-32'>
							{heights.map((height, index) => (
								<div
									key={index}
									className='rounded-sm transition-all duration-300'
									style={{
										height: height,
										backgroundColor: colors[index % colors.length],
									}}
								/>
							))}
						</div>
						<div className='flex justify-between max-md:text-sm'>
							<p className='font-normal text-base text-[#CCCCCC] max-md:text-sm'>01.04</p>
							<p className='font-normal text-base text-[#CCCCCC] max-md:text-sm'>01.05</p>
							<p className='font-normal text-base text-[#CCCCCC] max-md:text-sm'>01.06</p>
							<p className='font-normal text-base text-[#CCCCCC] max-md:text-sm'>01.07</p>
						</div>
					</div>
					{role !== 'админ' && (
						<div className='bg-white rounded-[20px] col-span-4 row-span-2 p-5 max-lg:col-span-3 max-md:col-span-2 max-sm:col-span-1 max-md:p-4'>
							<p className='font-bold text-xl max-md:text-lg'>Календарь голосований</p>
							<Calendar className='max-md:text-sm' />
						</div>
					)}
					<div
						className={`bg-white rounded-[20px] flex flex-col ${
							role !== 'админ' && 'col-span-2 row-span-1'
						} justify-between h-70 p-5 max-md:p-4 max-sm:col-span-1`}
					>
						<p className='font-bold text-xl max-md:text-lg'>Количество голосующих</p>
						<p className='font-normal text-base text-[#CCCCCC] max-md:text-sm'>
							Всего проголосовало
						</p>
						<div className='relative w-fit'>
							<p className='text-[96px] font-bold max-md:text-[72px] max-sm:text-[48px]'>1500</p>
							<p className='bg-[#E6FFDD] text-[#135617] absolute top-3 -right-20 rounded-lg p-1 max-md:text-sm max-md:-right-16 max-sm:-right-12 max-sm:text-xs max-sm:top-1'>
								+16%
							</p>
						</div>
						<p className='font-normal text-base text-[#CCCCCC] max-md:text-sm'>
							В период с 10.06.2025 по 10.07.2025
						</p>
					</div>

					{role === 'админ' && (
						<div className='bg-white rounded-[20px] flex flex-col justify-between h-70 p-5 max-md:p-4 max-lg:col-span-3'>
							<p className='font-bold text-xl max-md:text-lg'>Регистрация и голосование</p>
							<p className='font-normal text-base text-[#CCCCCC] max-md:text-sm'>
								Соотношение регистраций и голосов
							</p>
							<div className='flex flex-col gap-1 w-full'>
								<div className='bg-[#FFD17D] w-[65%] h-[62.5px] rounded-sm max-md:h-[50px]'></div>
								<div className='bg-[#7DD4FF] w-full h-[62.5px] rounded-sm max-md:h-[50px]'></div>
							</div>
							<p className='font-normal text-base text-[#CCCCCC] max-md:text-sm'>
								В период с 10.06.2025 по 10.07.2025
							</p>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
export default MainPage