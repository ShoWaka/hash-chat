/**
 * 入力文字列を受け取り、ハッシュ化した文字列を返却する関数
 * @param {*} input ユーザー入力の文字列
 * @returns
 */
export const CreateHashMessage = async (input, algorithm) => {
	console.log(algorithm);
	const uint8 = new TextEncoder().encode(input);
	const digest = await crypto.subtle.digest(algorithm, uint8);
	return Array.from(new Uint8Array(digest))
		.map((v) => v.toString(16).padStart(2, "0"))
		.join("");
};
