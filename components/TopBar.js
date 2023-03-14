import {Button, Text} from 'react-native-paper';
import React from 'react';

export default function TopBar({title}) {
  return (
    <>
      <Button theme={{color: 'red'}} onPress={() => console.log('Pressed')}>
        {title}
      </Button>
    </>
  );
}
