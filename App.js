
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ImageList = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);

  const handleImagePress = (description) => {
    setSelectedImage(description.path);
    setSelectedDescription(description.description);
  };

  const images = [
    { path: require('./image/i1.jpg'),
      description: 'Pixel is the most featureful phone ever.\nPrice: 800\n***',
      text: 'Pixel is the most featureful phone ever.\nPrice: 800\n***' 
    },
    { path: require('./image/i2.jpg'),
      description: 'Laptop is most productive development tool.\nPrice: 2000\n***',
      text: 'Laptop is most productive development tool.\nPrice: 2000\n***'
     },
    { path: require('./image/i3.jpg'),
      description: 'Tablet is the most useful device ever for meeting.\nPrice: 1500\n***',
      text: 'Tablet is the most useful device ever for meeting.\nPrice: 1500\n***' 
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Product navigation</Text>
      {images.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => handleImagePress(image)}>
          <View style={styles.imageContainer}>
            <Image source={image.path} style={styles.image} />
            <Text style={styles.imageText}>{image.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
      {selectedImage && (
        <View style={styles.descriptionContainer}>
          <Image source={selectedImage} style={styles.selectedImage} />
          <Text style={styles.description}>{selectedDescription}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    padding: 10,
    position: 'relative', 
  },
  titre: {
    color: 'white',
    backgroundColor: 'pink',
    fontSize: 25,
    fontFamily: 'bold',
    padding: 10,
  },

  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    margin: 10,
    alignSelf: 'flex-start', 
  },

  imageText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },

  star: {
    fontSize: 24,
    color: 'red', 
    marginLeft: 5,
  },

  descriptionContainer: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    transform: [{ translateY: '-50%' }],
  },

  selectedImage: {
    width: 200,
    height: 200,
    margin: 10,
  },

  description: {
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ImageList;
