import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

  const users = [ 
    { 
      img :'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro:'lorem ipsum dolor sit amet consectetur adipisicing elit elit. Necessitatibus modi voluptas aperiam autem porro perspiciatis.' , 
      tag:'Satisfied',
      index:1
    } ,
    {
      img :'https://plus.unsplash.com/premium_photo-1661281292577-27c65307ac42?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro:'lorem ipsum dolor sit amet consectetur adipisicing elit elit. Necessitatibus modi voluptas aperiam autem porro perspiciatis.' , 
      tag:' Underserved',
      index:2
    },
    {
      img :'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro:'lorem ipsum dolor sit amet consectetur adipisicing elit elit. Necessitatibus modi voluptas aperiam autem porro perspiciatis.' , 
      tag:'Underbanked',
      index:3
    },
    {
      img :'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro:'lorem ipsum dolor sit amet consectetur adipisicing elit elit. Necessitatibus modi voluptas aperiam autem porro perspiciatis.' , 
      tag:'Getting Started',
      index:4
    },
    {
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, tempora. Reprehenderit aliquid fuga maiores.',
    tag: 'Fintech',
    index: 4
  },
  {
    img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, explicabo. Ratione deserunt asperiores veniam.',
    tag: 'Startup',
    index: 5
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, cupiditate. Eligendi doloremque dicta inventore.',
    tag: 'Technology',
    index: 6
  },
  {
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, itaque. Impedit repellendus quo minima.',
    tag: 'Innovation',
    index: 7
  },
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, natus. Atque molestiae corporis accusamus.',
    tag: 'Investment',
    index: 8
  },
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laborum. Tempore veritatis magnam nulla.',
    tag: 'Growth',
    index: 9
  }

  ]
    
  return (
    <div className=" min-h-screen">
      <Section1 users={users} />
      
    </div>
  )
}

export default App
