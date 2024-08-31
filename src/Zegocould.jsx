import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Zegocould = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate()

    const joinRoom = useCallback(
      () => {
        navigate(`/room/${value}`);
      },
      [navigate, value],
    )
    

  return (
    <>
    <input type="text" placeholder='enter room Id' onChange={(e)=> setValue(e.target.value)} />
    <button onClick={joinRoom}>join</button>
    </>
  )
}

export default Zegocould