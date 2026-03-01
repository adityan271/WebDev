
// ==================== SONG DATA – NO GENRE, CATEGORY IS THE MOOD ====================
// Each song must have: id, title, artist, duration, language, coverArt, audioUrl, color, and category.
// category must be one of: "Casual", "Romantic", "Sad", "Motivation".
// language: "English" or "Hindi".
// The playlists are generated automatically from these two fields.
// Add new songs below – keep IDs unique and sequential.
const musicLibrary = [
    // ---------- ENGLISH SONGS (IDs 1–106) ----------
    {
        id: 1,
        title: "2002",
        artist: "Anne Marie",
        duration: "3:07",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/1YwJX6XQ/2002.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/2002.m4a",
        color: "#2e9e6e"
    },
    {
        id: 2,
        title: "All Girls Are the Same",
        artist: "Juice WRLD",
        duration: "2:45",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/35JsdnZx/All-Girls-Are-the-Same.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/All%20Girls%20Are%20the%20Same.m4a",
        color: "#4aba84"
    },
    {
        id: 3,
        title: "All The Stars",
        artist: "Kendrick Lamar, SZA",
        duration: "3:52",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/bRJ1C9ph/All-The-Stars.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/All%20The%20Stars.m4a",
        color: "#3a9e6a"
    },
    {
        id: 4,
        title: "All The Things She Said",
        artist: "t.A.T.u.",
        duration: "3:34",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/ymB1xKyK/All-The-Things-She-Said.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/All%20The%20Things%20She%20Said.m4a",
        color: "#5aba8a"
    },
    {
        id: 5,
        title: "Arcade",
        artist: "Duncan Laurence",
        duration: "3:03",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/Lz81XRs1/Arcade.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Arcade.m4a",
        color: "#2e9e6e"
    },
    {
        id: 6,
        title: "Birds of a Feather",
        artist: "Billie Eilish",
        duration: "3:30",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/sZnrBy5/BIRDS-OF-A-FEATHER.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/BIRDS%20OF%20A%20FEATHER.m4a",
        color: "#4a9e7a"
    },
    {
        id: 7,
        title: "Bad Habit",
        artist: "Steve Lacy",
        duration: "3:52",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/CpMBhT8D/Bad-Habit.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Bad%20Habit.m4a",
        color: "#2e8a5e"
    },
    {
        id: 8,
        title: "Bad Liar",
        artist: "Imagine Dragons",
        duration: "4:20",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/6RNgD5rs/Bad-Liar.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Bad%20Liar.m4a",
        color: "#6aba8e"
    },
    {
        id: 9,
        title: "Believer",
        artist: "Imagine Dragons",
        duration: "3:24",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/Vcbw4JC6/Believer.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Believer.m4a",
        color: "#3ea072"
    },
    {
        id: 10,
        title: "Bloody Mary",
        artist: "Lady Gaga",
        duration: "4:04",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/spPZVyP1/Bloody-Mary.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Bloody%20Mary.m4a",
        color: "#2e9e6e"
    },
    {
        id: 11,
        title: "Cheating on You",
        artist: "Charlie Puth",
        duration: "3:16",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/r2ssjx3K/Cheating-on-You.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Cheating%20on%20You.m4a",
        color: "#2e865a"
    },
    {
        id: 12,
        title: "Control",
        artist: "Unknown Brain, Jex",
        duration: "2:46",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/Gv5m85Td/Control.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Control.m4a",
        color: "#5ab282"
    },
    {
        id: 13,
        title: "Counting Stars",
        artist: "OneRepublic",
        duration: "4:17",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/JRYGFKKc/Counting-Stars.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Counting%20Stars.m4a",
        color: "#2e865a"
    },
    {
        id: 14,
        title: "Cradles",
        artist: "Sub Urban",
        duration: "3:29",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/mCDdD9TH/Cradles.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Cradles.m4a",
        color: "#ffffff"
    },
    {
        id: 15,
        title: "Dandelions",
        artist: "Ruth B.",
        duration: "3:53",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/7dZVmfZc/Dandelions.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Dandelions.m4a",
        color: "#2e9e6e"
    },
    {
        id: 16,
        title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        duration: "3:49",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/mwdDPxS/Despacito.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Despacito.m4a",
        color: "#2e865a"
    },
    {
        id: 17,
        title: "Die With A Smile",
        artist: "Lady Gaga, Bruno Mars",
        duration: "4:11",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/r2xcKQ9t/Die-With-A-Smile.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Die%20With%20A%20Smile.m4a",
        color: "#2e865a"
    },
    {
        id: 18,
        title: "Dreams",
        artist: "Lost Sky, Sara Skinner",
        duration: "3:35",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/fVxRksjD/Dreams.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Dreams.m4a",
        color: "#2e865a"
    },
    {
        id: 19,
        title: "End of Beginning",
        artist: "Djo",
        duration: "2:39",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/ymJd2Y2z/End-of-Beginning.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/End%20of%20Beginning.m4a",
        color: "#2e865a"
    },
    {
        id: 20,
        title: "Friends",
        artist: "Marshmello, Anne Marie",
        duration: "3:21",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/tTNGj06z/FRIENDS.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/FRIENDS.m4a",
        color: "#2e9e6e"
    },
    {
        id: 21,
        title: "Falling",
        artist: "Trevor Daniel",
        duration: "2:39",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/Pvvx0hK4/Falling.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Falling.m4a",
        color: "#2e865a"
    },
    {
        id: 22,
        title: "Fearless",
        artist: "Lost Sky",
        duration: "3:14",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/nhRxP8B/Fearless.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Fearless.m4a",
        color: "#2e865a"
    },
    {
        id: 23,
        title: "Ghost",
        artist: "Justin Bieber",
        duration: "2:33",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/vCrd5cmz/Ghost.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Ghost.m4a",
        color: "#2e865a"
    },
    {
        id: 24,
        title: "Hate Me",
        artist: "Ellie Goulding, Juice WRLD",
        duration: "3:06",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/MxtJ3hrD/Hate-Me.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Hate%20Me.m4a",
        color: "#2e865a"
    },
    {
        id: 25,
        title: "Heat Waves",
        artist: "Glass Animals",
        duration: "3:58",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/zT23z659/Heat-Waves.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Heat%20Waves.m4a",
        color: "#2e9e6e"
    },
    {
        id: 26,
        title: "House of Memories",
        artist: "Panic! At The Disco",
        duration: "3:28",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/zVC5ZBfR/House-of-Memories.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/House%20of%20Memories.m4a",
        color: "#2e865a"
    },
    {
        id: 27,
        title: "I Like Me Better",
        artist: "Lauv",
        duration: "3:17",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/dsQNxKdJ/I-Like-Me-Better.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/I%20Like%20Me%20Better.m4a",
        color: "#2e865a"
    },
    {
        id: 28,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        duration: "3:04",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/WpVn7v7F/I-Wanna-Be-Yours.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/I%20Wanna%20Be%20Yours.m4a",
        color: "#2e865a"
    },
    {
        id: 29,
        title: "Infinity",
        artist: "Jaymes Young",
        duration: "3:57",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/1t2kp50M/Infinity.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Infinity.m4a",
        color: "#2e865a"
    },
    {
        id: 30,
        title: "Judas",
        artist: "Lady Gaga",
        duration: "4:09",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/spPZVyP1/Bloody-Mary.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Judas.m4a",
        color: "#2e9e6e"
    },
    {
        id: 31,
        title: "Kill Bill",
        artist: "SZA",
        duration: "2:33",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/TMS8kXfn/Kill-Bill.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/Kill%20Bill.m4a",
        color: "#2e865a"
    },
    {
        id: 32,
        title: "Alone",
        artist: "Alan Walker",
        duration: "2:41",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/TxRZnkD3/Alone-2.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/alone%20alan%20walker.m4a",
        color: "#2e865a"
    },
    {
        id: 33,
        title: "Alone",
        artist: "Marshmello",
        duration: "4:33",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/67FkPrvP/Alone.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/alone%20marshmello.m4a",
        color: "#2e865a"
    },
    {
        id: 34,
        title: "Alone (Part II)",
        artist: "Alan Walker, Ava Max",
        duration: "2:59",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/xqCKTMDF/Alone-Pt-II.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/alone%20pt%202.m4a",
        color: "#2e865a"
    },
    {
        id: 35,
        title: "Beggin’",
        artist: "Måneskin",
        duration: "3:31",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/hb1x1Tq/Beggin.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/beggin.m4a",
        color: "#2e9e6e"
    },
    {
        id: 36,
        title: "Bloodline",
        artist: "Ariana Grande",
        duration: "3:36",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/jvSdVSr3/bloodline.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/bloodline.m4a",
        color: "#2e865a"
    },
    {
        id: 37,
        title: "Broken Glass",
        artist: "Eredaze, Paycheck",
        duration: "2:33",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/gLh4xmvW/Broken-Glass-feat-Eredaze.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/broken%20glass.m4a",
        color: "#2e865a"
    },
    {
        id: 38,
        title: "Careless Whisper",
        artist: "George Michael",
        duration: "5:03",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/nNHG9ccP/Careless-Whisper-Remastered.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/careless%20whisper.m4a",
        color: "#2e865a"
    },
    {
        id: 39,
        title: "Cheap Thrills",
        artist: "Sia",
        duration: "3:44",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/Q39cTp8d/Cheap-Thrills-feat-Sean-Paul.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/cheap%20thrills.m4a",
        color: "#2e865a"
    },
    {
        id: 40,
        title: "Closer",
        artist: "The Chainsmokers, Halsey",
        duration: "4:05",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/Xkr7T06Q/Closer-feat-Halsey.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/closer.m4a",
        color: "#2e9e6e"
    },
    {
        id: 41,
        title: "Cold Water",
        artist: "Major Lazer ft. Justin Bieber, MØ",
        duration: "3:05",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/jvZ9yzFt/Cold-Water-feat-Justin-Bieber-M.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/cold%20water.m4a",
        color: "#2e865a"
    },
    {
        id: 42,
        title: "Despacito (Justin Bieber Remix)",
        artist: "Luis Fonsi, Daddy Yankee, Justin Bieber",
        duration: "3:50",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/mwdDPxS/Despacito.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/despacito%20justin%20bieber.m4a",
        color: "#2e865a"
    },
    {
        id: 43,
        title: "Don’t Let Me Down",
        artist: "The Chainsmokers ft. Daya",
        duration: "3:28",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/Xkr7T06Q/Closer-feat-Halsey.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/dont%20let%20me%20down.m4a",
        color: "#2e865a"
    },
    {
        id: 44,
        title: "Dreams (Part 2)",
        artist: "Lost Sky ft. Sara Skinner",
        duration: "3:35",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/wZNWm89x/Dreams-Pt-II-feat-Sara-Skinner.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/dreams%20pt2.m4a",
        color: "#2e865a"
    },
    {
        id: 45,
        title: "Fearless (Part 2)",
        artist: "Lost Sky",
        duration: "3:14",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/LdTPqc0d/Fearless-Pt-II.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/fearless%20pt2.m4a",
        color: "#2e865a"
    },
    {
        id: 46,
        title: "Greedy",
        artist: "Tate McRae",
        duration: "2:11",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/1YzZFsXB/greedy.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/greedy.m4a",
        color: "#2e865a"
    },
    {
        id: 47,
        title: "Havana",
        artist: "Camila Cabello ft. Young Thug",
        duration: "3:37",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/ZRPgX04d/Havana-feat-Young-Thug.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/havana.m4a",
        color: "#2e865a"
    },
    {
        id: 48,
        title: "Into Your Arms",
        artist: "Witt Lowry ft. Ava Max",
        duration: "3:06",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/35vy4z0q/Into-Your-Arms-feat-Ava-Max.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/into%20your%20arms.m4a",
        color: "#2e865a"
    },
    {
        id: 49,
        title: "Kings & Queens",
        artist: "Ava Max",
        duration: "2:42",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/zTHfvf5M/Kings-Queens.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/kings%20and%20queen.m4a",
        color: "#2e865a"
    },
    {
        id: 50,
        title: "Lean On",
        artist: "Major Lazer & DJ Snake ft. MØ",
        duration: "2:56",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/CpsZCq3G/Lean-On-feat-DJ-Snake-M.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/lean%20on.m4a",
        color: "#2e865a"
    },
    {
        id: 51,
        title: "Legends Never Die",
        artist: "Against The Current",
        duration: "3:55",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/ZpXTXh73/Legends-Never-Die.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/legends%20never%20die.m4a",
        color: "#2e865a"
    },
    {
        id: 52,
        title: "Let Me Down Slowly",
        artist: "Alec Benjamin",
        duration: "2:49",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/7NXbjXzX/Let-Me-Down-Slowly.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio1@main/let%20me%20down%20slowly.m4a",
        color: "#2e865a"
    },
    {
        id: 53,
        title: "Not Like That",
        artist: "Eedaze",
        duration: "2:32",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/995jsMxJ/Not-Like-That.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Not%20Like%20That.m4a",
        color: "#2e865a"
    },
    {
        id: 54,
        title: "One Kiss",
        artist: "Calvin Harris, Dua Lipa",
        duration: "3:34",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/tTNFgWwV/One-Kiss.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/One%20Kiss.m4a",
        color: "#2e865a"
    },
    {
        id: 55,
        title: "Perfect",
        artist: "Ed Sheeran",
        duration: "4:23",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/p67Ts1Yp/Perfect.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Perfect.m4a",
        color: "#2e865a"
    },
    {
        id: 56,
        title: "Rise Up",
        artist: "TheFatRat",
        duration: "2:49",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/qLHCpSSS/Rise-Up.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Rise%20Up.m4a",
        color: "#2e865a"
    },
    {
        id: 57,
        title: "Royalty",
        artist: "Egzod, Maestro Chives, Neoni",
        duration: "3:43",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/zWghBLtG/Royalty.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Royalty.m4a",
        color: "#2e865a"
    },
    {
        id: 58,
        title: "Runaway",
        artist: "Aurora",
        duration: "4:08",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/B53h6Ztd/Runaway.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Runaway.m4a",
        color: "#2e865a"
    },
    {
        id: 59,
        title: "Stay",
        artist: "The Kid LAROI, Justin Bieber",
        duration: "2:21",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/KchNFXnj/STAY.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/STAY.m4a",
        color: "#2e865a"
    },
    {
        id: 60,
        title: "Sailor’s Song",
        artist: "Gigi Perez",
        duration: "3:32",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/qF7M5Zt6/Sailor-Song.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Sailor%20Song.m4a",
        color: "#2e865a"
    },
    {
        id: 61,
        title: "Save Me",
        artist: "7ru7h",
        duration: "2:52",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/ksBbk2GQ/Save-Me.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Save%20Me.m4a",
        color: "#2e865a"
    },
    {
        id: 62,
        title: "Set Fire to the Rain",
        artist: "Adele",
        duration: "4:03",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/Y7sFCMy0/Set-Fire-to-the-Rain.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Set%20Fire%20to%20the%20Rain.m4a",
        color: "#2e865a"
    },
    {
        id: 63,
        title: "Shameless",
        artist: "Camila Cabello",
        duration: "3:39",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/SDbmdvBM/Shameless.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Shameless.m4a",
        color: "#2e865a"
    },
    {
        id: 64,
        title: "Shape of You",
        artist: "Ed Sheeran",
        duration: "3:53",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/p67Ts1Yp/Perfect.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Shape%20of%20You.m4a",
        color: "#2e865a"
    },
    {
        id: 65,
        title: "Skyfall",
        artist: "Adele",
        duration: "4:46",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/ksVyrLXg/Skyfall.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Skyfall.m4a",
        color: "#2e865a"
    },
    {
        id: 66,
        title: "Snowman",
        artist: "Sia",
        duration: "2:45",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/hqqp4GG/Snowman.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Snowman.m4a",
        color: "#2e865a"
    },
    {
        id: 67,
        title: "Sorry",
        artist: "Justin Bieber",
        duration: "3:20",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/TDXYMvzG/Sorry.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Sorry.m4a",
        color: "#2e865a"
    },
    {
        id: 68,
        title: "Steal My Girl",
        artist: "One Direction",
        duration: "3:48",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/nMZ7k2ZB/Steal-My-Girl.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Steal%20My%20Girl.m4a",
        color: "#2e865a"
    },
    {
        id: 69,
        title: "Stereo Love",
        artist: "Edward Maya, Vika Jigulina",
        duration: "4:07",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/Vcp20PM0/Stereo-Love.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Stereo%20Love.m4a",
        color: "#2e865a"
    },
    {
        id: 70,
        title: "Sugar & Brownies",
        artist: "Dharia",
        duration: "3:17",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/ZpsztQk1/Sugar-Brownies.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Sugar%20%26%20Brownies.m4a",
        color: "#2e865a"
    },
    {
        id: 71,
        title: "Sunroof",
        artist: "Nicky Youre, dazy",
        duration: "2:43",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/xShcsHD2/Sunroof.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Sunroof.m4a",
        color: "#2e865a"
    },
    {
        id: 72,
        title: "Teenage Dream",
        artist: "Stephen Dawes",
        duration: "2:58",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/whkTq0WN/Teenage-Dream.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Teenage%20Dream.m4a",
        color: "#2e865a"
    },
    {
        id: 73,
        title: "The Night We Met",
        artist: "Lord Huron",
        duration: "3:28",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/KpBVD3hC/The-Night-We-Met.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/The%20Night%20We%20Met.m4a",
        color: "#2e865a"
    },
    {
        id: 74,
        title: "The Nights",
        artist: "Avicii",
        duration: "2:56",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/rKR5HY7N/The-Nights.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/The%20Nights.m4a",
        color: "#2e865a"
    },
    {
        id: 75,
        title: "Torn Apart",
        artist: "Eredaze",
        duration: "3:06",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/RkHJdTZw/Torn-Apart.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Torn%20Apart.m4a",
        color: "#2e865a"
    },
    {
        id: 76,
        title: "Trapped in My Mind",
        artist: "Adam Oh",
        duration: "3:36",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/9kQt0bzr/Trapped-In-My-Mind.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Trapped%20In%20My%20Mind.m4a",
        color: "#2e865a"
    },
    {
        id: 77,
        title: "Unstoppable",
        artist: "Sia",
        duration: "3:37",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/Rp9068yt/Unstoppable.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Unstoppable.m4a",
        color: "#2e865a"
    },
    {
        id: 78,
        title: "Where We Started",
        artist: "Lost Sky ft. Jex",
        duration: "3:42",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/r1H9phx/Where-We-Started.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Where%20We%20Started.m4a",
        color: "#2e865a"
    },
    {
        id: 79,
        title: "Without Me",
        artist: "Halsey",
        duration: "3:21",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/PsXss5sz/Without-Me.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/Without%20Me.m4a",
        color: "#2e865a"
    },
    {
        id: 80,
        title: "Let Me Love You",
        artist: "DJ Snake ft. Justin Bieber",
        duration: "3:26",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/V08fbyMh/Let-Me-Love-You-feat-Justin-Bieber.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/let%20me%20love%20you.m4a",
        color: "#2e865a"
    },
    {
        id: 81,
        title: "Levitating",
        artist: "Dua Lipa",
        duration: "3:23",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/8gYhBMhf/Levitating.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/levitating.m4a",
        color: "#2e865a"
    },
    {
        id: 82,
        title: "Love Me Not",
        artist: " Ravyn Lenae",
        duration: "3:33",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/7xd9xLJ7/Love-Me-Not.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/love%20me%20not.m4a",
        color: "#2e865a"
    },
    {
        id: 83,
        title: "Love Nwantiti",
        artist: "CKay",
        duration: "2:25",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/ychRDGwG/love-nwantiti-ah-ah-ah.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/love%20nwantiti.m4a",
        color: "#2e865a"
    },
    {
        id: 84,
        title: "Love Yourself",
        artist: "Justin Bieber",
        duration: "3:53",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/TDXYMvzG/Sorry.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/love%20yourself.m4a",
        color: "#2e865a"
    },
    {
        id: 85,
        title: "Lucid Dreams",
        artist: "Juice WRLD",
        duration: "3:59",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/35JsdnZx/All-Girls-Are-the-Same.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/lucid%20dreams.m4a",
        color: "#2e865a"
    },
    {
        id: 86,
        title: "Memories",
        artist: "Maroon 5",
        duration: "3:09",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/99zP1Dyp/Memories.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/memories.m4a",
        color: "#2e865a"
    },
    {
        id: 87,
        title: "Middle of the Night",
        artist: "Elley Duhé",
        duration: "3:04",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/GQW2QJXC/MIDDLE-OF-THE-NIGHT.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/middle%20of%20the%20night.m4a",
        color: "#2e865a"
    },
    {
        id: 88,
        title: "Miss You More",
        artist: "Adam Oh",
        duration: "2:30",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/9kQt0bzr/Trapped-In-My-Mind.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/miss%20you%20more.m4a",
        color: "#2e865a"
    },
    {
        id: 89,
        title: "Mockingbird",
        artist: "Eminem",
        duration: "4:11",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/MkCz0RVg/Mockingbird.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/mockingbird.m4a",
        color: "#2e865a"
    },
    {
        id: 90,
        title: "Night Changes",
        artist: "One Direction",
        duration: "3:46",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/nMZ7k2ZB/Steal-My-Girl.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/night%20changes.m4a",
        color: "#2e865a"
    },
    {
        id: 91,
        title: "Nights Like This",
        artist: "The Kid LAROI",
        duration: "1:27",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/pVWPW0t/NIGHTS-LIKE-THIS.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/nights%20like%20this.m4a",
        color: "#2e865a"
    },
    {
        id: 92,
        title: "No Lie",
        artist: "Sean Paul ft. Dua Lipa",
        duration: "3:41",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/SwCnnv7M/No-Lie-feat-Dua-Lipa.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/no%20lie.m4a",
        color: "#2e865a"
    },
    {
        id: 93,
        title: "Payphone",
        artist: "Maroon 5 ft. Wiz Khalifa",
        duration: "3:51",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/wr0rC0xj/Payphone-feat-Wiz-Khalifa.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/payphone.m4a",
        color: "#2e865a"
    },
    {
        id: 94,
        title: "Positions",
        artist: "Ariana Grande",
        duration: "2:52",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/0jD4cXrs/positions.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/positions.m4a",
        color: "#2e865a"
    },
    {
        id: 95,
        title: "Rockabye",
        artist: "Clean Bandit ft. Sean Paul & Anne-Marie",
        duration: "4:11",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/5xM5GypV/Rockabye-feat-Sean-Paul-Anne-Marie.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/rockabye.m4a",
        color: "#2e865a"
    },
    {
        id: 96,
        title: "Say Goodbye",
        artist: "Unknown Brain",
        duration: "3:50",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/v6NfhmPz/Say-Goodbye-feat-Marvin-Divine.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/say%20goodbye.m4a",
        color: "#2e865a"
    },
    {
        id: 97,
        title: "Señorita",
        artist: "Shawn Mendes, Camila Cabello",
        duration: "3:11",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/FkHnzRWB/Se-orita.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/senorita.m4a",
        color: "#2e865a"
    },
    {
        id: 98,
        title: "Starboy",
        artist: "The Weeknd ft. Daft Punk",
        duration: "3:50",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/k2NyNbtp/Starboy-feat-Daft-Punk.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/starboy.m4a",
        color: "#2e865a"
    },
    {
        id: 99,
        title: "Stereo Hearts",
        artist: "Gym Class Heroes ft. Adam Levine",
        duration: "3:31",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/qYnZgxft/Stereo-Hearts-feat-Adam-Levine.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/stereo%20hearts.m4a",
        color: "#2e865a"
    },
    {
        id: 100,
        title: "SugarCrash!",
        artist: "ElyOtto",
        duration: "1:20",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/4RTzsWQg/Sugar-Crash.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/sugarcrash.m4a",
        color: "#2e865a"
    },
    {
        id: 101,
        title: "Taki Taki",
        artist: "DJ Snake, Selena Gomez, Ozuna, Cardi B",
        duration: "3:32",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/vvgKDNwy/Taki-Taki-feat-Cardi-B.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/taki%20taki.m4a",
        color: "#2e865a"
    },
    {
        id: 102,
        title: "There’s Nothing Holding Me Back",
        artist: "Shawn Mendes",
        duration: "3:19",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/ZpdMsCY3/There-s-Nothing-Holdin-Me-Back.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/theres%20nothing%20holdin%20be%20back.m4a",
        color: "#2e865a"
    },
    {
        id: 103,
        title: "We Don’t Talk Anymore",
        artist: "Charlie Puth ft. Selena Gomez",
        duration: "3:37",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/kV4wBYX1/We-Don-t-Talk-Anymore-feat-Selena-Gomez.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/we%20dont%20talk%20anymore.m4a",
        color: "#2e865a"
    },
    {
        id: 104,
        title: "Why Do I",
        artist: "Unknown Brain",
        duration: "3:43",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/S7rnpGN4/Why-Do-I-feat-Bri-Tolani.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/why%20do%20i.m4a",
        color: "#2e865a"
    },
    {
        id: 105,
        title: "Wasted",
        artist: "Juice WRLD",
        duration: "4:18",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/35JsdnZx/All-Girls-Are-the-Same.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/engaudio2@main/wasted.m4a",
        color: "#2e865a"
    },
    // Add more English songs here (IDs 13–106) following the same pattern.
    // Example:
    // { id: 13, title: "...", artist: "...", duration: "...", language: "English", category: "...", coverArt: "url", audioUrl: "url", color: "#hex" },

    // ---------- HINDI SONGS (IDs 107–170) ----------
    {
        id: 106,
        title: "Aaja We Mahiya",
        artist: "Imran Khan",
        duration: "3:52",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/MD9jgZqM/Aaja-We-Mahiya.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Aaja%20We%20Mahiya.m4a",
        color: "#469e72"
    },
    {
        id: 107,
        title: "Aasan Nahin Yahan",
        artist: "Arijit Singh",
        duration: "3:34",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/W42QNpLz/Aasan-Nahin-Yahan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Aasan%20Nahin%20Yahan.m4a",
        color: "#3e8a62"
    },
    {
        id: 108,
        title: "Amplifier",
        artist: "Imran Khan",
        duration: "3:52",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/MD9jgZqM/Aaja-We-Mahiya.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/adityan271/hindiaudio1@main/Amplifier.m4a",
        color: "#2e7a56"
    },
    {
        id: 109,
        title: "Baarish",
        artist: "Ash King, Shashaa Tirupati",
        duration: "4:36",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/YBx52gND/Baarish.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Baarish.m4a",
        color: "#5ea67e"
    },
    {
        id: 110,
        title: "Baaton Ko Teri",
        artist: "Arijit Singh",
        duration: "4:40",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/fWQJ1qj/Baaton-Ko-Teri.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Baaton%20Ko%20Teri.m4a",
        color: "#2e7a56"
    },
    {
        id: 111,
        title: "Balenciaga",
        artist: "Kalam Ink",
        duration: "3:41",
        language: "Hindi",
        category: "Motivation",
        coverArt: "https://i.ibb.co/C3SwV2BM/Balenciaga.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Balenciaga.m4a",
        color: "#2e7a56"
    },
    {
        id: 112,
        title: "Besabriyaan",
        artist: "Armaan Malik",
        duration: "4:15",
        language: "Hindi",
        category: "Casual",
        coverArt: "https://i.ibb.co/bM0B82Z7/Besabriyaan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Besabriyaan.m4a",
        color: "#2e7a56"
    },
    {
        id: 113,
        title: "Chahun Main Ya Naa",
        artist: "Arijit Singh, Palak Muchhal",
        duration: "5:04",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/W42QNpLz/Aasan-Nahin-Yahan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Chahun%20Main%20Ya%20Naa.m4a",
        color: "#2e7a56"
    },
    {
        id: 114,
        title: "Dhadak Title Track",
        artist: "Ajay Gogavale, Shreya Ghoshal",
        duration: "4:03",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/vxStfYBw/Dhadak-Title-Track.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Dhadak%20Title%20Track.m4a",
        color: "#2e7a56"
    },
    {
        id: 115,
        title: "Ehsaas",
        artist: "Faheem Abdullah",
        duration: "3:53",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/tP8V8fyD/Ehsaas.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Ehsaas.m4a",
        color: "#2e7a56"
    },
    {
        id: 116,
        title: "Ek Raat",
        artist: "Vilen",
        duration: "3:44",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/MD9jgZqM/Aaja-We-Mahiya.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Ek%20Raat.m4a",
        color: "#2e7a56"
    },
    {
        id: 117,
        title: "Hale Dil",
        artist: "Harshit Saxena",
        duration: "5:46",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/DHDVPHpS/Hale-Dil.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Hale%20Dil.m4a",
        color: "#2e7a56"
    },
    {
        id: 118,
        title: "Hasi (Female)",
        artist: "Shreya Ghoshal",
        duration: "3:12",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/5x24dP4c/Hasi-Female-Version.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Hasi%20Female.m4a",
        color: "#2e7a56"
    },
    {
        id: 119,
        title: "Hasi (Male)",
        artist: "Ami Mishra",
        duration: "4:32",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/5x24dP4c/Hasi-Female-Version.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Hasi%20Male.m4a",
        color: "#2e7a56"
    },
    {
        id: 120,
        title: "Jab Tak",
        artist: "Armaan Malik",
        duration: "2:54",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/bM0B82Z7/Besabriyaan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Jab%20Tak.m4a",
        color: "#2e7a56"
    },
    {
        id: 121,
        title: "Jannatein Kahan",
        artist: "KK",
        duration: "3:48",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/DgthRkyQ/Jannatein-Kahan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Jannatein%20Kahan.m4a",
        color: "#2e7a56"
    },
    {
        id: 122,
        title: "Jeena Jeena",
        artist: "Atif Aslam",
        duration: "3:49",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/DPP93WHh/Jeena-Jeena.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Jeena%20Jeena.m4a",
        color: "#2e7a56"
    },
    {
        id: 123,
        title: "Jeene Laga Hoon",
        artist: "Atif Aslam, Shreya Ghoshal",
        duration: "3:56",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/5XJB1JVH/Jeene-Laga-Hoon.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Jeene%20Laga%20Hoon.m4a",
        color: "#2e7a56"
    },
    {
        id: 124,
        title: "Jo Tere Sang",
        artist: "Mustafa Zahid, Jeet Gannguli",
        duration: "5:06",
        language: "Hindi",
        category: "Motivation",
        coverArt: "https://i.ibb.co/nqSkpJp7/Jo-Tere-Sang.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Jo%20Tere%20Sang.m4a",
        color: "#2e7a56"
    },
    {
        id: 125,
        title: "Kabhi Jo Baadal Barse",
        artist: "Arijit Singh",
        duration: "4:14",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/qL5HfQJG/Kabhi-Jo-Baadal-Barse.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Kabhi%20Jo%20Baadal%20Barse.m4a",
        color: "#2e7a56"
    },
    {
        id: 126,
        title: "Kaun Tujhe",
        artist: "Palak Muchhal",
        duration: "4:01",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/bM0B82Z7/Besabriyaan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Kaun%20Tujhe.m4a",
        color: "#2e7a56"
    },
    {
        id: 127,
        title: "Kesariya",
        artist: "Arijit Singh",
        duration: "4:28",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/7tbfJFnk/Kesariya-From-Brahmastra.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Kesariya.m4a",
        color: "#2e7a56"
    },
    {
        id: 128,
        title: "Labon Ko",
        artist: "KK",
        duration: "5:41",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/cKq4J3KH/Labon-Ko.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Labon%20Ko.m4a",
        color: "#2e7a56"
    },
    {
        id: 129,
        title: "Lahore",
        artist: "Guru Randhawa",
        duration: "3:17",
        language: "Hindi",
        category: "Casual",
        coverArt: "https://i.ibb.co/jd0gXKX/Lahore.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Lahore.m4a",
        color: "#2e7a56"
    },
    {
        id: 130,
        title: "Mann Mera",
        artist: "Gajendra Verma",
        duration: "3:20",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/WdYJTp3/Mann-Mera.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Mann%20Mera.m4a",
        color: "#2e7a56"
    },
    {
        id: 131,
        title: "Mat Aazma Re",
        artist: "KK",
        duration: "4:11",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/d0rYqc43/Mat-Aazma-Re.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Mat%20Aazma%20Re.m4a",
        color: "#2e7a56"
    },
    {
        id: 132,
        title: "Maula Mere Maula",
        artist: "Roop Kumar Rathod",
        duration: "6:04",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/p6xHbnfQ/Maula-Mere-Maula.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Maula%20Mere%20Maula.m4a",
        color: "#2e7a56"
    },
    {
        id: 133,
        title: "Meri Aashiqui",
        artist: "Palak Mucchal, Arijit Singh",
        duration: "4:26",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/W42QNpLz/Aasan-Nahin-Yahan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Meri%20Aashiqui.m4a",
        color: "#2e7a56"
    },
    {
        id: 134,
        title: "Milne Hai Mujhse Aayi",
        artist: "Arijit Singh",
        duration: "4:55",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/W42QNpLz/Aasan-Nahin-Yahan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Milne%20Hai%20Mujhse%20Aayi.m4a",
        color: "#2e7a56"
    },
    {
        id: 135,
        title: "Pata Chalega",
        artist: "Imran Khan",
        duration: "4:45",
        language: "Hindi",
        category: "Casual",
        coverArt: "https://i.ibb.co/MD9jgZqM/Aaja-We-Mahiya.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Pata%20Chalega.m4a",
        color: "#2e7a56"
    },
    {
        id: 136,
        title: "Pehli Dafa",
        artist: "Atif Aslam",
        duration: "4:58",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/cKcDJh8p/Pehli-Dafa.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Pehli%20Dafa.m4a",
        color: "#2e7a56"
    },
    {
        id: 137,
        title: "Phir Bhi Tumko Chaahunga",
        artist: "Mithoon, Arijit Singh",
        duration: "5:51",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/YBx52gND/Baarish.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Phir%20Bhi%20Tumko%20Chaahunga.m4a",
        color: "#2e7a56"
    },
    {
        id: 138,
        title: "Phir Kabhi",
        artist: "Arijit Singh",
        duration: "4:47",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/bM0B82Z7/Besabriyaan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Phir%20Kabhi.m4a",
        color: "#2e7a56"
    },
    {
        id: 139,
        title: "Piya Aaye Na",
        artist: "KK, Tulsi Kumar",
        duration: "4:46",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/W42QNpLz/Aasan-Nahin-Yahan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Piya%20Aaye%20Na.m4a",
        color: "#2e7a56"
    },
    {
        id: 140,
        title: "Rishte Naate",
        artist: "Rahat Fateh Ali Khan",
        duration: "4:46",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/DgzS1TtD/Rishte-Naate.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Rishte%20Naate.m4a",
        color: "#2e7a56"
    },
    {
        id: 141,
        title: "Saudebaazi",
        artist: "Javed Ali",
        duration: "5:54",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/RGcj7xNt/Saudebazi-Encore.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Saudebaazi.m4a",
        color: "#2e7a56"
    },
    {
        id: 142,
        title: "Shiddat Title Track",
        artist: "Manan Bhardwaj",
        duration: "3:50",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/zhXcjFdn/Shiddat-Title-Track.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Shiddat%20Title%20Track.m4a",
        color: "#2e7a56"
    },
    {
        id: 143,
        title: "Such Keh Raha Hai",
        artist: "KK",
        duration: "5:28",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/sdstLnr6/Such-Keh-Raha-Hai.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Such%20Keh%20Raha%20Hai.m4a",
        color: "#2e7a56"
    },
    {
        id: 144,
        title: "Sun Saathiya",
        artist: "Priya Saraiya, Divya Kumar",
        duration: "3:38",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/JRnBZJmD/Sun-Saathiya.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Sun%20Saathiya.m4a",
        color: "#2e7a56"
    },
    {
        id: 145,
        title: "Sunn Raha Hai",
        artist: "Ankit Tiwari",
        duration: "6:30",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/W42QNpLz/Aasan-Nahin-Yahan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Sunn%20Raha%20Hai.m4a",
        color: "#2e7a56"
    },
    {
        id: 146,
        title: "Tera Ghata",
        artist: "Gajendra Verma",
        duration: "4:14",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/LB3F4Mg/Tera-Ghata.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Tera%20Ghata.m4a",
        color: "#2e7a56"
    },
    {
        id: 147,
        title: "Tera Hone Laga Hoon",
        artist: "Atif Aslam, Alisha Chinai",
        duration: "4:59",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/gNkTpLw/Tera-Hone-Laga-Hoon.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Tera%20Hone%20Laga%20Hoon.m4a",
        color: "#2e7a56"
    },
    {
        id: 148,
        title: "Tere Liye",
        artist: "Atif Aslam, Shreya Ghoshal",
        duration: "4:39",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/dsQ8h3Df/Tere-Liye.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Tere%20Liye.m4a",
        color: "#2e7a56"
    },
    {
        id: 149,
        title: "Teri Jhuki Nazar",
        artist: "Shafqat Amanat Ali",
        duration: "4:39",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/d0rYqc43/Mat-Aazma-Re.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Teri%20Jhuki%20Nazar.m4a",
        color: "#2e7a56"
    },
    {
        id: 150,
        title: "Toota Jo Kabhi Tara",
        artist: "Atif Aslam",
        duration: "5:05",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/vv1zqGh5/Toota-Jo-Kabhi-Tara.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Toota%20Jo%20Kabhi%20Tara.m4a",
        color: "#2e7a56"
    },
    {
        id: 151,
        title: "Tu Chahiye",
        artist: "Atif Aslam",
        duration: "4:32",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/Q748fDj1/Tu-Chahiye.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Tu%20Chahiye.m4a",
        color: "#2e7a56"
    },
    {
        id: 152,
        title: "Tu Hi Haqeeqat",
        artist: "Javed Ali",
        duration: "5:02",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/4RFBbgdC/Tu-Hi-Haqeeqat-From-Tum-Mile-2.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Tu%20Hi%20Haqeeqat.m4a",
        color: "#2e7a56"
    },
    {
        id: 153,
        title: "Tu Jaane Na",
        artist: "Atif Aslam",
        duration: "5:41",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/gNkTpLw/Tera-Hone-Laga-Hoon.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Tu%20Jaane%20Na.m4a",
        color: "#2e7a56"
    },
    {
        id: 154,
        title: "Tujhe Kitna Chahne Lage",
        artist: "Arijit Singh",
        duration: "4:44",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/nMvKS3hN/Tujhe-Kitna-Chahne-Lage.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Tujhe%20Kitna%20Chahne%20Lage.m4a",
        color: "#2e7a56"
    },
    {
        id: 155,
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        duration: "4:22",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/W42QNpLz/Aasan-Nahin-Yahan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Tum%20Hi%20Ho.m4a",
        color: "#2e7a56"
    },
    {
        id: 156,
        title: "Tum Jo Aaye",
        artist: "Rahat Fateh Ali Khan, Tulsi Kumar",
        duration: "4:46",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/wNTRVKxd/Tum-Jo-Aaye.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Tum%20Jo%20Aaye.m4a",
        color: "#2e7a56"
    },
    {
        id: 157,
        title: "Ye Tune Kya Kiya",
        artist: "Javed Bashir",
        duration: "5:14",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/W4gXXzrp/Ye-Tune-Kya-Kiya.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Ye%20Tune%20Kya%20Kiya.m4a",
        color: "#2e7a56"
    },
    {
        id: 158,
        title: "Zaalima",
        artist: "Arijit Singh, Harshdeep Kaur",
        duration: "4:59",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/PZ1DmRxC/Zaalima.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Zaalima.m4a",
        color: "#2e7a56"
    },
    {
        id: 159,
        title: "Zara Sa",
        artist: "KK",
        duration: "5:03",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/Kj5ybLD7/Zara-Sa.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Zara%20Sa.m4a",
        color: "#2e7a56"
    },
    {
        id: 160,
        title: "Zindagi",
        artist: "Kalam Ink",
        duration: "3:33",
        language: "Hindi",
        category: "Motivation",
        coverArt: "https://i.ibb.co/gFbx1cHv/Zindagi.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/Zindagi.m4a",
        color: "#2e7a56"
    },
    {
        id: 161,
        title: "Haan Main Galat",
        artist: "Arijit Singh",
        duration: "3:38",
        language: "Hindi",
        category: "Casual",
        coverArt: "https://i.ibb.co/gMXx9sfw/Haan-Main-Galat-From-Love-Aaj-Kal.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/haan%20main%20galat.m4a",
        color: "#2e7a56"
    },
    {
        id: 162,
        title: "Ishq Risk",
        artist: "Rahat Fateh Ali Khan",
        duration: "4:55",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/YFxx2vjP/Isq-Risk-From-Mere-Brother-Ki-Dulhan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/ishq%20risk.m4a",
        color: "#2e7a56"
    },
    {
        id: 163,
        title: "Kalank Title Track",
        artist: "Arijit Singh",
        duration: "5:11",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/4nDTmdNJ/Kalank-Title-Track.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/kalank%20title%20track.m4a",
        color: "#2e7a56"
    },
    {
        id: 164,
        title: "Khairiyat",
        artist: "Arijit Singh",
        duration: "4:40",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/hJqk8yGS/Khairiyat-Sad.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/khairiyat.m4a",
        color: "#2e7a56"
    },
    {
        id: 165,
        title: "Malang",
        artist: "Ved Sharma",
        duration: "4:47",
        language: "Hindi",
        category: "Casual",
        coverArt: "https://i.ibb.co/Zzgrm4St/Malang-Title-Track-From-Malang-Unleash-the-Madness.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/malang.m4a",
        color: "#2e7a56"
    },
    {
        id: 166,
        title: "Paniyon Sa",
        artist: "Atif Aslam, Tulsi Kumar",
        duration: "3:56",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/Ng7VPZgq/Paniyon-Sa-From-Satyameva-Jayate.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/pariyon%20sa.m4a",
        color: "#2e7a56"
    },
    {
        id: 167,
        title: "Sunn Raha Hai (Female)",
        artist: "Shreya Ghoshal",
        duration: "5:14",
        language: "Hindi",
        category: "Sad",
        coverArt: "https://i.ibb.co/W42QNpLz/Aasan-Nahin-Yahan.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/hindiaudio1@main/sun%20raha%20hai%20female.m4a",
        color: "#2e7a56"
    },
    {
        id: 168,
        title: "7 Years",
        artist: "Lukas Graham",
        duration: "3:57",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/jPPRVWMN/7-Years.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/7%20years.m4a",
        color: "#4aba84"
    },
    {
        id: 169,
        title: "After Dark",
        artist: "Mr.Kitty",
        duration: "4:19",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/S7W1WfMQ/After-Dark.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/After%20Dark.m4a",
        color: "#4aba84"
    },
    {
        id: 170,
        title: "Astronaut In The Ocean",
        artist: "Masked Wolf",
        duration: "2:12",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/PZWSX1m8/Astronaut-In-The-Ocean.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Astronaut%20In%20The%20Ocean.m4a",
        color: "#4aba84"
    },
    {
        id: 171,
        title: "Bad Habits",
        artist: "Ed Sheeran",
        duration: "3:50",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/7x33RPbb/Bad-Habits.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Bad%20Habits.m4a",
        color: "#4aba84"
    },
    {
        id: 172,
        title: "Bilionera",
        artist: "Otilia",
        duration: "3:05",
        language: "Romanian",
        category: "Casual",
        coverArt: "https://i.ibb.co/Txq6Q2gZ/Bilionera-Radio-Edit.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Bilionera.m4a",
        color: "#4aba84"
    },
    {
        id: 173,
        title: "Brown Rang",
        artist: "Yo Yo Honey Singh",
        duration: "3:31",
        language: "Hindi",
        category: "Casual",
        coverArt: "https://i.ibb.co/8g0Xyy7c/Brown-Rang.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Brown%20Rang.m4a",
        color: "#4aba84"
    },
    {
        id: 174,
        title: "Callin' U",
        artist: "Elyanna",
        duration: "1:56",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/fVtwkWP8/Ganeni.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Callin'%20U.m4a",
        color: "#4aba84"
    },
    {
        id: 175,
        title: "Careless",
        artist: "Neffex",
        duration: "4:56",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/xdMBDtV/Careless.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Careless.m4a",
        color: "#4aba84"
    },
    {
        id: 176,
        title: "Chemtrails Over the Country Club",
        artist: "Lana Del Rey",
        duration: "4:31",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/RTmRzbGK/Chemtrails-Over-the-Country-Club.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Chemtrails%20Over%20the%20Country%20Club.m4a",
        color: "#4aba84"
    },
    {
        id: 177,
        title: "Cinnamon Girl",
        artist: "Lana Del Rey",
        duration: "5:00",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/Q7BJwywd/Cinnamon-Girl.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Cinnamon%20Girl.m4a",
        color: "#4aba84"
    },
    {
        id: 178,
        title: "Clout",
        artist: "Jack Prince",
        duration: "2:35",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/G4K3q5CZ/Clout.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Clout.m4a",
        color: "#4aba84"
    },
    {
        id: 179,
        title: "Cold",
        artist: "Neffex",
        duration: "3:06",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/9mcgvT3K/Cold.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Cold.m4a",
        color: "#4aba84"
    },
    {
        id: 180,
        title: "Daylight",
        artist: "David Kushner",
        duration: "3:33",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/gFWhJVzD/Daylight.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Daylight.m4a",
        color: "#4aba84"
    },
    {
        id: 181,
        title: "Desi Kalakaar",
        artist: "Yo Yo Honey Singh",
        duration: "4:13",
        language: "Hindi",
        category: "Casual",
        coverArt: "https://i.ibb.co/gbxQk2WC/Love-Dose.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Desi%20Kalakaar.m4a",
        color: "#4aba84"
    },
    {
        id: 182,
        title: "Diamonds",
        artist: "Rihanna",
        duration: "3:45",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/h18dGctt/We-Found-Love-feat-Calvin-Harris.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Diamonds.m4a",
        color: "#4aba84"
    },
    {
        id: 183,
        title: "Die For You",
        artist: "The Weeknd",
        duration: "4:20",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/ZRLdS3Vc/Reminder.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Die%20For%20You%20weeknd.m4a",
        color: "#4aba84"
    },
    {
        id: 184,
        title: "Die For You",
        artist: "Grabbitz",
        duration: "3:32",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/xKV9p6DC/Die-For-You.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Die%20For%20You.m4a",
        color: "#4aba84"
    },
    {
        id: 185,
        title: "Diet Mountain Dew",
        artist: "Lana Del Rey",
        duration: "3:42",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/tTQQ7zhb/Summertime-Sadness.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Diet%20Mountain%20Dew.m4a",
        color: "#4aba84"
    },
    {
        id: 186,
        title: "Dil Kaa Jo Haal Hai",
        artist: "Abhijet, Shreya Ghoshal",
        duration: "5:02",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/HLYR8hsX/Dil-Kaa-Jo-Haal-Hai.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Dil%20Kaa%20Jo%20Haal%20Hai.m4a",
        color: "#4aba84"
    },
    {
        id: 187,
        title: "Don't Stop The Music",
        artist: "Rihanna",
        duration: "4:27",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/pB5whRf3/Don-t-Stop-The-Music.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Don't%20Stop%20The%20Music.m4a",
        color: "#4aba84"
    },
    {
        id: 188,
        title: "Dusk Till Dawn",
        artist: "ZAYN",
        duration: "3:59",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/bg59Zrfs/Dusk-Till-Dawn-feat-Sia.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/dusk%20till%20dawn.m4a",
        color: "#4aba84"
    },
    {
        id: 189,
        title: "E.T.",
        artist: "Katy Perry",
        duration: "3:26",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/h1BHKkpf/E-T.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/E.T.m4a",
        color: "#4aba84"
    },
    {
        id: 190,
        title: "En nuit",
        artist: "Videoclub",
        duration: "3:42",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/gZfgS4Zr/En-nuit.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/En%20nuit.m4a",
        color: "#4aba84"
    },
    {
        id: 191,
        title: "Fairytale",
        artist: "Alexander Rybak",
        duration: "3:02",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/39ZM2Rq4/Fairytale.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Fairytale.m4a",
        color: "#4aba84"
    },
    {
        id: 192,
        title: "Feel Good Inc.",
        artist: "Gorillaz",
        duration: "3:41",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/99gSYk75/Feel-Good-Inc.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Feel%20Good%20Inc.m4a",
        color: "#4aba84"
    },
    {
        id: 193,
        title: "Fight Back",
        artist: "NEFFEX",
        duration: "3:20",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/gMVnWKLn/Fight-Back.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Fight%20Back.m4a",
        color: "#4aba84"
    },
    {
        id: 194,
        title: "Ganeni",
        artist: "Elyanna",
        duration: "2:57",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/fVtwkWP8/Ganeni.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Ganeni.m4a",
        color: "#4aba84"
    },
    {
        id: 195,
        title: "Half of Me",
        artist: "Rihanna",
        duration: "3:12",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/h18dGctt/We-Found-Love-feat-Calvin-Harris.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Half%20of%20Me.m4a",
        color: "#4aba84"
    },
    {
        id: 196,
        title: "Heartless",
        artist: "Kanye West",
        duration: "3:31",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/zWShs2vP/Heartless.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Heartless.m4a",
        color: "#4aba84"
    },
    {
        id: 197,
        title: "I Don't Know",
        artist: "Erika",
        duration: "3:21",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/Y7zjXv95/I-Don-t-Know.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/I%20Don't%20Know.m4a",
        color: "#4aba84"
    },
    {
        id: 198,
        title: "Kangana Tera Ni (Sped Up)",
        artist: "Dr Zeus",
        duration: "2:48",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/GBcDfvb/Kangana-Tera-Ni-sped-up.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Kangana%20Tera%20Ni%20(sped%20up).m4a",
        color: "#4aba84"
    },
    {
        id: 199,
        title: "Kithe Reh Gaya",
        artist: "Abhijit Vaghani, Neeti Mohan",
        duration: "3:35",
        language: "Hindi",
        category: "romantic",
        coverArt: "https://i.ibb.co/TqcvyKwk/Kithe-Reh-Gaya.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Kithe%20Reh%20Gaya.m4a",
        color: "#4aba84"
    },
    {
        id: 1999,
        title: "Kithe Reh Gaya",
        artist: "Abhijit Vaghani, Neeti Mohan",
        duration: "3:35",
        language: "Hindi",
        category: "Peace",
        coverArt: "https://i.ibb.co/TqcvyKwk/Kithe-Reh-Gaya.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Kithe%20Reh%20Gaya.m4a",
        color: "#4aba84"
    },
    {
        id: 200,
        title: "Let Her Go",
        artist: "Passenger",
        duration: "4:12",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/ZRQBNBDr/Let-Her-Go.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Let%20Her%20Go.m4a",
        color: "#4aba84"
    },
    {
        id: 201,
        title: "Life",
        artist: "Neffex",
        duration: "2:08",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/Z1272tD3/Life.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Life.m4a",
        color: "#4aba84"
    },
    {
        id: 202,
        title: "Love Dose",
        artist: "Yo Yo Honey Singh",
        duration: "3:44",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/gbxQk2WC/Love-Dose.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Love%20Dose.m4a",
        color: "#4aba84"
    },
    {
        id: 203,
        title: "METAMORPHOSIS",
        artist: "INTERWORLD",
        duration: "2:22",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/JRtCDSHX/METAMORPHOSIS.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/METAMORPHOSIS.m4a",
        color: "#4aba84"
    },
    {
        id: 204,
        title: "Moskau",
        artist: "Dschinghis Khan",
        duration: "4:30",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/YFHJP8zN/Moskau.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/Moskau.m4a",
        color: "#4aba84"
    },
    {
        id: 205,
        title: "af1",
        artist: "lilbubblegum",
        duration: "2:21",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/0yKVgzy2/af1.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/af1.m4a",
        color: "#4aba84"
    },
    {
        id: 206,
        title: "back to friends",
        artist: "Sombr",
        duration: "3:19",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/DDt3TbJg/back-to-friends.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/back%20to%20friends.m4a",
        color: "#4aba84"
    },
    {
        id: 207,
        title: "bananza",
        artist: "Akon",
        duration: "3:12",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/j9zDS1zh/Bananza-Belly-Dancer.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/bananza.m4a",
        color: "#4aba84"
    },
    {
        id: 208,
        title: "golden hour",
        artist: "JVKE",
        duration: "3:29",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/nsgTThp9/golden-hour.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/golden%20hour.m4a",
        color: "#4aba84"
    },
    {
        id: 209,
        title: "her",
        artist: "JVKE",
        duration: "2:51",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/vxshFsVq/her.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/her.m4a",
        color: "#4aba84"
    },
    {
        id: 210,
        title: "Hips Don't Lie (Spanish)",
        artist: "Shakira",
        duration: "3:39",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/zH8mTGp3/Hips-Don-t-Lie-feat-Wyclef-Jean.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/hips%20dont%20lie%20spanish.m4a",
        color: "#4aba84"
    },
    {
        id: 211,
        title: "Hips Don't Lie",
        artist: "Shakira",
        duration: "3:40",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/zH8mTGp3/Hips-Don-t-Lie-feat-Wyclef-Jean.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/hips%20dont%20lie.m4a",
        color: "#4aba84"
    },
    {
        id: 212,
        title: "intro",
        artist: "sickick",
        duration: "4:54",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/gLF6TnHd/Intro-Infected.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/intro.m4a",
        color: "#4aba84"
    },
    {
        id: 213,
        title: "jhol",
        artist: "Annural Khalid, Maanu",
        duration: "4:37",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/6R5wZBD2/Jhol-Acoustic.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/jhol.m4a",
        color: "#4aba84"
    },
    {
        id: 214,
        title: "La La La (Brazil 2014)",
        artist: "Shakira",
        duration: "3:17",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/HfXyT3Wy/La-La-La-brazil.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio3@main/la%20la%20la-%20brazil%202014.m4a",
        color: "#4aba84"
    },
    {
        id: 215,
        title: "My Love Mine All Mine",
        artist: "Mitski",
        duration: "2:17",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/VYSt9vdb/My-Love-Mine-All-Mine.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/My%20Love%20Mine%20All%20Mine.m4a",
        color: "#4aba84"
    },
    {
        id: 216,
        title: "Never Give Up",
        artist: "Neffex",
        duration: "4:11",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/5gtrkk2b/Never-Give-Up.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Never%20Give%20Up.m4a",
        color: "#4aba84"
    },
    {
        id: 217,
        title: "No One Noticed",
        artist: "The Marías",
        duration: "3:56",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/PztrRvRF/No-One-Noticed.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/No%20One%20Noticed.m4a",
        color: "#4aba84"
    },
    {
        id: 218,
        title: "Nothing's New",
        artist: "Rio Romeo",
        duration: "3:31",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/99467xvs/Nothing-s-New.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Nothing's%20New.m4a",
        color: "#4aba84"
    },
    {
        id: 219,
        title: "On The Ground",
        artist: "ROSÉ",
        duration: "2:48",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/d4zxvFFR/On-The-Ground.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/On%20The%20Ground.m4a",
        color: "#4aba84"
    },
    {
        id: 220,
        title: "Pasoori",
        artist: "Ali Sethi, Shae Gill",
        duration: "4:02",
        language: "Hindi",
        category: "Casual",
        coverArt: "https://i.ibb.co/tSd7qtR/Pasoori.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Pasoori.m4a",
        color: "#4aba84"
    },
    {
        id: 221,
        title: "Pink Lips",
        artist: "Meet Bros",
        duration: "4:14",
        language: "Hindi",
        category: "Romantic",
        coverArt: "https://i.ibb.co/mVWKZ9wm/Pink-Lips.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Pink%20Lips.m4a",
        color: "#4aba84"
    },
    {
        id: 222,
        title: "Reminder",
        artist: "The Weeknd",
        duration: "3:38",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/ZRLdS3Vc/Reminder.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Reminder.m4a",
        color: "#4aba84"
    },
    {
        id: 223,
        title: "Roi",
        artist: "Videoclub",
        duration: "2:36",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/rfFhgP8X/Roi.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Roi.m4a",
        color: "#4aba84"
    },
    {
        id: 224,
        title: "Safe and Sound",
        artist: "Capital Cities",
        duration: "3:12",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/FbL7XsLz/Safe-and-Sound.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Safe%20and%20Sound.m4a",
        color: "#4aba84"
    },
    {
        id: 225,
        title: "Say Yes To Heaven",
        artist: "Lana Del Rey",
        duration: "3:29",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/bMCyXWqd/Say-Yes-To-Heaven.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Say%20Yes%20To%20Heaven.m4a",
        color: "#4aba84"
    },
    {
        id: 226,
        title: "Somewhere Only We Know",
        artist: "Keane",
        duration: "3:55",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/Wh0d33m/Somewhere-Only-We-Know.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Somewhere%20Only%20We%20Know.m4a",
        color: "#4aba84"
    },
    {
        id: 227,
        title: "Stay With Me",
        artist: "1nonly",
        duration: "2:21",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/vv3MK2NC/Stay-With-Me.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Stay%20With%20Me.m4a",
        color: "#4aba84"
    },
    {
        id: 228,
        title: "Step Back!",
        artist: "1nonly",
        duration: "2:30",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/BH4FTJ5n/Step-Back.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Step%20Back!.m4a",
        color: "#4aba84"
    },
    {
        id: 229,
        title: "Strangers",
        artist: "Kenya Grace",
        duration: "2:53",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/YTV3MVFV/Strangers.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Strangers.m4a",
        color: "#4aba84"
    },
    {
        id: 230,
        title: "Summertime Sadness",
        artist: "Lana Del Rey",
        duration: "4:25",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/0L6LDbt/Diet-Mountain-Dew.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Summertime%20Sadness.m4a",
        color: "#4aba84"
    },
    {
        id: 231,
        title: "Sweater Weather",
        artist: "The Neighbourhood",
        duration: "4:00",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/G3t6Rh1s/Sweater-Weather.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Sweater%20Weather.m4a",
        color: "#4aba84"
    },
    {
        id: 232,
        title: "Sweet but Psycho",
        artist: "Ava Max",
        duration: "3:07",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/QhJ2NrX/Sweet-but-Psycho.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Sweet%20but%20Psycho.m4a",
        color: "#4aba84"
    },
    {
        id: 233,
        title: "The Greatest",
        artist: "Sia",
        duration: "3:30",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/VWGHFV1j/The-Greatest.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/The%20Greatest.m4a",
        color: "#4aba84"
    },
    {
        id: 234,
        title: "The Winner Takes It All",
        artist: "ABBA",
        duration: "4:54",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/0jgYR6TM/The-Winner-Takes-It-All.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/The%20Winner%20Takes%20It%20All.m4a",
        color: "#4aba84"
    },
    {
        id: 235,
        title: "Those Eyes",
        artist: "New West",
        duration: "3:40",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/VpQKmxGv/Those-Eyes.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Those%20Eyes.m4a",
        color: "#4aba84"
    },
    {
        id: 236,
        title: "Ticking Away",
        artist: "Grabbitz",
        duration: "3:25",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/SXt4zZvR/Ticking-Away.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Ticking%20Away.m4a",
        color: "#4aba84"
    },
    {
        id: 237,
        title: "Whenever, Wherever",
        artist: "Shakira",
        duration: "3:16",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/p9Nmkbz/Whenever-Wherever.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Whenever,%20Wherever.m4a",
        color: "#4aba84"
    },
    {
        id: 238,
        title: "White Mustang",
        artist: "Lana Del Rey",
        duration: "2:44",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/ZRXSC7Yq/White-Mustang.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/White%20Mustang.m4a",
        color: "#4aba84"
    },
    {
        id: 239,
        title: "YAD",
        artist: "Erika Lundmoen",
        duration: "3:00",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/jvH4qL39/YAD.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/YAD.m4a",
        color: "#4aba84"
    },
    {
        id: 240,
        title: "Young and Beautiful",
        artist: "Lana Del Rey",
        duration: "3:55",
        language: "English",
        category: "Romantic",
        coverArt: "https://i.ibb.co/tTQQ7zhb/Summertime-Sadness.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/Young%20and%20Beautiful.m4a",
        color: "#4aba84"
    },
    {
        id: 241,
        title: "Fame",
        artist: "Rema, colors",
        duration: "1:51",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/2QMyxzC/Fame-A-COLORS-ENCORE.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/rema-%20fame.m4a",
        color: "#4aba84"
    },
    {
        id: 242,
        title: "Shakira",
        artist: "1nonly",
        duration: "2:29",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/bMTfRNNk/Shakira-feat-EGOVERT.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/shakira-1nonly.m4a",
        color: "#4aba84"
    },
    {
        id: 243,
        title: "Starboy",
        artist: "The Weeknd",
        duration: "3:50",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/ZRLdS3Vc/Reminder.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/starboy.m4a",
        color: "#4aba84"
    },
    {
        id: 244,
        title: "Waka Waka",
        artist: "Shakira",
        duration: "3:22",
        language: "English",
        category: "Casual",
        coverArt: "https://i.ibb.co/xtmpLJbT/Waka-Waka.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/waka%20waka.m4a",
        color: "#4aba84"
    },
    {
        id: 245,
        title: "Wavin Flag",
        artist: "K'naan",
        duration: "3:32",
        language: "English",
        category: "Motivation",
        coverArt: "https://i.ibb.co/gbyxmxmF/Wavin-Flag-Coca-Cola-Celebration-Mix.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/wavin%20flag.m4a",
        color: "#4aba84"
    },
    {
        id: 246,
        title: "We Found Love",
        artist: "Rihanna",
        duration: "3:35",
        language: "English",
        category: "RomanticSad",
        coverArt: "https://i.ibb.co/h18dGctt/We-Found-Love-feat-Calvin-Harris.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/we%20found%20love.m4a",
        color: "#4aba84"
    },
    {
        id: 247,
        title: "Детство",
        artist: "Rauf & Faik",
        duration: "3:08",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/qZwrRKp/image.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/%D0%94%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%BE.m4a",
        color: "#4aba84"
    },
    {
        id: 248,
        title: "Камин",
        artist: "Polnalyubvi",
        duration: "3:07",
        language: "English",
        category: "Sad",
        coverArt: "https://i.ibb.co/20Z2c8Vb/image.webp",
        audioUrl: "https://cdn.jsdelivr.net/gh/suvajitnathx/audio4@main/%D0%9A%D0%B0%D0%BC%D0%B8%D0%BD.m4a",
        color: "#4aba84"
    }
    // Add more Hindi songs here (IDs 111–170) following the same pattern.
];

