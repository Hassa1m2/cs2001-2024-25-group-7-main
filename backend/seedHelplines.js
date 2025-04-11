const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Helpline = require('./models/helplines'); 

// Load environment variables from .env
dotenv.config();

// Verify that MONGO_URI is loaded
if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is not defined in the .env file.");
  process.exit(1);
}

// List of helplines to seed the database
const helplines = [
  {
    name: "123 Samaritans",
    description: "Emotional support for anyone in emotional distress, struggling to cope, or at risk.",
    contact: {
      voice: { number: "116 123" },
      email: "jo@samaritans.org",
    },
  },
  {
    name: "Shout",
    description:
      "Free, confidential, 24/7 text support for anyone. Trained volunteers provide immediate support assistance for issues such as anxiety, depression, suicidal thoughts, abuse, self-harm, bullying, relationships, and more.",
    contact: {
      text: { number: "85258", message: "Text SHOUT" },
      email: "info@giveusashout.org",
    },
  },
  {
    name: "Campaign Against Living Miserably (CALM)",
    description:
      "Charity dedicated to preventing suicide, particularly among men. CALM offers free, confidential, and anonymous support through their helpline and webchat.",
    contact: {
      voice: { number: "0800 58 58 58", availability: "5pm to midnight, every day" },
      text: { number: "07537 404717", message: "Start your text with CALM2", availability: "5pm to midnight" },
      webchat: { url: "https://www.thecalmzone.net/help/get-help/", availability: "5pm – midnight, every day" },
    },
    availability: { from: "17:00", to: "00:00" }, 
  },
  {
    name: "PAPYRUS",
    description:
      "Confidential support and advice to young people under 35 who are experiencing thoughts of suicide, as well as to anyone concerned about a young person.",
    contact: {
      voice: { number: "0800 068 41 41" },
      text: { number: "07860 039967" },
      email: "pat@papyrus-uk.org",
    },
  },
  {
    name: "Young Minds",
    description:
      "Support for young people and their parents. They provide resources, guidance, and professionals to promote mental well-being and address mental health challenges.",
    contact: {
      voice: { number: "0808 802 5544", availability: "Mon-Fri, 9:30am - 4pm" },
      text: { number: "85258", message: 'Text "YM"' },
      webchat: { url: "https://www.youngminds.org.uk/parent/parents-helpline/", availability: "9:30am–4pm, Monday–Friday" },
      email: "parent@youngminds.org.uk",
    },
    availability: { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], from: "09:30", to: "16:00" },
  },
  {
    name: "The Mix",
    description:
      "Support for under 25s on a range of issues including mental health, relationships, and more.",
    contact: {
      voice: { number: "0808 808 4994", availability: "Free, Available 4pm - 11pm" },
      text: { number: "85258", message: "Text SMASH" },
      webchat: { url: "https://www.themix.org.uk/get-support/speak-to-our-team", availability: "4pm–11pm, every day" },
      email: "info@themix.org.uk",
    },
    availability: { from: "16:00", to: "23:00" },
  },
  {
    name: "NHS 111",
    description: "For urgent medical help when it's not life-threatening.",
    contact: {
      voice: { number: "111" },
    },
  },
  {
    name: "LGBT Foundation",
    description: "Support for the LGBTQ+ community.",
    contact: {
      voice: { number: "0345 3 30 30 30", availability: "Mon - Fri, 9am - 9pm; Sat, 10am - 6pm" },
      text: { number: "07786 202 370" },
      email: "helpline@lgbt.foundation",
    },
    availability: [
      { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], from: "09:00", to: "21:00" },
      { days: ["Sat"], from: "10:00", to: "18:00" },
    ],
  },
  {
    name: "Beat (Eating Disorders)",
    description: "Support for those experiencing eating disorders.",
    contact: {
      voice: { number: "0808 801 0677", availability: "Mon - Fri, 9am - 8pm; Sat - Sun, 4pm - 8pm" },
      text: { number: "07786 20 18 20" },
      email: "help@beateatingdisorders.org.uk",
    },
    availability: [
      { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], from: "09:00", to: "20:00" },
      { days: ["Sat", "Sun"], from: "16:00", to: "20:00" },
    ],
  },
  {
    name: "Silver Line",
    description: "Support for older adults (but often used by young people for specific advice).",
    contact: {
      voice: { number: "0800 4 70 80 90" },
    },
  },
  {
    name: "National Gambling Helpline",
    description: "For those experiencing problems with gambling.",
    contact: {
      voice: { number: "0808 8020 133" },
      text: { number: "18001 0808 8020 133" },
    },
  },
  {
    name: "MindOut",
    description: "LGBTQ+ Mental Health Service.",
    contact: {
      voice: { number: "01273 234 839", availability: "Mon - Fri, 10am - 5pm" },
      email: "info@mindout.org.uk",
    },
    availability: { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], from: "10:00", to: "17:00" },
  },
];





const seedDatabase = async () => {
  try {
    console.log("Connecting to MongoDB...");    // messages to show progress of the seeding process 
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    console.log("Clearing existing data...");
    await Helpline.deleteMany();
    console.log("Existing data cleared.");

    console.log("Inserting new data...");
    await Helpline.insertMany(helplines);
    console.log("Database seeded successfully.");
    
    process.exit(0); 
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1); // Exit with failure
  }
};

seedDatabase();
