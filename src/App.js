import logo from './logo.svg';
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from "./component";
import {
  Ecommerce, Orders, Calendar, Employees, 
  Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line
} from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import StackedChart from './pages/Charts/StackedChart';

function App() {

  const { activeMenu, themeSettings, setthemeSettings, currentColor, currentMode } = useStateContext()
  // const activemenu = true

  return (
    <>
      <div className={currentMode === 'Dark' ? "dark" : ''}>
        <HashRouter>
          <div className="flex sm:flex-nowrap flex-wrap relative dark:bg-main-dark-bg" style={{ zIndex: '1000000000' }}>
            <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>

              <TooltipComponent content='settings' position='Top' >
                <button
                  type='button'
                  className='settings-button text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                  style={{ background: currentColor, borderRadius: "50%" }}
                  onClick={() => setthemeSettings(true)}
                  >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </div>
            ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </div>
            )}
            <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen 
            w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
              <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
              </div>

              {/* Routes */}

              <div>

                { themeSettings && <ThemeSettings /> }
                
                <Routes>
                  {/* Dashboard */}
                  <Route path='/' element={<Ecommerce />} />
                  <Route path='/ECommerce' element={<Ecommerce />} />

                  {/* Pages */}

                  <Route path='/orders' element={<Orders />} />
                  <Route path='/employees' element={<Employees />} />
                  <Route path='/customers' element={<Customers />} />

                  {/* Apps */}
                  <Route path='/kanban' element={<Kanban />} />
                  <Route path='/editor' element={<Editor />} />
                  <Route path='/calendar' element={<Calendar />} />
                  <Route path='/Color-Picker' />

                  {/* Charts */}
                  <Route path='/line' element={<Line />} />
                  <Route path='/area' element={<Area />} />
                  <Route path='/bar' element={<Bar />} />
                  <Route path='/pie' element={<Pie />} />
                  <Route path='/financial' element={<Financial />} />
                  <Route path='/color-mapping' />
                  <Route path='/pyramid' element={<Pyramid />} />
                  <Route path='/stacked' element={<StackedChart />} />
                </Routes>
              </div>
            </div>
          </div>
        </HashRouter>
      </div>

    </>
  );
}

export default App;
