import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? '/api' : '',
});

export const search = {
  searchArt(query) {
    return api.get(`/search/${query}`)
      .then(response => response.data)
      .catch(err => {
        throw new Error(err);
      });
  } 
}

export const user = {
  // GET
  getUserArt({ user_id }) {    
    return api.get(`/user/art/${user_id}`)
      .then(response => response)
      .catch(err => {
        throw new Error(err);
      });
  },
  getUserPlaylists({ id }) {
    return api.get(`/user/playlists/${id}`)
      .then(response => response)
      .catch(err => {
        throw new Error(err);
      });
  },
  getUserPlaylistArt({ artIds }) {
    return api.get(`/user/playlist/${artIds}`)
      .then(response => response)
      .catch(err => {
        throw new Error(err);
      });
  },
  getBackgroundImage(){
    return api.get('art/random')
      .then(response => response)
      .catch(err => {
        throw new Error(err);
      });
  },

  // POST
  saveUserArt({ user_id, miapi_id }) {
    return api.post('/user/art', { user_id, miapi_id })
      .then(response => response)
      .catch(err => {
        throw new Error(err);
      });
  },
  saveUserPlaylist({ playlist_name, user_id, miapi_id }) {
    console.log(playlist_name, user_id, miapi_id);
    return api.post('/user/playlist', { playlist_name, user_id, miapi_id })
      .then(response => response)
      .catch(err => {
        throw new Error(err);
      });
  },

  // PATCH
  updateUserPlaylist({ playlist_id, playlist_name, cover_art_id }) {
    return api.patch('/user/playlist', { playlist_name, cover_art_id, playlist_id })
      .then(response => response)
      .catch(err => {
        throw new Error(err);
      });
  },

  updateUserPlaylistArt({ playlist_id, art_id }) {
    return api.patch('/user/playlist/art', { playlist_id, art_id })
      .then(response => response)
      .catch(err => {
        throw new Error(err);
      });
  },

  // DELETE
  deleteUserArt({ user_id, artId }) {
    return api.delete(`/user/art/${user_id}/${artId}`)
      .then(response => response)
      .catch(err => {
        throw new Error(err);
      });
  },

  deleteUserPlaylist({ playlist_id }) {
    return api.delete(`/user/playlist/${playlist_id}`)
      .then(response => response)
      .catch(err => {
        throw new Error(err);
      });
  }
}