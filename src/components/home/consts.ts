import { CoursesCollection } from 'entities/courses/courses.type'
import { CoursesResponse } from 'resources/types/courses'

const free: CoursesCollection = {
  1: {
    id: '1',
    title: 'Лечим зависимость, Мотивация и техники',
    image: 'https://picsum.photos/320/180',
    lectures: 15,
    requirements: {
      auth: false,
      pay: false
    }
  },
  2: {
    id: '2',
    title: 'Депрессия',
    image: 'https://picsum.photos/321/180',
    lectures: 20,
    requirements: {
      auth: true,
      pay: false
    }
  },
  3: { id: '3', title: 'Ваши истории', image: 'https://picsum.photos/322/180', lectures: 20 },
  4: { id: '4', title: 'Медитация', image: 'https://picsum.photos/323/180', lectures: 9 },
  5: { id: '5', title: 'Алкоголь', image: 'https://picsum.photos/324/180', lectures: 35 },
  6: { id: '6', title: 'Психоактивные вещества', image: 'https://picsum.photos/325/180', lectures: 18 },
  7: { id: '7', title: 'Отношения', image: 'https://picsum.photos/326/180', lectures: 22 }
}

const premium: CoursesCollection = {
  1: {
    id: '1',
    title: 'Шаг к свободе',
    image: 'https://picsum.photos/320/183',
    lectures: 32,
    requirements: {
      auth: true,
      pay: true
    }
  }
}

export const courses: Array<CoursesResponse> = [
  {
    title: 'Премиальные',
    type: 'premium',
    courses: premium
  },
  {
    title: 'Доступные курсы',
    type: 'free',
    courses: free
  }
]
