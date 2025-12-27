import "./App.css";
// import TodoList from "./TodoList";
import Lottery from "./Lottery";
// import Ticket from "./Ticket";
import {sum} from "./helper";

function App() {
	let winCondition = (ticket)=>{
		return sum(ticket)===15;
	}
	return (
		<>
			{/* <TodoList /> */}
			<Lottery n={3} winCondition={winCondition}/>
			{/* <Ticket ticket={[5,1,9]}/> */}
		</>
	);
}

export default App;
