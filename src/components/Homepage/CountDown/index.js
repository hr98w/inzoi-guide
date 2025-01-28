import { useState, useEffect } from 'react'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-03-28T00:00:00')

    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mb-8 bg-sky-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-sky-700 drop-shadow-lg">
        inZOI Release Countdown
      </h2>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center bg-sky-500 p-3 rounded-lg">
          <span className="text-3xl font-bold text-white">{timeLeft.days}</span>
          <span className="text-sm text-sky-100">Days</span>
        </div>
        <div className="flex flex-col items-center bg-sky-500 p-3 rounded-lg">
          <span className="text-3xl font-bold text-white">{timeLeft.hours}</span>
          <span className="text-sm text-sky-100">Hours</span>
        </div>
        <div className="flex flex-col items-center bg-sky-500 p-3 rounded-lg">
          <span className="text-3xl font-bold text-white">{timeLeft.minutes}</span>
          <span className="text-sm text-sky-100">Minutes</span>
        </div>
        <div className="flex flex-col items-center bg-sky-500 p-3 rounded-lg">
          <span className="text-3xl font-bold text-white">{timeLeft.seconds}</span>
          <span className="text-sm text-sky-100">Seconds</span>
        </div>
      </div>
    </div>
  )
}

export default Countdown