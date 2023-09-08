import React from 'react'
import {userContext} from './context'
import Header from './context-header'
import Content from './context-content'

// import RefsFunc from './refs-func'
// import RefsArray from './refs-array'
// import React from 'react'
// import Banner from './banner'
// import { Calculator2 } from './calculator'
// import {EventData2} from './event-data'
// import {Table} from './event-data'



export default function App() {
   return (
   <userContext.Provider value={'Tom Jerry'}>
   <Header/>
   <Content/>
   </userContext.Provider>
   ) 
   }

// function App() {
//   return (
//    <>
//    <Header/>
//    <p><center><Calendar/></center></p>
//    <Content/>
//    <Footer/>
//    <MsgBox
//       text='React & React Native'
//       color='blue'
//       bgColor='#ccc'
//       fontSize='18pt'
//       border='solid 1px black'
//    />
//    <MsgBox2
//       text='การใช้ props ใน Function Component'
//       color='red'
//       bgColor='#ccc'
//       fontSize='18pt'
//       border='solid 1px black'
//    />
//    </>

//   )
// }

// export default function App(){
//    return <Banner/>
// }

// export default function App(){
//    return <Calculator2/>
// }

// export default function App() {
//    return <EventData2/> 
//    }

// export default function App() {
//    return <Table/> 
//    }

