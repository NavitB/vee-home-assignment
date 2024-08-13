export interface Grant {
  id: string;
  foundation: string;
  name: string;
  location: string;
  amount: number;
  deadline: string;
  area: string[];
  logo: string;
}

export interface GrantWithUserGrant {
  grant: Grant;
  status: 'NEW' | 'LIKED' | 'DISLIKED';
  matchDate?: string; // Optional since it's not present in the example data
}