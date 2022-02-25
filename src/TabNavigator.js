import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 2,
        alignContent: 'center',
        backgroundColor: 'white',
        elevation: 3,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {name: route.name});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        // modify inputRange for custom behavior
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
            <Text
              style={{
                color: '#1048c3',
                fontWeight: isFocused ? '900' : '500',
                alignItems: 'center',
              }}>
              {label}
            </Text>
            {isFocused && <View style={styles.active} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  active: {
    borderWidth: 2,
    width: 100,
    borderColor: 'blue',
  },
});

// import * as React from 'react';
// import {Text, Pressable, View} from 'react-native';
// import {
//   useNavigationBuilder,
//   TabRouter,
//   TabActions,
//   createNavigatorFactory,
// } from '@react-navigation/native';

// export function TabNavigator({
//   initialRouteName,
//   children,
//   screenOptions,
// }) {
//   const {state, navigation, descriptors, NavigationContent} =
//     useNavigationBuilder(TabRouter, {
//       children,
//       screenOptions,
//       initialRouteName,
//     });

//   return (
//     <NavigationContent style={{height:'100%',backgroundColor:'pink'}}>
//       <View
//         style={[
//           {
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             backgroundColor:'blue'
//           }
//         ]}>
//         {state.routes.map((route, index) => {
//           const isFocused = state.index === index;
//           return (
//             <Pressable
//               key={route.key}
//               onPress={() => {
//                 const event = navigation.emit({
//                   type: 'tabPress',
//                   target: route.key,
//                   canPreventDefault: true,
//                 });
//                 if (!event.defaultPrevented) {

//                   navigation.dispatch({

//                   ...TabActions.jumpTo(route.name, {name: route.name}),

//                   target: state.key,

//                   });

//                   }
//               }}
//               style={[
//                 {
//                   flex: 1,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   alignContent: 'center',
//                   backgroundColor: isFocused ? 'tomato' : '#eee',
//                 }
//               ]}>
//               <Text style={{color: isFocused ? 'white' : 'black'}}>
//                 {descriptors[route.key].options.title || route.name}
//               </Text>
//             </Pressable>
//           );
//         })}
//       </View>
//       <View style={{height:'100%',backgroundColor:'white',padding:0,margin:0,width:'100%'}}>
//         {state.routes.map((route, i) => {
//           const isFocused = state.index === i;
//           if(isFocused&&descriptors[route.key].render())
//           {
//             return (
//               <View
//                 key={route.key}
//                 style={{
//                   flex:1,
//                   height:'100%'
//           }}>
//                 {descriptors[route.key].render()}
//               </View>
//             );
//           }
//           else
//           {
//             return null;
//           }

//         })}
//       </View>
//     </NavigationContent>
//   );
// }
// export const createMyNavigator = createNavigatorFactory(TabNavigator);
