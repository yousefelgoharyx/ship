import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import { useAuth } from "../context/auth";
import BottomModal from "../components/BottomModal";
const Login = () => {
  const { login, resetError, auth } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = async () => {
    setLoading(true);
    await login(email, password)
    setLoading(false)
  };
  return (
    <View style={styles.container}>
      <BottomModal visible={auth.error} onRequestClose={resetError}>
        <View
          style={{
            backgroundColor: "#fff",
            padding: 32,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        >
          <StyledText
            style={{ textAlign: "center", color: "#f33" }}
            weight={700}
          >
            خطأ في البريد الالكتروني او كلمة المرور
          </StyledText>
          <Spacer space={4} />
          <StyledText
            style={{ textAlign: "center", color: "#999", fontSize: 10 }}
            weight={700}
          >
            يمكن ايضا ان تكون مشكلة في الانترنت لديك او في السيرفرات الخاصة بنا
          </StyledText>
        </View>
      </BottomModal>
      <View style={styles.header}>
        <StyledText style={styles.heading} weight="bold">
          تسجيل الدخول
        </StyledText>
        <StyledText style={styles.subheading}>
          مخصص لمندوبي شركة شحنة
        </StyledText>
      </View>
      <View style={styles.form}>
        <Input
          placeholder="البريد الالكتروني"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Spacer />
        <Input
          placeholder="كلمة السر"
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
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
