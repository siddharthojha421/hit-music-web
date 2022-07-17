const music = new Audio('audio/2.mp3');
//music.play();

const songs = [
    {
        id: 1,
        songName: `Raabta <br>
        <div class="subtitle">Arijit Singh</div>`,
        
    },
    {
        id: 2,
        songName: `Enna Sona <br>
        <div class="subtitle">A.R. Rahman, Arijit Singh </div>`,
       
    },
    {
        id: 3,
        songName: `Hawayien <br>
        <div class="subtitle">Pritam, Arijit Singh</div>`,
        
    },
    {
        id: 4,
        songName: `Zindagi Kuch Toh Bata (Reprise)  <br>
        <div class="subtitle"> Pritam, Jubin Nautiyal</div>`,
       
    },
    {
        id: 5,
        songName: `Ek Mulaqat Jubin <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
       
    },
    {
        id: 6,
        songName: `Mere Bina (Unplugged)  <br>
        <div class="subtitle"> Pritam, KK</div>`,
        
    },
    {
        id: 7,
        songName: `Darasal  <br>
        <div class="subtitle">Atif Aslam</div>`,
       
    },
    {
        id: 8,
        songName: `Te Amo <br>
        <div class="subtitle"> Pritam, Sunidhi Chauhan, Ash King </div>`,
        
    },
    {
        id: 9,
        songName: `No Love <br>
        <div class="subtitle">Shubh</div>`,
     
    },
    {
        id: 10,
        songName: `Tu Hi Meri Shab Hai <br>
        <div class="subtitle">KK</div>`,
      
    },
    {
        id: 11,
        songName: `Tum hi ho
        <br>
    <div class="subtitle">Arijit Singh</div>`,
   
    },
    
    {
        id: 12,
        songName: `Ride it
        <br>
    <div class="subtitle">Jay Sean</div>`,
 
    },
    {
        id: 13,
        songName: `eri Meri Prem Kahani
        <br>
    <div class="subtitle">Rahat fateh<br> ali khan</div>`,
    
    },
    {
        id: 14,
        songName: `Tera Hone Laga
        <br>
    <div class="subtitle">Atif Aslam <br>Alisha Chinai</div>`,
  
    },
    {
        id: 15,
        songName: `BOL DO NA ZARA
        <br>
    <div class="subtitle">Armaan Malik </div>`,
  
    },
    {
        id: 16,
        songName: `Baarish
        <br>
    <div class="subtitle">Ash King</div>`,
   
    },
    {
        id: 17,
        songName: `Thoda Thoda Pyaar
        <br>
    <div class="subtitle">Stebin Ben</div>`,
   
    },
    {
        id: 18,
        songName: `Pal Pal Dil Ke Paas 
        <br>
    <div class="subtitle">Arijit Singh<br>Parampara Tandon</div>`,
 
    },
    {
        id: 19,
        songName: `Meri Jaan
        <br>
    <div class="subtitle">Neeti Mohan</div>`,
  
    },
    {
        id: 20,
        songName: `Maiyya Mainu
        <br>
    <div class="subtitle">Sachet Tandon</div>`,

    },
    {
        id: 21,
        songName: `Tum Se Hi
        <br>
    <div class="subtitle">Pritam<br>Mohit Chauhan</div>`,
   
    },
    {
        id: 22,
        songName: `Main Agar
        <br>
    <div class="subtitle">Pritam<br>Atif Aslam</div>`,
  
    },
    {
        id: 23,
        songName: `Lut Gaye
        <br>
    <div class="subtitle">Jubin Nautiyal, Tanishk Bagchi, Nusrat Fateh Ali Khan</div>`,

    },
    {
        id: 24,
        songName: `LHeartless
        <br>
    <div class="subtitle">Aastha Gill,Badshah</div>`,
    },
    {
        id: 25,
        songName: `Desi Kalakaar
        <br>
    <div class="subtitle">Yo Yo Honey Singh</div>`,
  
    },
    {
        id: 26,
        songName: `Khuda Jaane
        <br>
    <div class="subtitle">Vishal & Shekhar,KK<br>Shilpa Rao,Anvita Dutt Guptan</div>`,
   
    },
    {
        id: 27,
        songName: `Kitni Haseen Hogi (From "Hit - The First Case")
        <br>
    <div class="subtitle">Mithoon, Arijit Singh<br>Sayeed Quadri</div>`,
   
    },
    {
        id: 28,
        songName: `Ban Ja Rani
        <br>
    <div class="subtitle">Guru Randhawa</div>`,
  
    },
    {
        id: 29,
        songName: `Parshawan
        <br>
    <div class="subtitle">Harnoor</div>`,
   
    },
    {
        id: 30,
        songName: `Mehabooba
        <br>
    <div class="subtitle">Ananya Bhat</div>`,
  
    },
]


let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');

masterplay?.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0) {
        music.play();
        wave?.classList.add('active1')
        masterplay?.classList.remove('bi-play-fill');
        masterplay?.classList.add('bi-pause-fill');
    } else {
    music.pause();
    wave?.classList.remove('active1');
    masterplay?.classList.add('bi-play-fill');
    masterplay?.classList.remove('bi-pause-fill');
    }
});

let index = 0;
Array.from(document.getElementsByClassName('playList')).forEach((e) =>{
    e.addEventListener("click",(el)=>{
    index = 1; 
    el.id
   // console.log(music);
  music.src = `audio/${index}.mp3`;
    })
})











let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right?.addEventListener('click', ()=>{
    pop_song.scrollLeft +=330;
});
pop_song_left?.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let iteam = document.getElementsByClassName('iteam')[0];


pop_art_right?.addEventListener('click', ()=>{
    iteam.scrollLeft +=330;
});
pop_art_left?.addEventListener('click', ()=>{
    iteam.scrollLeft -=330;
});


