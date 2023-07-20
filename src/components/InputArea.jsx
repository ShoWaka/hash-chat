import { Input, Button } from "@material-tailwind/react";
import { useState, useContext } from "react";
import { Context } from "../App";

export const InputArea = () => {
	const [input, setInput] = useState(""); // 変数を定義

	const { userInput, setUserInput } = useContext(Context);

	const buttonClick = () => {
		setUserInput(input);
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
