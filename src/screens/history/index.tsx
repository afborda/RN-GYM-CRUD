import { HistoryCard } from "@components/HistoryCard";
import { ScreensHeader } from "@components/ScreensHeader";
import {
  Center,
  Heading,
  SectionList,
  Text,
  VStack
} from "@gluestack-ui/themed";
import { useState } from "react";

export const History = () => {
  const [exercises, setExercices] = useState([
    {
      title: "29/09/2021",
      data: ["Costa", "Perna", "Ombro"]
    },
    {
      title: "28/09/2021",
      data: ["Costa", "Perna", "Ombro"]
    },
    {
      title: "27/09/2021",
      data: ["Costa", "Perna", "Ombro"]
    }
  ]);

  return (
    <VStack flex={1}>
      <ScreensHeader title="Histórico" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="$gray200"
            fontSize="$md"
            mt="$10"
            mb="$3"
            fontFamily="$heading"
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="$gray100" textAlign="center">
            Não há exercicios registrados ainda.{"\n"} Vamos fazer exercicios
            hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />

      <HistoryCard />
    </VStack>
  );
};
