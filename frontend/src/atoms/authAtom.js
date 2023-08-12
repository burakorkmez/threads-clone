import { atom } from "recoil";

const authScreenAtom = atom({
	key: "authScreenAtom",
	default: "login",
});

export default authScreenAtom;
