import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { Popper } from 'ui-kit/popper'
import { selectIsMobile } from 'entities/ui/screen/screen.selector'
import { Course } from 'entities/courses/courses.type'
import { Popup } from './popup'
import css from './styles.scss'

interface Props {
  course: Required<Course>
}
export const ProCourse: FC<Props> = ({ course }) => {
  const isMobile = useSelector(selectIsMobile)
  const { title, image } = course
  const [open, setOpen] = useState(false)

  return (
    <Popper
      open={open}
      content={<Popup course={course} />}
      placement={isMobile ? 'bottom' : 'right'}
      hasShadow
      align='top'
      onClickOutside={() => setOpen(false)}
    >
      <div className={css.course} onClick={() => setOpen(true)}>
        <div className={css.cover}>
          <img src={image} className={css.image} alt='preview' />

          <div className={css.playWrapper}>Начать курс</div>
        </div>

        <h6 className={css.courseTitle}>{title}</h6>
      </div>
    </Popper>
  )
}
