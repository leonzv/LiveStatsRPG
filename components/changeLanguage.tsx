import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import { View } from './Themed';

const ChangeLanguageButton = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const handlePress = async (lang: string) => {
        const newLanguage = language === 'en' ? 'pt' : 'en';
        setLanguage(newLanguage);

        try {
            await AsyncStorage.setItem('language', newLanguage);
        } catch (error) {
            console.error('Erro ao salvar idioma no AsyncStorage:', error);
        }
    };

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    return (
        <View>
            <TouchableOpacity onPress={() => handlePress('en')} style={{ backgroundColor: language === 'en' ? 'red' : 'transparent' }}>
                <Text>EN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress('pt')} style={{ backgroundColor: language === 'pt' ? 'red' : 'transparent' }}>
                <Text>PT</Text>
            </TouchableOpacity>
        </View >
    );
};

export default ChangeLanguageButton;
