import icon from "../assets/icon.svg";
import { Context } from "../App";
import { useContext } from "react";

export const Header = () => {
	const { algorithm, setAlgorithm } = useContext(Context);

	// const [inputAlgorithm, setInputAlgorithm] = useState("SHA-1");

	return (
		<>
			<div className="flex mb-10">
				<div className="w-full">
					<img className="w-1/5" src={icon} alt="" />
				</div>
				<div className="ml-auto">
					<div className=" bg-white text-start">
						<select
							className="m-3 p-2"
							value={algorithm} // ...force the select's value to match the state variable...
							onChange={(e) => setAlgorithm(e.target.value)} // ... and update the state variable on any change!
						>
							<option className="w-full" value="SHA-1">
								SHA-1
							</option>
							<option className="w-full" value="SHA-256">
								SHA-256
							</option>
							<option className="w-full" value="SHA-384">
								SHA-384
							</option>
							<option className="w-full" value="SHA-512">
								SHA-512
							</option>
						</select>
					</div>
				</div>
			</div>
		</>
	);
};
