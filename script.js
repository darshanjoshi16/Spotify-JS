console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('https://open.spotify.com/track/0qOnSQQF0yzuPWsXrQ9paz?si=11471a03c9ee49e6');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let click = document.getElementsByClassName('Songitem');

let songs = [
    {songName: "Harleys in Hawaii - feat.Katy Perry", filePath: "songs/1.mp3", coverPath: "https://upload.wikimedia.org/wikipedia/en/0/04/Katy_Perry_-_Harleys_in_Hawaii.png"},
    {songName: "Stereo Hearts- feat.Adam Levine", filePath: "songs/2.mp3", coverPath: "https://c-cl.cdn.smule.com/rs-s45/arr/b0/2d/4f4bec36-3429-4431-bc0c-a12a4ac06c0d_1024.jpg"},
    {songName: "Naacho Naacho- RRR - Vishal Mishra", filePath: "songs/3.mp3", coverPath: "https://s3-ap-southeast-1.amazonaws.com/engpeepingmoon/101121035811-618b9ebb7a390rrr-mass-anthem-nacho-nacho-jr-ntr-ram-charan-resized-.jpg"},
    {songName: "Madhurashtakam - Agam Aggarwal", filePath: "songs/4.mp3", coverPath: "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/36/0a/f0/360af040-9cff-fc48-ebfa-e47b7761b540/artwork.jpg/400x400cc.jpg"},
    {songName: "Tum Prem Ho(Reprise) - Mohit Lalwani", filePath: "songs/5.mp3", coverPath: "https://i1.sndcdn.com/artworks-000566011499-29whbi-t500x500.jpg"},
    {songName: "Sajde - Khatta Meetha - KK,Pritam,Sunidhi Chauhan", filePath: "songs/6.mp3", coverPath: "https://c.saavncdn.com/539/Khatta-Meetha-2010-500x500.jpg"},
    {songName: "Qaafirana- Kedarnath- Arijit Singh,Nikita Gandhi", filePath: "songs/7.mp3", coverPath: "https://m.media-amazon.com/images/M/MV5BMmI4ZjNhOTQtNTM5My00YTRmLWFkMzQtMDUxMDRmYjEyZDAzXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_.jpg"},
    {songName: "Matkar Maya ko- Kabir Cafe", filePath: "songs/8.mp3", coverPath: "https://s.mxmcdn.net/images-storage/albums5/4/4/0/2/6/1/45162044_350_350.jpg"},
    {songName: "Chellamma - Doctor - Aniruddh Ravichander", filePath: "songs/9.mp3", coverPath: "https://thandoratimes.com/flcimgs/news-images/chellama-song-from-sivakarthikeyans-doctor-goes-viral.jpg"},
    {songName: "Inkem Inkem - Geetha Govindam - Sid Sriram", filePath: "songs/10.mp3", coverPath: "https://static.toiimg.com/thumb/msid-67179355,width-800,height-600,resizemode-75,imgsize-55555,pt-32,y_pad-40/67179355.jpg"},
    {songName: "Thalachi Thalachi- Hello- Haricharan", filePath: "songs/11.mp3", coverPath: "https://i.ytimg.com/vi/yBBu8rVB0DQ/maxresdefault.jpg"},
    {songName: "Dheevara - Bahubali:The Beginning - Ramya Behara, Deepu", filePath: "songs/12.mp3", coverPath: "https://c.saavncdn.com/013/Baahubali-The-Beginning-Hindi-2018-20180516-500x500.jpg"},
    {songName: "Shayad[English Rendition] -feat. Arjun,Pritam", filePath: "songs/13.mp3", coverPath: "https://a10.gaanacdn.com/images/albums/70/3337170/crop_480x480_3337170.jpg"},
    {songName: "Shiddat(female version)-feat. Yohani,Manan Bhardwaj", filePath: "songs/14.mp3", coverPath: "https://i.ytimg.com/vi/4K6RlzLXAtk/maxresdefault.jpg"},
    {songName: "Baatein Karo - Vayu", filePath: "songs/15.mp3", coverPath: "https://i.ytimg.com/an/bzkdY9JDgSQ/6acdcf97-7d3f-425d-a4db-a5a332bea2f4_mq.jpg?v=5e5f4c27"},
    {songName: "Liggi - Ritviz", filePath: "songs/16.mp3", coverPath: "https://i.ytimg.com/vi/6BYIKEH0RCQ/maxresdefault.jpg"},
    {songName: "To Phir Aao (Reprise) - Jalraj", filePath: "songs/17.mp3", coverPath: "https://fun2desi.me/siteuploads/thumb/sft91/45200_5.jpg"},
    {songName: "Hasi-Male Version- Amit Mishra", filePath: "songs/18.mp3", coverPath: "https://i.scdn.co/image/ab67616d00001e02b0f9ceb59927ab76fe6269be"},
    {songName: "Safari - Serena", filePath: "songs/19.mp3", coverPath: "https://i1.sndcdn.com/artworks-000272187854-li5adw-t500x500.jpg"},
    {songName: "Dhun Lagi - Siddharth Bhavsar, Malhar Thakar", filePath: "songs/20.mp3", coverPath: "https://i.ytimg.com/vi/iLLVbXKVZWI/maxresdefault.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

audioElement.addEventListener('ended',function(){
    //play next song
    songIndex +=1;
    audioElement.play(songs[songIndex]);
  });

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=19){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})