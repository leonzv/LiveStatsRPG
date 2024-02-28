import React from "react";
import { Text, View } from "../../components/Themed";
import { TouchableOpacity } from "react-native"
import axios from "axios";
import { useTranslation } from "react-i18next";
import { api } from "../../services/api";

export default function HomeScreen() {
    const { t } = useTranslation();

    async function createCharacter() {
        try {
            const response = await api.post('/createPlayer', {
                name: 'John Doe',
                lvl: 4,
                age: 20,
                hp: 100,
                money: 100,
                xp: 0,
                playerClass: 'warrior',
                historyId: 1,
                status: 'alive'
            });
            console.log(response.data);
        } catch (error: any) {
            console.log(error.response);
            console.error(error);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: 16 }}>
            <View style={{ marginTop: "35%", gap: 24 }}>
                <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint quae vel quas! Suscipit </Text>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>Lorem ipsum dolor sit amet</Text>
            </View>
            <View style={{ gap: 16, marginBottom: "35%", minWidth: '80%' }}>
                <TouchableOpacity onPress={createCharacter} style={{ backgroundColor: '#123561', padding: 16, borderRadius: 8 }}>
                    <Text style={{ fontSize: 20 }}>{t('create')} um personagem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Com')} style={{ backgroundColor: '#123561', padding: 16, borderRadius: 8 }}>
                    <Text style={{ fontSize: 20 }}>Começar uma história</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('sec')} style={{ backgroundColor: '#123561', padding: 16, borderRadius: 8 }}>
                    <Text style={{ fontSize: 20 }}>Entrar em uma história</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}