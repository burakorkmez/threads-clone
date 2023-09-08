import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, Skeleton, SkeletonCircle, Text, useColorModeValue } from "@chakra-ui/react";
import Conversation from "../components/Conversation";
import { GiConversation } from "react-icons/gi";
import MessageContainer from "../components/MessageContainer";

const ChatPage = () => {
	return (
		<Box
			position={"absolute"}
			left={"50%"}
			w={{ base: "100%", md: "80%", lg: "750px" }}
			p={4}
			transform={"translateX(-50%)"}
		>
			<Flex
				gap={4}
				flexDirection={{ base: "column", md: "row" }}
				maxW={{
					sm: "400px",
					md: "full",
				}}
				mx={"auto"}
			>
				<Flex flex={30} gap={2} flexDirection={"column"} maxW={{ sm: "250px", md: "full" }} mx={"auto"}>
					<Text fontWeight={700} color={useColorModeValue("gray.600", "gray.400")}>
						Your Conversations
					</Text>
					<form>
						<Flex alignItems={"center"} gap={2}>
							<Input placeholder='Search for a user' />
							<Button size={"sm"}>
								<SearchIcon />
							</Button>
						</Flex>
					</form>

					{false &&
						[0, 1, 2, 3, 4].map((_, i) => (
							<Flex key={i} gap={4} alignItems={"center"} p={"1"} borderRadius={"md"}>
								<Box>
									<SkeletonCircle size={"10"} />
								</Box>
								<Flex w={"full"} flexDirection={"column"} gap={3}>
									<Skeleton h={"10px"} w={"80px"} />
									<Skeleton h={"8px"} w={"90%"} />
								</Flex>
							</Flex>
						))}

					<Conversation />
					<Conversation />
					<Conversation />
				</Flex>

				{/* <Flex
					flex={70}
					borderRadius={"md"}
					p={2}
					flexDir={"column"}
					alignItems={"center"}
					justifyContent={"center"}
					height={"400px"}
				>
					<GiConversation size={100} />
					<Text fontSize={20}>Select a conversation to start messaging</Text>
				</Flex> */}
				<MessageContainer />
			</Flex>
		</Box>
	);
};

export default ChatPage;
