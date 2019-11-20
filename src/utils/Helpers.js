import * as NetInfo from '@react-native-community/netinfo';

export async function isNetworkAvailable() {
  let isConnected;
  NetInfo.addEventListener(result => {
    isConnected = result.isConnected;
  });
  return isConnected;
}
