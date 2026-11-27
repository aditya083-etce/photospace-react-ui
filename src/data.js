export const SLIDES = [
  {
    title: "Moments worth keeping, framed well.",
    image: "/images/image3.jpg",
  },
  {
    title: "Weddings, families and everything between.",
    image: "/images/image1.jpg",
  },
  {
    title: "A studio team based in Dumdum, Kolkata.",
    image: "/images/image2.jpg",
  },
];

export const TEAM = [
  {
    name: "Arjun Sen",
    contact: "+91 98300 00001",
    location: "Dumdum",
    lat: 22.6203,
    lng: 88.4197,
  },
  {
    name: "Riya Banerjee",
    contact: "+91 98300 00002",
    location: "Dumdum",
    lat: 22.6203,
    lng: 88.4197,
  },
  {
    name: "Sourav Mondal",
    contact: "+91 98300 00003",
    location: "Bishnupur",
    lat: 23.073,
    lng: 87.319,
  },
  {
    name: "Ananya Das",
    contact: "+91 98300 00004",
    location: "Siliguri",
    lat: 26.7271,
    lng: 88.3953,
  },
  {
    name: "Debojit Ghosh",
    contact: "+91 98300 00005",
    location: "Durgapur",
    lat: 23.5204,
    lng: 87.3119,
  },
  {
    name: "Mitali Roy",
    contact: "+91 98300 00006",
    location: "Howrah",
    lat: 22.5958,
    lng: 88.2636,
  },
  {
    name: "Subhajit Pal",
    contact: "+91 98300 00007",
    location: "Kharagpur",
    lat: 22.346,
    lng: 87.232,
  },
  {
    name: "Tanushree Dutta",
    contact: "+91 98300 00008",
    location: "Darjeeling",
    lat: 27.036,
    lng: 88.2627,
  },
  {
    name: "Rahul Chatterjee",
    contact: "+91 98300 00009",
    location: "Asansol",
    lat: 23.6739,
    lng: 86.9524,
  },
  {
    name: "Ishita Biswas",
    contact: "+91 98300 00010",
    location: "Shantiniketan",
    lat: 23.683,
    lng: 87.685,
  },
];

export const LOCATION_COORDS = Object.fromEntries(
  TEAM.map((p) => [p.location, [p.lat, p.lng]]),
);

export const LOCATIONS = Object.keys(LOCATION_COORDS);

export const SERVICES = [
  { title: "Wedding", text: "Full-day coverage, from rituals to reception." },
  { title: "Family events", text: "Birthdays, ceremonies and get-togethers." },
  { title: "Couple shoot", text: "Pre-wedding and anniversary sessions." },
  {
    title: "Brand promotion",
    text: "Product and lifestyle photos for your brand.",
  },
  {
    title: "Model shoot",
    text: "Portfolio and fashion shoots in studio or outdoors.",
  },
  {
    title: "Promotional video",
    text: "Short films and reels for launches and campaigns.",
  },
];

export const ABOUT = [
  {
    title: "About",
    text: "Photospace is a photography studio in Dumdum, Kolkata. Add a short story about how the studio began.",
  },
  {
    title: "Ambition",
    text: "Describe what the team wants to create and where it wants to take its work.",
  },
  {
    title: "People",
    text: "Introduce the photographers, editors and the family behind the lens.",
  },
];

export const NAV = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Team", id: "team" },
];
