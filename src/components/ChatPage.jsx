import { MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

const messages = [
	{
		position: "left",
		type: "text",
		text: "サンプルチャット",
		date: new Date("2020-03-12 13:00:00"),
	},
	{
		position: "right",
		type: "text",
		text: "サンプルチャット2",
		date: new Date("2020-03-12 14:00:00"),
	},
	{
		position: "left",
		type: "photo",
		data: {
			uri: "img/human.svg",
			status: {
				click: false,
				loading: 0,
			},
		},
		date: new Date("2020-03-12 15:00:00"),
	},
];

export const ChatPage = () => {
	return (
		<MessageList
			toBottomHeight={"100%"}
			lockable={true}
			dataSource={messages}
		/>
	);
};
