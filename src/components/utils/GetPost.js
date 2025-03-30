function getPost(posts, postId){
    return posts.find(post => post.id === postId)
}

export default getPost