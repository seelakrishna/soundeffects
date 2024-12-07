export interface Sound {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
}

export type SoundCategory = 'nature' | 'animals' | 'environmental' | 'technology' | 'human' | 'action';