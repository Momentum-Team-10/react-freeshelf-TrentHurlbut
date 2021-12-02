import BookCard from './BookCard';
import library from './BookData';

function FreeshelfBase() {
  let books = [];

  for (let i = 0; i < library.length; i++){
    books.push(<BookCard bookTitle={library[i]["title"]} author={library[i]["author"]} description={library[i]["detailedDescription"]} />)
  }

  return (
    <div className="Base">
      {books}
    </div>
  )
}

export default FreeshelfBase;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;