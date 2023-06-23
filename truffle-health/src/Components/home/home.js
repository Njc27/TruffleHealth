import React from 'react'
import './home.css'
import { useSelector,useDispatch } from 'react-redux';
import billPreview from "../../Assests/billHospital.png";
import addImage from "../../Assests/plus_PNG95.png";
import btnImage from "../../Assests/plus_250.png"
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const{billData} = useSelector(state=>state.bills);
  const navigate = useNavigate();
  const{loggedInUser} = useSelector(state=>state.user);

  console.log(billData);


  return (
    <div className='home'>
      <div className='home-title'>
        DashBoard
      </div>
      <div className='dashboard-container'>
        {billData.map(items =>(
          loggedInUser && loggedInUser?.email === items?.user &&(
          <div className='cards' onClick={()=>navigate('/addBill',{state:{data:items,index:billData.indexOf(items)}})}>
          <div className='card-image'>
            <img src = {URL.createObjectURL(items?.image)} />
          </div>
          <div className='card-tite'>
          Patient Name: {items?.fname}
          </div><br/>
          <div className='card-details'>
            <div>
              Date of Service: {items?.Dos}
            </div>
            <br/>
            <div>
              Bill Amount: ${items?.billAmount}
            </div>
          </div>
        </div>
        )))}
        <div className='btn_cards' onClick={()=>navigate('/addBill')}>
        Add a New Bill
          {/* <div className='card-image'>
            <img src = {addImage} />
          </div>
          <div className='card-tite'>
            Add a New Bill
          </div>
          <div className='card-details'>

          </div> */}
          <button className='card-btn'>
            <img src={btnImage}></img>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home