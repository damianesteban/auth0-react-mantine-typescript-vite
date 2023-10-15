// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import { ProfilePage } from "./components/UserProfile";
import { Callback } from "./components/Callback";
import { AuthenticationGuard } from "./components/AuthenticationGuard";

export default function App() {

  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<AuthenticationGuard component={ProfilePage}></AuthenticationGuard>} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </MantineProvider>
  );
}
