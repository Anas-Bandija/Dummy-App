import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

interface AuthScreenProps {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}


const AuthScreen: React.FC<AuthScreenProps> = ({ isLogin, setIsLogin, setIsLoggedIn }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAuth = () => {
    if (isLogin) {
        Alert.alert('Logging In', `Email: ${email}`);
    } else {
        Alert.alert('Registering', `Email: ${email}`);
    }
    setIsLoggedIn(true); // Dummy success
};

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{isLogin ? 'Sign In' : 'Register'}</Text>

                {!isLogin && (
                    <TextInput
                        placeholder="Username"
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                )}

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={handleAuth}>
                    <Text style={styles.buttonText}>
                        {isLogin ? 'Sign In' : 'Register'}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.switchText}>
                    {isLogin ? (
                        <>
                            Don't have an account?{' '}
                            <Text style={styles.link} onPress={() => setIsLogin(!isLogin)}>Register</Text>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <Text style={styles.link} onPress={() => setIsLogin(!isLogin)}>Sign In</Text>
                        </>
                    )}
                </Text>
            </View>
        </View>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 20
    },
    card: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#f9f9f9'
    },
    button: {
        backgroundColor: '#00c2ff',
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    switchText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 14,
        color: '#555'
    },
    link: {
        color: '#007BFF',
        fontWeight: '600'
    }
});
