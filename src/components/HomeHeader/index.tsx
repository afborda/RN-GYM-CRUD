import { UserPhoto } from "@components/UserPhoto";
import { HStack, Heading, Text, VStack, Icon } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";

export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={{ uri: "https://github.com/afborda.png" }}
        w="$16"
        h="$16"
        alt="Foto de perfil"
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Ola,
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Abner Fonseca
        </Heading>
      </VStack>
      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  );
}
