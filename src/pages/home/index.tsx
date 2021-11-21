import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { ThemeContext } from 'utils/theme'
import css from './styles.scss'

const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>

      <h1 className={css.wrapper}>Home page {theme}</h1>
      <button
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }}
      >
        toggle
      </button>
    </>
  )
}

export default HomePage
