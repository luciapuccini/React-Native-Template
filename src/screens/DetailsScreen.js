import * as React from 'react';
import {Layout, Text} from '@ui-kitten/components';

const DetailsScreen = () => {
  return (
    <Layout style={styles.container}>
      <Text status="danger">Details Screen</Text>
    </Layout>
  );
};
const styles = {
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
};

export default DetailsScreen;
