import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
const FilterScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the Filter screen</Text>
    </View>
  );
};
FilterScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
export default FilterScreen;
