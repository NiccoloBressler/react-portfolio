import styled from "styled-components"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

const Container = styled.div`
  height: 100vh;
  background-color: black;
`

function App() {
  return (
    <Container>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
    </Container>
  )
}

export default App
