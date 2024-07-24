// Filename: index.js
// Combined code from all files

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, View, ActivityIndicator, FlatList } from 'react-native';

const workouts = [
    { id: '1', name: 'Push-ups', reps: '20' },
    { id: '2', name: 'Sit-ups', reps: '30' },
    { id: '3', name: 'Squats', reps: '50' },
    { id: '4', name: 'Jumping Jacks', reps: '40' },
    { id: '5', name: 'Lunges', reps: '30' },
];

function WorkoutList() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            // Simulate network request
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={workoutStyles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <FlatList
            data={workouts}
            renderItem={({ item }) => (
                <View style={workoutStyles.box}>
                    <Text style={workoutStyles.text}>{item.name}</Text>
                    <Text style={workoutStyles.reps}>Reps: {item.reps}</Text>
                </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={workoutStyles.list}
        />
    );
}

const workoutStyles = StyleSheet.create({
    list: {
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: 20,
        width: '90%',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    reps: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default function App() {
    return (
        <SafeAreaView style={appStyles.container}>
            <Text style={appStyles.title}>Workout Tracker</Text>
            <ScrollView contentContainerStyle={appStyles.scrollContainer}>
                <WorkoutList />
            </ScrollView>
        </SafeAreaView>
    );
}

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    scrollContainer: {
        paddingVertical: 20,
    },
});