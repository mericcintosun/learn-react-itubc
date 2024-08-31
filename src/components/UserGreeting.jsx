const UserGreeting = (props) => {
  const welcomeMessage = (
    <h2 className="text-2xl bg-green-400 text-white p-3 rounded-sm m-0">
      Welcome {props.username}.
    </h2>
  );
  const loginMessage = (
    <h2 className="text-2xl bg-red-400 text-white p-3 rounded-sm m-0">
      Please try again.
    </h2>
  );

  return <>{props.isLoggedIn ? welcomeMessage : loginMessage}</>;
};

export default UserGreeting;
