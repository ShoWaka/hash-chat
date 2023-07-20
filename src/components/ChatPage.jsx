import { MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Context } from "../App";
import { useContext } from "react";

export const ChatPage = () => {
	const { messages } = useContext(Context);
	return (
		<MessageList
			toBottomHeight={"100%"}
			lockable={true}
			dataSource={messages}
		/>
	);
};
