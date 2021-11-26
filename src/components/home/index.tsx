import React from 'react'
import { Link } from 'react-router-dom'
import { Chip } from 'ui-kit/chip'
import { tags, courses } from './consts'
import CountIcon from './icons/playlist.icon.svg'
import css from './styles.scss'

export const Home = () => {
  return (
    <>
      <div className={css.chipsWrapper}>
        <ul className={css.chips}>
          {tags.map((tag, index) => (
            <Chip key={tag} label={tag} active={index === 0} />
          ))}
        </ul>
      </div>

      <h3 className={css.title}>Доступные курсы</h3>
      <div className={css.listing}>
        {courses.map((course, index) => (
          <Link key={course.title} to={`course/${index}`}>
            <div className={css.course}>
              <div className={css.cover}>
                <img src={course.image} className={css.image} alt='preview' />
                <div className={css.countWrapper}>
                  <p>{course.lectures}</p>
                  <CountIcon className={css.countIcon} />
                </div>

                <div className={css.playWrapper}>Начать курс</div>
              </div>
              <h5 className={css.courseTitle}>{course.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