// ==================== CUSTOM PLAYLIST COVERS ====================
// Add your imgbb links below – use the exact playlist names as keys
const playlistCovers = {
    // Mix playlists
    "All Mix": "https://i.ibb.co/zh9DBW9Z/IMG-0321.webp",
    "Peace": "https://i.ibb.co/VWZpJMKs/tulip.jpg",
    "Casual Mix": "https://i.ibb.co/PZs1zvt4/download-1.webp",
    "Romantic Mix": "https://i.ibb.co/TxCQbDhn/IMG-0340.webp",
    "Sad Mix": "https://i.ibb.co/GQ8dqvjt/download-2.webp",
    "Motivation Mix": "https://i.ibb.co/PvNPw7Q0/IMG-0322.webp",

    // English playlists
    "All English": "https://i.ibb.co/cKLnjtvy/IMG-0341.webp",
    "Casual English": "https://i.ibb.co/yn5KkbDR/alice-fortescue-aesthetic.webp",
    "Romantic English": "https://i.ibb.co/QFkrHwys/download-3.webp",
    "Sad English": "https://i.ibb.co/k2bRyvbH/IMG-0346.webp",
    "Motivation English": "https://i.ibb.co/nNFXn2dm/IMG-0325.webp",
    // Hindi playlists
    "All Hindi": "https://i.ibb.co/d4Ndsw6w/IMG-0327.webp",
    "Casual Hindi": "https://i.ibb.co/9kWJZtY3/IMG-0329.webp",
    "Romantic Hindi": "https://i.ibb.co/70rV4jd/download.webp",
    "Sad Hindi": "https://i.ibb.co/JFkSKCm3/IMG-0328.webp",
    "Motivation Hindi": "https://i.ibb.co/hx5ny9rR/IMG-0332.webp",
    // custom playlists
    // (no duplicates needed – cover already specified above)
};
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.key === 'u' ||
            e.key === 's' ||
            e.key === 'c')) {
        return false;
    }
};

