import { NextResponse } from 'next/server';

type GoogleFontsResponse = {
  kind?: string;
  items?: Array<any>;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const apiKey = process.env.GOOGLE_FONTS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Missing GOOGLE_FONTS_API_KEY' }, { status: 500 });
  }

  const sort = searchParams.get('sort') || 'popularity';
  const family = searchParams.get('family');

  const url = new URL('https://www.googleapis.com/webfonts/v1/webfonts');
  url.searchParams.set('key', apiKey);
  url.searchParams.set('sort', sort);

  try {
    const res = await fetch(url.toString());

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: 'Google Fonts API error', details: text }, { status: res.status });
    }

    const data: GoogleFontsResponse = await res.json();
    let items = data.items ?? [];

    if (family) {
      const q = family.toLowerCase();
      items = items.filter((i: any) => i.family.toLowerCase().includes(q));
    }

    return NextResponse.json(
      { items },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json({ error: 'Fetch failed', message: err?.message ?? String(err) }, { status: 500 });
  }
}
