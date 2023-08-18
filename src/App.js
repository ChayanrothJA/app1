import React from 'react'
import { Header, Content, Footer} from './func-components'
import Calendar from './class-components';
import MsgBox from './class-props';
import MsgBox2 from './func-props';

function App() {
  
  return (
   <>
   <Header/>
   <p><center><Calendar/></center></p>
   <Content/>
   <Footer/>
   <MsgBox
      text='React & React Native'
      color='blue'
      bgColor='#ccc'
      fontSize='18pt'
      border='solid 1px black'
   />
   <MsgBox2
      text='การใช้ props ใน Function Component'
      color='red'
      bgColor='#ccc'
      fontSize='18pt'
      border='solid 1px black'
   />
  
   </>

  )
}

export default App;
