const $ = document;
const cover = $.querySelector('img');
const trackName = $.querySelector('.track_name');
const artistName = $.querySelector('.artist_name');
const prev = $.querySelector('#prev');
const play = $.querySelector('#play');
const next = $.querySelector('#next');
const icon = $.querySelector('.icon');
const audio = $.querySelector('audio');
let flage = true;
let index = 0;

//  data
let dataObj = [
  {
    track : '../assets/audio/Bleeding.mp3',
    Artist : 'rosa anschutz 1',
    TrackName:'bleeding',
    coverImg : '../assets/images/pexels-cottonbro-studio-8679911.jpg'
  },
  {
    track : '../assets/audio/Intuitive.mp3',
    Artist : 'rosa anschutz 2',
    TrackName:'Intuitive',
    coverImg : '../assets/images/pexels-cottonbro-studio-4904409.jpg'
  },
  {
    track : '../assets/audio/Suspect.mp3',
    Artist : 'rosa anschutz 3',
    TrackName:'suspect',
    coverImg : '../assets/images/pexels-niko-mondì-14672498.jpg'
  }
];


//  Event for next tarck
next.addEventListener('click',()=>{
  index++;
  if(index > dataObj.length-1){
    index = 0 ;
  }
  audio.play();
  loading(dataObj[index]);
  icon.className = 'fa-solid fa-pause';
});

// Event for previous track
prev.addEventListener('click',()=>{
  index--;
  if(index < 0){
    index = dataObj.length-1;
  }
  audio.play();
  loading(dataObj[index]);
  icon.className = 'fa-solid fa-pause';
});

// Event for play track
play.addEventListener('click',()=>{
  if(flage){
    icon.className = 'fa-solid fa-play',
    audio.pause();
    flage = false;
  }else{
    icon.className = 'fa-solid fa-pause',
    flage = true;
    audio.play();
  }
});


// Function for next track
const loading = (item) => {
  audio.src = item.track;
  trackName.textContent = item.TrackName;
  artistName.textContent = item.Artist;
  coverLoad(item.coverImg);
};

// Function for change cover
const coverLoad = (image) => {
  cover.classList.remove('active');
  setTimeout(()=>{
    cover.classList.add('active');
    cover.src = image;
  },100);
  cover.src = image;
};



loading(dataObj[index]);