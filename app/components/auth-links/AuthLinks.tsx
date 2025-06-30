import React from "react";

import AuthLinksClient from "./AuthLinksClient";
import { auth } from "@/auth";
const AuthLinks = async () => {
  const session = await auth();
  const isAuthenticated = !!session?.user;
  return (
    <div>
      <AuthLinksClient isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default AuthLinks;
