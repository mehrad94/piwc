import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const resGetPlaylist = await fetch(
    `https://www.googleapis.com/youtube/v3/playlists?maxResults=10&part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}`
  )
  const data = await resGetPlaylist.json()

  return NextResponse.json({ data })
}
