import { CoursesCollection } from 'entities/courses/courses.type'

const free: CoursesCollection = {
  1: { id: '1', title: 'Лечим зависимость, Мотивация и техники', image: 'https://picsum.photos/320/180', lectures: 15 },
  2: { id: '2', title: 'Депрессия', image: 'https://picsum.photos/321/180', lectures: 8 },
  3: { id: '3', title: 'Ваши истории', image: 'https://picsum.photos/322/180', lectures: 20 },
  4: { id: '4', title: 'Медитация', image: 'https://picsum.photos/323/180', lectures: 9 },
  5: { id: '5', title: 'Алкоголь', image: 'https://picsum.photos/324/180', lectures: 35 },
  6: { id: '6', title: 'Психоактивные вещества', image: 'https://picsum.photos/325/180', lectures: 18 },
  7: { id: '7', title: 'Отношения', image: 'https://picsum.photos/326/180', lectures: 22 }
}

const premium: CoursesCollection = {
  1: {
    id: '1',
    title: 'Шаг вперед',
    image: 'https://picsum.photos/320/181',
    lectures: 15,
    requirements: {
      auth: true,
      pay: true,
      test: false
    }
  }
}

export const courses = [
  {
    title: 'Премиальные',
    courses: premium
  },
  {
    title: 'Доступные курсы',
    courses: free
  }
]
