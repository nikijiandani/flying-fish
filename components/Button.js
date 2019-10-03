import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Button ({value, style}) {
  return (
    <TouchableOpacity>
      <View>
          <Text style={style}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}