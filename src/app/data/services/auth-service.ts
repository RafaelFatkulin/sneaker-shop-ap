interface SigninUserProps {
    email: string;
    password: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function signinUserService({ email, password }: SigninUserProps) {
    const url = new URL("/users/login", baseUrl)
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
            cache: 'no-cache'
        });
        const responseJson = await response.json()
        console.log(responseJson)

        return responseJson;
    } catch (error) {
        console.error(error);
        throw error;
    }
}