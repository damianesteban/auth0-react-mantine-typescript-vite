import { useAuth0, User } from "@auth0/auth0-react";
import React from "react";
import PageLayout from "./PageLayout";
import { Card, Text } from "@mantine/core";

type ProfileProps = {
  user: User;
};

const ProfileCard: React.FC<ProfileProps> = (props) => {
  return (
    <Card padding="xl">
      {/* top, right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>
        <Text fw={500} size="lg" mt="md">
          User Profile
        </Text>
        <img src={props.user.picture} alt="Profile" />
        <p>{props.user.name}</p>
        <p>{props.user.email}</p>
        <p>{JSON.stringify(props.user, null, 2)}</p>
      </Card.Section>
    </Card>
  );

};
export const ProfilePage: React.FC = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
  
  <PageLayout>
    <ProfileCard user={user} />
  </PageLayout>
  )
};