// ==================== GLOBAL STATE ====================
let currentSong = null;
let isPlaying = false;
let currentPlaylist = null;
let currentPlaylistSongs = [];
let repeatMode = 0; // 0 = no repeat, 1 = repeat one, 2 = repeat all
let isDraggingProgress = false;

// Flags for lazy loading
let playlistsLoaded = false;
let allMusicLoaded = false;

// Audio element - volume initialized from UI
let audio = new Audio();
let isDraggingVolume = false;

// ==================== DOM ELEMENTS ====================
const recommendedContainer = document.getElementById('recommended-music');
const allMusicList = document.getElementById('all-music-list');
const mixGrid = document.getElementById('mix-playlist-grid');
const englishGrid = document.getElementById('english-playlist-grid');
const hindiGrid = document.getElementById('hindi-playlist-grid');
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page-container');
const tabs = document.querySelectorAll('.category-tab');
const playlistCategories = document.querySelectorAll('.playlist-category');
const fullscreenPlayer = document.getElementById('fullscreen-player');
const miniPlayer = document.getElementById('mini-player');
const playlistDetailPage = document.getElementById('playlist-detail-page');
const musicSearch = document.getElementById('music-search');
const playPlaylistBtn = document.getElementById('play-playlist');
const shufflePlaylistBtn = document.getElementById('shuffle-playlist');
const repeatPlaylistBtn = document.getElementById('repeat-playlist-corner');
const repeatBtn = document.getElementById('repeat-btn');
const progressBarContainer = document.getElementById('progress-bar-container');
const progressFill = document.getElementById('progress-fill');
const progressThumb = document.getElementById('progress-thumb');
const playerSourceLabel = document.getElementById('player-source-label');
const playBtn = document.getElementById('play-btn');
const fullscreenPlayBtn = document.getElementById('fullscreen-play-btn');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const miniPlayerArt = document.getElementById('mini-player-art');
const fullscreenAlbumArt = document.getElementById('fullscreen-album-art');
const fullscreenTitle = document.getElementById('fullscreen-title');
const fullscreenArtist = document.getElementById('fullscreen-artist');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const volumeBarContainer = document.getElementById('volume-bar-container');
const volumeFill = document.getElementById('volume-fill');
const volumeThumb = document.getElementById('volume-thumb');
const volumeIcon = document.getElementById('volume-icon');
const playlistAuraBg = document.getElementById('playlist-aura-bg');

