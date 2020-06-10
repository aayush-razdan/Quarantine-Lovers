//data for cr authentication
//if cr is login then only he will be able to add new class
//we will need to use state for that

import React, { useState } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";

//fy

// const b1 = "";
// const p1 = "0";

// //batch 2
// const b2 = "";
// const p2 = "0";

// //batch 3
// const b3 = "";
// const p3 = "";

// //batch 4
// const b4 = "";
// const p4 = "";

// //batch 5
// const b5 = "";
// const p5 = "";

// //batch 6
// const b6 = "";
// const p6 = "";

export default function Authentication({ values }) {
  const data = [
    //batch 1
    { username: "crbtch11920", password: "vjtibtechb11920" },
    //batch 2
    { username: "crbtch21920", password: "vjtibtechb21920" },
    //batch 3
    { username: "crbtch31920", password: "vjtibtechb31920" },
    //batch 4
    { username: "crbtch41920", password: "vjtibtechb41920" },
    //batch 5
    { username: "crbtch51920", password: "vjtibtechb51920" },
    //batch 6
    { username: "crbtch61920", password: "vjtibtechb61920" },
  ];
  //const [modalOpen, setModalOpen] = useState(false);
  var modalOpen = false;

  for (var i = 0; i < 6; i++) {
    if (
      values.username == data[i].username &&
      values.password == data[i].password
    ) {
      modalOpen = true;
      break;
    }
  }

  return (
    <Modal visible={modalOpen}>
      <View style={styles.modal}>
        <Text style={styles.text}>Welcome CR of batch {i}</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
