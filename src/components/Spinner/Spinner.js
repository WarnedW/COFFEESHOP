import './Spinner.scss'

import React from 'react'

import {MoonLoader} from 'react-spinners'

const Spinner = () => {
   return(
      <div className="spinner">
         <MoonLoader color={'#36d7b7'}/>
      </div>
   )
}

export default Spinner;