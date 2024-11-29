import {
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  Icon
} from "@gluestack-ui/themed";

import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps & {
  name: string;
  image: string;
  series: number;
  repetitions: number;
};

export function ExerciseCard({
  name,
  image,
  series,
  repetitions,
  ...rest
}: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image
          source={{
            uri: image
          }}
          alt="Imagem de exercicios"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMethod="resize"
        />
        <VStack flex={1}>
          <Heading fontSize="$lg" color="$white" fontFamily="$heading">
            {name}
          </Heading>
          <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={2}>
            {series} séries x {repetitions} repeticoes
          </Text>
        </VStack>
        <Icon as={ChevronRight} size={24} color="$gray200" />
      </HStack>
    </TouchableOpacity>
  );
}
