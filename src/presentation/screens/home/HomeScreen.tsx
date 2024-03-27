import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

export const HomeScreen = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">Home</Text>
      <Button
        style={{ width: 200 }}
        accessoryLeft={
          <Icon name="facebook" width={32} height={32} fill="#ffffff" />
        }
      >
        Go to Home
      </Button>
    </Layout>
  );
};
