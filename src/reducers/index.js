const Chat = (
	state = {
		setShow: false,
		user: "",
		friend: "",
	},
	action
) => {
	switch (action.type) {
		case "SHOWCHAT":
			return action.payload;
		default:
			return state;
	}
};

export default Chat;