// ==================== SOCIAL LINKS ====================
const instagramLink = document.getElementById('instagram-link');
const discordLink = document.getElementById('discord-link');
const contactBtn = document.getElementById('contact-btn');
instagramLink.href = 'https://instagram.com/aditya_gosavi._';
discordLink.href = 'https://discord.com/users/';
contactBtn.href = 'https://instagram.com/aditya_gosavi._';

// ==================== HELPER FUNCTIONS ====================
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function getSongField(song, field, defaultValue) {
    return (song && song[field] !== undefined) ? song[field] : defaultValue;
}

// ==================== DYNAMIC PLAYLIST GENERATION ====================
// Define the four fixed categories
const categories = ["Casual", "Romantic", "Sad", "Motivation"];

// Map category to icon and base color (can be overridden by song's color)
const categoryMeta = {
    "Casual": { icon: "fas fa-wind", baseColor: "#2e9e6e" },
    "Romantic": { icon: "fas fa-heart", baseColor: "#4aba84" },
    "Sad": { icon: "fas fa-cloud-rain", baseColor: "#3a9e6a" },
    "Motivation": { icon: "fas fa-fire", baseColor: "#5aba8a" }

};

// Build playlists dynamically
function buildPlaylists() {
    // Structure: { mix: { category: [songs] }, english: { category: [songs] }, hindi: { category: [songs] } }
    const playlists = {
        mix: {},
        english: {},
        hindi: {}
    };

    // Initialize empty arrays for each category
    categories.forEach(cat => {
        playlists.mix[cat] = [];
        playlists.english[cat] = [];
        playlists.hindi[cat] = [];
    });

    // Populate from musicLibrary
    musicLibrary.forEach(song => {
        if (!song || !song.category || !song.language) return;
        const cat = song.category;
        const lang = song.language;

        if (categories.includes(cat)) {
            // Add to mix (all songs of this category)
            playlists.mix[cat].push(song);

            // Add to language-specific
            if (lang === "English") {
                playlists.english[cat].push(song);
            } else if (lang === "Hindi") {
                playlists.hindi[cat].push(song);
            }
        }
    });

    return playlists;
}

