import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET(req: NextRequest) {
  const playlistId = req.url.split('/')[req.url.split('/').length - 1]
  if (!playlistId) {
    return NextResponse.json({ ERROR: 'Playlist ID is required' }, { status: 400 })
  }

  try {
    const resGetPlaylist = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=12&key=${process.env.YOUTUBE_API_KEY}&playlistId=${playlistId}`
    )
    const data = await resGetPlaylist.json()
    return NextResponse.json({ data })
  } catch (e) {
    console.log({ e })
    return NextResponse.json({ ERROR: 'An error occurred' }, { status: 500 })
  }
}
