import { supabase } from "../lib/supabaseClient";

export const fetchPosts = async (posts, loading, errors) => {
    loading(true);
    errors(null);
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*'); 
         
    if (error) throw error;
    posts(data);
    loading(false);
    
} catch (error) {
        console.error("Error fetching posts:", error);
        errors(error);
        loading(false);
    }
};
export const fetchComments = async (posts, loading, errors) => {
    loading(true);
    errors(null);
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*'); 
         
    if (error) throw error;
    posts(data);
    loading(false);
    
} catch (error) {
        console.error("Error fetching posts:", error);
        errors(error);
        loading(false);
    }
};