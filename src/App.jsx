import { useState } from 'react'
import './App.css'
import { FaMinus } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import img from '../src/assets/counter.png'
import gif from '../src/assets/tasbeeh.gif'
function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const resets = () => {
    setCount(0)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className='w-full h-[100vh]'>
      <div className='w-full h-full relative'>
        <img src={gif} className='h-full absolute w-full object-cover' />
        <div className="absolute top-0 h-full w-full bg-black/50"></div>
        <div className='absolute top-0 w-full flex justify-content-center flex-col h-full items-center'>
          <h1 className='mb-4 mt-2 text-center text-xl sm:text-3xl font-semibold text-white'>Online Tasbeeh Counter</h1>
          <div
            className="h-[300px] w-full sm:h-[300px] sm:w-[400px] bg-no-repeat bg-center bg-contain"
            style={{
              blockSize: '100%',
              backgroundImage: `url(${img})`,
            }}
          >
            <div className='w-full h-[90%] flex justify-center items-center'>
              <div className='w-6/12 h-[60%] mx-auto'>
                <input
                  type="text"
                  className='text-shadow-black text-4xl shadow-md shadow-white bg-white/90 w-[100%] font-serif mb-4 p-2 border-none outline-none rounded-md text-center'
                  value={count}
                  readOnly
                />
                <div className='flex justify-around sm:justify-between items-center sm:mt-4'>
                  <div
                    className='sm:h-[60px] h-[40px] w-[40px] flex justify-center items-center sm:w-[60px] rounded-[50%] bg-white/90 shadow-lg cursor-pointer transition-all ease-in-out delay-100 hover:shadow-blue-100'
                    onClick={() => decrement()}
                  >
                    <span className='text-xl'><FaMinus /></span>
                  </div>
                  <div
                    className='sm:h-[60px] h-[40px] w-[40px] flex justify-center items-center sm:w-[60px] rounded-[50%] bg-white/90 shadow-lg cursor-pointer transition-all ease-in-out delay-100 hover:shadow-blue-100'
                    onClick={() => resets()}
                  >
                    <span className='text-xl'><BiReset /></span>
                  </div>
                </div>
                <div className='flex h-[40%] w-full justify-center items-center mt-5'>
                  <div
                    className='h-[80px] w-[80px] sm:h-[140px] sm:w-[140px] rounded-[50%] flex justify-center sm:mt-15 items-center font-semibold shadow-lg bg-white/90 cursor-pointer transition-all ease-in-out delay-100 hover:shadow-blue-100'
                    onClick={() => increment()}
                  >
                    <span>Press Me</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="w-full px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
            urdu: 'جو شخص روزانہ 100 بار "سبحان اللہ وبحمدہ" کہے، اس کے گناہ معاف کر دیے جاتے ہیں، چاہے وہ سمندر کی جھاگ کے برابر ہوں۔',
            ref: 'صحیح بخاری 6405، صحیح مسلم 2691'
          },
          {
            arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ',
            urdu: 'دو کلمات زبان پر ہلکے، میزان میں بھاری اور اللہ کو محبوب: سبحان اللہ وبحمدہ، سبحان اللہ العظیم',
            ref: 'صحیح بخاری 6682'
          },
          {
            arabic: 'تسبیح 33، الحمدللہ 33، اللہ اکبر 34',
            urdu: 'ہر نماز کے بعد سبحان اللہ، الحمدللہ اور اللہ اکبر کہنے کی تلقین کی گئی۔',
            ref: 'صحیح مسلم 597'
          },
          {
            arabic: 'اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا',
            urdu: 'اے ایمان والو! اللہ کو کثرت سے یاد کرو۔',
            ref: 'سورۃ الاحزاب، آیت 41'
          },
          {
            arabic: 'لَا يَزَالُ لِسَانُكَ رَطْبًا مِنْ ذِكْرِ اللَّهِ',
            urdu: 'تمہاری زبان اللہ کے ذکر سے تر رہنی چاہیے۔',
            ref: 'ترمذی 3375 (حسن)'
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/80 hover:bg-green-100/80 transition-all duration-300 ease-in-out rounded-xl shadow-lg p-5 border-t-4 border-green-500 hover:shadow-2xl"
          >
            <p className="text-right text-xl font-bold text-green-700 mb-2">{item.arabic}</p>
            <p className="text-gray-800 text-sm mb-3">{item.urdu}</p>
            <p className="text-sm text-gray-500 text-left italic">{item.ref}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App