import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url: "https://mycyprusinsider.com/wp-content/uploads/2018/07/Elya-beach.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.6
    },
    {
        name: "Benihana",
        image_url: "https://assets.anantara.com/image/upload/q_auto,f_auto/media/minor/anantara/images/anantara-riverside-bangkok-resort/dining/detail-page/benihana/benihana-riverside_chef.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7
    },
    {
        name: "India's Grill",
        image_url: "https://restaurantclicks.com/wp-content/uploads/2022/02/indian-restaurants-los-angeles.jpg",
        categories: [],
        price: "$$",
        reviews: 700,
        rating: 4.9
    }
]

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
        {props.restaurantData.map((restaurant, index) => (
            <View 
                key={index} 
                style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}
            >
                <RestaurantImage image={restaurant.image_url} />
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </View>
        ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View 
        style={{ 
            backgroundColor: "#eee", 
            height: 30, 
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15
        }}>
        <Text>{props.rating}</Text>
    </View>
  </View>
);
