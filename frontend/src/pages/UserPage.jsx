import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
	return (
		<>
			<UserHeader />
			<UserPost likes={1200} replies={481} postImg='/post1.png' postTitle="Let's talk about threads." />
			<UserPost likes={451} replies={12} postImg='/post2.png' postTitle='Nice tutorial. Highly recommended.' />
			<UserPost
				likes={6721}
				replies={989}
				postImg='/post3.png'
				postTitle="I love this guy and can't wait to see him in cage. 💪"
			/>
			<UserPost likes={212} replies={56} postTitle='This is my first thread.' />
		</>
	);
};

export default UserPage;
