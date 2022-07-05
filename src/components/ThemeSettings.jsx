import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setTheme } = useStateContext();
  return (
    <div className='bg-hald-transparent w-screen fixed nav-items top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:[#484B52]
      w-400'>
        <div className='flex justfy-between items-center p-4 ml-4'>
          <p className='font-semibold text-xl'>Settings</p>
          <button type='button' onClick={() => setThemeSettings(false)} style={{ color: 'rgb(153, 171, 100)',
            borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
            >
          </button>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>
            Theme Options
          </p>
          <div className='mt-4'>
            <input type='radio' id='light' name='theme' value='Light'
            className='cursor-pointer' 
            onChange={setMode}   
            checked={currentMode === 'Light'}     
            
            />
            <label htmlFor='light' className='ml-2 text-md cursor-pointer'>
              Light
            </label>
          </div>
          <div className='mt-4'>
            <input type='radio' id='dark' name='theme' value='Dark'
            className='cursor-pointer' 
            onChange={setMode}   
            checked={currentMode === 'Dark'}     
            
            />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>
              Dark
            </label>
          </div>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>
            Theme Colors
          </p>
          <div className='flex gap-3'>
            {themeColors.map((item, index) => (
              <TooltipComponent key={index} content={item.name}
              position='TopCenter'>
                <div className='relative mt-2 cursor-pointer flex gap gap-5
                items-center'>
                  <button type='button' className='h-10 w-10 rounded-full cursor-pointer'
                  style={{ backgroundColor: item.color }} 
                  onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}/>

                  </button>

                </div>

              </TooltipComponent>
            ))}

          </div>
        </div>

      </div>

    </div>
  )
}

export default ThemeSettings