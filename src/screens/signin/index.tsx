import {
  Center,
  Heading,
  Image,
  Text,
  VStack,
  ScrollView
} from "@gluestack-ui/themed";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  const handleNavigateToSignUp = () => {
    navigator.navigate("signUp");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          w="$full"
          defaultSource={BackgroundImg}
          h={624}
          alt="pessoas treinando"
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my={"$24"}>
            <Logo />
            <Text color="$gray100">Treine sua mente o seu corpo.</Text>
          </Center>
          <Center gap="$2">
            <Heading color="$gray100">Acessse a conta</Heading>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />

            <Button title="Acessar" />
          </Center>
          <Center flex={1} justifyContent="flex-end" mt={4}>
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Ainda não tem uma conta?{" "}
              <Text color="$green700" fontFamily="$body">
                Cadastre-se
              </Text>
            </Text>
            <Button
              title="Cadastrar"
              variant="outline"
              onPress={handleNavigateToSignUp}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
