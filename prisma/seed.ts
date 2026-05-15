import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.tripFaq.deleteMany();
  await prisma.tripItinerary.deleteMany();
  await prisma.trip.deleteMany();
  await prisma.faqItem.deleteMany();

  await prisma.faqItem.createMany({
    data: [
      {
        question: "How do I book a trip?",
        answer:
          "You can submit an inquiry or contact request, and the team will guide you through trip availability, pricing, and next steps.",
        category: "Booking",
        order: 1,
        isActive: true,
      },
      {
        question: "Can solo travelers join group trips?",
        answer:
          "Yes, solo travelers can join most group departures as long as seats are available.",
        category: "Travel",
        order: 2,
        isActive: true,
      },
      {
        question: "Are meals included in all trips?",
        answer:
          "Meal inclusion depends on the specific itinerary, so always check the inclusions and exclusions on the trip page.",
        category: "Meals",
        order: 3,
        isActive: true,
      },
      {
        question: "Do you provide custom trips?",
        answer:
          "Yes, custom trip planning can be arranged based on budget, destination, duration, and group size.",
        category: "Custom Trips",
        order: 4,
        isActive: true,
      },
      {
        question: "What happens after I submit an inquiry?",
        answer:
          "Your submission is reviewed and you will be contacted with the most relevant trip option or clarification.",
        category: "Support",
        order: 5,
        isActive: true,
      },
    ],
  });

  await prisma.trip.create({
    data: {
      slug: "kasol-kheerganga-backpacking",
      title: "Kasol Kheerganga Backpacking",
      location: "Himachal Pradesh",
      duration: "4N/5D",
      price: "₹7,999",
      difficulty: "Easy to Moderate",
      groupSize: "10-18 travelers",
      category: "Backpacking",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
      shortDescription:
        "A lively backpacking trip with riverside cafés, scenic trails, village vibes, and the Kheerganga trek.",
      overview:
        "This trip is ideal for young travelers looking for a balanced experience of adventure, social travel, and mountain scenery. It combines scenic movement, relaxed stays, and one of the most popular beginner-friendly Himalayan experiences.",
      highlights: [
        "Kheerganga trek and mountain views",
        "Kasol café culture and local market walk",
        "Camp and stay experience with group vibe",
        "Budget-friendly route for first-time backpackers",
      ],
      inclusions: [
        "Travel coordination",
        "Accommodation on sharing basis",
        "Selected transfers",
        "Trip lead assistance",
        "Sightseeing as per itinerary",
      ],
      exclusions: [
        "Personal expenses",
        "Meals not mentioned",
        "Any adventure activity not listed",
        "Insurance and emergency costs",
      ],
      itineraryItems: {
        create: [
          {
            day: "Day 1",
            title: "Departure and overnight journey",
            description:
              "Begin your journey with group coordination and overnight travel toward Himachal.",
            order: 1,
          },
          {
            day: "Day 2",
            title: "Kasol arrival and local exploration",
            description:
              "Check in, relax, explore cafés and local streets, and settle into the mountain pace.",
            order: 2,
          },
          {
            day: "Day 3",
            title: "Kheerganga trek experience",
            description:
              "Start the trek, enjoy forest and valley views, and experience one of the region’s most loved trails.",
            order: 3,
          },
          {
            day: "Day 4",
            title: "Return, unwind, and group leisure time",
            description:
              "Come back from the trek and enjoy a more relaxed evening with the group.",
            order: 4,
          },
          {
            day: "Day 5",
            title: "Departure back home",
            description:
              "Wrap up the trip and begin the return journey with memorable mountain moments.",
            order: 5,
          },
        ],
      },
      faqs: {
        create: [
          {
            question: "Is this trip suitable for beginners?",
            answer:
              "Yes, this is one of the more beginner-friendly backpacking trips if you are comfortable with basic walking and mountain conditions.",
            order: 1,
          },
          {
            question: "Can solo travelers join?",
            answer:
              "Yes, solo travelers are welcome and this route is great for meeting like-minded people.",
            order: 2,
          },
        ],
      },
    },
  });

  await prisma.trip.create({
    data: {
      slug: "kedarkantha-winter-trek",
      title: "Kedarkantha Winter Trek",
      location: "Uttarakhand",
      duration: "5N/6D",
      price: "₹8,999",
      difficulty: "Moderate",
      groupSize: "12-20 travelers",
      category: "Trekking",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
      shortDescription:
        "A classic Himalayan winter trek with snowy trails, forest camps, and a rewarding summit view.",
      overview:
        "Kedarkantha is a favorite for travelers who want a proper Himalayan trekking experience without starting with an extreme route. The trail offers snow, campsites, summit views, and a strong sense of achievement.",
      highlights: [
        "Snow trekking and summit climb",
        "Beautiful campsites and pine forests",
        "Beginner-accessible high-altitude trekking route",
        "Strong winter adventure experience",
      ],
      inclusions: [
        "Accommodation during the trip",
        "Trek coordination",
        "Guide support",
        "Transfers as per itinerary",
        "Basic trek assistance",
      ],
      exclusions: [
        "Personal trekking gear",
        "Insurance",
        "Meals not listed",
        "Personal porter expenses",
      ],
      itineraryItems: {
        create: [
          {
            day: "Day 1",
            title: "Departure and transit",
            description:
              "Begin the journey and move toward the base route with group coordination.",
            order: 1,
          },
          {
            day: "Day 2",
            title: "Arrival and base preparation",
            description:
              "Reach the stay point, rest, and prepare for the trek ahead.",
            order: 2,
          },
          {
            day: "Day 3",
            title: "Trek to first campsite",
            description:
              "Start trekking through scenic forest sections and gain altitude gradually.",
            order: 3,
          },
          {
            day: "Day 4",
            title: "Higher camp and acclimatized climb",
            description:
              "Continue the trek while taking in snowy stretches and mountain landscapes.",
            order: 4,
          },
          {
            day: "Day 5",
            title: "Summit push and descent",
            description:
              "Attempt the summit and return with one of the most rewarding views of the trip.",
            order: 5,
          },
          {
            day: "Day 6",
            title: "Return journey",
            description:
              "Complete the route and head back with the group.",
            order: 6,
          },
        ],
      },
      faqs: {
        create: [
          {
            question: "Do I need prior trekking experience?",
            answer:
              "Not necessarily, but good fitness and willingness for cold-weather trekking are important.",
            order: 1,
          },
          {
            question: "Will there be snow?",
            answer:
              "In the winter season, this route is popular specifically for its snowy trail experience, though exact conditions vary.",
            order: 2,
          },
        ],
      },
    },
  });

  await prisma.trip.create({
    data: {
      slug: "jibhi-tirthan-weekend-escape",
      title: "Jibhi Tirthan Weekend Escape",
      location: "Himachal Pradesh",
      duration: "3N/4D",
      price: "₹6,499",
      difficulty: "Easy",
      groupSize: "8-16 travelers",
      category: "Weekend Escape",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
      shortDescription:
        "A calm valley escape with waterfalls, village charm, scenic stays, and slow mountain travel.",
      overview:
        "This trip is made for travelers who want a quiet and refreshing experience rather than a fast-paced itinerary. It is well suited for couples, friends, remote workers, and small groups.",
      highlights: [
        "Scenic riverside and village atmosphere",
        "Short, peaceful getaway from city routine",
        "Cottages, waterfalls, and relaxed exploration",
        "Great for low-stress mountain travel",
      ],
      inclusions: [
        "Stay on sharing basis",
        "Trip assistance",
        "Local sightseeing support",
        "Travel coordination",
      ],
      exclusions: [
        "Meals not listed",
        "Personal transport upgrades",
        "Activity charges not mentioned",
        "Personal expenses",
      ],
      itineraryItems: {
        create: [
          {
            day: "Day 1",
            title: "Departure to the hills",
            description:
              "Leave the city behind and begin the route toward the Tirthan region.",
            order: 1,
          },
          {
            day: "Day 2",
            title: "Arrival and valley leisure",
            description:
              "Check in, unwind, and take in the calm scenery of the region.",
            order: 2,
          },
          {
            day: "Day 3",
            title: "Explore Jibhi and nearby spots",
            description:
              "Visit local attractions, enjoy nature walks, and spend time at key scenic points.",
            order: 3,
          },
          {
            day: "Day 4",
            title: "Wrap up and return",
            description:
              "Complete the trip with a relaxed departure and return journey.",
            order: 4,
          },
        ],
      },
      faqs: {
        create: [
          {
            question: "Is this trip good for a short break?",
            answer:
              "Yes, this itinerary is designed specifically as a lighter mountain getaway with less physical intensity.",
            order: 1,
          },
          {
            question: "Can I join with friends or as a solo traveler?",
            answer: "Yes, both work well for this kind of trip.",
            order: 2,
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });