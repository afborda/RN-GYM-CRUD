import { VStack } from "@gluestack-ui/themed";
import { Center, HStack, Heading, Text } from "@gluestack-ui/themed";

export function HistoryCard() {
  return (
    <HStack
      w="$full"
      px="$5"
      mb="$3"
      bg="$gray600"
      rounded="$md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr="$5" p="$3">
        <Heading
          color="$white"
          fontSize="$md"
          textTransform="capitalize"
          fontFamily="$heading"
        >
          Costa
        </Heading>

        <Text color="$gray300" fontSize="$lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>
      <Text color="$gray300" fontSize="$md">
        08:56
      </Text>
    </HStack>
  );
}