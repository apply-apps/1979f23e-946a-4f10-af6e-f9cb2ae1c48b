// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Test Application</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});