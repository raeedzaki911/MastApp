import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);

  const addMenuItem = (item: { name: string; description: string; course: string; price: number }) => {
    setMenuItems((prev) => [...prev, { ...item, id: prev.length + 1 }]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator addMenuItem={addMenuItem} />
    </SafeAreaView>
  );
};

export default App;
