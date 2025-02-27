import envConfig from "@/config";
import { cookies } from "next/headers";
import Profile from "./profile";

const MePage = async () => {
	const cookiesStore = await cookies();
	const sessionToken = cookiesStore.get("sessionToken");

	const result = await fetch(
		`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + sessionToken?.value,
			},
		}
	).then(async (res) => {
		const payload = await res.json();
		const data = {
			status: res.status,
			payload,
		};
		if (!res.ok) {
			throw data;
		}
		return data;
	});

	return (
		<div>
			<div>{result?.payload?.data?.name}</div>
			<Profile />
		</div>
	);
};

export default MePage;
