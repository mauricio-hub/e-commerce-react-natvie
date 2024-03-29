import { Icon, useTheme } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

interface Props {
  name: string;
  color?: string;
  white?: boolean;
}

export const MyIcon = ({ name, color='white', white = false }: Props) => {

   

  return (
    <Icon name={name} fill={white ? "white" : color} style={styles.icon} />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
