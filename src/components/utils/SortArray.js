const SortArray = (posts) =>{
    const newPosts = posts?.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)
    return newPosts
  }
export default SortArray;