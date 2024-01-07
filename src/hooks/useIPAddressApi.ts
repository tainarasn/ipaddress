export async function fetchIP(ip?: string): Promise<any> {
    try {
        const response = await fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=at_hqyFUbeqO1utRlJ4OcktwnUBslLfX&ipAddress=${ip}`
        )
        if (!response.ok) {
            throw new Error("Erro ao buscar os dados da API")
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error("Ocorreu um erro:", error)
        throw error
    }
}