// ==================== POPULATE FUNCTIONS ====================
function populateRecommended() {
    recommendedContainer.innerHTML = '';
    if (!musicLibrary || musicLibrary.length === 0) {
        recommendedContainer.innerHTML = '<div style="color: var(--text-soft); padding: 20px;">No songs available</div>';
        return;
    }
    const shuffled = [...musicLibrary].sort(() => 0.5 - Math.random());
    shuffled.slice(0, 4).forEach(song => {
        if (!song) return;
        const card = document.createElement('div');
        card.className = 'music-card';
        card.dataset.id = song.id;
        card.innerHTML = `
                    <div class="album-art" style="background-image: url('${getSongField(song, 'coverArt', '')}'); background-color: ${getSongField(song, 'color', '#2e9e6e')};"></div>
                    <div class="music-info">
                        <div class="music-title">${getSongField(song, 'title', 'Unknown')}</div>
                        <div class="music-artist">${getSongField(song, 'artist', 'Unknown Artist')}</div>
                    </div>
                `;
        card.addEventListener('click', () => {
            currentPlaylist = null;
            currentPlaylistSongs = [];
            playSong(song);
        });
        recommendedContainer.appendChild(card);
    });
}

function populateAllMusic() {
    if (allMusicLoaded) return;
    allMusicList.innerHTML = '';
    if (!musicLibrary || musicLibrary.length === 0) {
        allMusicList.innerHTML = '<div class="list-item" style="justify-content: center;">No songs in library</div>';
        return;
    }
    musicLibrary.forEach(song => {
        if (!song) return;
        const item = createSongListItem(song);
        item.addEventListener('click', () => {
            currentPlaylist = null;
            currentPlaylistSongs = [];
            playSong(song);
        });
        allMusicList.appendChild(item);
    });
    allMusicLoaded = true;
}

