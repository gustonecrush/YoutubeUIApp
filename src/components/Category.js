import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Category = ({ img }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={img} />
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginLeft: 6,
    }
});
