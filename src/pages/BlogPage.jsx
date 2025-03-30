import '../styles/blog.css'
import { UseDashboardContext } from '../dataManagement/dashboardContext'
import Posts from '../components/posts/Posts';

function BlogPage() {

    const {posts, searchTerm } = UseDashboardContext();
  return (
    <div className='blog'>
      <div className="blogWrapper">
        <Posts posts={posts}/>
      </div>
    </div>
  )
}

export default BlogPage
