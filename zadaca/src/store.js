import axios from 'axios';

export default {
  name: 'StoreService',
  async getData() {
    try {
      const response = await axios.get(
        "https://api.github.com/repos/vuejs/vue/commits"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}