import { IApiResponse } from "../../types";

export const listDataMock: IApiResponse = {
  pagination: {
    last_visible_page: 2,
    has_next_page: true,
    current_page: 1,
    items: { count: 25, total: 28, per_page: 25 },
  },
  data: [
    {
      mal_id: 20,
      url: "https://myanimelist.net/anime/20/Naruto",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/13/17405t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/13/17405l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/13/17405.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/13/17405t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/13/17405l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        { type: "Default", title: "Naruto" },
        { type: "Synonym", title: "NARUTO" },
        { type: "Japanese", title: "\u30ca\u30eb\u30c8" },
        { type: "English", title: "Naruto" },
      ],
      title: "Naruto",
      title_english: "Naruto",
      title_japanese: "\u30ca\u30eb\u30c8",
      title_synonyms: ["NARUTO"],
      type: "TV",
      source: "Manga",
      episodes: 220,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2002-10-03T00:00:00+00:00",
        to: "2007-02-08T00:00:00+00:00",
        prop: {
          from: { day: 3, month: 10, year: 2002 },
          to: { day: 8, month: 2, year: 2007 },
        },
        string: "Oct 3, 2002 to Feb 8, 2007",
      },
      duration: "23 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 7.97,
      scored_by: 1770026,
      rank: 599,
      popularity: 8,
      members: 2536197,
      favorites: 71235,
      synopsis:
        "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. Now, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes. [Written by MAL Rewrite]",
      background:
        'Naruto received numerous awards during its airing, including the "Best Full-Length Animation Program Award" in the Third UStv Awards and the 38th "Best Animated Show" in IGN\'s Top 100 Animated Series.',
      season: "fall",
      year: 2002,
      broadcast: {
        day: "Thursdays",
        time: "19:30",
        timezone: "Asia/Tokyo",
        string: "Thursdays at 19:30 (JST)",
      },
      producers: [
        {
          mal_id: 16,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/16/TV_Tokyo",
        },
        {
          mal_id: 17,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/17/Aniplex",
        },
        {
          mal_id: 1365,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1365/Shueisha",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 17,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 32365,
      url: "https://myanimelist.net/anime/32365/Boruto__Naruto_the_Movie_-_Naruto_ga_Hokage_ni_Natta_Hi",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/6/77678.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/6/77678t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/6/77678l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/6/77678.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/6/77678t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/6/77678l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Boruto: Naruto the Movie - Naruto ga Hokage ni Natta Hi",
        },
        { type: "Synonym", title: "The Day Naruto Became Hokage" },
        {
          type: "Japanese",
          title:
            "BORUTO -NARUTO THE MOVIE- \u30ca\u30eb\u30c8\u304c\u706b\u5f71\u306b\u306a\u3063\u305f\u65e5",
        },
        {
          type: "English",
          title: "Boruto: Naruto the Movie - The Day Naruto Became Hokage",
        },
        {
          type: "French",
          title:
            "Boruto: Naruto Le Film - Le Jour o\u00f9 Naruto est Devenu Hokage",
        },
      ],
      title: "Boruto: Naruto the Movie - Naruto ga Hokage ni Natta Hi",
      title_english: "Boruto: Naruto the Movie - The Day Naruto Became Hokage",
      title_japanese:
        "BORUTO -NARUTO THE MOVIE- \u30ca\u30eb\u30c8\u304c\u706b\u5f71\u306b\u306a\u3063\u305f\u65e5",
      title_synonyms: ["The Day Naruto Became Hokage"],
      type: "Special",
      source: "Original",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2016-07-06T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 6, month: 7, year: 2016 },
          to: { day: null, month: null, year: null },
        },
        string: "Jul 6, 2016",
      },
      duration: "10 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.35,
      scored_by: 57297,
      rank: 2252,
      popularity: 1779,
      members: 101050,
      favorites: 138,
      synopsis:
        "Bundled with the limited edition of Blu-ray/DVD of Boruto: Naruto the Movie.",
      background: null,
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 10686,
      url: "https://myanimelist.net/anime/10686/Naruto__Honoo_no_Chuunin_Shiken_Naruto_vs_Konohamaru",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/9/30813.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/9/30813t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/9/30813l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/9/30813.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/9/30813t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/9/30813l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto: Honoo no Chuunin Shiken! Naruto vs. Konohamaru!!",
        },
        {
          type: "Japanese",
          title:
            "\u708e\u306e\u4e2d\u5fcd\u8a66\u9a13! \u30ca\u30eb\u30c8vs\u6728\u30ce\u8449\u4e38!!",
        },
        {
          type: "English",
          title:
            "Naruto Shippuden: Chunin Exam on Fire! and Naruto vs. Konohamaru!",
        },
      ],
      title: "Naruto: Honoo no Chuunin Shiken! Naruto vs. Konohamaru!!",
      title_english:
        "Naruto Shippuden: Chunin Exam on Fire! and Naruto vs. Konohamaru!",
      title_japanese:
        "\u708e\u306e\u4e2d\u5fcd\u8a66\u9a13! \u30ca\u30eb\u30c8vs\u6728\u30ce\u8449\u4e38!!",
      title_synonyms: [],
      type: "Movie",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2011-07-30T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 30, month: 7, year: 2011 },
          to: { day: null, month: null, year: null },
        },
        string: "Jul 30, 2011",
      },
      duration: "14 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.17,
      scored_by: 38024,
      rank: 3155,
      popularity: 2197,
      members: 71763,
      favorites: 32,
      synopsis:
        "As the Fourth Great Ninja War quickly approaches, Sunagakure hosts a special Chunin exam to strengthen the troops of the Allied Shinobi Forces. Among the participants are Konohamaru Sarutobi, an ambitious rookie, and Naruto Uzumaki, who has become a renowned ninja. Despite the significant disparity in skill, Konohamaru is excited at the prospect of proving himself in a competition against Naruto\u2014the one person he both admires and sees as his rival. [Written by MAL Rewrite]",
      background:
        "Naruto: Honoo no Chuunin Shiken! Naruto vs. Konohamaru!! was aired together with Naruto: Shippuuden Movie 5 - Blood Prison, both presenting stories which fall closely before the series' \"Fourth Shinobi World War: Confrontation\" arc. In addition, their release date was only one month prior to the aforementioned arc's premiere date, January 5, 2012.",
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [
        {
          mal_id: 1365,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1365/Shueisha",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 17,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
        },
        {
          mal_id: 31,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/genre/31/Super_Power",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 10659,
      url: "https://myanimelist.net/anime/10659/Naruto_Soyokazeden_Movie__Naruto_to_Mashin_to_Mitsu_no_Onegai_Dattebayo",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/10/31573.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/10/31573t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/10/31573l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/10/31573.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/10/31573t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/10/31573l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title:
            "Naruto Soyokazeden Movie: Naruto to Mashin to Mitsu no Onegai Dattebayo!!",
        },
        {
          type: "Synonym",
          title:
            "Gekijouban Naruto Soyokazeden: Naruto to Mashin to Mitsu no Onegai Dattebayo!!",
        },
        {
          type: "Synonym",
          title: "Naruto: Gentle Breeze Chronicles the Film: Naruto",
        },
        { type: "Synonym", title: "the Genie" },
        { type: "Synonym", title: "and the Three Wishes Dattebayo!!" },
        {
          type: "Japanese",
          title:
            "\u5287\u5834\u7248NARUTO \uff0d\u30ca\u30eb\u30c8\uff0d \u305d\u3088\u98a8\u4f1d \u30ca\u30eb\u30c8\u3068\u9b54\u795e\u30683\u3064\u306e\u304a\u9858\u3044\u3060\u3063\u3066\u3070\u3088\uff01\uff01",
        },
        {
          type: "English",
          title: "Naruto: The Magic Genie and the Three Wishes",
        },
      ],
      title:
        "Naruto Soyokazeden Movie: Naruto to Mashin to Mitsu no Onegai Dattebayo!!",
      title_english: "Naruto: The Magic Genie and the Three Wishes",
      title_japanese:
        "\u5287\u5834\u7248NARUTO \uff0d\u30ca\u30eb\u30c8\uff0d \u305d\u3088\u98a8\u4f1d \u30ca\u30eb\u30c8\u3068\u9b54\u795e\u30683\u3064\u306e\u304a\u9858\u3044\u3060\u3063\u3066\u3070\u3088\uff01\uff01",
      title_synonyms: [
        "Gekijouban Naruto Soyokazeden: Naruto to Mashin to Mitsu no Onegai Dattebayo!!",
        "Naruto: Gentle Breeze Chronicles the Film: Naruto",
        "the Genie",
        "and the Three Wishes Dattebayo!!",
      ],
      type: "Movie",
      source: "Original",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2010-07-31T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 31, month: 7, year: 2010 },
          to: { day: null, month: null, year: null },
        },
        string: "Jul 31, 2010",
      },
      duration: "14 min",
      rating: "PG-13 - Teens 13 or older",
      score: 6.96,
      scored_by: 24069,
      rank: 4086,
      popularity: 2721,
      members: 49613,
      favorites: 33,
      synopsis:
        "While enjoying a barbecue alongside team members and peers, Naruto Uzumaki stumbles upon a strange old bottle that houses a genie! The mythical being is willing to grant three wishes, but in a flurry of excitement, Naruto ends up wasting the first two. Outraged, Sasuke Uchiha and Sakura Haruno start fighting with him over the last remaining chance. As the other ninjas join the dispute, the whole matter\u2014before they know it\u2014turns into an all-out brawl for the precious container. [Written by MAL Rewrite]",
      background:
        'Although Naruto Soyokazeden Movie: Naruto to Mashin to Mitsu no Onegai Dattebayo!! was screened together with Naruto: Shippuuden Movie 4 - The Lost Tower and shares a common animanga version with the film, the OVA falls within the first series\' timeline somewhere between "Chunin Exams" and "Sasuke Recovery Mission" arcs, or from episodes 68 to 107 respectively, unlike the movie.',
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 4,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/genre/4/Comedy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 17,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
        },
        {
          mal_id: 31,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/genre/31/Super_Power",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 1735,
      url: "https://myanimelist.net/anime/1735/Naruto__Shippuuden",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/1565/111305.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/1565/111305t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1565/111305l.jpg",
        },
        webp: {
          image_url:
            "https://cdn.myanimelist.net/images/anime/1565/111305.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/1565/111305t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1565/111305l.webp",
        },
      },
      trailer: {
        youtube_id: "1dy2zPPrKD0",
        url: "https://www.youtube.com/watch?v=1dy2zPPrKD0",
        embed_url:
          "https://www.youtube.com/embed/1dy2zPPrKD0?enablejsapi=1&wmode=opaque&autoplay=1",
        images: {
          image_url: "https://img.youtube.com/vi/1dy2zPPrKD0/default.jpg",
          small_image_url:
            "https://img.youtube.com/vi/1dy2zPPrKD0/sddefault.jpg",
          medium_image_url:
            "https://img.youtube.com/vi/1dy2zPPrKD0/mqdefault.jpg",
          large_image_url:
            "https://img.youtube.com/vi/1dy2zPPrKD0/hqdefault.jpg",
          maximum_image_url:
            "https://img.youtube.com/vi/1dy2zPPrKD0/maxresdefault.jpg",
        },
      },
      approved: true,
      titles: [
        { type: "Default", title: "Naruto: Shippuuden" },
        { type: "Synonym", title: "Naruto Hurricane Chronicles" },
        { type: "Japanese", title: "\u30ca\u30eb\u30c8- \u75be\u98a8\u4f1d" },
        { type: "English", title: "Naruto Shippuden" },
        { type: "German", title: "Naruto Shippuden" },
        { type: "Spanish", title: "Naruto Shippuden" },
        { type: "French", title: "Naruto Shippuden" },
      ],
      title: "Naruto: Shippuuden",
      title_english: "Naruto Shippuden",
      title_japanese: "\u30ca\u30eb\u30c8- \u75be\u98a8\u4f1d",
      title_synonyms: ["Naruto Hurricane Chronicles"],
      type: "TV",
      source: "Manga",
      episodes: 500,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2007-02-15T00:00:00+00:00",
        to: "2017-03-23T00:00:00+00:00",
        prop: {
          from: { day: 15, month: 2, year: 2007 },
          to: { day: 23, month: 3, year: 2017 },
        },
        string: "Feb 15, 2007 to Mar 23, 2017",
      },
      duration: "23 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 8.24,
      scored_by: 1457377,
      rank: 287,
      popularity: 16,
      members: 2168262,
      favorites: 99757,
      synopsis:
        "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world. Although Naruto is older and sinister events loom on the horizon, he has changed little in personality\u2014still rambunctious and childish\u2014though he is now far more confident and possesses an even greater determination to protect his friends and home. Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage. [Written by MAL Rewrite]",
      background: null,
      season: "winter",
      year: 2007,
      broadcast: {
        day: "Thursdays",
        time: "19:30",
        timezone: "Asia/Tokyo",
        string: "Thursdays at 19:30 (JST)",
      },
      producers: [
        {
          mal_id: 16,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/16/TV_Tokyo",
        },
        {
          mal_id: 17,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/17/Aniplex",
        },
        {
          mal_id: 50,
          type: "anime",
          name: "KSS",
          url: "https://myanimelist.net/anime/producer/50/KSS",
        },
        {
          mal_id: 211,
          type: "anime",
          name: "Rakuonsha",
          url: "https://myanimelist.net/anime/producer/211/Rakuonsha",
        },
        {
          mal_id: 717,
          type: "anime",
          name: "TV Tokyo Music",
          url: "https://myanimelist.net/anime/producer/717/TV_Tokyo_Music",
        },
        {
          mal_id: 1365,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1365/Shueisha",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 17,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 10075,
      url: "https://myanimelist.net/anime/10075/Naruto_x_UT",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/3/30485.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/3/30485t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/3/30485l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/3/30485.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/3/30485t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/3/30485l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        { type: "Default", title: "Naruto x UT" },
        { type: "Japanese", title: "NARUTO\u00d7UT" },
      ],
      title: "Naruto x UT",
      title_english: null,
      title_japanese: "NARUTO\u00d7UT",
      title_synonyms: [],
      type: "OVA",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2011-01-01T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 1, month: 1, year: 2011 },
          to: { day: null, month: null, year: null },
        },
        string: "Jan 1, 2011",
      },
      duration: "6 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.38,
      scored_by: 24078,
      rank: 2118,
      popularity: 2734,
      members: 48957,
      favorites: 80,
      synopsis:
        "All-new animation offered throughout UNIQLO clothing stores in Japan on January 1, 2011. The DVD contains an exclusive version of Mayonaka Orchestra, by the Japanese rock band Aqua Timez. A limited number of the DVDs was offered as presents to people who bought UNIQLO's Naruto graphic T-shirts online or in their stores. (Source: ANN, edited)",
      background: null,
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [],
      licensors: [],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 16870,
      url: "https://myanimelist.net/anime/16870/The_Last__Naruto_the_Movie",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/10/67631.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/10/67631t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/10/67631l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/10/67631.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/10/67631t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/10/67631l.webp",
        },
      },
      trailer: {
        youtube_id: "tA3yE4_t6SY",
        url: "https://www.youtube.com/watch?v=tA3yE4_t6SY",
        embed_url:
          "https://www.youtube.com/embed/tA3yE4_t6SY?enablejsapi=1&wmode=opaque&autoplay=1",
        images: {
          image_url: "https://img.youtube.com/vi/tA3yE4_t6SY/default.jpg",
          small_image_url:
            "https://img.youtube.com/vi/tA3yE4_t6SY/sddefault.jpg",
          medium_image_url:
            "https://img.youtube.com/vi/tA3yE4_t6SY/mqdefault.jpg",
          large_image_url:
            "https://img.youtube.com/vi/tA3yE4_t6SY/hqdefault.jpg",
          maximum_image_url:
            "https://img.youtube.com/vi/tA3yE4_t6SY/maxresdefault.jpg",
        },
      },
      approved: true,
      titles: [
        { type: "Default", title: "The Last: Naruto the Movie" },
        {
          type: "Synonym",
          title:
            "Naruto Movie 10: Naruto the Movie: The Last,Naruto: Shippuuden Movie 7 - The Last",
        },
        { type: "Japanese", title: "THE LAST NARUTO THE MOVIE" },
        { type: "English", title: "The Last: Naruto the Movie" },
        { type: "German", title: "Naruto Film 7: The Last" },
        { type: "Spanish", title: "Naruto Pel\u00edcula 7: The Last" },
        { type: "French", title: "Naruto Film 7: The Last" },
      ],
      title: "The Last: Naruto the Movie",
      title_english: "The Last: Naruto the Movie",
      title_japanese: "THE LAST NARUTO THE MOVIE",
      title_synonyms: [
        "Naruto Movie 10: Naruto the Movie: The Last,Naruto: Shippuuden Movie 7 - The Last",
      ],
      type: "Movie",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2014-12-06T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 6, month: 12, year: 2014 },
          to: { day: null, month: null, year: null },
        },
        string: "Dec 6, 2014",
      },
      duration: "1 hr 52 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.78,
      scored_by: 356506,
      rank: 929,
      popularity: 347,
      members: 530146,
      favorites: 1929,
      synopsis:
        "Two years have passed since the end of the Fourth Great Ninja War. Konohagakure has remained in a state of peace and harmony\u2014until Sixth Hokage Kakashi Hatake notices the moon is dangerously approaching the Earth, posing the threat of planetary ruin. Amidst the grave ordeal, the Konoha is invaded by a new evil, Toneri Oosutuski, who suddenly abducts Hinata Hyuuga's little sister Hanabi. Kakashi dispatches a skilled ninja team comprised of Naruto Uzumaki, Sakura Haruno, Shikamaru Nara, Sai, and Hinata in an effort to rescue Hanabi from the diabolical clutches of Toneri. However, during their mission, the team faces several obstacles that challenge them, foiling their efforts. With her abduction, the relationships the team share with one another are tested, and with the world reaching the brink of destruction, they must race against time to ensure the safety of their planet. Meanwhile, as the battle ensues, Naruto is driven to fight for something greater than he has ever imagined\u2014love. [Written by MAL Rewrite]",
      background:
        "The events in the film The Last: Naruto the Movie take place chronologically between chapters 699 and 700 of the original manga. It is the tenth animated film in the Naruto series, and was made to commemorate the manga\u2019s 15th anniversary.",
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [
        {
          mal_id: 16,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/16/TV_Tokyo",
        },
        {
          mal_id: 1365,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1365/Shueisha",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
        {
          mal_id: 22,
          type: "anime",
          name: "Romance",
          url: "https://myanimelist.net/anime/genre/22/Romance",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 28755,
      url: "https://myanimelist.net/anime/28755/Boruto__Naruto_the_Movie",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/4/78280.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/4/78280t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/4/78280l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/4/78280.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/4/78280t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/4/78280l.webp",
        },
      },
      trailer: {
        youtube_id: "ld-oqpvOBAk",
        url: "https://www.youtube.com/watch?v=ld-oqpvOBAk",
        embed_url:
          "https://www.youtube.com/embed/ld-oqpvOBAk?enablejsapi=1&wmode=opaque&autoplay=1",
        images: {
          image_url: "https://img.youtube.com/vi/ld-oqpvOBAk/default.jpg",
          small_image_url:
            "https://img.youtube.com/vi/ld-oqpvOBAk/sddefault.jpg",
          medium_image_url:
            "https://img.youtube.com/vi/ld-oqpvOBAk/mqdefault.jpg",
          large_image_url:
            "https://img.youtube.com/vi/ld-oqpvOBAk/hqdefault.jpg",
          maximum_image_url:
            "https://img.youtube.com/vi/ld-oqpvOBAk/maxresdefault.jpg",
        },
      },
      approved: true,
      titles: [
        { type: "Default", title: "Boruto: Naruto the Movie" },
        { type: "Synonym", title: "Gekijouban Naruto (2015)" },
        { type: "Japanese", title: "BORUTO -NARUTO THE MOVIE-" },
        { type: "English", title: "Boruto: Naruto the Movie" },
        { type: "German", title: "Boruto: Naruto The Movie" },
        { type: "Spanish", title: "Boruto: Naruto La Pel\u00edcula" },
        { type: "French", title: "Boruto: Naruto Le Film" },
      ],
      title: "Boruto: Naruto the Movie",
      title_english: "Boruto: Naruto the Movie",
      title_japanese: "BORUTO -NARUTO THE MOVIE-",
      title_synonyms: ["Gekijouban Naruto (2015)"],
      type: "Movie",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2015-08-07T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 7, month: 8, year: 2015 },
          to: { day: null, month: null, year: null },
        },
        string: "Aug 7, 2015",
      },
      duration: "1 hr 35 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.42,
      scored_by: 274616,
      rank: 1941,
      popularity: 441,
      members: 422469,
      favorites: 883,
      synopsis:
        "The spirited Boruto Uzumaki, son of Seventh Hokage Naruto, is a skilled ninja who possesses the same brashness and passion his father once had. However, the constant absence of his father, who is busy with his Hokage duties, puts a damper on Boruto's fire. Upon learning that his father will watch the aspiring ninjas who will participate in the upcoming Chunin exams, Boruto is driven to prove to him that he is worthy of his attention. In order to do so, he enlists the help of Naruto's childhood friend and rival, Sasuke Uchiha. The Chunin exams begin and progress smoothly, until suddenly, the Konohagakure is attacked by a new foe that threatens the long-standing peace of the village. Now facing real danger, Naruto and his comrades must work together to protect the future of their cherished home and defeat the evil that terrorizes their world. As this battle ensues, Boruto comes to realize the struggles his father once experienced\u2014and what it truly means to be a ninja. [Written by MAL Rewrite]",
      background:
        "Boruto: Naruto the Movie is officially the highest grossing feature film in the entire Naruto franchise, and was number 11 on Japan's Top Grossing Domestic Movies of 2015. This is the first time that original creator Masashi Kishimoto has written the entire screenplay for a Naruto movie.",
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [
        {
          mal_id: 245,
          type: "anime",
          name: "Toho",
          url: "https://myanimelist.net/anime/producer/245/Toho",
        },
        {
          mal_id: 1365,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1365/Shueisha",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 17,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 34566,
      url: "https://myanimelist.net/anime/34566/Boruto__Naruto_Next_Generations",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/9/84460.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/9/84460t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/9/84460l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/9/84460.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/9/84460t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/9/84460l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        { type: "Default", title: "Boruto: Naruto Next Generations" },
        { type: "Japanese", title: "BORUTO -NARUTO NEXT GENERATIONS-" },
        { type: "English", title: "Boruto: Naruto Next Generations" },
      ],
      title: "Boruto: Naruto Next Generations",
      title_english: "Boruto: Naruto Next Generations",
      title_japanese: "BORUTO -NARUTO NEXT GENERATIONS-",
      title_synonyms: [],
      type: "TV",
      source: "Manga",
      episodes: null,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2017-04-05T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 5, month: 4, year: 2017 },
          to: { day: null, month: null, year: null },
        },
        string: "Apr 5, 2017 to ?",
      },
      duration: "23 min",
      rating: "PG-13 - Teens 13 or older",
      score: 5.79,
      scored_by: 382900,
      rank: 9932,
      popularity: 194,
      members: 767295,
      favorites: 6641,
      synopsis:
        "Following the successful end of the Fourth Shinobi World War, Konohagakure has been enjoying a period of peace, prosperity, and extraordinary technological advancement. This is all due to the efforts of the Allied Shinobi Forces and the village's Seventh Hokage, Naruto Uzumaki. Now resembling a modern metropolis, Konohagakure has changed, particularly the life of a shinobi. Under the watchful eye of Naruto and his old comrades, a new generation of shinobi has stepped up to learn the ways of the ninja. Boruto Uzumaki is often the center of attention as the son of the Seventh Hokage. Despite having inherited Naruto's boisterous and stubborn demeanor, Boruto is considered a prodigy and is able to unleash his potential with the help of supportive friends and family. Unfortunately, this has only worsened his arrogance and his desire to surpass Naruto which, along with his father's busy lifestyle, has strained their relationship. However, a sinister force brewing within the village may threaten Boruto's carefree life. New friends and familiar faces join Boruto as a new story begins in Boruto: Naruto Next Generations. [Written by MAL Rewrite]",
      background:
        "The airing time was Wednesdays 17:55 between April 5, 2017 - April 25, 2018. The airing time was changed to Thursdays 17:25 between May 3, 2018 - September 20, 2018. The airing time is Sundays 17:30 beginning October 7, 2018.",
      season: "spring",
      year: 2017,
      broadcast: {
        day: "Sundays",
        time: "17:30",
        timezone: "Asia/Tokyo",
        string: "Sundays at 17:30 (JST)",
      },
      producers: [
        {
          mal_id: 16,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/16/TV_Tokyo",
        },
        {
          mal_id: 17,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/17/Aniplex",
        },
        {
          mal_id: 211,
          type: "anime",
          name: "Rakuonsha",
          url: "https://myanimelist.net/anime/producer/211/Rakuonsha",
        },
        {
          mal_id: 1365,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1365/Shueisha",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 17,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 7367,
      url: "https://myanimelist.net/anime/7367/Naruto__The_Cross_Roads",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/11/27050.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/11/27050t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/11/27050l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/11/27050.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/11/27050t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/11/27050l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        { type: "Default", title: "Naruto: The Cross Roads" },
        { type: "Synonym", title: "Naruto's 10th Anniversary" },
        {
          type: "Japanese",
          title:
            "\u30ca\u30eb\u30c8 \u30b5\u30fb\u30af\u30ed\u30b9\u30ed\u30fc\u30ba",
        },
      ],
      title: "Naruto: The Cross Roads",
      title_english: null,
      title_japanese:
        "\u30ca\u30eb\u30c8 \u30b5\u30fb\u30af\u30ed\u30b9\u30ed\u30fc\u30ba",
      title_synonyms: ["Naruto's 10th Anniversary"],
      type: "Special",
      source: "Original",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2009-10-12T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 12, month: 10, year: 2009 },
          to: { day: null, month: null, year: null },
        },
        string: "Oct 12, 2009",
      },
      duration: "27 min",
      rating: "PG-13 - Teens 13 or older",
      score: 6.8,
      scored_by: 22650,
      rank: 4836,
      popularity: 2733,
      members: 49085,
      favorites: 35,
      synopsis:
        "The operation to find a missing person goes awry when Kakashi Hatake falls victim to a suspicious trap and gets separated from his students Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno. To make matters worse, the trio is ambushed by mysterious ninjas who capture Sakura, prompting Naruto and Sasuke to give chase. As the two boys engage in a dangerous battle, not even Sasuke's troubling discovery about the mission can deter them from their endeavor to reunite the team and accomplish their task. [Written by MAL Rewrite]",
      background:
        'Celebrating the 10th anniversary of the Naruto manga serialization, the spin-off premiered at the 2009 Jump Festa Anime Tour. It used the same CGI graphics as featured in the Naruto: Ultimate Ninja Storm game. Although the OVA\'s story takes place as early as Naruto\'s episode 19, it also contains a scene set in between two of Naruto: Shippuden\'s arcs: the end of "Fated Battle Between Brothers" and the beginning of "Five Kage Summit," or from episodes 144 to 197 respectively.',
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [],
      licensors: [],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 19511,
      url: "https://myanimelist.net/anime/19511/Naruto__Shippuuden_-_Sunny_Side_Battle",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/1047/91638.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/1047/91638t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1047/91638l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/1047/91638.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/1047/91638t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1047/91638l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        { type: "Default", title: "Naruto: Shippuuden - Sunny Side Battle" },
        {
          type: "Synonym",
          title: "Naruto: Shippuuden - Jump Festa 2013 Special",
        },
        {
          type: "Synonym",
          title: "Naruto: Shippuuden - Jump Super Anime Tour 2013 Special",
        },
        {
          type: "Japanese",
          title:
            "\u30ca\u30eb\u30c8-NARUTO-\u75be\u98a8\u4f1d \u30b5\u30cb\u30fc\u30fb\u30b5\u30a4\u30c9\u30fb\u30d0\u30c8\u30eb",
        },
      ],
      title: "Naruto: Shippuuden - Sunny Side Battle",
      title_english: null,
      title_japanese:
        "\u30ca\u30eb\u30c8-NARUTO-\u75be\u98a8\u4f1d \u30b5\u30cb\u30fc\u30fb\u30b5\u30a4\u30c9\u30fb\u30d0\u30c8\u30eb",
      title_synonyms: [
        "Naruto: Shippuuden - Jump Festa 2013 Special",
        "Naruto: Shippuuden - Jump Super Anime Tour 2013 Special",
      ],
      type: "Special",
      source: "Original",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2013-10-06T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 6, month: 10, year: 2013 },
          to: { day: null, month: null, year: null },
        },
        string: "Oct 6, 2013",
      },
      duration: "11 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.54,
      scored_by: 34830,
      rank: 1558,
      popularity: 2368,
      members: 63626,
      favorites: 164,
      synopsis:
        "Back at their childhood home, siblings Itachi and Sasuke Uchiha experience an unusual morning together when Itachi becomes obsessed with cooking the perfect fried egg for Sasuke. Despite being completely focused on the task, he continuously fails to achieve the desired result. As Sasuke marvels at his brother's seemingly unnecessary behavior, he comes to realize that there is more than meets the eye to Itachi's efforts. [Written by MAL Rewrite]",
      background:
        "Naruto: Shippuuden - Sunny Side Battle is a special short anime that aired during Japan's 2013 Jump Super Anime Tour between October 6 and November 24. The feature was also included as a bonus in the Naruto Shippuuden: Ultimate Ninja Storm Revolution game, which was released in September 2014 in Japan, Europe, and North America.",
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [],
      licensors: [],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 4,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/genre/4/Comedy",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
        {
          mal_id: 47,
          type: "anime",
          name: "Gourmet",
          url: "https://myanimelist.net/anime/genre/47/Gourmet",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 13667,
      url: "https://myanimelist.net/anime/13667/Naruto__Shippuuden_Movie_6_-_Road_to_Ninja",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/1620/94336.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/1620/94336t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1620/94336l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/1620/94336.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/1620/94336t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1620/94336l.webp",
        },
      },
      trailer: {
        youtube_id: "TDpYU8OmD-k",
        url: "https://www.youtube.com/watch?v=TDpYU8OmD-k",
        embed_url:
          "https://www.youtube.com/embed/TDpYU8OmD-k?enablejsapi=1&wmode=opaque&autoplay=1",
        images: {
          image_url: "https://img.youtube.com/vi/TDpYU8OmD-k/default.jpg",
          small_image_url:
            "https://img.youtube.com/vi/TDpYU8OmD-k/sddefault.jpg",
          medium_image_url:
            "https://img.youtube.com/vi/TDpYU8OmD-k/mqdefault.jpg",
          large_image_url:
            "https://img.youtube.com/vi/TDpYU8OmD-k/hqdefault.jpg",
          maximum_image_url:
            "https://img.youtube.com/vi/TDpYU8OmD-k/maxresdefault.jpg",
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto: Shippuuden Movie 6 - Road to Ninja",
        },
        { type: "Synonym", title: "Naruto Movie 9" },
        { type: "Japanese", title: "ROAD TO NINJA NARUTO THE MOVIE" },
        { type: "English", title: "Road to Ninja: Naruto the Movie" },
        { type: "German", title: "Naruto Film 6: Road to Ninja" },
        { type: "French", title: "Naruto Film 6: Road to Ninja" },
      ],
      title: "Naruto: Shippuuden Movie 6 - Road to Ninja",
      title_english: "Road to Ninja: Naruto the Movie",
      title_japanese: "ROAD TO NINJA NARUTO THE MOVIE",
      title_synonyms: ["Naruto Movie 9"],
      type: "Movie",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2012-07-28T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 28, month: 7, year: 2012 },
          to: { day: null, month: null, year: null },
        },
        string: "Jul 28, 2012",
      },
      duration: "1 hr 49 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.67,
      scored_by: 187131,
      rank: 1166,
      popularity: 643,
      members: 307706,
      favorites: 504,
      synopsis:
        "Returning home to Konohagakure, the young ninja celebrate defeating a group of supposed Akatsuki members. Naruto Uzumaki and Sakura Haruno, however, feel differently. Naruto is jealous of his comrades' congratulatory families, wishing for the presence of his own parents. Sakura, on the other hand, is angry at her embarrassing parents, and wishes for no parents at all. The two clash over their opposing ideals, but are faced with a more pressing matter when the masked Madara Uchiha suddenly appears and transports them to an alternate world. In this world, Sakura's parents are considered heroes\u2014for they gave their lives to protect Konohagakure from the Nine-Tailed Fox attack 10 years ago. Consequently, Naruto's parents, Minato Namikaze and Kushina Uzumaki, are alive and well. Unable to return home or find the masked Madara, Naruto and Sakura stay in this new world and enjoy the changes they have always longed for. All seems well for the two ninja, until an unexpected threat emerges that pushes Naruto and Sakura to not only fight for the Konohagakure of the alternate world, but also to find a way back to their own. [Written by MAL Rewrite]",
      background: null,
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [
        {
          mal_id: 16,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/16/TV_Tokyo",
        },
        {
          mal_id: 17,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/17/Aniplex",
        },
        {
          mal_id: 53,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/53/Dentsu",
        },
        {
          mal_id: 245,
          type: "anime",
          name: "Toho",
          url: "https://myanimelist.net/anime/producer/245/Toho",
        },
        {
          mal_id: 1365,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1365/Shueisha",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 62,
          type: "anime",
          name: "Isekai",
          url: "https://myanimelist.net/anime/genre/62/Isekai",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 4134,
      url: "https://myanimelist.net/anime/4134/Naruto__Shippuuden_-_Shippuu_Konoha_Gakuen_Den",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/5/51895.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/5/51895t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/5/51895l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/5/51895.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/5/51895t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/5/51895l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: 'Naruto: Shippuuden - Shippuu! "Konoha Gakuen" Den',
        },
        { type: "Synonym", title: "NARUTO Shippu Konoha Gakuen Den Special" },
        { type: "Synonym", title: "Konoha High" },
        {
          type: "Japanese",
          title:
            'NARUTO \u75be\u98a8\u4f1d\u300c\u75be\u98a8! "\u6728\u30ce\u8449\u5b66\u5712"\u4f1d\u300d',
        },
        { type: "English", title: "Naruto Shippuden: Konoha Gakuen - Special" },
      ],
      title: 'Naruto: Shippuuden - Shippuu! "Konoha Gakuen" Den',
      title_english: "Naruto Shippuden: Konoha Gakuen - Special",
      title_japanese:
        'NARUTO \u75be\u98a8\u4f1d\u300c\u75be\u98a8! "\u6728\u30ce\u8449\u5b66\u5712"\u4f1d\u300d',
      title_synonyms: [
        "NARUTO Shippu Konoha Gakuen Den Special",
        "Konoha High",
      ],
      type: "Special",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2008-02-06T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 6, month: 2, year: 2008 },
          to: { day: null, month: null, year: null },
        },
        string: "Feb 6, 2008",
      },
      duration: "8 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.14,
      scored_by: 30528,
      rank: 3275,
      popularity: 2413,
      members: 61525,
      favorites: 187,
      synopsis:
        "Naruto school special. Naruto is a new cool student and when he meets Sasuke they start fighting.",
      background: null,
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [
        {
          mal_id: 230,
          type: "anime",
          name: "Bandai",
          url: "https://myanimelist.net/anime/producer/230/Bandai",
        },
      ],
      licensors: [],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 17,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
        },
        {
          mal_id: 23,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/genre/23/School",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 8246,
      url: "https://myanimelist.net/anime/8246/Naruto__Shippuuden_Movie_4_-_The_Lost_Tower",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/1479/116734.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/1479/116734t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1479/116734l.jpg",
        },
        webp: {
          image_url:
            "https://cdn.myanimelist.net/images/anime/1479/116734.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/1479/116734t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1479/116734l.webp",
        },
      },
      trailer: {
        youtube_id: "q4C4CZT8NTM",
        url: "https://www.youtube.com/watch?v=q4C4CZT8NTM",
        embed_url:
          "https://www.youtube.com/embed/q4C4CZT8NTM?enablejsapi=1&wmode=opaque&autoplay=1",
        images: {
          image_url: "https://img.youtube.com/vi/q4C4CZT8NTM/default.jpg",
          small_image_url:
            "https://img.youtube.com/vi/q4C4CZT8NTM/sddefault.jpg",
          medium_image_url:
            "https://img.youtube.com/vi/q4C4CZT8NTM/mqdefault.jpg",
          large_image_url:
            "https://img.youtube.com/vi/q4C4CZT8NTM/hqdefault.jpg",
          maximum_image_url:
            "https://img.youtube.com/vi/q4C4CZT8NTM/maxresdefault.jpg",
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto: Shippuuden Movie 4 - The Lost Tower",
        },
        { type: "Synonym", title: "Naruto Movie 7" },
        {
          type: "Synonym",
          title: "Gekijouban Naruto Shippuuden: The Lost Tower",
        },
        {
          type: "Japanese",
          title:
            "\u5287\u5834\u7248 NARUTO-\u30ca\u30eb\u30c8-\u75be\u98a8\u4f1d \u30b6\u30fb\u30ed\u30b9\u30c8\u30bf\u30ef\u30fc",
        },
        {
          type: "English",
          title: "Naruto Shippuden the Movie: The Lost Tower",
        },
        { type: "German", title: "Naruto Shippuden Film 4: The Lost Tower" },
        { type: "French", title: "Naruto Shippuden Film 4: The Lost Tower" },
      ],
      title: "Naruto: Shippuuden Movie 4 - The Lost Tower",
      title_english: "Naruto Shippuden the Movie: The Lost Tower",
      title_japanese:
        "\u5287\u5834\u7248 NARUTO-\u30ca\u30eb\u30c8-\u75be\u98a8\u4f1d \u30b6\u30fb\u30ed\u30b9\u30c8\u30bf\u30ef\u30fc",
      title_synonyms: [
        "Naruto Movie 7",
        "Gekijouban Naruto Shippuuden: The Lost Tower",
      ],
      type: "Movie",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2010-07-31T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 31, month: 7, year: 2010 },
          to: { day: null, month: null, year: null },
        },
        string: "Jul 31, 2010",
      },
      duration: "1 hr 25 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.42,
      scored_by: 133281,
      rank: 1965,
      popularity: 887,
      members: 227961,
      favorites: 194,
      synopsis:
        "Led by Yamato, Naruto Uzumaki, Sakura Haruno, and Sai are assigned to capture Mukade, a rogue ninja who is pursuing the ancient chakra Ryuumyaku located underneath the Rouran ruins. While the Ryuumyaku has been sealed by the Fourth Hokage, the group fails to prevent Mukade from releasing its power. Consequently, a strong energy burst engulfs both Naruto and Yamato before they can escape. As he awakens in a magnificent yet hostile kingdom, Naruto meets its young queen Saara and three Konohagakure ninjas on a top-secret mission. They reveal to him that he has time-traveled to Rouran 20 years into the past! To make matters worse, Mukade has already infiltrated the royal court, becoming the naive queen's most trusted minister under the alias Anrokuzan. Joining forces with the three ninjas, Naruto must protect Saara's life without fail to stop the villain's plans and return to the present. [Written by MAL Rewrite]",
      background:
        'Naruto: Shippuuden Movie 4 - The Lost Tower is set approximately in between episodes 152-156 of the Naruto: Shippuuden anime series at the beginning of the "Pain\'s Assault" arc. Along with the film, an exclusive animated short feature named Naruto Soyokazeden Movie: Naruto to Mashin to Mitsu no Onegai Dattebayo!! was shown as well. To celebrate the movie\'s release on July 31, 2010, a one-hour episode titled "Naruto Shippuuden Big Adventure! The Quest for the Fourth Hokage\'s Legacy" was broadcasted on July 29, 2010. The DVD version was issued on April 27, 2011. The film was released in North America on September 17, 2013 by Viz Media. According to a Pia Corporation survey, Naruto: Shippuuden Movie 4 - The Lost Tower had been well received not only by children but also by women in their teens and 20s. The movie has an animanga adaptation as well, released exclusively in Japan on August 4, 2011.',
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [
        {
          mal_id: 245,
          type: "anime",
          name: "Toho",
          url: "https://myanimelist.net/anime/producer/245/Toho",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 78,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/genre/78/Time_Travel",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 36564,
      url: "https://myanimelist.net/anime/36564/Kamiusagi_Rope_x_Boruto__Naruto_Next_Generations",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/3/88377.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/3/88377t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/3/88377l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/3/88377.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/3/88377t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/3/88377l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Kamiusagi Rope x Boruto: Naruto Next Generations",
        },
        { type: "Synonym", title: "TOHO Cinemas Ueno" },
        {
          type: "Japanese",
          title:
            "\u300c\u7d19\u514e\u30ed\u307a\u300d\u00d7\u300cBORUTO-\u30dc\u30eb\u30c8- NARUTO NEXT\u3000GENERATIONS\u300d",
        },
      ],
      title: "Kamiusagi Rope x Boruto: Naruto Next Generations",
      title_english: null,
      title_japanese:
        "\u300c\u7d19\u514e\u30ed\u307a\u300d\u00d7\u300cBORUTO-\u30dc\u30eb\u30c8- NARUTO NEXT\u3000GENERATIONS\u300d",
      title_synonyms: ["TOHO Cinemas Ueno"],
      type: "ONA",
      source: "Other",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2017-10-12T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 12, month: 10, year: 2017 },
          to: { day: null, month: null, year: null },
        },
        string: "Oct 12, 2017",
      },
      duration: "1 min",
      rating: "G - All Ages",
      score: 5.53,
      scored_by: 2064,
      rank: 10945,
      popularity: 6451,
      members: 7288,
      favorites: 27,
      synopsis:
        "A 3-way collaboration between Kamiusagi Rope, Boruto: Naruto Next Generations, and TOHO Cinemas. The purpose is to promote a new TOHO theater opening up in Ueno on November 4, 2017. The collaboration video will also be available to view in TOHO Cinemas in Tokyo, Kanagawa, Chiba, and Saitama from Ocotober 21 - December 1.",
      background: null,
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [
        {
          mal_id: 245,
          type: "anime",
          name: "Toho",
          url: "https://myanimelist.net/anime/producer/245/Toho",
        },
      ],
      licensors: [],
      studios: [],
      genres: [
        {
          mal_id: 4,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/genre/4/Comedy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [],
    },
    {
      mal_id: 2472,
      url: "https://myanimelist.net/anime/2472/Naruto__Shippuuden_Movie_1",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/6/79705.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/6/79705t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/6/79705l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/6/79705.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/6/79705t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/6/79705l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        { type: "Default", title: "Naruto: Shippuuden Movie 1" },
        { type: "Synonym", title: "Naruto Shippuden Movie" },
        { type: "Synonym", title: "Naruto Movie 4" },
        { type: "Synonym", title: "Gekijouban Naruto Shippuuden" },
        {
          type: "Japanese",
          title:
            "\u5287\u5834\u7248NARUTO -\u30ca\u30eb\u30c8- \u75be\u98a8\u4f1d",
        },
        { type: "English", title: "Naruto: Shippuden the Movie" },
        { type: "German", title: "Naruto Shippuden: Der Film" },
        { type: "Spanish", title: "Naruto Shippuden: La Pel\u00edcula" },
        {
          type: "French",
          title: "Naruto Shippuden Le Film: Un Funeste Pr\u00e9sage",
        },
      ],
      title: "Naruto: Shippuuden Movie 1",
      title_english: "Naruto: Shippuden the Movie",
      title_japanese:
        "\u5287\u5834\u7248NARUTO -\u30ca\u30eb\u30c8- \u75be\u98a8\u4f1d",
      title_synonyms: [
        "Naruto Shippuden Movie",
        "Naruto Movie 4",
        "Gekijouban Naruto Shippuuden",
      ],
      type: "Movie",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2007-08-04T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 4, month: 8, year: 2007 },
          to: { day: null, month: null, year: null },
        },
        string: "Aug 4, 2007",
      },
      duration: "1 hr 34 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.29,
      scored_by: 159616,
      rank: 2522,
      popularity: 752,
      members: 270396,
      favorites: 291,
      synopsis:
        "A group of ninja is planning to revive a powerful demon, and once its spirit is reunited with its body, the world will be destroyed. The only way to prevent this from happening is for Shion, a shrine maiden, to seal it away for good. Naruto Uzumaki is tasked to guard her, but one thing stops Shion from accepting his help: she also has the ability to predict death\u2014and she has foreseen his demise approaching soon. In order to escape his fate, Naruto must stay away from Shion; however, undeterred, he chooses to challenge the prophecy in order to protect Shion and the world. [Written by MAL Rewrite]",
      background: null,
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [
        {
          mal_id: 16,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/16/TV_Tokyo",
        },
        {
          mal_id: 17,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/17/Aniplex",
        },
        {
          mal_id: 53,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/53/Dentsu",
        },
        {
          mal_id: 230,
          type: "anime",
          name: "Bandai",
          url: "https://myanimelist.net/anime/producer/230/Bandai",
        },
        {
          mal_id: 1365,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1365/Shueisha",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 936,
      url: "https://myanimelist.net/anime/936/Naruto_Movie_2__Dai_Gekitotsu_Maboroshi_no_Chiteiiseki_Dattebayo",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/11/76016.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/11/76016t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/11/76016l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/11/76016.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/11/76016t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/11/76016l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title:
            "Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo!",
        },
        { type: "Synonym", title: "Naruto THE Movie vol.2" },
        { type: "Synonym", title: "Naruto Movie 2" },
        { type: "Synonym", title: "Gekijouban Naruto" },
        {
          type: "Japanese",
          title:
            "\u5287\u5834\u7248\u3000NARUTO\u3000\u5927\u6fc0\u7a81\uff01\u5e7b\u306e\u5730\u5e95\u907a\u8de1\u3060\u3063\u3066\u3070\u3088",
        },
        {
          type: "English",
          title: "Naruto the Movie 2: Legend of the Stone of Gelel",
        },
        {
          type: "German",
          title: "Naruto Film 2: Die Legende des Steins von Gelel",
        },
        {
          type: "Spanish",
          title:
            "Naruto Pel\u00edcula 2: Las Ruinas Ilusorias en lo Profundo de la Tierra",
        },
        {
          type: "French",
          title: "Naruto Film 2: La l\u00e9gende de la Pierre de Guelel",
        },
      ],
      title:
        "Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo!",
      title_english: "Naruto the Movie 2: Legend of the Stone of Gelel",
      title_japanese:
        "\u5287\u5834\u7248\u3000NARUTO\u3000\u5927\u6fc0\u7a81\uff01\u5e7b\u306e\u5730\u5e95\u907a\u8de1\u3060\u3063\u3066\u3070\u3088",
      title_synonyms: [
        "Naruto THE Movie vol.2",
        "Naruto Movie 2",
        "Gekijouban Naruto",
      ],
      type: "Movie",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2005-08-06T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 6, month: 8, year: 2005 },
          to: { day: null, month: null, year: null },
        },
        string: "Aug 6, 2005",
      },
      duration: "1 hr 37 min",
      rating: "PG-13 - Teens 13 or older",
      score: 6.87,
      scored_by: 127665,
      rank: 4515,
      popularity: 933,
      members: 216012,
      favorites: 157,
      synopsis:
        "In a tumultuous effort, the Sunagakure ninjas attempt to repel an unforeseen invasion of mysterious armored warriors on the Land of Wind. Shortly afterwards, the same armored troops led by Temujin\u2014a skilled knight of impressive power\u2014ambush Naruto Uzumaki, Sakura Haruno, and Shikamaru Nara, who are on a mission to recover a lost ferret. Naruto and Temujin engage in a fierce fight that ends with both of them falling off a cliff. Taken aback by their friend's sudden misfortune, Sakura and Shikamaru witness yet another alarming development: a massive moving structure appears out of nowhere, ravaging any trees and rocks in its path. While Sakura sets off to find Naruto, Shikamaru infiltrates the imposing fortress in hopes of learning more about the critical situation. Entangled in a relentless conflict, the Konohagakure ninjas join forces with their Sunagakure counterparts to defeat the common enemy. However, amidst the turmoil, a clash between two different visions of an ideal world emerges. [Written by MAL Rewrite]",
      background:
        'Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo! is set approximately after the "Sasuke Recovery Mission" arc of the Naruto anime series, which ends with episode 135. After its theatrical release in Japan on August 6, 2005, Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo! became a direct-to-video film in the United States. It aired on Cartoon Network on July 26, 2008 and was released on DVD on July 29, 2008. The movie has an animanga adaptation released in Japan on March 3, 2006 and in the United States on November 4, 2008.',
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [
        {
          mal_id: 230,
          type: "anime",
          name: "Bandai",
          url: "https://myanimelist.net/anime/producer/230/Bandai",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 442,
      url: "https://myanimelist.net/anime/442/Naruto_Movie_1__Dai_Katsugeki_Yuki_Hime_Shinobu_Houjou_Dattebayo",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/6/76015.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/6/76015t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/6/76015l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/6/76015.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/6/76015t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/6/76015l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title:
            "Naruto Movie 1: Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo!",
        },
        {
          type: "Synonym",
          title: "Naruto: Daikatsugeki! Yukihime Ninpocho Dattebayo!",
        },
        {
          type: "Synonym",
          title: "Naruto: It's the Snow Princess' Ninja Art Book!",
        },
        {
          type: "Japanese",
          title:
            "\u5287\u5834\u7248\u3000NARUTO\u3000\u5927\u6d3b\u5287\uff01\u96ea\u59eb\u5fcd\u6cd5\u5e16\u3060\u3063\u3066\u3070\u3088!!",
        },
        {
          type: "English",
          title: "Naruto the Movie 1: Ninja Clash in the Land of Snow",
        },
        {
          type: "German",
          title: "Naruto Der Film: Geheimmission im Land des Ewigen Schnees",
        },
        {
          type: "French",
          title: "Naruto Le Film: Naruto et la Princesse des Neiges",
        },
      ],
      title:
        "Naruto Movie 1: Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo!",
      title_english: "Naruto the Movie 1: Ninja Clash in the Land of Snow",
      title_japanese:
        "\u5287\u5834\u7248\u3000NARUTO\u3000\u5927\u6d3b\u5287\uff01\u96ea\u59eb\u5fcd\u6cd5\u5e16\u3060\u3063\u3066\u3070\u3088!!",
      title_synonyms: [
        "Naruto: Daikatsugeki! Yukihime Ninpocho Dattebayo!",
        "Naruto: It's the Snow Princess' Ninja Art Book!",
      ],
      type: "Movie",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2004-08-21T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 21, month: 8, year: 2004 },
          to: { day: null, month: null, year: null },
        },
        string: "Aug 21, 2004",
      },
      duration: "1 hr 22 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.11,
      scored_by: 167704,
      rank: 3454,
      popularity: 754,
      members: 269923,
      favorites: 272,
      synopsis:
        "Naruto Uzumaki and his squadmates, Sasuke Uchiha and Sakura Haruno, are sent on a mission to escort a movie crew on its way to film in the Land of Snow. They soon find out that they are accompanying a famous actress, Yukie Fujikaze, who persistently refuses to travel there, making the trip far more difficult than originally intended. After a surprising encounter with ninjas from the Land of Snow, Naruto discovers that there is more to Yukie than meets the eye. Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo! follows the group as they attempt to overcome the obstacles in the Land of Snow and unveil Yukie's true purpose there as well. [Written by MAL Rewrite]",
      background: null,
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [
        {
          mal_id: 17,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/17/Aniplex",
        },
        {
          mal_id: 230,
          type: "anime",
          name: "Bandai",
          url: "https://myanimelist.net/anime/producer/230/Bandai",
        },
        {
          mal_id: 717,
          type: "anime",
          name: "TV Tokyo Music",
          url: "https://myanimelist.net/anime/producer/717/TV_Tokyo_Music",
        },
        {
          mal_id: 1365,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1365/Shueisha",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 2144,
      url: "https://myanimelist.net/anime/2144/Naruto_Movie_3__Dai_Koufun_Mikazuki_Jima_no_Animaru_Panikku_Dattebayo",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/6/76017.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/6/76017t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/6/76017l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/6/76017.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/6/76017t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/6/76017l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title:
            "Naruto Movie 3: Dai Koufun! Mikazuki Jima no Animaru Panikku Dattebayo!",
        },
        { type: "Synonym", title: "Naruto Movie Volume 3" },
        {
          type: "Synonym",
          title:
            "Naruto: Gekijouban Naruto: Dai Koufun! Mikazuki-jima no Animal Panic Datte ba yo!",
        },
        {
          type: "Japanese",
          title:
            "\u5287\u5834\u7248 NARUTO -\u30ca\u30eb\u30c8- \u5927\u8208\u596e!\u307f\u304b\u3065\u304d\u5cf6\u306e\u30a2\u30cb\u30de\u30eb\u9a12\u52d5\u3060\u3063\u3066\u3070\u3088",
        },
        {
          type: "English",
          title: "Naruto the Movie 3: Guardians of the Crescent Moon Kingdom",
        },
        {
          type: "German",
          title: "Naruto The Movie 3: Die H\u00fcter des Sichelmondreichs",
        },
        {
          type: "French",
          title: "Naruto Le Film 3: Mission Sp\u00e9ciale au Pays de la Lune",
        },
      ],
      title:
        "Naruto Movie 3: Dai Koufun! Mikazuki Jima no Animaru Panikku Dattebayo!",
      title_english:
        "Naruto the Movie 3: Guardians of the Crescent Moon Kingdom",
      title_japanese:
        "\u5287\u5834\u7248 NARUTO -\u30ca\u30eb\u30c8- \u5927\u8208\u596e!\u307f\u304b\u3065\u304d\u5cf6\u306e\u30a2\u30cb\u30de\u30eb\u9a12\u52d5\u3060\u3063\u3066\u3070\u3088",
      title_synonyms: [
        "Naruto Movie Volume 3",
        "Naruto: Gekijouban Naruto: Dai Koufun! Mikazuki-jima no Animal Panic Datte ba yo!",
      ],
      type: "Movie",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2006-08-05T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 5, month: 8, year: 2006 },
          to: { day: null, month: null, year: null },
        },
        string: "Aug 5, 2006",
      },
      duration: "1 hr 34 min",
      rating: "PG-13 - Teens 13 or older",
      score: 6.91,
      scored_by: 113203,
      rank: 4314,
      popularity: 1043,
      members: 191181,
      favorites: 151,
      synopsis:
        "Led by Kakashi Hatake, Naruto Uzumaki, Sakura Haruno, and Rock Lee are tasked to escort the extravagant Prince Michiru Tsuki and his spoiled son Hikaru to the prosperous Land of Moon when the two return from a long trip around the world. As if guarding two whimsical high-ranked individuals was not challenging enough, the prince's reckless decision to acquire an entire circus during their journey\u2014mainly to entertain Hikaru's wish of owning the saber-toothed tiger featured in the show\u2014further propels the mission into disarray. Just as things are finally settling down, the arrival of Michiru's convoy at the Land of Moon is met with an unforeseen crisis\u2014the greedy Chief Minister Shabadaba has taken over the country with the assistance of mysterious, powerful ninjas. While Kakashi's team relentlessly fights the enemy by any means necessary, the two princes are forced to confront a new outlook on life through adversity. [Written by MAL Rewrite]",
      background:
        "Being the last movie related to the first series, Naruto Movie 3: Dai Koufun! Mikazuki Jima no Animaru Panikku Dattebayo! takes place after episode 196 of Naruto. This is the only Naruto movie to feature characters in different outfits rather than the ones they normally wear. It was announced on August 6, 2005 at the opening of Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo! and premiered in Japan on August 5, 2006. The first 100,000 people to see the film in certain theaters received a yo-yo featuring Naruto and his ninja technique Rasengan. The movie was released on DVD on April 25, 2007 in Japan. In the United States, the film aired on Cartoon Network on November 8, 2008 and was released on DVD on November 11, 2008. Naruto Movie 3: Dai Koufun! Mikazuki Jima no Animaru Panikku Dattebayo! has an animanga adaptation released in Japan on April 4, 2007 and in the United States on November 4, 2008.",
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 4437,
      url: "https://myanimelist.net/anime/4437/Naruto__Shippuuden_Movie_2_-_Kizuna",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/3/17830.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/3/17830t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/3/17830l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/3/17830.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/3/17830t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/3/17830l.webp",
        },
      },
      trailer: {
        youtube_id: "OkI3ZCEbx_E",
        url: "https://www.youtube.com/watch?v=OkI3ZCEbx_E",
        embed_url:
          "https://www.youtube.com/embed/OkI3ZCEbx_E?enablejsapi=1&wmode=opaque&autoplay=1",
        images: {
          image_url: "https://img.youtube.com/vi/OkI3ZCEbx_E/default.jpg",
          small_image_url:
            "https://img.youtube.com/vi/OkI3ZCEbx_E/sddefault.jpg",
          medium_image_url:
            "https://img.youtube.com/vi/OkI3ZCEbx_E/mqdefault.jpg",
          large_image_url:
            "https://img.youtube.com/vi/OkI3ZCEbx_E/hqdefault.jpg",
          maximum_image_url:
            "https://img.youtube.com/vi/OkI3ZCEbx_E/maxresdefault.jpg",
        },
      },
      approved: true,
      titles: [
        { type: "Default", title: "Naruto: Shippuuden Movie 2 - Kizuna" },
        { type: "Synonym", title: "Naruto Movie 5" },
        { type: "Synonym", title: "Naruto Shippuuden Movie 2" },
        { type: "Synonym", title: "Naruto Shippuuden: Bonds" },
        {
          type: "Japanese",
          title:
            "\u5287\u5834\u7248NARUTO-\u30ca\u30eb\u30c8- \u75be\u98a8\u4f1d \u7d46",
        },
        { type: "English", title: "Naruto: Shippuden the Movie 2 -Bonds-" },
        { type: "German", title: "Naruto Shippuden Film 2 -Bonds-" },
        { type: "French", title: "Naruto Shippuden Film 2 -Les Liens-" },
      ],
      title: "Naruto: Shippuuden Movie 2 - Kizuna",
      title_english: "Naruto: Shippuden the Movie 2 -Bonds-",
      title_japanese:
        "\u5287\u5834\u7248NARUTO-\u30ca\u30eb\u30c8- \u75be\u98a8\u4f1d \u7d46",
      title_synonyms: [
        "Naruto Movie 5",
        "Naruto Shippuuden Movie 2",
        "Naruto Shippuuden: Bonds",
      ],
      type: "Movie",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2008-08-02T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 2, month: 8, year: 2008 },
          to: { day: null, month: null, year: null },
        },
        string: "Aug 2, 2008",
      },
      duration: "1 hr 32 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.28,
      scored_by: 139511,
      rank: 2600,
      popularity: 834,
      members: 240929,
      favorites: 230,
      synopsis:
        "Unleashing a devastating surprise attack, flying ninjas from the Land of Sky are seeking revenge against their old enemy Konohagakure. Despite his eagerness to join the fight, Naruto Uzumaki is held up by Shinnou, a mysterious doctor who requires his assistance to save an injured person. While delivering the wounded man to the hospital, Naruto has an unexpected encounter with Amaru\u2014a stormy youngster from a neighboring village desperately looking for Shinnou's help. Meanwhile, as the invaders withdraw to restore their forces, Tsunade seizes the opportunity to dispatch a small team including Sai, Shikamaru Nara, and Kakashi Hatake to strike down their base. Simultaneously, she commissions Naruto, Sakura Haruno, and Hinata Hyuuga to accompany Shinnou and Amaru on their journey. During this time, however, Orochimaru has his own schemes: he orders Sasuke Uchiha to bring him the doctor who specializes in the reincarnation technique. As the escort group accidentally uncovers the sinister truth behind the attacks, tumultuous plans are set in motion. But even when confronted with an unforeseen reunion, Naruto does not waver in his endeavor to end the warfare and its disastrous effects. [Written by MAL Rewrite]",
      background:
        "Naruto: Shippuuden Movie 2 - Kizuna is set approximately after the \"Three-Tails' Appearance\" arc of the Naruto: Shippuden anime series, which ends with episode 112. To celebrate Weekly Shounen Jump's 40th Anniversary, the movie was released on August 2, 2008 and registered a box office revenue of 1.16 billion yen. It was announced in the renowned magazine along with the DVD release date for the first Naruto: Shippuuden film. Naruto: Shippuuden Movie 2 - Kizuna's English version was released on DVD and Blu-ray on October 25, 2011 in North America. The movie has an animanga adaptation released in Japan on July 24, 2009.",
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [
        {
          mal_id: 16,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/16/TV_Tokyo",
        },
        {
          mal_id: 17,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/17/Aniplex",
        },
        {
          mal_id: 53,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/53/Dentsu",
        },
        {
          mal_id: 230,
          type: "anime",
          name: "Bandai",
          url: "https://myanimelist.net/anime/producer/230/Bandai",
        },
        {
          mal_id: 245,
          type: "anime",
          name: "Toho",
          url: "https://myanimelist.net/anime/producer/245/Toho",
        },
        {
          mal_id: 829,
          type: "anime",
          name: "Studio Jack",
          url: "https://myanimelist.net/anime/producer/829/Studio_Jack",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 1074,
      url: "https://myanimelist.net/anime/1074/Naruto_Narutimate_Hero_3__Tsuini_Gekitotsu_Jounin_vs_Genin_Musabetsu_Dairansen_Taikai_Kaisai",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/10/11244.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/10/11244t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/10/11244l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/10/11244.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/10/11244t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/10/11244l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title:
            "Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!! Musabetsu Dairansen Taikai Kaisai!!",
        },
        { type: "Synonym", title: "Naruto Narutimate Hero 3 OVA" },
        {
          type: "Synonym",
          title: "Naruto: Finally a Clash!! Jounin vs. Genin!",
        },
        {
          type: "Japanese",
          title:
            "NARUTO \u30ca\u30eb\u30c6\u30a3\u30e1\u30c3\u30c8\u30d2\u30fc\u30ed\u30fc3 \u3064\u3044\u306b\u6fc0\u7a81! \u4e0a\u5fcdVS\u4e0b\u5fcd!! \u7121\u5dee\u5225\u5927\u4e71\u6226\u5927\u4f1a\u958b\u50ac!!",
        },
      ],
      title:
        "Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!! Musabetsu Dairansen Taikai Kaisai!!",
      title_english: null,
      title_japanese:
        "NARUTO \u30ca\u30eb\u30c6\u30a3\u30e1\u30c3\u30c8\u30d2\u30fc\u30ed\u30fc3 \u3064\u3044\u306b\u6fc0\u7a81! \u4e0a\u5fcdVS\u4e0b\u5fcd!! \u7121\u5dee\u5225\u5927\u4e71\u6226\u5927\u4f1a\u958b\u50ac!!",
      title_synonyms: [
        "Naruto Narutimate Hero 3 OVA",
        "Naruto: Finally a Clash!! Jounin vs. Genin!",
      ],
      type: "OVA",
      source: "Game",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2005-12-22T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 22, month: 12, year: 2005 },
          to: { day: null, month: null, year: null },
        },
        string: "Dec 22, 2005",
      },
      duration: "26 min",
      rating: "PG-13 - Teens 13 or older",
      score: 6.78,
      scored_by: 39998,
      rank: 4937,
      popularity: 2119,
      members: 75573,
      favorites: 103,
      synopsis:
        "Konohagakure hosts a special tournament for ninjas of all ranks, stirring up fervor among the rookies who are eager to prove themselves in a competition against their superiors. Additionally, the winner is granted the opportunity to create their own village decree! Despite his enthusiasm to claim the prize, Naruto Uzumaki fails to focus on the game's objective as he becomes obsessed with confronting his teacher, Kakashi Hatake, in single combat. [Written by MAL Rewrite]",
      background:
        'Released on a bonus DVD with the Japanese edition of the PlayStation 2 Naruto: Ultimate Ninja 3 video game, Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!! Musabetsu Dairansen Taikai Kaisai!! provides players with hints for the game\'s RPG mode. Although seemingly falling within the Naruto series\' timeline between the end of "Search For Tsunade" arc and the "Sasuke Recovery Mission" arc, the OVA is considered non-canon as it features two characters that were already deceased according to the original story.',
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [],
      licensors: [],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 10589,
      url: "https://myanimelist.net/anime/10589/Naruto__Shippuuden_Movie_5_-_Blood_Prison",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/13/41403.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/13/41403t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/13/41403l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/13/41403.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/13/41403t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/13/41403l.webp",
        },
      },
      trailer: {
        youtube_id: "HC7MbHH0FB0",
        url: "https://www.youtube.com/watch?v=HC7MbHH0FB0",
        embed_url:
          "https://www.youtube.com/embed/HC7MbHH0FB0?enablejsapi=1&wmode=opaque&autoplay=1",
        images: {
          image_url: "https://img.youtube.com/vi/HC7MbHH0FB0/default.jpg",
          small_image_url:
            "https://img.youtube.com/vi/HC7MbHH0FB0/sddefault.jpg",
          medium_image_url:
            "https://img.youtube.com/vi/HC7MbHH0FB0/mqdefault.jpg",
          large_image_url:
            "https://img.youtube.com/vi/HC7MbHH0FB0/hqdefault.jpg",
          maximum_image_url:
            "https://img.youtube.com/vi/HC7MbHH0FB0/maxresdefault.jpg",
        },
      },
      approved: true,
      titles: [
        { type: "Default", title: "Naruto: Shippuuden Movie 5 - Blood Prison" },
        { type: "Synonym", title: "Naruto Movie 8" },
        { type: "Synonym", title: "Gekijouban Naruto: Blood Prison" },
        {
          type: "Japanese",
          title:
            "\u5287\u5834\u7248NARUTO-\u30ca\u30eb\u30c8- \u30d6\u30e9\u30c3\u30c9\u30fb\u30d7\u30ea\u30ba\u30f3",
        },
        { type: "English", title: "Naruto the Movie: Blood Prison" },
        { type: "German", title: "Naruto Film 5: Blood Prison" },
        { type: "French", title: "Naruto Film 5: Blood Prison" },
      ],
      title: "Naruto: Shippuuden Movie 5 - Blood Prison",
      title_english: "Naruto the Movie: Blood Prison",
      title_japanese:
        "\u5287\u5834\u7248NARUTO-\u30ca\u30eb\u30c8- \u30d6\u30e9\u30c3\u30c9\u30fb\u30d7\u30ea\u30ba\u30f3",
      title_synonyms: ["Naruto Movie 8", "Gekijouban Naruto: Blood Prison"],
      type: "Movie",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2011-07-30T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 30, month: 7, year: 2011 },
          to: { day: null, month: null, year: null },
        },
        string: "Jul 30, 2011",
      },
      duration: "1 hr 42 min",
      rating: "PG-13 - Teens 13 or older",
      score: 7.45,
      scored_by: 128150,
      rank: 1828,
      popularity: 923,
      members: 218108,
      favorites: 177,
      synopsis:
        "During their discussion of a sensitive investigation A, the Fourth Raikage, and his subordinates are ambushed by a cloaked intruder. As the Kumogakure leader repels the assault, he is shocked to discover that the culprit is Naruto Uzumaki! However, the assassination attempt is not the only crime attributed to the young ninja, who vigorously denies the accusations. To avoid a diplomatic conflict, Tsunade forcibly sends him to Kusagakure's Houzuki Castle\u2014a maximum-security penitentiary dedicated to ninja criminals\u2014until the situation is resolved. Despite his powers being immediately suppressed by Mui, the prison's warden who possesses the ability to seal chakra, Naruto recklessly engages in futile escape attempts. But with the help of two fellow inmates, he realizes that there is more to this legendary detention facility than meets the eye. Uncovering a terrible secret, the trio embarks on a dangerous operation that may be Naruto's only chance to break free and prove his innocence. [Written by MAL Rewrite]",
      background:
        'Although it is debatable where Naruto: Shippuuden Movie 5 - Blood Prison is set in the timeline of the main series due to confusing story elements, it is likely to fall somewhere after episode 220 during the "Fourth Shinobi World War: Countdown" and "Paradise Life on a Boat" arcs. The movie was released in theaters on July 30, 2011, earning 840 million yen in box office revenue. The DVD version was made available on April 27, 2012 in Japan. Neon Alley began streaming the film on January 26, 2014 and Viz Media released it on DVD and Blu-ray in North America on February 18, 2014. While the previous movies were produced with the participation of the television series\' screenplay writers, Naruto: Shippuuden Movie 5 - Blood Prison was entrusted to the mystery writer Akira Higashiyama. For this reason, "Shippuuden" was removed from the Japanese original title.',
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [
        {
          mal_id: 16,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/16/TV_Tokyo",
        },
        {
          mal_id: 17,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/17/Aniplex",
        },
        {
          mal_id: 53,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/53/Dentsu",
        },
        {
          mal_id: 1365,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1365/Shueisha",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 761,
      url: "https://myanimelist.net/anime/761/Naruto__Akaki_Yotsuba_no_Clover_wo_Sagase",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/12/11240.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/12/11240t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/12/11240l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/12/11240.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/12/11240t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/12/11240l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        { type: "Default", title: "Naruto: Akaki Yotsuba no Clover wo Sagase" },
        {
          type: "Synonym",
          title: "Naruto: Find the Crimson Four Leaf Clover!",
        },
        { type: "Synonym", title: "Naruto: Jump Festa 2003" },
        {
          type: "Japanese",
          title:
            "\u30ca\u30eb\u30c8 \u7d05\u304d\u56db\u3064\u8449\u306e\u30af\u30ed\u30fc\u30d0\u30fc\u3092\u63a2\u305b",
        },
        {
          type: "English",
          title: "Naruto: Find the Crimson Four-leaf Clover!",
        },
      ],
      title: "Naruto: Akaki Yotsuba no Clover wo Sagase",
      title_english: "Naruto: Find the Crimson Four-leaf Clover!",
      title_japanese:
        "\u30ca\u30eb\u30c8 \u7d05\u304d\u56db\u3064\u8449\u306e\u30af\u30ed\u30fc\u30d0\u30fc\u3092\u63a2\u305b",
      title_synonyms: [
        "Naruto: Find the Crimson Four Leaf Clover!",
        "Naruto: Jump Festa 2003",
      ],
      type: "Special",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2003-05-24T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 24, month: 5, year: 2003 },
          to: { day: null, month: null, year: null },
        },
        string: "May 24, 2003",
      },
      duration: "17 min",
      rating: "PG-13 - Teens 13 or older",
      score: 6.55,
      scored_by: 44161,
      rank: 6094,
      popularity: 2050,
      members: 80487,
      favorites: 89,
      synopsis:
        "When Konohamaru Sarutobi asks Naruto Uzumaki for help, the latter readily accepts to join his young friend on a special mission\u2014the retrieval of the legendary crimson four-leaf clover, rumored to have the ability to grant any wish. The miraculous plant is seemingly Konohamaru's only hope to prevent the departure of his sweetheart Kaede Yoshino, who must leave Konohagakure on account of her father's job. Despite the unique clover being located in a forbidden area, there is nothing stopping the two from bravely embarking on a perilous adventure to achieve their goal. [Written by MAL Rewrite]",
      background:
        'Naruto: Akaki Yotsuba no Clover wo Sagase is the original series\' first OVA that, along with Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!, was shown exclusively at the annual Shonen Jump Festival in Japan. The OVA falls within the same timeline of the series between the "Prologue\u2014Land Of Waves" and "Chunin Exams" arcs, or from episodes 19 to 20 respectively. Madman Entertainment included the special in the Naruto Jump Festa Collection released in 2008. Unlike the second OVA which also received a dubbed version, Naruto: Akaki Yotsuba no Clover wo Sagase has only been subtitled.',
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [],
      licensors: [],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 4,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/genre/4/Comedy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 594,
      url: "https://myanimelist.net/anime/594/Naruto__Takigakure_no_Shitou_-_Ore_ga_Eiyuu_Dattebayo",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/11/20921.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/11/20921t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/11/20921l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/11/20921.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/11/20921t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/11/20921l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!",
        },
        { type: "Synonym", title: "Battle at Hidden Falls. I am the Hero!" },
        { type: "Synonym", title: "Naruto OVA 2" },
        { type: "Synonym", title: "Naruto: Jump Festa 2004" },
        {
          type: "Japanese",
          title:
            "\u6edd\u96a0\u308c\u306e\u6b7b\u95d8\u3000\u30aa\u30ec\u304c\u82f1\u96c4\u3060\u3063\u3066\u3070\u3088!",
        },
        {
          type: "English",
          title:
            "Naruto: The Lost Story - Mission: Protect the Waterfall Village",
        },
      ],
      title: "Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!",
      title_english:
        "Naruto: The Lost Story - Mission: Protect the Waterfall Village",
      title_japanese:
        "\u6edd\u96a0\u308c\u306e\u6b7b\u95d8\u3000\u30aa\u30ec\u304c\u82f1\u96c4\u3060\u3063\u3066\u3070\u3088!",
      title_synonyms: [
        "Battle at Hidden Falls. I am the Hero!",
        "Naruto OVA 2",
        "Naruto: Jump Festa 2004",
      ],
      type: "Special",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2003-12-20T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 20, month: 12, year: 2003 },
          to: { day: null, month: null, year: null },
        },
        string: "Dec 20, 2003",
      },
      duration: "40 min",
      rating: "PG-13 - Teens 13 or older",
      score: 6.76,
      scored_by: 47910,
      rank: 5032,
      popularity: 1995,
      members: 84874,
      favorites: 136,
      synopsis:
        "After safely escorting the cowardly Takigakure leader Shibuki to his homeland, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno are taken aback by the village's sudden invasion of rogue ninjas. As their teacher Kakashi Hatake had departed for Konohagakure beforehand, the team is left to deal with the attacking forces on their own. While the group prepares for a rescue operation, they learn that Suien, the mastermind behind the assault, is pursuing the Hero Water\u2014an elixir that briefly increases the chakra of those who drink it by tenfold. Knowing that the liquid is in Shibuki's possession, Suien takes the villagers hostage to use them as a bargaining chip. Despite the odds stacked against them, Naruto fights the enemy heroically, spurring Shibuki on to discover the courage to protect his people. [Written by MAL Rewrite]",
      background:
        "Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo! is the first series' second OVA set in between the \"Prologue\u2014Land Of Waves\" and \"Chunin Exams\" arcs, or from episodes 19 to 20 respectively. The English version was made available on DVD on May 19, 2007 in Canada and on June 12, 2007 in the USA, three years after the OVA's release in Japan. In North America, the DVD was accessible both individually or as a combo pack with the manga's first volume. As part of the two specials that were only shown at the annual Shonen Jump Festival in Japan, the spin-off was included in Madman Entertainment's Naruto Jump Festa Collection released in 2008. Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo! has an animanga adaptation issued exclusively in Japan on May 2, 2005.",
      season: null,
      year: null,
      broadcast: { day: null, time: null, timezone: null, string: null },
      producers: [],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 17,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 12979,
      url: "https://myanimelist.net/anime/12979/Naruto_SD__Rock_Lee_no_Seishun_Full-Power_Ninden",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/13/36475.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/13/36475t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/13/36475l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/13/36475.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/13/36475t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/13/36475l.webp",
        },
      },
      trailer: {
        youtube_id: "vAuU88KX8EA",
        url: "https://www.youtube.com/watch?v=vAuU88KX8EA",
        embed_url:
          "https://www.youtube.com/embed/vAuU88KX8EA?enablejsapi=1&wmode=opaque&autoplay=1",
        images: {
          image_url: "https://img.youtube.com/vi/vAuU88KX8EA/default.jpg",
          small_image_url:
            "https://img.youtube.com/vi/vAuU88KX8EA/sddefault.jpg",
          medium_image_url:
            "https://img.youtube.com/vi/vAuU88KX8EA/mqdefault.jpg",
          large_image_url:
            "https://img.youtube.com/vi/vAuU88KX8EA/hqdefault.jpg",
          maximum_image_url:
            "https://img.youtube.com/vi/vAuU88KX8EA/maxresdefault.jpg",
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto SD: Rock Lee no Seishun Full-Power Ninden",
        },
        {
          type: "Japanese",
          title:
            "\u30ca\u30eb\u30c8SD \u30ed\u30c3\u30af\u30fb\u30ea\u30fc\u306e\u9752\u6625\u30d5\u30eb\u30d1\u30ef\u30fc\u5fcd\u4f1d",
        },
        {
          type: "English",
          title: "NARUTO Spin-Off: Rock Lee & His Ninja Pals",
        },
        { type: "Spanish", title: "Rock Lee no Seishun Full-Power Ninden" },
        { type: "French", title: "Naruto Spin-Off: Rock Lee & His Ninja Pals" },
      ],
      title: "Naruto SD: Rock Lee no Seishun Full-Power Ninden",
      title_english: "NARUTO Spin-Off: Rock Lee & His Ninja Pals",
      title_japanese:
        "\u30ca\u30eb\u30c8SD \u30ed\u30c3\u30af\u30fb\u30ea\u30fc\u306e\u9752\u6625\u30d5\u30eb\u30d1\u30ef\u30fc\u5fcd\u4f1d",
      title_synonyms: [],
      type: "TV",
      source: "Manga",
      episodes: 51,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2012-04-03T00:00:00+00:00",
        to: "2013-03-26T00:00:00+00:00",
        prop: {
          from: { day: 3, month: 4, year: 2012 },
          to: { day: 26, month: 3, year: 2013 },
        },
        string: "Apr 3, 2012 to Mar 26, 2013",
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 7.16,
      scored_by: 44416,
      rank: 3177,
      popularity: 1948,
      members: 87821,
      favorites: 283,
      synopsis:
        "The competitive shinobi world has proven to be challenging for Rock Lee, who lacks the typically required abilities. To compensate for this handicap, the young ninja tenaciously endures severe training to hone his hand-to-hand combat skills. Whenever necessary, he also resorts to creative fighting techniques. With the constant support of his teammates Neji Hyuuga and Tenten, Lee readily embraces daring adventures as opportunities to advance on his path toward excellence. [Written by MAL Rewrite]",
      background:
        "Naruto SD: Rock Lee no Seishun Full-Power Ninden is a Naruto: Shippuuden non-canon spin-off. Unlike the original series, it is the work of a different author and presents distinctive elements: another main character, a super-deformed art style, a narrator, and topics or statements that can be difficult to understand even for adults. The first DVD was released on July 18, 2012. Starting October 1, 2013, the anime was re-broadcasted as a selection of episodes from the initial series under the title Naruto SD: Rock Lee no Seishun Full-Power Ninden Mou Iccho. It is also considered that Rock Lee Ocharake Gaiden\u2014a separate feature shown in five installments as a bonus of Naruto Shippuuden\u2014is essentially Naruto SD: Rock Lee no Seishun Full Power Ninden's predecessor. As of March 2015, both dubbed and subtitled English versions have been made available for online streaming in the United States through Hulu and Neon Alley.",
      season: "spring",
      year: 2012,
      broadcast: {
        day: "Tuesdays",
        time: "18:00",
        timezone: "Asia/Tokyo",
        string: "Tuesdays at 18:00 (JST)",
      },
      producers: [
        {
          mal_id: 16,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/16/TV_Tokyo",
        },
        {
          mal_id: 1365,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1365/Shueisha",
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/1/Pierrot",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 4,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/genre/4/Comedy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 20,
          type: "anime",
          name: "Parody",
          url: "https://myanimelist.net/anime/genre/20/Parody",
        },
      ],
      demographics: [],
    },
  ],
};
