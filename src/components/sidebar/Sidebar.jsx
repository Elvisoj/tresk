import '../../styles/sidebar.css'
import AboutMe from '../about/AboutMe'
import AboutUs from '../about/AboutUs'
import Categories from './Categories'

function Sidebar() {
  return (
    <div className='sidebar'>
      <AboutUs />
      <AboutMe />
      <Categories />
      Social Handles
      Social Handles share
    </div>
  )
}

export default Sidebar
