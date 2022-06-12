import React from "react";
import { Text, View, SafeAreaView } from "react-native"
import HeaderTabs from "../components/HeaderTabs";

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs />
      </View>
    </SafeAreaView>
  );
}
