import { createContext, useState } from "react";
import "./App.css";
import { ChatPage } from "./components/ChatPage";
import { InputArea } from "./components/InputArea";
import { Header } from "./components/Header";

export const Context = createContext();

function App() {
	const [algorithm, setAlgorithm] = useState("SHA-1");
	const [messages, setMessages] = useState([
		{
			position: "left",
			type: "text",
			text: "ハッシュ化した文字列で会話したいことってありますよね！？笑",
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
		algorithm,
		setAlgorithm,
	};
	return (
		<>
			<Context.Provider value={value}>
				<Header></Header>
				<ChatPage></ChatPage>
				<InputArea></InputArea>
			</Context.Provider>
		</>
	);
}

export default App;
