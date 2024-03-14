

const a = document.querySelector('#play')
const b = document.querySelector('#seek')
const c = document.querySelector('#list')


let songs = [
    {
        name: 's1',
        id: 1
    },
    {
        name: 's2',
        id: 2
    },
    {
        name: 's3',
        id: 3
    },
    {
        name: 's4',
        id: 4
    },
    {
        name: 's5',
        id: 5
    },
    {
        name: 's6',
        id: 6
    },
    {
        name: 's7',
        id: 7
    },
    {
        name: 's8',
        id: 8
    },
    {
        name: 's9',
        id: 9
    },

]

// append kr raha hu songs ko list m

for (let i of songs) {
    const item = document.createElement('li');
    item.innerText = i.name;
    let ide = i.id;
    item.setAttribute('id', 's'+ide);
    

    c.append(item);


}



const audio = new Audio('./songs/s1.mp4')

// play button ka event

a.addEventListener('click', function () {
    audio.paused ? audio.play() : audio.pause()
    if (a.children[0].classList.contains('fa-play')) {
        a.children[0].classList.remove('fa-play')
        a.children[0].classList.add('fa-pause')

    }
    else {
        a.children[0].classList.remove('fa-pause')
        a.children[0].classList.add('fa-play')
    }
})


// timeupdate event is firess when the time indicated by the currentTime  and we can fill it using currentTime*100/duration

audio.addEventListener('timeupdate', function (e) {
    const progress = (audio.currentTime * 100) / audio.duration
    b.value = progress;
})


// seek krke gaana vahi aajaye

b.addEventListener('change',function(){
    const updatedTime = audio.duration * b.value /100;
    audio.currentTime = updatedTime;

})

// koi bhi gaane ko touch krte hi gaana chl jaye


c.addEventListener('click',function(event){
    const selectedSong = event.target.getAttribute('id');
    // console.log(selectedSong);
    audio.src = `./songs/${selectedSong}.mp4`
    audio.currentTime = 0;
    audio.play();
    a.children[0].classList.remove('fa-play')
    a.children[0].classList.add('fa-pause')


})


let forw = document.querySelector('#forward')
let back = document.querySelector('#backward')

let preSong = 0;
forw.addEventListener('click',(e)=>{
    preSong = (preSong + 1) % 9;
    audio.src = `./songs/s${preSong}.mp4`;
    currentTime = 0;
    audio.play();
    updateCurrentSongDisplay(`s${preSong}`);
})


back.addEventListener('click',(e)=>{
    preSong = (preSong - 1) % 9;
    audio.src = `./songs/s${preSong}.mp4`;
    currentTime = 0;
    audio.play();
    updateCurrentSongDisplay(`s${preSong}`);
})