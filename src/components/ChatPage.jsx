import { MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Context } from "../App";
import { useContext, useEffect } from "react";

const messages = [
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
];

export const ChatPage = () => {
	const { userInput, setUserInput } = useContext(Context);

	useEffect(() => {
		messages.push({
			position: "right",
			type: "text",
			text: userInput,
			date: new Date(),
		});
	}, [userInput]);

	return (
		<MessageList
			toBottomHeight={"100%"}
			lockable={true}
			dataSource={messages}
		/>
	);
};
