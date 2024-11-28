import './Abouts.css'
import ME from "../../../public/assets/me-about.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function Abouts (){
  return (
    <section id='Abouts'>
<div className='container about__container'>
<div className='about__me'>
  <div className='about__me-image'>
    <img src={ME} alt='About Image'/>
  </div>
</div>

  <div className='about__content'>
    <div className="about__cards">
      <article className='about__card'>
        <FaAward className='about__icon'/>
       <h5>Experience</h5>
       <small>3+ Years Working</small>
      </article>
    

      <article className='about__card'>
        <FiUsers className='about__icon'/>
       <h5>Clients</h5>
       <small>200+ Clients Around Chikanda</small>
      </article>
    
      <article className='about__card'>
        <VscFolderLibrary className='about__icon'/>
       <h5>Accommodated</h5>
       <small>400+ Students</small>
      </article>
      
    
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet necessitatibus autem cupiditate nihil sunt dolore, quaerat doloremque, esse voluptatum, quos vitae ducimus ab illum architecto consequuntur repellat eveniet iure.
    </p>
    <a href='#Contacts'>Let's Talk</a>
  </div>
  </div>
</section>
  )
}


export default Abouts;