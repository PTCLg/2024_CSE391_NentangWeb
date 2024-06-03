import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Card from "./card.jsx"
import Student from "./Student.jsx"
import Condition from "./Condi-ren.jsx"
import List from "./List.jsx"


function App() {

  const fruits = [
    { id: 1, name: 'orange', caloriess: 10 },
    { id: 2, name: 'apple', caloriess: 15 },
    { id: 3, name: 'coconut', caloriess: 120 },
    { id: 4, name: 'banana', caloriess: 109 },
    { id: 5, name: 'pineapple', caloriess: 50 },
  ];

  return (
    <>
      <Header />
      <Card />
      <Card />
      <Student name='ABC' age='20' isStudent={true} />
      <Student />
      <Condition isLoggedIn={true} unreadMessages='react' />
      <List category='Fruit' item={fruits}/>
      <Footer />
    </>
  );
}

export default App
