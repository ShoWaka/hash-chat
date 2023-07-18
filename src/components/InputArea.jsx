import { Input, Button } from "@material-tailwind/react";

export const InputArea = () => {
	return (
		<div className="w-1/3 absolute left-1/2 -translate-x-1/2 bottom-10 flex">
			<Input className="bg-white" label="Username" />
			<Button className="ml-2 w-24">送信</Button>
		</div>
	);
};
