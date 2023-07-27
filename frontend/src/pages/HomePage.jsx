import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
	// This page added after the tutorial
	return (
		<Link to={"/markzuckerberg"}>
			<Flex w={"full"} justifyContent={"center"}>
				<Button mx={"auto"}>Visit Profile Page</Button>
			</Flex>
		</Link>
	);
};

export default HomePage;
