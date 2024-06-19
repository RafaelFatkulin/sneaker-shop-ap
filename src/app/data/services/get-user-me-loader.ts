import { getAuthToken } from "./get-token";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getUserMeLoader() {
    const url = new URL("/users/session", baseUrl)
    const authToken = await getAuthToken()
    
    if(!authToken) {
        return {
            ok: false,
            data: null,
            error: null
        }
    }
    
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`
            },
            cache: 'no-cache'
        });
        const responseJson = await response.json()

        if(responseJson.error) {
            return {
                ok: false,
                data: null,
                error: responseJson.error
            }
        }

        return {
            ok: true,
            data: responseJson,
            error: null
        }
    } catch (error) {
        return { 
            ok: false, 
            data: null, 
            error: error 
        };
    }
}