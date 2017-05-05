/*
A Library has a name and a creator 
*/
const Library = function(name, creator){
  this.name     = name;
  this.creator  = creator;
  // A Library has many playlists (starts as an empty array)
  this.playlists = [];
}

/*
Each Playlist has a name which is required upon creation
*/
const Playlist =  function(name){
  this.name = name;
  // A Playlist also has many tracks
  this.tracks = [];
}

/*
* A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) 
  all of which are required when creating a new track
*/
const Track = function(title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;
}

// Playlist objects can be added to an instance of a library
Library.prototype.addPlaylist = function(newPlaylist){ 
  this.playlists.push(newPlaylist); 
}

// Tracks objects can be added to an instance of a Playlist
Playlist.prototype.addTracks = function(newTrack){ 
  this.tracks.push(newTrack); 
}

// Each Playlist also has an overallRating function which will calculate the rating 
// by averaging the rating of its tracks
Playlist.prototype.overallRating = function(){
  let totalRating = 0;
  this.tracks.forEach( (track) => {
    totalRating += track.rating;
  });

  return totalRating/this.tracks.length;
}
// Each Playlist also has a totalDuration function 
// which will sum the duration of all of its tracks
Playlist.prototype.totalDuration = function(){
  let totalDuration = 0;
  let hour=0;
  let minute=0;
  let second=0;
  this.tracks.forEach( (track) => {
    let splitTime= track.length.split(':');

    hour    += parseInt(splitTime[0]);
    minute  += parseInt(splitTime[1]);
    second  += parseInt(splitTime[2]);
  });
    hour     = Math.floor(hour + minute/60);
    minute   = minute%60;
    minute   = Math.floor(minute + second/60);
    second   = second%60;

    return `${hour}:${minute}:${second}`;
}

// should use new to instantiate these functions to create instances of one library 
// and then add new tracks and playlists to the library.
const codingLibary = new Library('codingLibrary', 'sean');
const codingMusic  = new Playlist("codingMusic");
codingLibary.addPlaylist(codingMusic);
codingMusic.addTracks(new Track('code monkey', 4, '00:20:30'));
codingMusic.addTracks(new Track('mvc', 3, '00:09:30'));

console.log(codingMusic.overallRating());
console.log(codingMusic.totalDuration());