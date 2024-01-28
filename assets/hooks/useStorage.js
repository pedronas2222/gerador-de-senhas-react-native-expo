import AsyncStorage from "@react-native-async-storage/async-storage"

const useStorage = () => {
    // buscar itens salvos
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
            
        } catch (error) {
            console.log("Erro ao buscar", error)
            return [];
        }
    }

    // Salvar um itens no storage
    const saveItem = async () => {
        try {
            let passwords = await getItem(key, value);

            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))


        } catch (error) {
            console.log("ERRO AO ADICIONAR", error)
        }

    }

    // Remover algo no storage
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key);

            let myPasswords = passwords.filter( (password)  => {
                return(password !== item)
            })
            
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;
            
        } catch (error) {
            console.log("ERRO AO DELETAR", error)
            
        }

    }

    return {
        getItem,
        saveItem,
        removeItem,
    }

}