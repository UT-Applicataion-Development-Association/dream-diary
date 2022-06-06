import React from 'react'
import { useParams } from 'react-router-dom'

import Dream3 from '../assets/dream3.svg'
import NavBar from '../../components/NavBar/index'

import './view-page.scss'

const ViewDreamPageWrapper = (props) => {
  const params = useParams()

  return (
    <div className="page view-dream-page">
      <NavBar title={'梦 境 名 称'} back />
      <DreamBody params={params} />
    </div>
  )
}

const DreamBody = (props) => {
  return (
    <div>
      <img src={Dream3} alt="dream-image" className="dream-image" />
      <div className="view-dream-date">Jan 25, 2021</div>
      <p className="dream-description">
        梦是一种主体经验，是人在某些阶段的睡眠时产生的想像中的影像、声音、思考或感觉，通常是非自愿的。
        [1]人们尚未真正理解梦的内容、机制和作用，但是自从史前时期开始，梦就是哲学和宗教感兴趣的话题，也产生了许多有关的科学猜想。研究梦的科学学科称作梦学。
        [2]除了人以外，很多人也相信做梦也会发生在其他动物身上。动物已经确定会有快
      </p>
    </div>
  )
}

export default ViewDreamPageWrapper
