import "./widgetSm.css"
import {Visibility }from '@mui/icons-material';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <img src="https://source.unsplash.com/3tYZjGSBwbk" alt="img1" className="widgetSmImg" />
            <div className="widgetSmUser">
               <span className="widgetSmUserName">Anna keller</span>
               <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><Visibility/>Display</button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://source.unsplash.com/3tYZjGSBwbk" alt="img1" className="widgetSmImg" />
            <div className="widgetSmUser">
               <span className="widgetSmUserName">Anna keller</span>
               <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><Visibility/>Display</button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://source.unsplash.com/3tYZjGSBwbk" alt="img1" className="widgetSmImg" />
            <div className="widgetSmUser">
               <span className="widgetSmUserName">Anna keller</span>
               <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><Visibility/>Display</button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://source.unsplash.com/3tYZjGSBwbk" alt="img1" className="widgetSmImg" />
            <div className="widgetSmUser">
               <span className="widgetSmUserName">Anna keller</span>
               <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><Visibility/>Display</button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://source.unsplash.com/3tYZjGSBwbk" alt="img1" className="widgetSmImg" />
            <div className="widgetSmUser">
               <span className="widgetSmUserName">Anna keller</span>
               <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><Visibility className="widgetSmIcon"/>Display</button>
        </li>
      </ul>
    </div>
  )
}
