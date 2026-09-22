import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetailsClient from "../project-details-client";

/* =========================================================
   PROJECT TYPE
========================================================= */

type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: readonly string[];
  overview: string;
  features: readonly string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  serverUrl?: string;
  images: readonly string[];
  challenges?: string;
  improvements?: string;
};

/* =========================================================
   PROJECT DATA
========================================================= */

const projects: Record<string, Project> = {
  /* =====================================================
   NALITABARI UPAZILA INFORMATION PORTAL
===================================================== */

  nalitabari: {
    slug: "nalitabari-upazila-information-portal",

    title: "Nalitabari Upazila Information Portal",

    description:
      "A modern digital information platform for Nalitabari Upazila, designed to make local information and essential public services easier to discover. The platform organizes healthcare, education, government services, emergency contacts, businesses, important places, news, and public notices in a responsive and user-friendly interface.",

    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "MongoDB",
      "Mongoose",
      "Next.js App Router",
      "Google News RSS",
      "Resend",
    ],

    category: "Full-Stack Civic Information Platform",

    overview:
      "Nalitabari Upazila Information Portal is a full-stack civic information platform built to centralize useful local information for residents and visitors of Nalitabari. The platform provides categorized directories for healthcare, education, government offices, businesses, emergency services, important places, news, and notices. It uses Next.js App Router with TypeScript and MongoDB to deliver a scalable and responsive experience.",

    features: [
      "Local Information Directory: Browse organized information about important services and organizations in Nalitabari",
      "Healthcare Directory: Find doctors, hospitals, clinics, pharmacies, and other healthcare services",
      "Education Directory: Explore schools, colleges, and educational institutions",
      "Government Services: Access information about government offices and public services",
      "Emergency Services: Quickly find important emergency contacts and essential services",
      "Business Directory: Discover local businesses and service providers",
      "Important Places: Explore notable locations and places around Nalitabari",
      "News & Notices: Display local news and important public announcements",
      "Google News RSS Integration: Fetch relevant news related to Nalitabari and Sherpur",
      "Bilingual Interface: Support for Bengali and English content",
      "Responsive Design: Optimized experience across mobile, tablet, and desktop devices",
      "Dark & Light Mode: Theme switching for a comfortable browsing experience",
      "Dynamic MongoDB Data: Store and retrieve directory information dynamically",
      "Contact System: Allow visitors to communicate through the portal",
    ],

    challenges:
      "Designing a scalable information architecture for multiple categories of local services, managing dynamic MongoDB data, implementing a bilingual interface, integrating external news through RSS, and maintaining a responsive user experience across a large number of directory pages were key challenges. Another focus was keeping the interface simple enough for users to quickly find essential local information.",

    improvements:
      "Future improvements could include an admin dashboard for managing all portal content, user-submitted information with moderation, advanced location-based search and Google Maps integration, real-time emergency alerts, automated news categorization, improved SEO for local searches, Progressive Web App support, and AI-powered search and recommendations for local services.",

    liveUrl: "https://hello-nalitabari.vercel.app/",

    githubUrl:
      "https://github.com/azijulhakimbd/Hello-Nalitabari",

    images: [
      "https://i.postimg.cc/PqgL5fv8/Home-Page.png",
      "https://i.postimg.cc/DzJJh40L/Features.png",
      "https://i.postimg.cc/vmJ1Z8xr/Latest-Neews.png",
      "https://i.postimg.cc/GpWBm3TV/About-Page.png",
      "https://i.postimg.cc/pTKmhNK3/Directory.png",
      "https://i.postimg.cc/rm5D06S2/Emergency-Contact-Page.png",
      "https://i.postimg.cc/0Q7zMgp9/Health-Page.png",

    ],
  },
  /* =====================================================
     EASY STAY
  ===================================================== */

  easystay: {
    slug: "easystay",

    title: "EasyStay — Short-Term Rental Marketplace",

    description:
      "EasyStay is a modern accommodation booking platform connecting property owners and travelers in Bangladesh. It offers seamless property listing, booking, payment, and management features with real-time updates, secure transactions, and an intuitive user experience.",

    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB(Mongoose ORM)",
      "JWT",
      "Next Auth",
      "Stripe",
      "Shadcn UI",
    ],

    category: "Full-Stack Application",

    overview:
      "EasyStay is designed as a modern accommodation marketplace where travelers can discover properties and hosts can manage their listings. The platform combines a Next.js frontend with backend services, database management, authentication, and Stripe-powered payments to create a complete booking experience.",

    features: [
      "Property Listings: Hosts can add/edit properties with details, photos, and pricing",
      "Advanced Search: Filter stays by location, price, amenities, or ratings",
      "Booking System: Real-time availability and confirmation",
      "Real-time room availability and booking confirmation",
      "Stripe-powered secure online payments",
      "Admin dashboard for managing hotels, rooms, and bookings",
      "Dynamic booking history and user profile management",
    ],

    challenges:
      "Implementing real-time availability updates for multiple users, synchronizing booking data across the client and server, managing authentication with both Firebase and JWT, and ensuring payment flow reliability during concurrent transactions.",

    improvements:
      "Add review and rating system for hotels, introduce automated email receipts and booking reminders, enable multi-language support, integrate AI-based recommendation for best hotel deals, and improve SEO optimization for hotel listings.",

    liveUrl: "https://easy-stay-liart.vercel.app/",

    githubUrl: "https://github.com/azijulhakimbd/Easy-Stay",

    images: [
      "https://i.postimg.cc/BQ4SXZF7/Easy-Stay-Hero.png",
      "https://i.postimg.cc/JhqcCzjf/easy-stay-liart-vercel-app-stays.png",
      "https://i.postimg.cc/X7zztQnB/easy-stay-liart-vercel-app-about.png",
      "https://i.postimg.cc/nc2H78YJ/easy-stay-two-vercel-app-stays.png",
      "https://i.postimg.cc/T1XRjf41/easy-stay-liart-vercel-app-host.png",
      "https://i.postimg.cc/C5HwmX3x/easy-stay-liart-vercel-app-host-1.png",
    ],
  },

  /* =====================================================
     PETSERA
  ===================================================== */

  petsera: {
    slug: "petsera",

    title: "Petsera — MERN Pet Adoption & Donation Platform",

    description:
      "Petsera is a full-featured, secure, and responsive pet adoption and donation platform built with the MERN stack. It connects animal lovers with pets in need while enabling secure online donations via Stripe.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase",
      "Stripe",
      "Node",
    ],

    category: "MERN Application",

    overview:
      "Petsera is a community-focused platform that helps connect people with pets looking for loving homes. Users can browse and adopt pets, create donation campaigns, contribute through Stripe, and manage their activities through personalized dashboards. Administrators can manage users, pets, and campaigns from a dedicated admin panel.",

    features: [
      "Firebase Authentication with Email, Google & GitHub",
      "JWT-protected routes with role-based access",
      "Pet adoption with modal-based request system",
      "Create and donate to campaigns via Stripe",
      "User dashboard to manage pets and donations",
      "Admin panel to manage users, pets, and campaigns",
      "Infinite scrolling for pets and donations",
      "WYSIWYG Markdown editor for campaigns",
    ],

    challenges:
      "Integrating secure Stripe payments while maintaining PCI compliance, building infinite scrolling without hurting performance, creating a robust role-based access system for different user types, handling large image uploads efficiently, and ensuring SEO optimization despite heavy client-side rendering.",

    improvements:
      "Add automated email notifications for adoption status changes, implement an adoption request approval workflow, add pet success stories section, optimize backend queries with indexing and caching, and introduce AI-powered pet matching recommendations.",

    liveUrl: "https://petsera.netlify.app/",

    githubUrl: "https://github.com/azijulhakimbd/Petsera-Client-Side",

    serverUrl: "https://github.com/azijulhakimbd/Petsera-Server-Side",

    images: [
      "https://i.postimg.cc/GtMWnNR9/Pets-era.jpg",
      "https://i.postimg.cc/4dPMpMmw/Pets-era-02.png",
      "https://i.postimg.cc/25pPYhsd/Pets-era-03.jpg",
      "https://i.postimg.cc/7ZJpjmWY/Pets-era-04.jpg",
      "https://i.postimg.cc/3wgzxWhs/Pets-era-05.png",
      "https://i.postimg.cc/yxdntG2k/Dashboard.jpg",
      "https://i.postimg.cc/TY4zkZQ4/Pets-era-06.png",
    ],
  },

  /* =====================================================
     RESTAURANT MANAGEMENT
  ===================================================== */

  "restaurant-management": {
    slug: "restaurant-management",

    title: "Restaurant Management System",

    description:
      "A comprehensive restaurant management web application enabling admins to add, update, and delete food items, track orders, and manage customers. Customers can browse the menu, place orders, and view their order history.",

    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "JWT",
      "Express JS",
      "Node",
    ],

    category: "Web Application",

    overview:
      "The Restaurant Management System provides separate experiences for customers and administrators. Customers can browse food items, filter the menu, place orders, and review their order history. Administrators can manage food items, users, and orders through the management interface.",

    features: [
      "Add and manage food items",
      "User-specific order history",
      "Admin panel for food & user management",
      "Food filtering by category",
      "Responsive UI with clean layout",
    ],

    challenges:
      "Implementing dynamic filtering and search without overloading the database, ensuring smooth order management in real-time, handling secure image uploads for food items, and building a unified responsive design for both admin and customer views.",

    improvements:
      "Integrate live order tracking, enable scheduled deliveries, add push notifications for order status changes, implement loyalty points system, and support multi-language menus.",

    liveUrl: "https://ma-restaurant.netlify.app/",

    githubUrl: "https://github.com/azijulhakimbd/MA-Restaurant-Client",

    serverUrl: "https://github.com/azijulhakimbd/MA-Restaurant-Server",

    images: [
      "https://i.postimg.cc/1XWRBX8J/MA-Banner.jpg",
      "https://i.postimg.cc/5y9N8L2X/Top-Food.png",
      "https://i.postimg.cc/Jn5zyPMw/Offer-Page.jpg",
      "https://i.postimg.cc/HxgLsfG4/ALL-Foods.jpg",
      "https://i.postimg.cc/wBJvz9rj/Food-Gallery.jpg",
      "https://i.postimg.cc/L6ChBCf2/Dashboard-MA.jpg",
      "https://i.postimg.cc/P50x0C27/MY-Foods.jpg",
      "https://i.postimg.cc/2S1yHQFv/My-Order.png",
    ],
  },

  /* =====================================================
     HOBBYHUB
  ===================================================== */

  hobbyhub: {
    slug: "hobbyhub",

    title: "HobbyHub — Local Hobby Group Organizer",

    description:
      "HobbyHub is a platform to discover, join, and create local hobby groups. Whether it's a book club, hiking group, or painting circle, users can connect with like-minded individuals in their area.",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "JWT",
      "Node",
    ],

    category: "Community Platform",

    overview:
      "HobbyHub is designed to make it easier for people to discover communities based around shared interests. Users can create and join local hobby groups, search by category or location, follow group activities, and participate in community events.",

    features: [
      "Join or create local hobby groups",
      "Search hobbies by category/location",
      "Group activity feed and updates",
      "Clean UI optimized for mobile users",
      "Firebase authentication",
    ],

    challenges:
      "Implementing efficient location-based filtering, designing a mobile-first UI with consistent performance, managing group event scheduling, and handling spam prevention in public group feeds.",

    improvements:
      "Add private messaging between group members, integrate calendar sync with Google/Outlook, support group image galleries, and implement AI-based hobby recommendations.",

    liveUrl: "https://b11-a10-papiya.netlify.app/",

    githubUrl: "https://github.com/azijulhakimbd/HobbyHub-Client",

    serverUrl: "https://github.com/azijulhakimbd/HobbyHub-Server",

    images: [
      "https://i.postimg.cc/yxwZ8zkz/hobbyhub-03.png",
      "https://i.postimg.cc/wMtNzBxV/hobby.png",
      "https://i.postimg.cc/9MQTxpvs/h-02.png",
    ],
  },
};

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

/* =========================================================
   UNKNOWN SLUGS
========================================================= */

export const dynamicParams = false;

/* =========================================================
   PAGE PROPS
========================================================= */

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.description,

    keywords: [
      project.title,
      ...project.technologies,
      "Frontend Developer",
      "Full Stack Developer",
      "AI Engineer",
      "Web Development",
      "Md. Azijul Hakim",
    ],

    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: [
        {
          url: project.images[0],
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.images[0]],
    },
  };
}

/* =========================================================
   PROJECT DETAILS PAGE
========================================================= */

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
