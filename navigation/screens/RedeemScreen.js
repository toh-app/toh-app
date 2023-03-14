// import {ScrollView} from 'native-base';
import * as React from 'react';
import {View, Text, ScrollView, TextBase} from 'react-native';
import RedeemCard from '../../components/RedeemCard';

const vouchers = [
  {
    title: '$3 off McSpicy Burger',
    company: 'McDonalds',
    image:
      'https://images.squarespace-cdn.com/content/v1/5e4ebffeccd62403a77158ca/1624531674353-FH6RPXS8RHT9CSTQ6WDB/B1653_McD_McSpicy_48Sht.jpg',
    tag: 'Food',
  },
  {
    title: '10% off on all food items',
    company: 'Gong Cha',
    image: 'https://www.sgdtips.com/wp-content/uploads/Gong-Cha-Promotions.jpg',
    tag: 'Food',
  },
  {
    title: '10% off on all food items',
    company: 'EatBook',
    image:
      'https://eatbook.sg/wp-content/uploads/2022/12/chope-year-end-sale-2022.jpg',
    tag: 'Food',
  },
  {
    title: '$3 off McSpicy Burger',
    company: 'McDonalds',
    image:
      'https://images.squarespace-cdn.com/content/v1/5e4ebffeccd62403a77158ca/1624531674353-FH6RPXS8RHT9CSTQ6WDB/B1653_McD_McSpicy_48Sht.jpg',
    tag: 'Food',
  },
  {
    title: '10% off on all food items',
    company: 'EatBook',
    image:
      'https://eatbook.sg/wp-content/uploads/2022/12/chope-year-end-sale-2022.jpg',
    tag: 'Food',
  },
];

export default function RedeemScreen({navigation}) {
  return (
    <ScrollView>
      {vouchers.map((voucher, index) => (
        <RedeemCard key={index} {...voucher} />
      ))}
      {/* <Text>Hi</Text> */}
    </ScrollView>
  );
}
