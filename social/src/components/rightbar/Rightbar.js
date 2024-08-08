import "./rightbar.css"
import {Users} from "../../dummyData"
import Person from "../person/Person"

export default function rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        <div className="birthdaycontainer">
          <img src="assets/gift.png" alt="" className="birthdayimg" />
          <spam className="birthdaytext"><b>Pola Foster</b> and <b>3 others friends</b> have a birthday today.</spam>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarad" />
       <h4 className="rightbartitle">Online Friends</h4>
       <ul className="rightbarfriendlist">
      {Users.map((u)=>(
        <Person key={u.id} user={u}/>
      ))}
      

       </ul>
      </div>
    </div>
  )
}
