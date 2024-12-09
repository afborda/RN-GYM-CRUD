import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import {
  Center,
  Heading,
  Image,
  Text,
  VStack,
  ScrollView
} from "@gluestack-ui/themed";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(80, "Nome deve ter no máximo 80 caracteres")
    .matches(/^[a-zA-Z\s]+$/, "Nome deve conter apenas letras"),
  email: yup
    .string()
    .required("E-mail é obrigatório")
    .email("E-mail inválido")
    .max(80, "E-mail deve ter no máximo 80 caracteres")
    .min(5, "E-mail deve ter no mínimo 5 caracteres"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(20, "Senha deve ter no máximo 20 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      "Senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número"
    ),
  password_confirm: yup
    .string()
    .required("Confirmação de senha é obrigatória")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
});

export function SignUp() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleNavigateToSignIn = () => {
    navigation.navigate("signIn");
  };

  function handleSignUp({
    name,
    email,
    password,
    password_confirm
  }: FormDataProps) {
    console.log({ name, email, password, password_confirm });
  }

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

          <Center gap="$4" flex={1}>
            <Heading color="$gray100">Crie sua conta</Heading>

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  erroMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  erroMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  onChangeText={onChange}
                  value={value}
                  erroMessage={errors.password?.message}
                  secureTextEntry
                />
              )}
            />

            <Controller
              control={control}
              name="password_confirm"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirme sua senha"
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  erroMessage={errors.password_confirm?.message}
                  returnKeyType="send"
                  secureTextEntry
                />
              )}
            />

            <Button
              title="Criar e acessar "
              onPress={handleSubmit(handleSignUp)}
            />
          </Center>

          <Button
            title="Voltar para o login"
            variant="outline"
            mt={"$12"}
            onPress={handleNavigateToSignIn}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
