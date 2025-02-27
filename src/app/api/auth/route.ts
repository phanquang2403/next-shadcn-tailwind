export async function POST(request: Request) {
	const res = await request.json();
	console.log({ res });
	const sessionToken = res.payload?.data?.token;
	if (!sessionToken) {
		return Response.json({ message: "Không nhận được tokne" }, { status: 400 });
	}

	return Response.json(res.payload, {
		status: 200,
		headers: {
			"Set-cookie": `sessionToken=${sessionToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600;`,
		},
	});
}
