export interface TeamMember {
  id: number;
  image: string;
  name: string;
  role: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    image: "/kira.jpg",
    name: "Kira Glam",
    role: "Owner & Nail master",
  },
];
