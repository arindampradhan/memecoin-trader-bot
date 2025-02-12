import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

interface Tweet {
  // Define tweet interface based on API response
  text: string;
  created_at: string;
  id: string;
}

export async function getElonTweets(): Promise<Tweet[]> {
  try {
    const response = await axios.get('https://twitter-api45.p.rapidapi.com/timeline.php', {
      params: {
        screenname: 'elonmusk'
      },
      headers: {
        'x-rapidapi-host': process.env.RAPID_API_HOST,
        'x-rapidapi-key': process.env.RAPID_API_KEY
      }
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching tweets:', error.message);
      throw new Error(`Failed to fetch tweets: ${error.message}`);
    }
    throw error;
  }
}

// Example usage
// getElonTweets()
//   .then(tweets => console.log(tweets))
//   .catch(error => console.error(error));
