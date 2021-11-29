import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'ui-kit/modal'
import { CourseItem } from 'entities/courses/courses.type'
import { getDebugger } from 'utils/debugger.util'
import { isReadyToStart } from './start.util'
import { Popup } from './popup'
import css from './styles.scss'

interface Props {
  course: Required<CourseItem>
}
const debug = getDebugger('component: ProCourse')
export const ProCourse: FC<Props> = ({ course }) => {
  const [open, setOpen] = useState(false)
  const { title, image } = course
  const isReady = isReadyToStart(course.requirements)
  debug('is ready to start', isReady)

  const openModal = () => {
    if (!isReady) setOpen(true)
  }

  const content = (
    <div className={css.course} onClick={openModal}>
      <div className={css.cover}>
        <img src={image} className={css.image} alt='preview' />

        <div className={css.playWrapper}>Начать курс</div>
      </div>

      <h6 className={css.courseTitle}>{title}</h6>
    </div>
  )

  return (
    <>
      {isReady ? <Link to={`course/${course.id}`}>{content}</Link> : content}

      <Modal open={open} onClose={() => setOpen(false)}>
        <Popup course={course} />
      </Modal>
    </>
  )
}
