import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic} from 'antd';
import icon from './image/ballu.jpg';
import './App.css'

const {Title} = Typography;   // Title destrcutured from Typography

function App() {
  return (
    <div className='main'>
      <div className='header-image'>
        <img className='photo-icon' src={icon} alt='football'/>

      </div>
 
    </div>
  );
}

export default App;
