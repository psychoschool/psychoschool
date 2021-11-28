import { Requirements } from 'entities/courses/courses.type'

const requirementsCollection: Collection<Requirements, string> = {
  auth: 'Авторизоваться на сайте',
  pay: 'Оплатить курс',
  test: 'Пройти тест'
}

export const normalizeTitle = (title: Requirements) => requirementsCollection[title]
