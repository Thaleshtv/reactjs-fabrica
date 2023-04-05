export async function getUser() {
    const response = await fetch('https://api.randomuser.me/?results=10')
    const data = response.json()

    return data
}