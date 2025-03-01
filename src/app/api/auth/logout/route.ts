import { authApiRequest } from '@/apiRequest/auth';
import { HttpError } from '@/lib/http';
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('sessionToken');

  if (!sessionToken) {
    return Response.json({ message: 'Không nhận được token' }, { status: 400 });
  }

  try {
    const result = await authApiRequest.logoutFromNextServerToServer(sessionToken.value);
    return Response.json(result, {
      status: 200,
      headers: {
        'Set-cookie': `sessionToken=; Path=/; HttpOnly;Max-Age=0;`,
      },
    });
  } catch (error) {
    if (error instanceof HttpError) {
      return Response.json(error.payload, {
        status: error.status,
      });
    }
    return Response.json({ message: 'Lỗi không xác định' }, { status: 500 });
  }
}
