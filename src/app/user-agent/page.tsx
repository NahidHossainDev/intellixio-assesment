import { UserAgentProvider } from "@/components/providers/userAgentProvider";
import { UserAgent } from "@/views/userAgent";
import { headers } from "next/headers";

const UserAgentRoot = () => {
	// Fetch the user-agent from the request headers
	const userAgent = headers().get("user-agent") || "No user agent";
	return (
		<UserAgentProvider userAgent={userAgent}>
			<UserAgent />
		</UserAgentProvider>
	);
};

export default UserAgentRoot;
