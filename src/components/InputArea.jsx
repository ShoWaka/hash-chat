import { Input, Button } from "@material-tailwind/react";
import { useState, useContext } from "react";
import { Context } from "../App";
import { CreateHashMessage } from "../CreateHashMessage.jx";

export const InputArea = () => {
	const [input, setInput] = useState(""); // 変数を定義
	const { messages, setMessages } = useContext(Context);

	const buttonClick = () => {
		let messagesClone = [...messages];
		messagesClone.push({
			position: "right",
			type: "text",
			text: input,
			date: new Date(),
		});

		const setHashInput = (shatxt) => {
			messagesClone.push({
				position: "left",
				type: "text",
				text: shatxt,
				date: new Date(),
			});
		};

		CreateHashMessage(input)
			.then((shatxt) => {
				setHashInput(shatxt);
				setMessages(messagesClone);
			})
			.catch((e) => {
				console.log(e.message);
			});
	};

	return (
		<div className="w-1/3 absolute left-1/2 -translate-x-1/2 bottom-10 flex">
			<Input
				className="bg-white"
				color="teal"
				label="送信内容"
				value={input}
				onChange={(e) => {
					setInput(e.target.value);
				}}
			/>
			<Button className="ml-2 w-24" onClick={buttonClick}>
				送信
			</Button>
		</div>
	);
};
