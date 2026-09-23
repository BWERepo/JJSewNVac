// Genuine Google reviews as displayed on https://www.jjsewnvac.com (checked 2026-09-23).
// Shortened with ellipses only; wording is otherwise unchanged.

export type Review = { quote: string; author: string; topic: string }

export const featuredReview: Review = {
  quote:
    'We bought a Pfaff sewing machine from Jackie and Steve and they were super helpful with assisting me with picking out the best machine. Very nice people, lots of experience and easy to work with. Then I took some quilting classes with Alison and thoroughly enjoyed that!',
  author: 'Ann Hicks',
  topic: 'Machine purchase & classes',
}

export const reviews: Review[] = [
  {
    quote:
      'Steve was eager to help with getting us the right model for our floor types, etc., and was able to answer any questions we had. The pricing was fair, and so far it has been the best vacuum cleaner we have owned.',
    author: 'Greg G',
    topic: 'Vacuum purchase',
  },
  {
    quote:
      'My wife and I took her Husqvarna/Viking sewing machine up to J & J … for some repair and a good cleaning. These are the best people to deal with. Very helpful and very friendly.',
    author: 'R & R Townsend',
    topic: 'Machine repair',
  },
  {
    quote:
      'He offers lifetime service on vacs he sells and that’s a plus. … We appreciate Steve working hard to give us the best advice on which vac to get and all the answers we needed.',
    author: 'geh4321',
    topic: 'Vacuum service',
  },
  {
    quote:
      'She goes there because they are a very honest place … the crew there is great and very honest people and very knowledgeable.',
    author: 'Jim Carney',
    topic: 'Long-term customer',
  },
]
