import React, { useState } from "react";

import MapView, {Marker} from "react-native-maps";

const CollegeMap = () => {

  return (
    <MapView 
      style={{flex:1}}
        initialRegion={{
        latitude: 19.0223415,
        longitude: 72.8560332,
        latitudeDelta: 0.0008,
        longitudeDelta: 0.0008
        }}
    > 
      <Marker coordinate={{ latitude: 19.0223415, longitude:72.8560332 }} />
    </MapView>
  );
};

export default CollegeMap;