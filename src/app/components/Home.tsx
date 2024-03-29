import React from 'react'
import Hero from './Hero/Hero'
import News from './News/page'
import LatestNews from './LatestNews/LatestNews'
import MatchHighlight from './MatchHighlight/MatchHighlight'
import LatestPost from './LatestPost/LatestPost'

function Home() {
  return (
    <div>
        <Hero />
        <News />
        <LatestNews />
        <MatchHighlight />
        <LatestPost />
    </div>
  )
}

export default Home
