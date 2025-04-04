const SortArray = (posts) =>{
    return posts?.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)
  }
export default SortArray;