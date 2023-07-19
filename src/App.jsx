import { createContext, useState } from "react";
import "./App.css";
import { ChatPage } from "./components/ChatPage";
import { InputArea } from "./components/InputArea";

export const UserInput = createContext();

function App() {
	const [userInput, setUserInput] = useState("");
	const value = {
		userInput,
		setUserInput,
	};
	return (
		<>
			<UserInput.Provider value={value}>
				<ChatPage></ChatPage>
				<InputArea></InputArea>
			</UserInput.Provider>
		</>
	);
}

export default App;
