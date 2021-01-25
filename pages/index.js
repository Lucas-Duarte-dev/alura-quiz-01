import {BackgroundImage, QuizContainer }from '../src/styles/home'
import Widget from '../src/components/Widget'
import db from '../db.json'

export default function Home() {
  return (
    <BackgroundImage backgroundImage={db.bg}>
      <QuizContainer>
        <Widget> 
          <Widget.Header>
            Pokemon
          </Widget.Header>
          <Widget.Content>
          <h1>Pokemon</h1>
          <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Widget> 
          <Widget.Content>
          <h1>Pokemon</h1>
          <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
       
      </QuizContainer>
    </BackgroundImage>
  )
}
