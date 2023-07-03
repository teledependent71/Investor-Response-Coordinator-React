import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Response Coordinator</title>
        <meta property="og:title" content="Investor Response Coordinator" />
      </Helmet>
    </div>
  )
}

export default Home
