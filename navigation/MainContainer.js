import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native-paper';

// Screens
import AlarmScreen from './screens/AlarmScreen';
import RedeemScreen from './screens/RedeemScreen';
import StatsScreen from './screens/StatsScreen';
import WalletScreen from './screens/WalletScreen';
import MainScreen from '../screens/MainScreen';

//Screen names
const alarmName = 'Alarm';
const redeemName = 'Redeem';
const statsName = 'Stats';
const walletName = 'Wallet';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={alarmName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === alarmName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === redeemName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === statsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: {paddingBottom: 10, fontSize: 10},
          style: {padding: 10, height: 70},
        }}>
        <Tab.Screen
          name={statsName}
          component={StatsScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen name={alarmName} component={AlarmScreen} />
        <Tab.Screen name={redeemName} component={RedeemScreen} />
        <Tab.Screen name={walletName} component={MainScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
