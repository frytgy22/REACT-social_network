// import React from "react";
// import classes from './users.module.css'
// import * as axios from "axios";
// import userPhoto from './../../assets/images/user.png'
//
// let Users = (props) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             // props.setUsers([
//             //      {
//             //          id: 1,
//             //          photoUrl: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png',
//             //          followed: false,
//             //          fullName: 'Dmitriy',
//             //          status: 'boss',
//             //          location: {city: 'Kiev', country: 'Ukraine'}
//             //      },
//             //      {
//             //          id: 2,
//             //          photoUrl: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png',
//             //          followed: false,
//             //          fullName: 'Petr',
//             //          status: 'boss',
//             //          location: {city: 'Kiev', country: 'Ukraine'}
//             //      },
//             //      {
//             //          id: 3,
//             //          photoUrl: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png',
//             //          followed: true,
//             //          fullName: 'Masha',
//             //          status: 'boss',
//             //          location: {city: 'Dnepr', country: 'Ukraine'}
//             //      },
//             //      {
//             //          id: 4,
//             //          photoUrl: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png',
//             //          followed: true,
//             //          fullName: 'Ivan',
//             //          status: 'boss',
//             //          location: {city: 'Kiev', country: 'Ukraine'}
//             //      }
//             //  ])
//
//             axios.get("https://social-network.samuraijs.com/api/1.0/users")
//                 .then(response => {
//                     props.setUsers(response.data.items)
//                 })
//         }
//     }
//     return (
//         <div>
//             <button onClick={getUsers }>Get users</button>
//             {
//                 props.users.map(u =>
//                         <div key={u.id}>
//                     <span>
//                         <div className={classes.userPhoto}>
//                             <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
//                         </div>
//                         <div>
//                             {u.followed
//                                 ? <button onClick={() => {
//                                     props.unfollow(u.id)
//                                 }}>Unfollow</button>
//                                 : <button onClick={() => {
//                                     props.follow(u.id)
//                                 }}>Follow</button>}
//                         </div>
//                     </span>
//
//                             <span>
//                     <span>
//                         <div>{u.fullName}</div>
//                         <div>{u.status}</div>
//                     </span>
//
//                         <span>
//                             <div>{'u.location.country'}</div>
//                             <div>{'u.location.city'}</div>
//                     </span>
//                 </span>
//                         </div>
//                 )
//             }
//         </div>
//     )
// }
//
// export default Users;