function createSongListItem(song) {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.dataset.id = song.id;
    // Display artist and category (instead of genre)
    item.innerHTML = `
                <div class="list-item-info">
                    <div class="list-item-art" style="background-image: url('${getSongField(song, 'coverArt', '')}'); background-color: ${getSongField(song, 'color', '#2e9e6e')};"></div>
                    <div class="list-item-details">
                        <div class="list-item-title">${getSongField(song, 'title', 'Unknown')}</div>
                        <div class="list-item-artist">${getSongField(song, 'artist', 'Unknown')} • ${getSongField(song, 'category', '')}</div>
                    </div>
                </div>
                <div class="song-duration">${getSongField(song, 'duration', '0:00')}</div>
            `;
    return item;
}

function populateAllPlaylists() {
    if (playlistsLoaded) return;
    const playlists = buildPlaylists();

    // Clear grids
    mixGrid.innerHTML = '';
    englishGrid.innerHTML = '';
    hindiGrid.innerHTML = '';

    // ----- Mix section: add "All Mix" playlist first, then category ones -----
    // All Mix: all songs from the library
    const allMixSongs = musicLibrary.filter(s => s); // all valid songs
    const allMixPlaylist = {
        name: "All Mix",
        songs: allMixSongs,
        icon: "fas fa-globe",  // you can change icon if you like
        color: "#2e9e6e",
        cover: playlistCovers["All Mix"]
    };
    mixGrid.appendChild(createPlaylistCard(allMixPlaylist));

    // custom 'Peace' playlist – includes only tracks whose category is "Peace"
    const peaceMix = {
        name: "Peace",
        songs: musicLibrary.filter(s => s && s.category === "Peace"),
        icon: "fas fa-dove",
        color: "#2e9e6e",
        cover: playlistCovers["Peace"]
    };
    mixGrid.appendChild(createPlaylistCard(peaceMix));

    categories.forEach(cat => {
        const songs = playlists.mix[cat] || [];
        const playlist = {
            name: `${cat} Mix`,
            songs: songs,
            icon: categoryMeta[cat].icon,
            color: categoryMeta[cat].baseColor,
            cover: playlistCovers[`${cat} Mix`]
        };
        mixGrid.appendChild(createPlaylistCard(playlist));
    });

    // ----- English section: add "All English" playlist first, then category ones -----
    const allEnglishSongs = musicLibrary.filter(s => s && s.language === "English");
    const allEnglishPlaylist = {
        name: "All English",
        songs: allEnglishSongs,
        icon: "fas fa-language",
        color: "#2e9e6e",
        cover: playlistCovers["All English"]
    };
    englishGrid.appendChild(createPlaylistCard(allEnglishPlaylist));

    categories.forEach(cat => {
        const songs = playlists.english[cat] || [];
        const playlist = {
            name: `${cat} English`,
            songs: songs,
            icon: categoryMeta[cat].icon,
            color: categoryMeta[cat].baseColor,
            cover: playlistCovers[`${cat} English`]
        };
        englishGrid.appendChild(createPlaylistCard(playlist));
    });

    // ----- Hindi section: add "All Hindi" playlist first, then category ones -----
    const allHindiSongs = musicLibrary.filter(s => s && s.language === "Hindi");
    const allHindiPlaylist = {
        name: "All Hindi",
        songs: allHindiSongs,
        icon: "fas fa-language",
        color: "#2e9e6e",
        cover: playlistCovers["All Hindi"]
    };
    hindiGrid.appendChild(createPlaylistCard(allHindiPlaylist));

    // custom playlist 'Peace' containing songs marked with category "Peace"
    const peacePlaylist = {
        name: "Peace",
        songs: musicLibrary.filter(s => s && s.category === "Peace"),
        icon: "fas fa-dove",
        color: "#2e9e6e",
        cover: playlistCovers["Peace"]
    };
    hindiGrid.appendChild(createPlaylistCard(peacePlaylist));

    categories.forEach(cat => {
        const songs = playlists.hindi[cat] || [];
        const playlist = {
            name: `${cat} Hindi`,
            songs: songs,
            icon: categoryMeta[cat].icon,
            color: categoryMeta[cat].baseColor,
            cover: playlistCovers[`${cat} Hindi`]
        };
        hindiGrid.appendChild(createPlaylistCard(playlist));
    });

    playlistsLoaded = true;
}

