import Blog3blogs from "./Blog3blogs";
import BlogBanner from "./BlogBanner";
import BlogDiscuss from "./BlogDiscuss";


export default function Home() {
    return (
  <div className="bg-white"> 
  
    <BlogBanner/>
    <Blog3blogs/>
    <BlogDiscuss/>
    
  
  </div>
    );
  }
  