import axios from 'axios';

const KEY = 'AIzaSyAjJq8d9vK8oQafWQ_wBu3_W8L441hX_9Q';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});