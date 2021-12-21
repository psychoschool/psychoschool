import React, { FC } from 'react'
import cn from 'classnames'
import { useTheme } from 'utils/theme'
import { Course as TCourse } from 'entities/courses/courses.types'
import { LargeCard } from './components/large-card'
import { SmallCard } from './components/small-card'
import { Materials } from './components/materials'
import { Skills } from './components/skills'
import css from './styles.scss'

interface Props {
  course: TCourse
}

export const Course: FC<Props> = ({ course }) => {
  const { theme } = useTheme()

  return (
    <div className={cn(css.wrapper, { [css.dark]: theme === 'dark' })}>
      <div className={css.header}>
        <div className={css.content}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
        <LargeCard course={course} />
        <SmallCard course={course} />
      </div>

      <div className={css.content}>
        <Skills course={course} />
        <Materials course={course} />
      </div>
    </div>
  )
}
