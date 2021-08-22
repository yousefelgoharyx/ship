import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import { useAuth } from "../context/auth";
const Login = () => {
  const { login } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const handleLogin = () => {
    setLoading(true);
    login();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StyledText style={styles.heading} weight="bold">
          تسجيل الدخول
        </StyledText>
        <StyledText style={styles.subheading}>
          مخصص لمندوبي شركة شحنة
        </StyledText>
      </View>
      <View style={styles.form}>
        <Input placeholder="البريد الالكتروني" autoCapitalize="none" />
        <Spacer />
        <Input placeholder="كلمة السر" autoCapitalize="none" />
        <Spacer />
        <Button loading={loading} onPress={handleLogin}>
          دخول
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginBottom: 32,
  },
  heading: {
    fontSize: 24,
    color: "#000",
    marginBottom: 8,
    textAlign: "center",
  },
  subheading: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
  },
  form: {
    width: "90%",
  },
});

export default Login;
