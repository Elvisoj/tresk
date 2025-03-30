import React, { useState } from 'react'
import { UseDashboardContext } from '../../dataManagement/dashboardContext'

function Reaction(props) {
  const { posts } = UseDashboardContext()
  const [reaction, setReaction] = useState(props.reaction)
  
  const [userReaction, setUserReaction] = useState(null)

  const handleReaction = (postId, reactionType) => {
    const selectedPost = posts.filter((post) => post.id === postId)[0]
    const newReaction = { ...reaction }

    if (userReaction === reactionType) {
      newReaction[reactionType] -= 1
      setUserReaction(null)
    } else {
      if (userReaction) {
        newReaction[userReaction] -= 1
      }
      newReaction[reactionType] += 1
      setUserReaction(reactionType)
    }

    setReaction(newReaction)
    selectedPost.reaction = newReaction
    console.log(posts)
  }

  return (
    <div className='reaction'>
      <div className="reaction-wrapper">
        <div className={`reactionType like ${userReaction === 'like' ? 'selected' : ''}`} onClick={() => handleReaction(props.id, "like")}>
          <span className="reactionSymbol">👍</span>
          <span className='reactionName'>{reaction.like > 1 ? reaction.like + " likes" : reaction.like + " like"}</span>
        </div>
        <div className={`reactionType dislike ${userReaction === 'dislike' ? 'selected' : ''}`} onClick={() => handleReaction(props.id, "dislike")}>
          <span className="reactionSymbol">👎</span>
          <span className='reactionName'>{reaction.dislike > 1 ? reaction.dislike + " dislikes" : reaction.dislike + " dislike"}</span>
        </div>
        <div className={`reactionType love ${userReaction === 'love' ? 'selected' : ''}`} onClick={() => handleReaction(props.id, "love")}>
          <span className="reactionSymbol">💖</span>
          <span className='reactionName'>{reaction.love > 1 ? reaction.love + " love" : reaction.love + " love"}</span>
        </div>
        <div className={`reactionType hate ${userReaction === 'hate' ? 'selected' : ''}`} onClick={() => handleReaction(props.id, "hate")}>
          <span className="reactionSymbol">😡</span>
          <span className='reactionName'>{reaction.hate > 1 ? reaction.hate + " hates" :reaction.hate + " hate"}</span>
        </div>
      </div>
    </div>
  )
}

export default Reaction
