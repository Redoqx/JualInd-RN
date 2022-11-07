import React from 'react';
import {Dimensions, View, StyleSheet, Text} from 'react-native';

const ProductCard = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.gambar}></View>
      <View style={styles.keterangan}>
        <View style={styles.topPart}>
          <Text numberOfLines={2} style={[styles.warnaText, styles.namaProduk]}>
            Nama Barang yang Masih Bisa Dibeli harusnya, jadi ya buruan beli woy
          </Text>
          <Text numberOfLines={2} style={[styles.warnaText, styles.harga]}>
            Rp 100.000.000,-
          </Text>
          <Text numberOfLines={2} style={[styles.warnaText, styles.stok]}>
            tersedia 5 produk
          </Text>
        </View>
        <View style={styles.bottomPart}>
          <Text numberOfLines={3} style={[styles.warnaText, styles.desciption]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
            porro vitae accusamus veniam iure sapiente eveniet beatae? Optio,
            numquam dolore. Culpa vero a, velit officia quaerat voluptatem
            architecto. Suscipit, explicabo.
          </Text>
        </View>
      </View>
    </View>
  );
};

// 180
// 240
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.47,
    height: Dimensions.get('window').height * 0.35,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    overflow: 'hidden',
  },
  gambar: {
    flex: 3,
    backgroundColor: '#C4C4C4',
  },
  keterangan: {
    padding: 5,
    flex: 4,
    backgroundColor: 'white',
  },
  topPart: {marginBottom: 10},
  bottomPart: {},
  warnaText: {
    color: 'black',
  },
  namaProduk: {
    fontWeight: '700',
    fontSize: 18,
  },
  harga: {
    fontSize: 18,
    fontWeight: '500',
  },
  stok: {
    fontSize: 12,
  },
  desciption: {
    fontSize: 14,
  },
});

type Props = {};

export default ProductCard;
