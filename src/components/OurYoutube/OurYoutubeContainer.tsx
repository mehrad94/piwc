import OurYoutube from './OurYoutube'

export const OurYoutubeContainer = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/youtube/playlist')
    const playlist = await response.json()
    console.log({ playlist })
    return <OurYoutube playlists={playlist.data.items} />
  } catch (error) {
    console.log({ error })
    return <div>Loading...</div>
  }
}
export default OurYoutubeContainer
