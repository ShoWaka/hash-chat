import { createContext, useState } from "react";
import "./App.css";
import { ChatPage } from "./components/ChatPage";
import { InputArea } from "./components/InputArea";

export const Context = createContext();

function App() {
	const [userInput, setUserInput] = useState("");
	const value = {
		userInput,
		setUserInput,
	};
	return (
		<>
			<Context.Provider value={value}>
				<ChatPage></ChatPage>
				<InputArea></InputArea>
			</Context.Provider>
		</>
	);
}

export default App;
