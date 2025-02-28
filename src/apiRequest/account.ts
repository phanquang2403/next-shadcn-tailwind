import http from "@/lib/http";
import { AccountResType } from "@/schema/account.schema";

const accountApiRequest = {
  me: (sessionToken: string) =>
    http.get<AccountResType>("/account/me", {
      headers: {
        Authorization: "Bearer " + sessionToken,
      },
    }),
};

export default accountApiRequest;
