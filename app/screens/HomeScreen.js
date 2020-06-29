import React, { Component } from 'react';
import { Text, View, StyleSheet, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = { webViewUrl: 'http://www.vjti.ac.in' };
  }
render() {
    const jsCode = `document.body.innerHTML=document.getElementById('sidenav').innerHTML;`;
 
    return (
    
      <View style={styles.container}>
        <WebView
          ref={ref => {
            this.webview = ref;
          }}
          source={{ uri: this.state.webViewUrl }}
          originWhitelist={['*']}
          javaScriptEnabledAndroid={true}
          injectedJavaScript={jsCode}
           style={{width:"100%",height:"70%"}}
          scrollEnabled={false}
            scalesPageToFit={false}
      /*  onFileDownload={true}
        allowFileAccess={true}
        allowFileAccessFromFileURLs={true}
       */
        />
      </View>
    
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
     width:"100%",
      //height:10,
      backgroundColor:"white",
     // marginRight:"100%"
    }

  
});