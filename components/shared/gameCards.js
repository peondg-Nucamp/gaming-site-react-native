import { images } from "./images";

export const GAME_CARDS = [
  {
    id: 0,
    name: "Village Protectors",
    image: images.villageProtectorsImage,
    description: "Village Protectors is an isometric style RPG-Strategy game.",
    release_date: "June 1, 2021",
    similar_games: [
      {
        id: "#shiningForce",
        name: "Shining Force",
        image: "/images/games/shining-force.jpg",
        description:
          "Shining Force and its sequels are series of fantasy turn-based tactics role-playing video game. While beginning on Sega-based consoles, later releases and remakes were made by other companies.",
        sources: "Wikipedia and Old School Game Vault",
      },
      {
        id: "#fireEmblem",
        name: "Fire Emblem",
        image: "/images/games/awakening-noscale.jpg",
        description:
          "Fire Emblem is a turn-based strategy role-playing game (SRPG for short) series which sets itself apart with permanent death, random level-ups and dedicated battle screens with pretty combat animations. It featured mostly on Nintendo consoles.",
        sources: "Destructoid.com",
      },
    ],
  },
  {
    id: 1,
    name: "A Good Day For a Haunting",
    image: images.goodDayForAHauntingImage,
    description: "Check out our take on the classic 2-D platform game.",
    release_date: "July 12, 2021",
    similar_games: [
      {
        id: "#castlevania",
        name: "Castlevania",
        image: "/images/games/CastlevaniaBloodlines.png",
        description:
          "Castlevania is an action-adventure gothic horror video game series about vampire hunters created and developed by Konami.",
        sources: "Wikipedia",
      },
      {
        id: "ghostsAndGoblins",
        name: "Ghosts and Goblins",
        image: "/images/games/ghosts-and-goblins.jpg",
        description:
          "Ghosts and Goblins is a rather difficult early action horror game starring King Arthur against a horde of creatures that never quite seem to stop coming.",
        sources: "mobygames.com",
      },
    ],
  },
  {
    id: 2,
    name: "Space Adventure",
    image: images.spaceAdventureImage,
    description: "An adventure game that is very similar to 90's PC games.",
    release_date: "Sept. 4, 2021",
    similar_games: [
      {
        id: "kingsQuest",
        name: "King's Quest",
        image: "/images/games/kq1.png",
        description:
          "King's Quest is a graphic adventure game series, released between 1980 and 2016 and created by the American software company Sierra Entertainment. It is widely considered a classic series from the golden era of adventure games.",
        sources: "Wikipedia and sierrawallpaper.com",
      },
      {
        id: "spaceQuest",
        name: "Space Quest",
        image: "/images/games/sq1.png",
        description:
          "Space Quest is a series of six comic science fiction adventure games released between 1986 and 1995. This was also a series developed by Sierra Online/Sierra Entertainment and was a more humorous science fiction adventure featuring Roger Wilco, a janitor who is the main protagonist.",
        sources: "gbatemp.net",
      },
    ],
  },
];
