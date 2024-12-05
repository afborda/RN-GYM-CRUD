import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Group } from "@components/Group";

import { HomeHeader } from "@components/HomeHeader";
import { HStack, Heading, Text, VStack, set } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { ExerciseCard } from "@components/ExerciseCard";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export const Home = () => {
  const [exercices, setExercices] = useState([
    {
      name: "Costa",
      image:
        "https://blog.nextfit.com.br/wp-content/uploads/2024/02/exercicios-musculacao.jpg",
      series: 3,
      repetitions: 12
    },
    {
      name: "Ombro",
      image:
        "https://blog.nextfit.com.br/wp-content/uploads/2024/02/exercicios-musculacao.jpg",
      series: 3,
      repetitions: 12
    },
    {
      name: "Perna",
      image:
        "https://blog.nextfit.com.br/wp-content/uploads/2024/02/exercicios-musculacao.jpg",
      series: 3,
      repetitions: 12
    },
    {
      name: "Biceps",
      image:
        "https://blog.nextfit.com.br/wp-content/uploads/2024/02/exercicios-musculacao.jpg",
      series: 3,
      repetitions: 12
    },
    {
      name: "Biceps2",
      image:
        "https://blog.nextfit.com.br/wp-content/uploads/2024/02/exercicios-musculacao.jpg",
      series: 3,
      repetitions: 12
    }
  ]);

  const [groups, setGroups] = useState([
    "costa",
    "perna",
    "ombro",
    "peito",
    "biceps",
    "triceps"
  ]);
  const [groupSelected, setGroupSelected] = useState("costa");

  const navigate = useNavigation<AppNavigatorRoutesProps>();

  const handleOpenExerciseDetails = () => {
    navigate.navigate("exercise");
  };

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              groupSelected.toLocaleLowerCase() === item.toLocaleLowerCase()
            }
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />

      <VStack px="$8" flex={1}>
        <HStack justifyContent="space-between" mb="$5" alignItems="center">
          <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
            Exercícios
          </Heading>
          <Text color="$gray200" fontSize="$sm" fontFamily="$body">
            {exercices.length}
          </Text>
        </HStack>

        <FlatList
          data={exercices}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ExerciseCard
              name={item.name}
              image={item.image}
              series={item.series}
              repetitions={item.repetitions}
              onPress={handleOpenExerciseDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />

        {/* <ExerciseCard
          name="Teste"
          image="https://blog.nextfit.com.br/wp-content/uploads/2024/02/exercicios-musculacao.jpg"
        /> */}
      </VStack>
    </VStack>
  );
};
