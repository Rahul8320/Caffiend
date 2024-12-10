import { useState } from "react";

function Authentication() {
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  async function handleAuthentication() {}

  return (
    <>
      <h2 className="sign-up-text">{isRegistration ? "Sign Up" : "Login"}</h2>
      <p>
        {isRegistration ? "Create an account!" : "Sign in to your account!"}
      </p>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="********"
      />
      <button type="submit" onClick={handleAuthentication}>
        {isRegistration ? "Sign Up" : "Login"}
      </button>
      <hr />
      <div className="register-content">
        <p>
          {isRegistration
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>
        <button onClick={() => setIsRegistration(!isRegistration)}>
          {isRegistration ? "Login" : "Sign up"}
        </button>
      </div>
    </>
  );
}

export default Authentication;
