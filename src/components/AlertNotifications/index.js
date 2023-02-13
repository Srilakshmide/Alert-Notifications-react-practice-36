// import {Component} from 'react'
// import {AiFillCheckCircle} from 'react-icons/ai'
// import {GrFormClose} from 'react-icons/gr'
// import {RiErrorWarningFill} from 'react-icons/ri'
// import {MdWarning, MdInfo} from 'react-icons/md'

// import Notification from '../Notification'
// import './index.css'

// class AlertNotifications extends Component {
//   render() {
//     return (
//       <div className="bg-container">
//         <h1 className="heading">Alert Notifications</h1>
//         <Notification>
//           <div className="main-container">
//             <div className="notification-container">
//               <AiFillCheckCircle className="success-icon" />
//               <h1 className="notification-head success">Success</h1>
//             </div>
//             <div className="cross-container">
//               <GrFormClose />
//             </div>
//             <p className="description">
//               You can access all the files in the folder
//             </p>
//           </div>
//         </Notification>
//         <Notification>
//           <div className="main-container">
//             <div className="notification-container">
//               <RiErrorWarningFill className="error-icon" />
//               <h1 className="notification-head error">Error</h1>
//             </div>
//             <div className="cross-container">
//               <GrFormClose />
//             </div>
//             <p className="description">
//               Sorry, you are not authorized to have access to delete the file
//             </p>
//           </div>
//         </Notification>
//         <Notification>
//           <div className="main-container">
//             <div className="notification-container">
//               <MdWarning className="warn-icon" />
//               <h1 className="notification-head warn">Warning</h1>
//             </div>
//             <div className="cross-container">
//               <GrFormClose />
//             </div>
//             <p className="description">
//               Viewers of this file can see comments and suggestions
//             </p>
//           </div>
//         </Notification>
//         <Notification>
//           <div className="main-container">
//             <div className="notification-container">
//               <MdInfo className="info-icon" />
//               <h1 className="notification-head info">Info</h1>
//             </div>
//             <div className="cross-container">
//               <GrFormClose />
//             </div>
//             <p className="description">
//               Anyone on the Internet can view these files
//             </p>
//           </div>
//         </Notification>
//       </div>
//     )
//   }
// }

// export default AlertNotifications

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="message-container">
        <h1 className="message-heading info">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="message-container">
        <h1 className="message-heading warning">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="message-container">
        <h1 className=" message-heading error">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="message-container">
        <h1 className="message-heading success">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
