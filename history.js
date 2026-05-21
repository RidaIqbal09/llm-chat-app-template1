export async function handleHistory(request, env) {

    const { results } = await env.DB.prepare(
        "SELECT * FROM messages ORDER BY id DESC"
    ).all();

    return new Response(JSON.stringify(results), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
}
