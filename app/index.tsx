import { Text, View, StyleSheet, ScrollView } from "react-native";
import Card from "./Card"
import pk1 from "../assets/images/pk1-removebg-preview.png"
import pk2 from "../assets/images/pk3-removebg-preview.png"
import pk3 from "../assets/images/pk-4-removebg-preview.png"
import pk4 from "../assets/images/pk2-removebg-preview.png"
import pk5 from "../assets/images/me-removebg-preview.png"
import t1 from "../assets/images/fire-removebg-preview.png"
import t2 from "../assets/images/thunder-removebg-preview.png"
import t3 from "../assets/images/leaf-removebg-preview.png"
import t4 from "../assets/images/water-removebg-preview.png"
import t5 from "../assets/images/fire-removebg-preview.png"

const pokemonDescriptions = [
  {
      name: "Charmander",
      description: "Charmander is a fire-type Pokémon known for its burning tail. Its flame reflects its emotions, and it grows stronger as it evolves."
  },
  {
      name: "Pikachu",
      description: "Pikachu is an electric-type Pokémon famous for its lightning bolt-shaped tail. Its electric attacks make it both cute and powerful."
  },
  {
      name: "Bulbasaur",
      description: "Bulbasaur is a grass and poison-type Pokémon with a plant bulb on its back. It absorbs sunlight for energy and evolves beautifully."
  },
  {
      name: "Squirtle",
      description: "Squirtle is a water-type Pokémon that uses its shell to protect itself. It can withdraw into its shell and shoot water at enemies."
  },
  {
      name: "Jigglypuff",
      description: "Jigglypuff is known for its lullaby that puts others to sleep. This pink, round Pokémon is a fairy-type and loves singing to captivate."
  }
];





export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView>

        <Card 
        name= "Charmander"
        hp= "24"
        pokemonImg= {pk1} 
        typeImg = {t1}
        type = "Fire"
        style= {{borderColor: "#ff6600"}}
        description= {pokemonDescriptions[0].description}
        />
        <Card 
        name= "Pikachu"
        hp= "55"
        pokemonImg= {pk2} 
        typeImg = {t2}
        type = "Lightning"
        style= {{borderColor: "orange"}}
        description= {pokemonDescriptions[1].description}
        />
        <Card 
        name= "Bulbasaur"
        hp= "75"
        pokemonImg= {pk3} 
        typeImg = {t3}
        type = "Grass"
        style= {{borderColor: "#00802b"}}
        description= {pokemonDescriptions[2].description}
        />
        <Card 
        name= "Squirtle"
        hp= "67"
        pokemonImg= {pk4} 
        typeImg = {t4}
        type = "water"
        style= {{borderColor: "#000099"}}
        description= {pokemonDescriptions[3].description}
        />
        <Card 
        name= "Raghav"
        hp= "96"
        pokemonImg= {pk5} 
        typeImg = {t5}
        type = "Fire"
        style= {{borderColor: "#ff6600"}}
        description= {pokemonDescriptions[4].description}
        />

      </ScrollView>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  }
})