function createPlaylistCard(playlist) {
    const card = document.createElement('div');
    card.className = 'playlist-card';
    card.dataset.name = playlist.name;

    const songs = playlist.songs || [];

    let coverStyle = '';
    if (playlist.cover && playlist.cover.trim() !== '') {
        coverStyle = `background-image: url('${playlist.cover}');`;
    } else if (songs.length > 0 && songs[0] && songs[0].coverArt) {
        coverStyle = `background-image: url('${songs[0].coverArt}');`;
    } else {
        coverStyle = `background: linear-gradient(145deg, ${playlist.color || '#2e9e6e'}, ${adjustColor(playlist.color || '#2e9e6e', 40)});`;
    }

    // Icons removed from cover
    card.innerHTML = `
                <div class="playlist-cover" style="${coverStyle}"></div>
                <div class="playlist-name">${playlist.name || 'Unnamed'}</div>
                <div class="playlist-song-count">${songs.length} songs</div>
            `;

    card.addEventListener('click', () => openPlaylistDetail(playlist));
    return card;
}

function openPlaylistDetail(playlist) {
    pages.forEach(p => p.classList.remove('active'));
    playlistDetailPage.classList.add('active');

    currentPlaylist = playlist;
    currentPlaylistSongs = playlist.songs || [];

    document.getElementById('detail-playlist-name').textContent = playlist.name || 'Playlist';
    document.getElementById('detail-playlist-count').textContent = `${currentPlaylistSongs.length} songs`;

    const header = document.getElementById('playlist-detail-header');
    header.style.background = 'transparent';
    header.style.backgroundImage = 'none';

    const cover = document.getElementById('detail-playlist-cover');
    if (playlist.cover && playlist.cover.trim() !== '') {
        cover.style.backgroundImage = `url('${playlist.cover}')`;
        playlistAuraBg.style.backgroundImage = `url('${playlist.cover}')`;
    } else if (currentPlaylistSongs.length > 0 && currentPlaylistSongs[0] && currentPlaylistSongs[0].coverArt) {
        cover.style.backgroundImage = `url('${currentPlaylistSongs[0].coverArt}')`;
        playlistAuraBg.style.backgroundImage = `url('${currentPlaylistSongs[0].coverArt}')`;
    } else {
        cover.style.background = `linear-gradient(145deg, ${playlist.color || '#2e9e6e'}, ${adjustColor(playlist.color || '#2e9e6e', 40)})`;
        playlistAuraBg.style.background = `linear-gradient(145deg, ${playlist.color || '#2e9e6e'}, ${adjustColor(playlist.color || '#2e9e6e', 40)})`;
    }
    // Icons removed from detail cover
    cover.innerHTML = '';

    const songsList = document.getElementById('playlist-songs-list');
    songsList.innerHTML = '';
    currentPlaylistSongs.forEach(song => {
        if (!song) return;
        const item = createSongListItem(song);
        item.addEventListener('click', () => playSong(song));
        songsList.appendChild(item);
    });
}

// ==================== PLAYER CONTROLS ====================
function playSong(song) {
    if (!song || !song.audioUrl) {
        console.warn('Song missing audio URL');
        return;
    }

    // Stop current playback
    audio.pause();
    audio.src = song.audioUrl;
    audio.load();

    currentSong = song;

    // Update UI with fallbacks
    miniPlayer.style.display = 'flex';
    miniPlayerArt.style.backgroundImage = `url('${getSongField(song, 'coverArt', '')}')`;
    playerTitle.textContent = getSongField(song, 'title', 'Unknown');
    playerArtist.textContent = getSongField(song, 'artist', 'Unknown');

    fullscreenAlbumArt.style.backgroundImage = `url('${getSongField(song, 'coverArt', '')}')`;
    fullscreenTitle.textContent = getSongField(song, 'title', 'Unknown');
    fullscreenArtist.textContent = getSongField(song, 'artist', 'Unknown');

    if (currentPlaylist) {
        playerSourceLabel.textContent = `PLAYING FROM ${(currentPlaylist.name || 'PLAYLIST').toUpperCase()}`;
    } else {
        playerSourceLabel.textContent = 'PLAYING FROM YOUR LIBRARY';
    }

    // Reset progress
    currentTimeEl.textContent = '0:00';
    totalTimeEl.textContent = getSongField(song, 'duration', '0:00');
    updateProgress(0);

    // Start playback (play event will update buttons)
    audio.play().catch(err => {
        console.error('Playback failed:', err);
        // No alert – silently log
    });
}

function togglePlay() {
    if (!currentSong) return;
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
}

function updateProgressFromAudio() {
    if (!isDraggingProgress && audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        updateProgress(percent);
        currentTimeEl.textContent = formatTime(audio.currentTime);
    }
}

function updateProgress(percent) {
    progressFill.style.width = `${percent}%`;
    progressThumb.style.left = `${percent}%`;
}

function seekTo(percent) {
    if (!currentSong || !audio.duration) return;
    const seekTime = (percent / 100) * audio.duration;
    audio.currentTime = seekTime;
    currentTimeEl.textContent = formatTime(seekTime);
    updateProgress(percent);
}

function onAudioEnded() {
    if (repeatMode === 1) {
        // Repeat one
        audio.currentTime = 0;
        audio.play();
    } else if (repeatMode === 2 && currentPlaylistSongs.length > 0) {
        playNextInContext();
    } else if (currentPlaylistSongs.length > 0) {
        playNextInContext();
    } else if (currentSong) {
        const currentIndex = musicLibrary.findIndex(s => s && s.id === currentSong.id);
        if (currentIndex !== -1) {
            const nextIndex = (currentIndex + 1) % musicLibrary.length;
            playSong(musicLibrary[nextIndex]);
        }
    }
}

