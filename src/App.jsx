
import Section1 from './components/Section-1/Section1.jsx'
import Section2 from './components/Section-2/Section2.jsx'

const App = () => {

  const users=[
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:'',
      tag:'Satisfied',
      color:'lightseagreen'
    },{
      img:'https://images.unsplash.com/photo-1765648763912-03115da05d07?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underserved',
      color:'purple'

    },{
      img:'https://images.unsplash.com/photo-1758519291946-13cc7761b4e7?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underbanked',
      color:'orange'
    }
  ]
  return (
    <div>
    <Section1  users={users}/>
    <Section2 />
    </div>
  )
}

export default App
