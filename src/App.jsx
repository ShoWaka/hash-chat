import { createContext, useState } from "react";
import "./App.css";
import { ChatPage } from "./components/ChatPage";
import { InputArea } from "./components/InputArea";

export const Context = createContext();

function App() {
	const [messages, setMessages] = useState([
		{
			position: "left",
			type: "text",
			text: "こんにちは！",
			date: new Date(),
		},
		{
			position: "left",
			type: "text",
			text: "好きなテキストを入力してください！",
			date: new Date(),
		},
		{
			position: "left",
			type: "text",
			text: "ハッシュ化して表示します！",
			date: new Date(),
		},
	]);
	const value = {
		messages,
		setMessages,
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
