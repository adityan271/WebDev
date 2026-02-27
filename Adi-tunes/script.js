
// --- Song Data ---
const songs = [
    {
        id: 1,
        name: "Blinding Lights",
        artist: "The Weeknd",
        category: "english",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
        src: "https://raw.githubusercontent.com/ShivamJoker/sample-songs/master/songs/1.mp3"
    },
    {
        id: 2,
        name: "Levitating",
        artist: "Dua Lipa",
        category: "english",
        cover: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&fit=crop",
        src: "https://raw.githubusercontent.com/ShivamJoker/sample-songs/master/songs/2.mp3"
    },
    {
        id: 3,
        name: "Peaches",
        artist: "Justin Bieber",
        category: "english",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
        src: "https://raw.githubusercontent.com/ShivamJoker/sample-songs/master/songs/3.mp3"
    },
    {
        id: 4,
        name: "Kesariya",
        artist: "Arijit Singh",
        category: "hindi",
        cover: "https://images.unsplash.com/photo-1514525253361-bee8a19740c1?w=400&h=400&fit=crop",
        src: "https://raw.githubusercontent.com/ShivamJoker/sample-songs/master/songs/4.mp3"
    },
    {
        id: 5,
        name: "Stay",
        artist: "The Kid LAROI",
        category: "english",
        cover: "https://images.unsplash.com/photo-1459749411177-042180ce673c?w=400&h=400&fit=crop",
        src: "https://raw.githubusercontent.com/ShivamJoker/sample-songs/master/songs/5.mp3"
    },
    {
        id: 6,
        name: "Tum Hi Ho",
        artist: "Arijit Singh",
        category: "hindi",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
        src: "https://raw.githubusercontent.com/ShivamJoker/sample-songs/master/songs/6.mp3"
    }
];

// --- State ---
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
const audio = new Audio();

// --- DOM Elements ---
const loader = document.getElementById('loader');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const playerBar = document.getElementById('player-bar');
const playPauseBtn = document.getElementById('play-pause-btn');
const playPauseIcon = playPauseBtn.querySelector('i');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const playerImg = document.getElementById('player-img');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const currTimeEl = document.getElementById('curr-time');
const durTimeEl = document.getElementById('dur-time');
const volumeSlider = document.getElementById('volume-slider');

// --- Initialization ---
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 1000);
    }, 1500);

    renderRecommended();
    renderPlaylist('all');
    renderAllMusic(songs);
});

// --- Navigation Logic ---
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetPage = link.getAttribute('data-page');

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === `${targetPage}-page`) page.classList.add('active');
        });

        if (targetPage === 'home') renderRecommended(); // Reshuffle on home visit
    });
});

// --- Music Logic ---
function loadSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    audio.src = song.src;
    playerTitle.textContent = song.name;
    playerArtist.textContent = song.artist;
    playerImg.src = song.cover;

    playerBar.style.display = 'flex';
}

function playSong() {
    isPlaying = true;
    playPauseIcon.classList.replace('fa-play', 'fa-pause');
    playerImg.classList.add('playing');
    audio.play();
}

function pauseSong() {
    isPlaying = false;
    playPauseIcon.classList.replace('fa-pause', 'fa-play');
    playerImg.classList.remove('playing');
    audio.pause();
}

playPauseBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(currentSongIndex);
    playSong();
});

document.getElementById('shuffle-btn').addEventListener('click', (e) => {
    isShuffle = !isShuffle;
    e.currentTarget.style.color = isShuffle ? 'var(--primary-glow)' : 'var(--text-main)';
});

document.getElementById('repeat-btn').addEventListener('click', (e) => {
    isRepeat = !isRepeat;
    e.currentTarget.style.color = isRepeat ? 'var(--primary-glow)' : 'var(--text-main)';
});

// Volume
volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
});

// Progress
audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    if (!duration) return;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Time strings
    currTimeEl.textContent = formatTime(currentTime);
    durTimeEl.textContent = formatTime(duration);
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

audio.addEventListener('ended', () => {
    if (isRepeat) {
        playSong();
    } else {
        document.getElementById('next-btn').click();
    }
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// --- Rendering Logic ---
function renderRecommended() {
    const grid = document.getElementById('recommended-grid');
    grid.innerHTML = '';

    // Shuffle a copy for recommendations
    const shuffled = [...songs].sort(() => 0.5 - Math.random()).slice(0, 4);

    shuffled.forEach(song => {
        const originalIndex = songs.findIndex(s => s.id === song.id);
        const card = createSongCard(song, originalIndex);
        grid.appendChild(card);
    });
}

function renderPlaylist(filter) {
    const grid = document.getElementById('playlist-grid');
    grid.innerHTML = '';

    const filtered = filter === 'all' ? songs : songs.filter(s => s.category === filter);

    filtered.forEach(song => {
        const originalIndex = songs.findIndex(s => s.id === song.id);
        const card = createSongCard(song, originalIndex);
        grid.appendChild(card);
    });
}

function createSongCard(song, index) {
    const div = document.createElement('div');
    div.className = 'song-card glass';
    div.innerHTML = `
                <div class="card-banner-wrapper">
                    <img src="${song.cover}" class="card-banner">
                    <div class="play-overlay"><i class="fa-solid fa-circle-play"></i></div>
                </div>
                <h4>${song.name}</h4>
                <p>${song.artist}</p>
            `;
    div.addEventListener('click', () => {
        loadSong(index);
        playSong();
    });
    return div;
}

function renderAllMusic(data) {
    const list = document.getElementById('all-songs-list');
    list.innerHTML = '';

    data.forEach(song => {
        const originalIndex = songs.findIndex(s => s.id === song.id);
        const tr = document.createElement('tr');
        tr.className = 'song-row';
        tr.innerHTML = `
                    <td><img src="${song.cover}" class="row-banner"></td>
                    <td class="row-meta">
                        <h4>${song.name}</h4>
                        <p>${song.artist}</p>
                    </td>
                    <td style="color: var(--primary-glow); font-size: 0.7rem; text-transform: uppercase;">${song.category}</td>
                    <td class="row-duration">3:45</td>
                    <td><i class="fa-solid fa-play" style="color: var(--text-dim)"></i></td>
                `;
        tr.addEventListener('click', () => {
            loadSong(originalIndex);
            playSong();
        });
        list.appendChild(tr);
    });
}

// --- Filtering Logic ---
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPlaylist(btn.getAttribute('data-filter'));
    });
});

// --- Search Logic ---
document.getElementById('search-input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = songs.filter(s =>
        s.name.toLowerCase().includes(term) ||
        s.artist.toLowerCase().includes(term) ||
        s.category.toLowerCase().includes(term)
    );
    renderAllMusic(filtered);
});

