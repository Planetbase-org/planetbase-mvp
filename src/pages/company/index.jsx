import Modal from '../../components/Modal/Modal';
import Navbar from '../../components/NavBar/Navbar'
import './style.css'

export function ListItem({heading,text, icon} ){
  return(
    <div>
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img src={icon}/>
          </div>
          <div className="col-10">
          <h3>{heading}</h3>
            <p>{text}</p>
          </div>
        </div>
      </li>
    </div>
  )
}
export default function Company(){
    const bool = true;
        return (
        <div>
          <Navbar />
       <section className='resource'>
       <div className='left'>
       <h3>What is the latest updates</h3>
       <div className='left-content' >
       <p>
       lorem ipsum dolor sit amet, consectetur adipiscing elit
       lorem ipsum dolor sit amet, consectetur adipiscing elit
       </p>
       </div>
       </div>
    
       <div className='right'>
       <h3>What is the latest updates</h3>
       <div className=''>
       <ListItem text={"World class Events"} heading={"Easy Integratuon"}/>
        <ListItem text={"World class Events"} heading={"Easy Integratuon"}/>
        <ListItem text={"World class Events"} heading={"Easy Integratuon"}/>
      
       </div>
       </div>
       </section>
            
        </div>
    )
}