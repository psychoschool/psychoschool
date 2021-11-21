import React from 'react'
import { Helmet } from 'react-helmet'
import { Home } from 'components/home'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>

      <Home />
    </>
  )
}

export default HomePage
