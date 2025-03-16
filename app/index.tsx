import {
    ActivityIndicator,
    Button,
    KeyboardAvoidingView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import { Stack, Link } from "expo-router";

const index = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const signUp = async () => {
        setLoading(true);
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            alert("Check you emails!");
        } catch (error: any) {
            const err = error as FirebaseError;
            alert("Registration Failed" + err.message);
        } finally {
            setLoading(false);
        }
    };

    const signIn = async () => {
        setLoading(true);
        try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log("The User is now logged in.");
        } catch (error: any) {
            const err = error as FirebaseError;
            alert("Registration Failed" + err.message);
        }
        setLoading(false);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.mainView}>
                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.fieldsView}>
                        <View>
                            <Text style={styles.inputTitle}>Email</Text>
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                            <Text style={styles.inputTitle}>Password</Text>
                            <TextInput
                                style={styles.input}
                                value={password}
                                onChangeText={setPassword}
                                autoCapitalize="none"
                                keyboardType="visible-password"
                                secureTextEntry
                            />
                        </View>
                        {" "}
                        {loading ? (
                            <ActivityIndicator />
                        ) : (
                            <React.Fragment>
                                <View style={{}}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={signUp}
                                    >
                                        <Text style={styles.buttonText}>
                                            Sign Up
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.button, styles.button]}
                                        onPress={signIn}
                                    >
                                        <Text style={styles.buttonText}>
                                            Sign In
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            </React.Fragment>
                        )}
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
};

export default index;

const styles = StyleSheet.create({
    inputTitle: {
        color: "black"
    },
    input: {
        marginHorizontal: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: "gray",
        marginVertical: 6,
        width: 350,
        color: "white"
    },
    mainView: {
        flex: 1,
        alignItems: "center",

    },


    fieldsView: {
        marginTop: 80,
        paddingTop: 200,
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 30
    },
    button: {
        backgroundColor: "#4287f5",
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: "center",
        marginTop: 10,
        width: 350,
    },
    buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
