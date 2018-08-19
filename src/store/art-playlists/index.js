import newPlaylist from './new-playlist';

export default {
  namespaced: true,
  state: {
    playlistIds: [/* { id: <some-playist-id>, thumbnail: <some-header-img-url> }, ... */], 
    playlists: [/* [ { <ids-and-art-stuff> }, ...], ... */],
  },
  modules: {
    newPlaylist,
  },
  mutations: {
    setPlaylistIds(state, playlistIds) {
      state.playlistIds = playlistIds;
    },
    setPlayists(state, playlists) {
      state.playlists = playlists;
    },
  },
  actions: {
    
  }
}