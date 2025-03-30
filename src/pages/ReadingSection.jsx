import CommentDialogBox from '../components/readingSection/CommentDialogBox'
import Comments from '../components/readingSection/Comments'
import SinglePost from '../components/readingSection/SinglePost'
import Sidebar from '../components/sidebar/Sidebar'
import '../styles/readingSection.css'

function ReadingSection() {
  return (
    <div className='reading-section'>
        <div className="left-side">
            <SinglePost />
            {/* <Comments />
            <CommentDialogBox /> */}
        </div>
        <div className="right-side"> 
            <Sidebar />
        </div>
    </div>
  )
}

export default ReadingSection
