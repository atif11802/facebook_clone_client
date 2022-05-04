import React from "react";
import {
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	Flex,
	Box,
} from "@chakra-ui/react";

const IMAGE =
	"https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80";

const Story = () => {
	return (
		<Flex>
			{Array.from(Array(5).keys()).map((i) => {
				return (
					<Center py={12} m={2} key={i}>
						<Box
							role={"group"}
							p={2}
							maxW={"200px"}
							w={"full"}
							bg='white'
							boxShadow={"2xl"}
							rounded={"lg"}
							pos={"relative"}
							zIndex={1}
							_hover={{
								boxShadow: "lg",
								zIndex: 2,
								cursor: "pointer",
							}}
						>
							<Box
								rounded={"lg"}
								mt={-12}
								pos={"relative"}
								height={"130px"}
								_after={{
									transition: "all .3s ease",
									content: '""',
									w: "full",
									h: "full",
									pos: "absolute",
									top: 5,
									left: 0,
									backgroundImage: `url(${IMAGE})`,
									filter: "blur(15px)",
									zIndex: -1,
								}}
								_groupHover={{
									_after: {
										filter: "blur(20px)",
									},
								}}
							>
								<Image
									rounded={"lg"}
									height={120}
									width={150}
									objectFit={"cover"}
									src={IMAGE}
								/>
							</Box>
							<Stack pt={10} align={"center"}>
								<Text
									color={"gray.500"}
									fontSize={"sm"}
									textTransform={"uppercase"}
								>
									ratul
								</Text>
							</Stack>
						</Box>
					</Center>
				);
			})}
		</Flex>
	);
};

export default Story;
