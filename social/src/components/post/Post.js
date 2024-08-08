import "./post.css"
import { MoreVert } from "@mui/icons-material"
import {Users} from "../../dummyData"
import { useState } from "react"

export default function Post({post}) {
  
const [like,setLike] = useState(post.like)
const [isliked,setIsLiked] = useState(false)

const likeHandler =()=>{
  setLike(isliked ? like-1 : like+1)
  setIsLiked(!isliked)
}

  return (
    <div className="post">
     <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <img className="postprofileimg" src={Users.filter(u=>u.id === post.userId )[0].profilePicture} alt="" />
            <div className="postusername">{Users.filter(u=>u.id === post.userId )[0].username}</div>
            <div className="postdate">{post.date}</div>
          </div>
          <div className="posttopright">
            <MoreVert/>
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">{post?.desc}</span>
          <img src={post.photo} alt=" " className="postimg" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
          <img src="assets/like.png" onClick={likeHandler} alt="" className="likeicon" />
          <img src="assets/heart.png" onClick={likeHandler} alt="" className="likeicon" />
          <span className="postlikecounter">{like} people like it </span>
          </div>
          <div className="postbottomright">
            <span className="postcommenttext">{post.comment} comments</span>
          </div>
        </div>
     </div>
    </div>
  )
}
