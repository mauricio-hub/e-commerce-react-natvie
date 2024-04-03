import { Button, Input, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { View, useWindowDimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MyIcon } from "../../components/ui/MyIcon";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParam } from "../../navigation/StackNavigator";



interface Props extends StackScreenProps<RootStackParam, "LoginScreen"> {}


export const LoginScreen = ({navigation}:Props) => {
  const { height } = useWindowDimensions();


  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.30 }}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Porfavor ingrese para continuar</Text>
          <Layout style={{ height: 5 }} />
        </Layout>

        {/* inputs */}
        <Layout>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            style={{ marginBottom: 10 }}
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="email-outline" color="gray" />}
          />
          <Input
            placeholder="Contraseña"
            secureTextEntry
            style={{ marginBottom: 10 }}
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="lock-outline" color="gray" />}
          />
        </Layout>

        <Layout style={{ height: 10 }} />

        {/* buttons */}

        <Layout>
          <Button
            accessoryRight={<MyIcon name="arrow-forward-outline" />}
            style={{ marginBottom: 10 }}
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          >
            Ingresar
          </Button>
        </Layout>

        <Layout style={{ height: 10 }} />

        <Layout
          style={{
            alignItems: "flex-end",
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text category="p2">¿No tienes una cuenta?</Text>
          <Text
            category="s1"
            status="primary"
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
          >
            Registrate
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
