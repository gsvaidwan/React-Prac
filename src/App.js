import React from 'react'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
     <About name="Gajendra Singh" age="33"/>
     <Contact/>
    </>
  )
}


// Define Class component which is stateful --------------- (rcc)
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

// Define Function Component which is stateless --------------- (rcf)
// function App(){
//   return (
//   <>
//   <h1>React Start </h1>
//   <p>This is paragraph</p>
//   </>
//   )
// }
// export default App