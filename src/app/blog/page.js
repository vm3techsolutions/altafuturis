import Blog3blogs from "./Blog3blogs";
import Blog4btn from "./Blog4btn";
import BlogBanner from "./BlogBanner";
import BlogDiscuss from "./BlogDiscuss";


export default function Home() {
    return (
  <div className="bg-white"> 
  
    <BlogBanner/>
    <Blog4btn/>
    <Blog3blogs/>
    <BlogDiscuss/>
    
  
  </div>
    );
  }
  