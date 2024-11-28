import { useState } from "react";

import { Group } from "@components/Group";

import { HomeHeader } from "@components/HomeHeader";
import { HStack, VStack, set } from "@gluestack-ui/themed";
import { FlatList } from "react-native";

export const Home = () => {
  const [groups, setGroups] = useState([
    "costa",
    "ombro",
    "perna",
    "peito",
    "biceps",
    "triceps"
  ]);
  const [groupSelected, setGroupSelected] = useState("costa");

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />
    </VStack>
  );
};
