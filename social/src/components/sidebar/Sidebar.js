import "./sidebar.css"
import {RssFeed, Chat, PlayCircle, Groups, Bookmarks, QuestionMark, WorkOutline, Event, LocalLibrary} from "@mui/icons-material"
import {Users} from "../../dummyData"
import New from "../new/New"

export default function sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarwrapper">
      <ul className="sidebarlist">
        <li className="sidebarlistitem">
          <RssFeed className="sidebaricon"/>
          <span className="sidebarlistitemtext">Feed  </span>
        </li>

        <li className="sidebarlistitem">
          < Chat className="sidebaricon"/>
          <span className="sidebarlistitemtext">Chat  </span>
        </li>

        <li className="sidebarlistitem">
          <PlayCircle className="sidebaricon"/>
          <span className="sidebarlistitemtext">Videos  </span>
        </li>

        <li className="sidebarlistitem">
          <Groups className="sidebaricon"/>
          <span className="sidebarlistitemtext">Groups  </span>
        </li>

        <li className="sidebarlistitem">
          <Bookmarks className="sidebaricon"/>
          <span className="sidebarlistitemtext">Bookmarks </span>
        </li>

        <li className="sidebarlistitem">
          <QuestionMark className="sidebaricon"/>
          <span className="sidebarlistitemtext">Questions </span>
        </li>

        <li className="sidebarlistitem">
          <WorkOutline className="sidebaricon"/>
          <span className="sidebarlistitemtext">Jobs </span>
        </li>

        <li className="sidebarlistitem">
          <Event className="sidebaricon"/>
          <span className="sidebarlistitemtext">Events  </span>
        </li>

        <li className="sidebarlistitem">
          <LocalLibrary className="sidebaricon"/>
          <span className="sidebarlistitemtext">  Courses </span>
        </li>
      </ul>
      <button className="sidebarbutton">Show More</button>
      <hr className="sidebarhr"/>
      <ul className="sidebarfriendlist">
      
      {Users.map((u)=>(
        <New key={u.id} user={u}/>
      ))}
      </ul>
    </div>
    </div>
  )
}
