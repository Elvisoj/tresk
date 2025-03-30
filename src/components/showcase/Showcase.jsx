import { UseDashboardContext } from '../../dataManagement/dashboardContext'
import '../../styles/showcase.css'
import SearchBar from '../menu/SearchBar'
import Posts from '../posts/Posts'

function Showcase() {
  const { latestPosts, searchTerm, setSearchTerm } = UseDashboardContext()
  
  
  return (
    <div className='showcase'>
      <div className="showcase-wrapper">
        <div className='showcase-content'>
          <h1 className='showcaseTitle'>Discover The Latest Trend here on TresK</h1>
          <p className='showcasePara'>Discover the best and lovely and entising content here on <b>trEsk</b> tours and activities around the world</p>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
       <Posts posts={latestPosts} />
      </div>
    </div>
  )
}

export default Showcase
