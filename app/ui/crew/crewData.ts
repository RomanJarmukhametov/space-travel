interface CrewMember {
  id: number;
  position: string;
  name: string;
  description: string;
  photo: string;
  width: number;
  height: number;
}

export const crew: CrewMember[] = [
  {
    id: 1,
    position: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    photo: "/assets/crew/image-douglas-hurley.png",
    width: 514,
    height: 700,
  },
  {
    id: 2,
    position: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    photo: "/assets/crew/image-mark-shuttleworth.png",
    width: 433,
    height: 640,
  },
  {
    id: 3,
    position: "PILOT",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    photo: "/assets/crew/image-victor-glover.png",
    width: 549,
    height: 645,
  },
  {
    id: 4,
    position: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    photo: "/assets/crew/image-anousheh-ansari.png",
    width: 575,
    height: 602,
  },
];
