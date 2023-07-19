import { Input, Button } from "@material-tailwind/react";
import { useState, useContext } from "react";
import { UserInput } from "../App";

export const InputArea = () => {
	const [inputText, setInputText] = useState(); // 変数を定義
	const buttonClick = () => {
		setUserInput(inputText);
	};

	const { userInput, setUserInput } = useContext(UserInput);
	console.log(userInput);

	return (
		<div className="w-1/3 absolute left-1/2 -translate-x-1/2 bottom-10 flex">
			<Input
				className="bg-white"
				color="teal"
				label="送信内容"
				value={inputText}
				onChange={(e) => {
					setInputText(e.target.value);
				}}
			/>
			<Button className="ml-2 w-24" onClick={buttonClick}>
				送信
			</Button>
		</div>
	);
};
