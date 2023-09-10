import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import { useSelector } from 'react-redux'
import { selectUserName } from '../../../redux/employee/userSlice'
import { TextField } from '@mui/material'

const DirectChatPage = () => {
  const [username, setUsername] = useState('');
  const userName = useSelector(selectUserName);
<<<<<<< HEAD
  function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}
=======
console.log(userName);
  function createDirectChat(creds) {
    getOrCreateChat(creds, { is_direct_chat: true, usernames: username }, () =>
      setUsername('')
    );
  }
>>>>>>> aca2027489c8a11dc84ff4ade36b408167209db7

  function renderChatForm(creds) {
    return (
      <div style={{ padding: '10px' }}>
        <label>Start Direct message</label>
        <TextField
          style={{ padding: '15px', marginLeft: '-15px' }}
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          style={{
            padding: '10px',
            marginTop: '10px',
            backgroundColor: 'rgb(72, 177, 145)',
          }}
          onClick={() => createDirectChat(creds)}
        >
          Create
        </button>
      </div>
    );
  }

  return (
    <ChatEngine
      height='75vh'
      userName={userName}
      userSecret="userpwd"
<<<<<<< HEAD
      projectID='d4125d21-2f5b-4409-b65f-55df0bd1141d'
=======
      projectID='3c9cab73-f189-45d4-a2bc-41e3a615c3d6'
>>>>>>> aca2027489c8a11dc84ff4ade36b408167209db7
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
};

export default DirectChatPage;
