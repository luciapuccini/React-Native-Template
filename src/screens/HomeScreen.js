import * as React from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';

const HomeScreen = ({navigation}) => (
  <Layout style={styles.container}>
    <Text status="info">Home Screen</Text>
    <Button onPress={() => navigation.navigate('Details')}>
      Go to Details
    </Button>
  </Layout>
);
const styles = {
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
};

export default HomeScreen;
