import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'

const NotFoundPage = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.includes('/learn')) {
      navigate(pathname.replace(/learn\/*/, ''))
    }
  }, [navigate, pathname])

  return (
    <div>
      <h1>Page not found!</h1>
    </div>
  )
}

export default NotFoundPage
