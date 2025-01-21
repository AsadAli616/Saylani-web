import Cookies from "js-cookie";
import { NextResponse } from "next/server";
export function middleware(request) {
  const data = request.cookies.get("User");
  console.log(data);
  if (request.nextUrl.pathname == "/") {
    if (data == undefined) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.rewrite(new URL("/", request.url));
  }

  if (request.nextUrl.pathname == "/reports") {
    if (data == undefined) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.rewrite(new URL("/reports", request.url));
  }

  if (request.nextUrl.pathname == "/users") {
    if (data == undefined) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.rewrite(new URL("/users", request.url));
  }

  if (request.nextUrl.pathname == "/settings") {
    if (data == undefined) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.rewrite(new URL("/settings", request.url));
  }
  if (request.nextUrl.pathname == "/locations") {
    if (data == undefined) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.rewrite(new URL("/locations", request.url));
  }
  if (request.nextUrl.pathname == "/login") {
    if (data == undefined) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (request.nextUrl.pathname == "/signup") {
    if (data == undefined) {
      return NextResponse.rewrite(new URL("/signup", request.url));
    }
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (request.nextUrl.pathname == "/admin") {
    if (data == undefined) {
      return NextResponse.redirect(new URL("/signup", request.url));
    }
    return NextResponse.rewrite(new URL("/admin", request.url));
  }
  if (request.nextUrl.pathname == "/admin/[id]") {
    if (data == undefined) {
      return NextResponse.redirect(new URL("/signup", request.url));
    }
    return NextResponse.rewrite(new URL("/admin/[id]", request.url));
  }
}
