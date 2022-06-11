import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import DreamImg from 'assets/mock/dream-img.svg'
import NavBar from 'components/UI/NavBar'

import './view-page.scss'
import { mockDream } from 'assets/mock/dreams'
import useFetch from 'hooks/useFetch'

const DreamBody = ({ params, dream }) => {
  return (
    <div className="dream-body">
      <img
        src={dream.img || DreamImg}
        alt="dream-image"
        className="dream-image"
      />
      <div className="dream-date">
        {dream.date.toLocaleDateString() || dream.date}
      </div>
      <p className="dream-content">{dream.content}</p>
    </div>
  )
}

const ViewDreamPage = (props) => {
  const params = useParams()

  useEffect(() => {
    // Get dream from server by params.id
  }, [params])

  return (
    <div className="page view-dream-page">
      <NavBar title={'梦境名称'} back />
      <DreamBody params={params} dream={mockDream} />
    </div>
  )
}

export default ViewDreamPage
