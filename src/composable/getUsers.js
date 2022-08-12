import {ref} from "vue";

const getUsers = () => {
    const users = ref([])
    const load = async () => {
        try {
            let data = await fetch('https://reqres.in/api/users?page=1')
            if (!data.ok) {
                throw Error("No data available")
            }
            users.value = await data.json()
        }
        catch (e) {
            console.log(e.message);
        }
    }
    load();
    return { users}
}

export default getUsers;
