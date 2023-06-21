import React from 'react'
import './home.css'
import { useSelector,useDispatch } from 'react-redux';
import billPreview from "../../Assests/billHospital.png";
import addImage from "../../Assests/plus.jpg";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const{billData} = useSelector(state=>state.bills);
  const navigate = useNavigate();



  return (
    <div className='home'>
      <div className='home-title'>
        DashBoard
      </div>
      <div className='dashboard-container'>
        {billData.map(items =>(
          <div className='cards'>
          <div className='card-image'>
            <img src = {billPreview} />
          </div>
          <div className='card-tite'>

          </div>
          <div className='card-details'>

          </div>
        </div>
        ))}
        <div className='cards'onClick={()=>navigate('/addBill')}>
          <div className='card-image'>
            <img src = {addImage} />
          </div>
          <div className='card-tite'>
            Add a bill to the db
          </div>
          <div className='card-details'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home