import React, { useEffect, useState } from 'react'
import App from '../components/App'
import { Socket } from 'phoenix'

const HomePage = () => {
  const [gameChannel, setGameChannel] = useState()

  useEffect(() => {
    let socket = new Socket('wss://localhost:4001/socket')
    socket.connect()
    let channel = socket.channel('game:new', {})
    channel.join()
    setGameChannel(channel)
    return () => {
      gameChannel.leave()
    }
  }, [])

  return <App channel={gameChannel} />
}

export default HomePage
