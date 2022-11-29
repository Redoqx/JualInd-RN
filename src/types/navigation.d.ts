import {StackScreenProps as OriginalStackScreenProps} from '@react-navigation/stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type BottomScreen = {
  Product: {
    screen?: keyof BottomScreen;
  };
  Order: {
    screen?: keyof BottomScreen;
  };
  Profile: {
    screen?: keyof BottomScreen;
  };
};

export type StackScreen = {
  Login: {
    screen?: keyof StackScreen;
  };
  BottomTab: {
    screen?: Exclude<keyof StackScreen, 'BottomTab'>;
  };
};

export type BottomScreenProps<T extends keyof BottomScreen> =
  BottomTabScreenProps<BottomScreen, T>;

export type BottomScreenNavigation<T extends keyof BottomScreen> =
  BottomScreenProps<T>['navigation'];

export type BottomScreenRoute<T extends keyof BottomScreen> =
  BottomScreenProps<T>['route'];

export type StackScreenProps<T extends keyof StackScreen> =
  OriginalStackScreenProps<StackScreen>;

export type StackScreenNavigation<T extends keyof StackScreen> =
  StackScreenProps<T>['navigation'];

export type StackScreenRoute<T extends keyof StackScreen> =
  StackScreenProps<T>['route'];
