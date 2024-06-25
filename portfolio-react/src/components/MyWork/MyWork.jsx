import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.png'



const MyWork = () => {
    return (
        <div id='projects' className='mywork'>
            <div className="mywork-title">
                <a href="https://drive.google.com/drive/folders/1x6-sZyES-qQe5XlY8sQHd9-GeXeCgcSC?usp=drive_link" target='blank'><h1>Projects</h1></a>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <h3 >you can watch the works given above by clicking the portfolio title.</h3>
            {/* <div className="mywork-showmore">
                <a href='https://drive.google.com/drive/folders/1x6-sZyES-qQe5XlY8sQHd9-GeXeCgcSC?usp=drive_link' target='_blank'><p>Show More</p></a>
                <img src={arrow_icon} alt="" />
            </div> */}
        </div>
    )
function Slider (){
    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    };
}
}

export default MyWork