import { useAuth } from "next-auth/server";
const ContactMe = () => {
  const { isAuthenticated, user } = useAuth();
  const [password, setPassword] = useRef("");

  if (isAuthenticated) {
    return (
      <Layout>
        <Navigation />
        <h1>Contact Me</h1>
        <p>Please contact me at contact@example.com</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Navigation />
      <h1>Please login to contact me</h1>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => {
        const isPasswordCorrect = user.password === password;
        if (isPasswordCorrect) {
          // The password is correct, so redirect the user to the Contact Me page.
          return <Redirect to="/contact-me" />;
        } else {
          // The password is incorrect, so show an error message.
          return <h1>The password is incorrect</h1>;
        }
      }}>
        Login
      </button>
    </Layout>
  );
};

export default ContactMe;