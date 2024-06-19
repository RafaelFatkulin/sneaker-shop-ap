import { NextRequest, NextResponse } from "next/server";
import { getUserMeLoader } from "./app/data/services/get-user-me-loader";

export async function middleware(request: NextRequest) {
    const user = await getUserMeLoader();
    
    const currentPath = request.nextUrl.pathname;
    
    if(currentPath.startsWith("/dashboard") && !user.ok) {
        return NextResponse.redirect(new URL('/signin', request.url))
    }

    return NextResponse.next();
}