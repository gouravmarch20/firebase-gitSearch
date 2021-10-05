import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GitSeach = () => {
  const [userName, setUserName] = useState('')
  const baseUrl = 'https://api.github.com/users/'

  async function getUser () {
    try {
      console.log(`${baseUrl}${userName}`)
      const response = await axios.get(`${baseUrl}${userName}`)
      //   console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getUser()
  }, [userName])

  return (
    <div>
      <button
        onClick={() => {
          setUserName('gouravmarch20')
          //   hadleSearch()
        }}
      >
        api self code {userName}
      </button>
    </div>
  )
}

export default GitSeach
