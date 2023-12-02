import React, { useState } from "react";
import { Text, Button, View  } from "react-native";

export default  ()=> {
  const [pressCount, setPresCount]= useState(0);

  return(
    <View style={{ alignItems: "center", marginTop:20}}>
      <Text>You've pressed the button: {pressCount} time(0)</Text>
      <Button title="Press me" onPress={() => setPressCount(pressCount + 1)}/>
    </View>
  );
};