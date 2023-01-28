import React from 'react'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
     <About name="Gajendra Singh" age={33} />
     <Contact/>
    </>
  )
}

export default App
// Define Class component
// import React from 'react'

// class App extends React.Component {
//   render() {
//     return (
//       <>
//       <h1>Test Heading</h1>
//       <p>Test Paragraph</p>
//       </>
//     )
//   }
// }
// export default App

// Define Function Component
// function App(){
//   return (
//   <>
//   <h1>React Start </h1>
//   <p>This is paragraph</p>
//   </>
//   )
// }
// export default App
