import "./person.css";

export default function Person({user}) {
  return (
    <li className="rightbarfriend">
       <div className="rightbarprofileimgcontainer">
           <img src={user.profilePicture} alt="" className="rightbarprofileimg" />
           <span className="rightbaronline"></span>
       </div>
       <span className="rightbarusername">{user.username}</span>
    </li>
  )
}
