import { Chat } from '../../components/chat/Chat';
import { List } from '../../components/list/List';
import './Profile.scss';

export const Profile = () => {
  return (
    <div className='profile'>
      <div className="userDetails">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>Avatar: <img src="/assets/user.jpg" alt="" /></span>
            <span>Username: <b>Ruby Kumari</b></span>
            <span>Email: <b>ruby226.driem@gmail.com</b></span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List/>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  )
}