function playNextInContext() {
    if (currentPlaylistSongs.length === 0 || !currentSong) return;
    const currentIndex = currentPlaylistSongs.findIndex(s => s && s.id === currentSong.id);
    if (currentIndex === -1) return;
    let nextIndex = (currentIndex + 1) % currentPlaylistSongs.length;

    if (repeatMode === 0 && currentIndex === currentPlaylistSongs.length - 1) {
        // Last song, no repeat: stop
        audio.pause();
        miniPlayer.style.display = 'none';
        currentSong = null;
        return;
    }
    playSong(currentPlaylistSongs[nextIndex]);
}

function playPrevInContext() {
    if (currentPlaylistSongs.length === 0 || !currentSong) return;
    const currentIndex = currentPlaylistSongs.findIndex(s => s && s.id === currentSong.id);
    if (currentIndex === -1) return;
    let prevIndex = (currentIndex - 1 + currentPlaylistSongs.length) % currentPlaylistSongs.length;
    playSong(currentPlaylistSongs[prevIndex]);
}

// ==================== LAZY LOADING LOGIC ====================
function loadPlaylistsIfNeeded() {
    if (!playlistsLoaded) {
        populateAllPlaylists();
    }
}

function loadAllMusicIfNeeded() {
    if (!allMusicLoaded) {
        populateAllMusic();
    }
}

// Preload other pages in background after main page is stable
function preloadBackground() {
    // Use requestIdleCallback if available, else setTimeout
    const preloadTask = () => {
        // Load playlists and all music in background, but only if not already loaded
        if (!playlistsLoaded) {
            populateAllPlaylists();
        }
        if (!allMusicLoaded) {
            populateAllMusic();
        }
    };
    if ('requestIdleCallback' in window) {
        requestIdleCallback(preloadTask, { timeout: 2000 });
    } else {
        setTimeout(preloadTask, 1500);
    }
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.dataset.page;
            navItems.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
            pages.forEach(p => p.classList.remove('active'));
            const targetPage = document.getElementById(`${page}-page`);
            if (targetPage) targetPage.classList.add('active');

            // Lazy load content for the target page
            if (page === 'playlist') {
                loadPlaylistsIfNeeded();
            } else if (page === 'music') {
                loadAllMusicIfNeeded();
            }
        });
    });

    const moreMusicLink = document.querySelector('.more-music');
    if (moreMusicLink) {
        moreMusicLink.addEventListener('click', function (e) {
            e.preventDefault();
            navItems.forEach(n => n.classList.remove('active'));
            const playlistNav = document.querySelector('.nav-item[data-page="playlist"]');
            if (playlistNav) playlistNav.classList.add('active');
            pages.forEach(p => p.classList.remove('active'));
            document.getElementById('playlist-page').classList.add('active');

            // Lazy load playlists
            loadPlaylistsIfNeeded();
        });
    }

    // Playlist tabs (they are inside playlist page, so no extra load needed)
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabName = this.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            playlistCategories.forEach(cat => cat.classList.remove('active'));
            const targetCat = document.getElementById(`${tabName}-playlists`);
            if (targetCat) targetCat.classList.add('active');
        });
    });

    // Play button (mini)
    playBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        togglePlay();
    });

    // Play button (fullscreen)
    fullscreenPlayBtn.addEventListener('click', function () {
        togglePlay();
    });

    // Open fullscreen player
    miniPlayer.addEventListener('click', function () {
        if (currentSong) fullscreenPlayer.classList.add('active');
    });

    // Close fullscreen
    const closePlayer = document.querySelector('.close-player');
    if (closePlayer) {
        closePlayer.addEventListener('click', function () {
            fullscreenPlayer.classList.remove('active');
        });
    }

    // Back to playlists
    const backBtn = document.querySelector('.back-to-playlists');
    if (backBtn) {
        backBtn.addEventListener('click', function () {
            playlistDetailPage.classList.remove('active');
            document.getElementById('playlist-page').classList.add('active');
            navItems.forEach(n => n.classList.remove('active'));
            const playlistNav = document.querySelector('.nav-item[data-page="playlist"]');
            if (playlistNav) playlistNav.classList.add('active');
        });
    }

    // Play playlist
    playPlaylistBtn.addEventListener('click', function () {
        if (currentPlaylistSongs.length > 0) {
            playSong(currentPlaylistSongs[0]);
        }
    });

    // Shuffle playlist
    shufflePlaylistBtn.addEventListener('click', function () {
        if (currentPlaylistSongs.length > 0) {
            const shuffled = [...currentPlaylistSongs].sort(() => 0.5 - Math.random());
            playSong(shuffled[0]);
        }
    });

    // Repeat playlist (corner)
    let playlistRepeatState = 0;
    repeatPlaylistBtn.addEventListener('click', function () {
        playlistRepeatState = (playlistRepeatState + 1) % 2;
        if (playlistRepeatState === 0) {
            this.classList.remove('active');
            repeatMode = 0;
        } else {
            this.classList.add('active');
            repeatMode = 2;
        }
    });

    // Global repeat
    let globalRepeatState = 0;
    repeatBtn.addEventListener('click', function () {
        globalRepeatState = (globalRepeatState + 1) % 3;
        repeatMode = globalRepeatState;
        const icon = this.querySelector('i');
        if (globalRepeatState === 0) {
            icon.style.color = 'white';
            this.classList.remove('active');
        } else if (globalRepeatState === 1) {
            icon.style.color = '#2e9e6e';
            this.classList.add('active');
        } else {
            icon.style.color = '#2e9e6e';
            this.classList.add('active');
        }
    });

    // Next/Previous
    document.getElementById('next-btn').addEventListener('click', function () {
        if (currentPlaylistSongs.length > 0) playNextInContext();
        else if (currentSong) {
            const currentIndex = musicLibrary.findIndex(s => s && s.id === currentSong.id);
            if (currentIndex !== -1) {
                const nextIndex = (currentIndex + 1) % musicLibrary.length;
                playSong(musicLibrary[nextIndex]);
            }
        }
    });

    document.getElementById('prev-btn').addEventListener('click', function () {
        if (currentPlaylistSongs.length > 0) playPrevInContext();
        else if (currentSong) {
            const currentIndex = musicLibrary.findIndex(s => s && s.id === currentSong.id);
            if (currentIndex !== -1) {
                const prevIndex = (currentIndex - 1 + musicLibrary.length) % musicLibrary.length;
                playSong(musicLibrary[prevIndex]);
            }
        }
    });

    // Search (works only after all music is loaded, but we can attach listener anyway)
    musicSearch.addEventListener('input', function () {
        const term = this.value.toLowerCase();
        document.querySelectorAll('#all-music-list .list-item').forEach(item => {
            const title = item.querySelector('.list-item-title')?.textContent.toLowerCase() || '';
            const artist = item.querySelector('.list-item-artist')?.textContent.toLowerCase() || '';
            item.style.display = (title.includes(term) || artist.includes(term)) ? 'flex' : 'none';
        });
    });

    // Progress bar seeking (mouse)
    progressBarContainer.addEventListener('click', function (e) {
        if (!currentSong) return;
        const rect = this.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        let percent = (offsetX / rect.width) * 100;
        percent = Math.min(100, Math.max(0, percent));
        seekTo(percent);
    });

    progressThumb.addEventListener('mousedown', function (e) {
        e.stopPropagation();
        isDraggingProgress = true;
    });

    // Progress bar touch events
    progressThumb.addEventListener('touchstart', function (e) {
        e.preventDefault();
        isDraggingProgress = true;
    });

    document.addEventListener('mousemove', function (e) {
        if (isDraggingProgress && currentSong) {
            const rect = progressBarContainer.getBoundingClientRect();
            let offsetX = e.clientX - rect.left;
            offsetX = Math.min(rect.width, Math.max(0, offsetX));
            const percent = (offsetX / rect.width) * 100;
            seekTo(percent);
        }
    });

    document.addEventListener('touchmove', function (e) {
        if (isDraggingProgress && currentSong) {
            e.preventDefault();
            const touch = e.touches[0];
            const rect = progressBarContainer.getBoundingClientRect();
            let offsetX = touch.clientX - rect.left;
            offsetX = Math.min(rect.width, Math.max(0, offsetX));
            const percent = (offsetX / rect.width) * 100;
            seekTo(percent);
        }
    });

    document.addEventListener('mouseup', function () {
        isDraggingProgress = false;
    });

    document.addEventListener('touchend', function (e) {
        isDraggingProgress = false;
    });

    document.addEventListener('touchcancel', function (e) {
        isDraggingProgress = false;
    });

    // Volume control logic
    function updateVolume(percent) {
        percent = Math.min(100, Math.max(0, percent));
        volumeFill.style.width = `${percent}%`;
        audio.volume = percent / 100;
    }

    volumeBarContainer.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const percent = (offsetX / rect.width) * 100;
        updateVolume(percent);
    });

    volumeThumb.addEventListener('mousedown', function (e) {
        e.stopPropagation();
        isDraggingVolume = true;
    });

    volumeThumb.addEventListener('touchstart', function (e) {
        e.preventDefault();
        e.stopPropagation();
        isDraggingVolume = true;
    });

    document.addEventListener('mousemove', function (e) {
        if (isDraggingVolume) {
            const rect = volumeBarContainer.getBoundingClientRect();
            let offsetX = e.clientX - rect.left;
            offsetX = Math.min(rect.width, Math.max(0, offsetX));
            const percent = (offsetX / rect.width) * 100;
            updateVolume(percent);
        }
    });

    document.addEventListener('touchmove', function (e) {
        if (isDraggingVolume) {
            e.preventDefault();
            const touch = e.touches[0];
            const rect = volumeBarContainer.getBoundingClientRect();
            let offsetX = touch.clientX - rect.left;
            offsetX = Math.min(rect.width, Math.max(0, offsetX));
            const percent = (offsetX / rect.width) * 100;
            updateVolume(percent);
        }
    });

    document.addEventListener('mouseup', () => isDraggingVolume = false);
    document.addEventListener('touchend', () => isDraggingVolume = false);
    document.addEventListener('touchcancel', () => isDraggingVolume = false);

    // Mute/Unmute toggle
    let lastVolume = 1;
    volumeIcon.addEventListener('click', function () {
        if (audio.volume > 0) {
            lastVolume = audio.volume;
            updateVolume(0);
            this.className = 'fas fa-volume-mute';
        } else {
            updateVolume(lastVolume * 100);
            this.className = 'fas fa-volume-up';
        }
    });
}

function adjustColor(color, amount) {
    return color; // keep as is (no adjustment needed)
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function () {
    try {
        // Only populate home page initially
        populateRecommended();
        setupEventListeners();

        miniPlayer.style.display = 'none';

        // Audio event listeners for reliable play/pause UI
        audio.addEventListener('play', function () {
            isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            fullscreenPlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
        });
        audio.addEventListener('pause', function () {
            isPlaying = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            fullscreenPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
        });
        audio.addEventListener('timeupdate', updateProgressFromAudio);
        audio.addEventListener('loadedmetadata', function () {
            totalTimeEl.textContent = formatTime(audio.duration);
        });
        audio.addEventListener('ended', onAudioEnded);
        audio.addEventListener('error', function (e) {
            console.error('Audio error:', e);
            // No alert – just log
        });

        // Start background preloading after a short delay
        preloadBackground();
    } catch (error) {
        console.error('Initialization error:', error);
        // Optional: show a non-intrusive message
    }
});
