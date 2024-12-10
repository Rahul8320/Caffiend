function Authentication() {
  return (
    <>
      <h2 className="sign-up-text">Sign Up / Login</h2>
      <p>Sign in to your account!</p>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="********" />
      <button type="submit">Sign In</button>
      <hr />
      <div className="register-content">
        <p>Don&apos;t have an account?</p>
        <button>Sign up</button>
      </div>
    </>
  );
}

export default Authentication;
