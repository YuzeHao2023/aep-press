export interface Article {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publicationDate: string;
  journalTitle: string;
  volume: string;
  issue: string;
  firstPage: string;
  lastPage: string;
  doi: string;
  pdfUrl: string;
  keywords: string[];
}

export interface Journal {
  id: string;
  title: string;
  description: string;
  issn: string;
  field: string;
  image: string;
  articles: Article[];
}

export const journals: Journal[] = [
  {
    id: "math-advances",
    title: "Advances in Mathematical Sciences",
    description: "A premier journal covering pure and applied mathematics.",
    issn: "2345-6789",
    field: "Mathematics",
    image: "https://picsum.photos/seed/math/800/600",
    articles: [
      {
        id: "art-001",
        title: "On the Convergence of Non-linear Dynamic Systems",
        authors: ["John Doe", "Jane Smith"],
        abstract: "This paper explores the stability and convergence properties of non-linear dynamic systems under stochastic perturbations...",
        publicationDate: "2024-03-15",
        journalTitle: "Advances in Mathematical Sciences",
        volume: "12",
        issue: "2",
        firstPage: "45",
        lastPage: "62",
        doi: "10.1234/ams.2024.001",
        pdfUrl: "/26.6.18/1-j.ijics.20251001.13(1).pdf",
        keywords: ["Dynamic Systems", "Convergence", "Non-linear Analysis"]
      }
    ]
  },
  {
    id: "phys-rev",
    title: "Applied Physics & Engineering",
    description: "Focusing on the intersection of physical principles and engineering applications.",
    issn: "3456-7890",
    field: "Physics",
    image: "https://picsum.photos/seed/physics/800/600",
    articles: []
  },
  {
    id: "chem-tech",
    title: "Chemical Technology & Innovation",
    description: "Innovative research in chemical engineering and material science.",
    issn: "4567-8901",
    field: "Chemistry",
    image: "https://picsum.photos/seed/chemistry/800/600",
    articles: []
  },
  {
    id: "bio-med",
    title: "Journal of Biological Medicine",
    description: "Bridging the gap between basic biological research and clinical medicine.",
    issn: "5678-9012",
    field: "Biology & Medicine",
    image: "https://picsum.photos/seed/biology/800/600",
    articles: []
  },
  {
    id: "tcm-research",
    title: "Traditional Chinese Medicine Research",
    description: "Modern scientific approaches to traditional Chinese medicine and herbal studies.",
    issn: "6789-0123",
    field: "TCM & Pharmacy",
    image: "https://picsum.photos/seed/tcm/800/600",
    articles: []
  },
  {
    id: "soc-sci-forum",
    title: "Social Science Forum",
    description: "Interdisciplinary research in sociology, psychology, and political science.",
    issn: "7890-1234",
    field: "Social Sciences",
    image: "https://picsum.photos/seed/social/800/600",
    articles: []
  },
  {
    id: "fin-econ-rev",
    title: "Finance & Economic Review",
    description: "Global perspectives on financial markets and economic policy.",
    issn: "8901-2345",
    field: "Finance",
    image: "https://picsum.photos/seed/finance/800/600",
    articles: []
  },
  {
    id: "lit-studies",
    title: "Global Literature Studies",
    description: "Comparative literature and cultural analysis from a global perspective.",
    issn: "9012-3456",
    field: "Literature",
    image: "https://picsum.photos/seed/literature/800/600",
    articles: []
  },
  {
    id: "chinese-pharmacy",
    title: "Journal of Chinese Pharmacy",
    description: "Research on traditional Chinese pharmacology and modern drug discovery.",
    issn: "0123-4567",
    field: "TCM & Pharmacy",
    image: "https://picsum.photos/seed/pharmacy/800/600",
    articles: []
  }
];
