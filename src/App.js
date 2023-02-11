// import logo from './logo.svg';
import './App.css';

function App() {
  let questions = [
    {
      statment: "Which city is the capital of pakistan?",
      options: ["Lahore", "Peshawar", "Islamabad", "Quetta"],
      answer: "Islamabad",
    }, {
      statment: "Which city is the capital of India?",
      options: ["Bangalore", "Bangalore", "Delhi", "Mumbai"],
      answer: "Delhi",
    }, {
      statment: "Which city is the capital of SudiaArebia?",
      options: ["Makkah", "Madinah", "Jeddah", "Riyadh"],
      answer: "Islamabad",
    }
  ]
  return (
    <body className='body'>
<div className='container'>
<div className='name'><h1 className='title'>Easy Quiz App</h1></div>
<div className='queblock'>
<ol>{<div>{questions.map(q => {return (<div className='statment'><li>{q.statment}</li><hr className='hr'/>
<ul>{q.options.map(op => <li><button className='opbtn'>{op}</button></li>)}
</ul>
</div>
)
})
}
<div className='next'><button>Next</button></div>
</div>
}
        </ol>
    </div>
  </div>
  </body>
  
  );
}

export default App;
