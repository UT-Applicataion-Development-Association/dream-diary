import placeholderImg from 'assets/mock/empty-square.svg'
import { randomToken, randomDate } from 'utils/random'
import { mockUser } from './user'

let mockDreams = [
  { _id: randomToken(), image: placeholderImg },
  { _id: randomToken(), image: placeholderImg },
  { _id: randomToken(), image: placeholderImg },
  { _id: randomToken(), image: placeholderImg },
]

mockDreams = mockDreams.concat(
  mockDreams.map((i) => {
    return { ...i, _id: randomToken() }
  })
)
mockDreams = mockDreams.concat(
  mockDreams.map((i) => {
    return { ...i, _id: randomToken() }
  })
)

const mockDream = {
  _id: randomToken(),
  date: randomDate(),
  title: '测试梦境用例',
  content:
    '梦是一种主体经验，是人在某些阶段的睡眠时产生的想像中的影像、声音、思考或感觉，通常是非自愿的。[1]人们尚未真正理解梦的内容、机制和作用，但是自从史前时期开始，梦就是哲学和宗教感兴趣的话题，也产生了许多有关的科学猜想。研究梦的科学学科称作梦学。[2]除了人以外，很多人也相信做梦也会发生在其他动物身上。动物已经确定会有快',
  tags: [],
  image: '',
  author: mockUser,
}

export { mockDreams, mockDream }
