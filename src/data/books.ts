
export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  price: number;
  rating: number;
  description: string;
  category: string;
  featured?: boolean;
  pages: number;
  publicationDate: string;
  publisher: string;
  isbn: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://source.unsplash.com/random/?book,fantasy",
    price: 16.99,
    rating: 4.5,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    category: "Fiction",
    featured: true,
    pages: 304,
    publicationDate: "2020-08-13",
    publisher: "Canongate Books",
    isbn: "978-1786892720"
  },
  {
    id: "2",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    cover: "https://source.unsplash.com/random/?book,scifi",
    price: 18.99,
    rating: 4.3,
    description: "From the bestselling and Booker Prize winning author of Never Let Me Go and The Remains of the Day, a stunning new novel—his first since winning the Nobel Prize in Literature—about the wondrous, mysterious nature of the human heart.",
    category: "Science Fiction",
    pages: 320,
    publicationDate: "2021-03-02",
    publisher: "Faber & Faber",
    isbn: "978-0571364886"
  },
  {
    id: "3",
    title: "The Vanishing Half",
    author: "Brit Bennett",
    cover: "https://source.unsplash.com/random/?book,drama",
    price: 14.99,
    rating: 4.7,
    description: "The Vignes twin sisters will always be identical. But after growing up together in a small, southern black community and running away at age sixteen, it's not just the shape of their daily lives that is different as adults, it's everything: their families, their communities, their racial identities.",
    category: "Fiction",
    featured: true,
    pages: 352,
    publicationDate: "2020-06-02",
    publisher: "Riverhead Books",
    isbn: "978-0525536291"
  },
  {
    id: "4",
    title: "Educated",
    author: "Tara Westover",
    cover: "https://source.unsplash.com/random/?book,memoir",
    price: 15.99,
    rating: 4.8,
    description: "An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    category: "Memoir",
    pages: 400,
    publicationDate: "2018-02-20",
    publisher: "Random House",
    isbn: "978-0399590504"
  },
  {
    id: "5",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover: "https://source.unsplash.com/random/?book,nature",
    price: 13.99,
    rating: 4.6,
    description: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl.",
    category: "Fiction",
    featured: true,
    pages: 384,
    publicationDate: "2018-08-14",
    publisher: "G.P. Putnam's Sons",
    isbn: "978-0735219090"
  },
  {
    id: "6",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://source.unsplash.com/random/?book,selfhelp",
    price: 17.99,
    rating: 4.8,
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    category: "Self-Help",
    pages: 320,
    publicationDate: "2018-10-16",
    publisher: "Avery",
    isbn: "978-0735211292"
  },
  {
    id: "7",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    cover: "https://source.unsplash.com/random/?book,mythology",
    price: 14.99,
    rating: 4.6,
    description: "A tale of gods, kings, immortal fame, and the human heart, The Song of Achilles is a dazzling literary feat that brilliantly reimagines Homer's enduring masterwork, The Iliad.",
    category: "Historical Fiction",
    pages: 416,
    publicationDate: "2012-03-06",
    publisher: "Ecco",
    isbn: "978-0062060624"
  },
  {
    id: "8",
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "https://source.unsplash.com/random/?book,space",
    price: 19.99,
    rating: 4.8,
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.",
    category: "Science Fiction",
    featured: true,
    pages: 496,
    publicationDate: "2021-05-04",
    publisher: "Ballantine Books",
    isbn: "978-0593135204"
  }
];

export const categories = [
  "All",
  "Fiction",
  "Science Fiction",
  "Fantasy",
  "Mystery",
  "Thriller",
  "Romance",
  "Biography",
  "Memoir",
  "History",
  "Self-Help",
  "Business",
  "Children",
  "Young Adult",
  "Historical Fiction"
];

export const getFeaturedBooks = () => {
  return books.filter(book => book.featured);
};

export const getBooksByCategory = (category: string) => {
  if (category === "All") return books;
  return books.filter(book => book.category === category);
};

export const getBookById = (id: string) => {
  return books.find(book => book.id === id);
};

export const searchBooks = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return books.filter(book => 
    book.title.toLowerCase().includes(lowercaseQuery) || 
    book.author.toLowerCase().includes(lowercaseQuery)
  );
};
