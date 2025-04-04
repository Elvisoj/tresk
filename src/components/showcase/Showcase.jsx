import { useState } from 'react'
import { UseDashboardContext } from '../../dataManagement/dashboardContext'
import '../../styles/showcase.css'
import SearchBar from '../menu/SearchBar'
import Posts from '../posts/Posts'
import SortArray from '../utils/SortArray'
import Loading from '../amination/Loading'

function Showcase() {
  const { posts, searchTerm, setSearchTerm, postLoading, postErrors } = UseDashboardContext()
  const [ latestPosts, setLatestPosts ] = useState(SortArray(posts))
  
  if(postLoading) return <Loading />

  return (
    <div className='showcase'>
      <div className="showcase-wrapper">
        <div className='showcase-content'>
          <h1 className='showcaseTitle'>Discover The Latest Trend here on TresK</h1>
          <p className='showcasePara'>Discover the best and lovely and entising content here on <b>trEsk</b> tours and activities around the world</p>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>

        <Posts posts={posts?.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)} />

        {/* {posts?.length < 1 ? <p>No post available at the moment</p> : <Posts posts={latestPosts} />} */}
       
      </div>
    </div>
  )
}

export default Showcase
