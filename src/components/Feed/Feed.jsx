import React, { useState, useEffect } from 'react';
import './feed.css'

import InputOption from './InputOption';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';


const Feed = () => {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {

    }, [])

    const sendPost = e => {
        e.preventDefault();
        setPosts([...posts])
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Start a post" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#F5987E" />
                </div>
            </div>
            <hr />
            {
                posts.map((item, id) => (

                    <Post
                        key={id}
                        {...item}
                    />
                ))
            }
            <Post
                name='shiv'
            />
        </div>
    )
}

export default Feed
