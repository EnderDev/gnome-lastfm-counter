import axios from "axios"
import { config } from "dotenv"

config();

const main = async () => {
    const res = await axios.get(
        `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&format=json`
    );

    console.log(`    Scrobbles: ${parseInt(res.data.user.playcount).toLocaleString()}   Artists: ${parseInt(res.data.user.artist_count).toLocaleString()}    `);
}

main();