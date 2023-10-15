import { Group, UnstyledButton } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import classes from "./Buttons.module.css";

const SignupButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
      },
    });
  };

  return (
    <UnstyledButton className={classes.control} onClick={handleSignUp}>
      Sign Up
    </UnstyledButton>
  );
};

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <UnstyledButton className={classes.control} onClick={handleLogout}>
      Log Out
    </UnstyledButton>
  );
};

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <UnstyledButton className={classes.control} onClick={handleLogin}>
      Log In
    </UnstyledButton>
  );
};

export const NavbarButtons: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Group ml="xl" gap={0} visibleFrom="sm">
      {!isAuthenticated && (
        <>
          <LoginButton />
          <SignupButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </Group>
  );
};
