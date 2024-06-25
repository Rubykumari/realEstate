import { useState } from 'react';
import './Chat.scss';

export const Chat = () => {
    const [chat, setChat] = useState(true);
    return (
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="/assets/user.jpg" alt="" />
                    <span>Ruby Kumari</span>
                    <p>Lorem ipsum dolor consectetur...</p>
                </div>
                <div className="message">
                    <img src="/assets/user.jpg" alt="" />
                    <span>Aashvi Sahu</span>
                    <p>Lorem ipsum dolor consectetur...</p>
                </div>
                <div className="message">
                    <img src="/assets/user.jpg" alt="" />
                    <span>Rahul Kumar</span>
                    <p>Lorem ipsum dolor consectetur...</p>
                </div>
                <div className="message">
                    <img src="/assets/user.jpg" alt="" />
                    <span>Gudiya Kumari</span>
                    <p>Lorem ipsum dolor consectetur...</p>
                </div>
                <div className="message">
                    <img src="/assets/user.jpg" alt="" />
                    <span>Ruby Kumari</span>
                    <p>Lorem ipsum dolor consectetur...</p>
                </div>
                <div className="message">
                    <img src="/assets/user.jpg" alt="" />
                    <span>Ruby Kumari</span>
                    <p>Lorem ipsum dolor consectetur...</p>
                </div>
                <div className="message">
                    <img src="/assets/user.jpg" alt="" />
                    <span>Ruby Kumari</span>
                    <p>Lorem ipsum dolor consectetur...</p>
                </div>
                <div className="message">
                    <img src="/assets/user.jpg" alt="" />
                    <span>Ruby Kumari</span>
                    <p>Lorem ipsum dolor consectetur...</p>
                </div>
            </div>
            {chat && <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="/assets/user.jpg" alt="" />
                        Ruby Kumari
                    </div>
                    <span onClick={()=>setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMsg">
                        <p>Lorem ipsum dolor sit</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMsg own">
                        <p>Lorem ipsum dolor sit</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMsg">
                        <p>Lorem ipsum dolor sit</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMsg own">
                        <p>Lorem ipsum dolor sit</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMsg">
                        <p>Lorem ipsum dolor sit</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMsg own">
                        <p>Lorem ipsum dolor sit</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMsg">
                        <p>Lorem ipsum dolor sit</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
            </div>}
        </div>
    )
}
