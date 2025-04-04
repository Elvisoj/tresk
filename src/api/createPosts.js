import { supabase } from '../lib/supabaseClient';


const submitPost = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
    .from('posts')
    .insert(posts);

    if (error) {
      console.error('Error submitting post:', error.message);
    
    } else {
      fetchPosts(); 
      console.log('Post submitted successfully:', data);
    }
  };



export const createComments = async (comment, commentId,) => {
    const { data: existingData, error: fetchError } = await supabase
        .from('comments')
        .select('comments')
        .eq('id', commentId)
        .single();

    if (fetchError && fetchError.code !== 'PGRST116') { // Ignore "row not found" error
        throw new Error('Failed to fetch existing comments: ' + fetchError.message);
    }

    const existingComments = existingData?.comments || [];
    const { data, error } = await supabase
        .from('comments')
        .upsert({ id: commentId, comments: [...existingComments, comment] }, { onConflict: 'id' });
    console.log("Comment created successfully", comment)
    
    if (error) {
        throw new Error('Failed to create posts: ' + error.message);
    }

    return data;
};
