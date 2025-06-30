import { auth, signIn, signOut } from "@/auth";
import styles from "../login/login.module.css"

export default async function SignIn() {
  const session = await auth();
  console.log(session);
const user = session?.user;

return user ? (
<>
<form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" className={styles.socialButton}>Sign Out</button>
    </form>
        </>
    
):(
    <form 
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit" className={styles.socialButton}>Signin with Google</button>
    </form>
  );
}
