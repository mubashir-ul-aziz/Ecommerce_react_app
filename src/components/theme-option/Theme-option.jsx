


import { Link } from 'react-router-dom'
// import { useTheme } from "hooks/use-theme";
import React, { useContext, useState } from 'react';
import Popup from './Popup';
import MyContext from 'components/context/Context.jsx';



// {checkedTheme,onChange,textSticky,onChangeSticky,checkedSticky,checkedThemeText}
// function Themeoption() {
//   const { checked, theme, handleChange, handleChangeTheme } = useTheme();
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };
  
//   return (
//     <div>
//       <div className='theme-option-component'>
//         <div className={`sticky-button ${isPopupOpen?"open":"close"}`}  >
//             <button onClick={togglePopup} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Theme Option</button>
            
//       <Popup isOpen={isPopupOpen} handleClose={togglePopup}>
//         <div className="checkboxes__row">
//     <div className="checkboxes__item">
//       <label className="checkbox style-e">
//         <input
//           type="checkbox"
//           checked={theme} 
//           onChange={handleChangeTheme} 
          
//         />
//         <div className="checkbox__checkmark"></div>
//         <div className="checkbox__body">textSticky </div>
//       </label>
//     </div>
    
//   </div> 
//         <div className="checkboxes__item">
//       <label className="checkbox style-e">
//         <input
//           type="checkbox"
//           checked={checked} 
//           onChange={handleChange} 
//         />
//         <div className="checkbox__checkmark"></div>
//         <div className="checkbox__body"> checkedThemeText </div>
//       </label>
//     </div>
//       </Popup>
//         </div>
            
//       </div>
//     </div>
//   )
// }

// export default Themeoption


function Themeoption() {
  const { checked, theme, handleChange, handleChangeTheme } = useContext(MyContext);
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <div className='theme-option-component'>
        <div className={`sticky-button ${isPopupOpen ? "open" : "close"}`}>
          <button onClick={togglePopup} className="inline-flex items-center g-indigo-500 text-white border-0 py-2 px-4 focus:outline-none over:bg-indigo-700 rounded text-base mt-4 md:mt-0">
            Theme Option
          </button>

          <Popup isOpen={isPopupOpen} handleClose={togglePopup}>
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-e">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                  />
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">textSticky</div>
                </label>
              </div>
            </div>
            <div className="checkboxes__item">
              <label className="checkbox style-e">
                <input
                  type="checkbox"
                    checked={theme}
                    onChange={handleChangeTheme}
                />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">checkedThemeText</div>
              </label>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Themeoption;
