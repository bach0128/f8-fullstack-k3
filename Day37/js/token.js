import { client } from "./client.js";

export const requestRefresh = async function(url, accessToken) {
    const data = await client.post("/auth/refresh-token", {refreshToken, })
    if (response.ok) {
        return data
    }
}



