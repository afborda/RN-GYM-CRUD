import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { VStack } from "@gluestack-ui/themed";

export const Home = () => {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Group name="Costas" isActive={true} />
    </VStack>
  );
};
