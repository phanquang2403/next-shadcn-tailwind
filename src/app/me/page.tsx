import accountApiRequest from "@/apiRequest/account";
import { cookies } from "next/headers";
import Profile from "./profile";

const MePage = async () => {
  const cookiesStore = await cookies();
  const sessionToken = cookiesStore.get("sessionToken");

  const result = await accountApiRequest.me(sessionToken?.value ?? "");
  console.log("____________MePage__________", result);

  return (
    <div>
      <div>{result?.payload?.data?.name}</div>
      <Profile />
    </div>
  );
};

export default MePage;
