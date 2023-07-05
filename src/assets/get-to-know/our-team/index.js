import dio from "./executives/Dio.png"
import bachul from "./executives/Bachul.png"

import hanan from "./design/Hanan.png"
import Ryan from "./design/Ryan.png"

import Ayas from "./mnb/Ayas.png"
import Azzah from "./mnb/Azzah.png"

import Tunjung from "./bisdev/Tunjung.png"
import Cecil from "./bisdev/Cecil.png"

import Khalisa from "./tnd/Khalisa.png"
import Clarissa from "./tnd/Clarissa.png"

import Denise from "./hr/Denise.png"
import Farrel from "./hr/Farrel.png"

import Gavin from "./technical/Gavin.png"
import Pudi from "./technical/Pudi.png"

import Dito from "./technical/Dito.png"
import Ivan from "./technical/Ivan.png"

import Andin from "./management/Andin.png"

import Bisma from "./finance/Bisma.png"

const executives = {
  head: {
    img: dio,
    name: "Rafie Amandio",
    position: "Chairman",
  },
  vice: {
    img: bachul,
    name: "Luthfi Misbachul M.",
    position: "Vice Chairman",
  },
  div: "THE EXECUTIVES",
  desc: "Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise that resonates with audiences and leaves a lasting impact. From developing marketing strategies, to executing campaigns and analyzing results.",
}

const externals = [
  {
    head: {
      img: Ryan,
      name: "Aldrian Raffi",
      position: "Head",
    },
    vice: {
      img: hanan,
      name: "Zaki Hanan",
      position: "Vice Head",
    },
    div: "DESIGN SPECIALIST",
    desc: "Creates a cohesive look and feel that sets us apart and establishes EXERCISE’s identity. The Design Specialist division is where art and function converge to bring our vision to life. Infuse every project with beauty and style, elevating it beyond the ordinary to the extraordinary.",
    staffs: [
      {
        img: "",
        name: "Zalfy Putra Rezky",
      },
      {
        img: "",
        name: "Lauren Christy",
      },
      {
        img: "",
        name: "Bintang Marsuma",
      },
      {
        img: "",
        name: "Rizqi Zaidan",
      },
    ],
  },
  {
    head: {
      img: Ayas,
      name: "Dyah Laksmi",
      position: "Head",
    },
    vice: {
      img: Azzah,
      name: "Azzah Angeli",
      position: "Vice Head",
    },
    div: "MARKETING AND BRANDING",
    desc: "Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise that resonates with audiences and leaves a lasting impact. From developing marketing strategies, to executing campaigns and analyzing results.",
    staffs: [
      {
        img: "",
        name: "Sihombing Giovano G.",
      },
      {
        img: "",
        name: "Adrien Ardra Ramadhan",
      },
      {
        img: "",
        name: "Wendy Dharmawan",
      },
      {
        img: "",
        name: "Nicholas Samosir",
      },
    ],
  },
  {
    head: {
      img: Tunjung,
      name: "Amrita Deviayu",
      position: "Head",
    },
    vice: {
      img: Cecil,
      name: "Cecilia Inez Reva",
      position: "Vice Head",
    },
    div: "BUSINESS DEVELOPMENT",
    desc: "Expanding horizons, one opportunity at a time. With a keen eye for emerging trends and a strategic approach to partnerships and collaborations, the Business Development division is responsible for identifying and pursuing new business opportunities that drive the growth and success of Exercise.",
    staffs: [
      {
        img: "",
        name: "Satrio Jati Pamungkas",
      },
      {
        img: "",
        name: "Darren Nathanael B.",
      },
      {
        img: "",
        name: "Farhan Nuzul Noufendri",
      },
    ],
  },
  {
    head: {
      img: Khalisa,
      name: "Khalisa Wintarirani",
      position: "Head",
    },
    vice: {
      img: Clarissa,
      name: "Clarissa Rikani",
      position: "Vice Head",
    },
    div: "TRAINING AND DEVELOPMENT",
    desc: "Dedicated to empowering growth and fostering a culture of lifelong learning. Whether it's through skill-building workshops, professional development courses, or mentorship opportunities, the Training and Development division is committed to providing the tools and resources employees need to succeed.",
    staffs: [
      {
        img: "",
        name: "Cristopher Sutandar",
      },
      {
        img: "",
        name: "Hanif Nur Ilham Sanjaya",
      },
      {
        img: "",
        name: "Valentino Farish",
      },
      {
        img: "",
        name: "Devin Ezekiel",
      },
    ],
  },
  {
    head: {
      img: Denise,
      name: "Handaneswari Pramudhyta",
      position: "Head",
    },
    vice: {
      img: Farrel,
      name: "Farrel Mirawan",
      position: "Vice Head",
    },
    div: "HUMAN RESOURCES",
    desc: "The one who take a role to fostering a positive and productive work environment for all teams. Human Resources Division works tirelessly to support the growth and development of each individual, creating a culture that values collaboration, inclusivity, and professionalism.",
    staffs: [
      {
        img: "",
        name: "Rufaidah Kariemah",
      },
      {
        img: "",
        name: "Attafahqi Amirtha Dariswan",
      },
      {
        img: "",
        name: "Ryan Safa Tjendana",
      },
      {
        img: "",
        name: "Yasmin Devina Sinuraya",
      },
    ],
  },
  {
    head: {
      img: Gavin,
      name: "Muhammad Gavin",
      position: "Head",
    },
    vice: {
      img: Pudi,
      name: "Ricky Rahman",
      position: "Vice Head",
    },
    div: "HARDWARE",
    desc: "The backbone of our technological endeavors, responsible for bringing the physical components of our products to life. From designing and testing complex circuits to fine-tuning and assembling intricate hardware, our team of skilled engineers and technicians are the unsung heroes of innovation.",
    staffs: [
      {
        img: "",
        name: "Alexander Maximilian",
      },
      {
        img: "",
        name: "Stanislaus David Arelian W.",
      },
      {
        img: "",
        name: "Davin Nazhif Wilviadli",
      },
      {
        img: "",
        name: "Wilky Martin",
      },
    ],
  },
  {
    head: {
      img: Dito,
      name: "Raditya Ihsan",
      position: "Head",
    },
    vice: {
      img: Ivan,
      name: "Ivan Indirsyah",
      position: "Vice Head",
    },
    div: "SOFTWARE",
    desc: "The driving force behind our technological advancements, harnessing the power of coding and algorithms to bring our products to life. With a team of brilliant developers and software engineers, we're constantly pushing the boundaries of what's possible, seeking new ways to innovate and improve user experience.",
    staffs: [
      {
        img: "",
        name: "Dimas Dermawan",
      },
      {
        img: "",
        name: "Giovan C. Sihombing",
      },
      {
        img: "",
        name: "M. Fahish",
      },
      {
        img: "",
        name: "Farrel Athaillah N.",
      },
    ],
  },
  {
    head: {
      img: Andin,
      name: "Qinthara Andini",
      position: "Head",
    },
    vice: {
      img: "",
      name: "Unknown",
      position: "Vice Head",
    },
    div: "MANAGEMENT",
    desc: "Work closely with the technical team to ensure projects are planned, executed, and delivered on time and within budget. Twenty-four seven, the Project Management division is the driving force behind our technical team’s success in bringing innovative ideas to life by leverages their expertise to overcome challenges, minimize risk, and maximize results.",
    staffs: [
      {
        img: "",
        name: "Muhammad Daffa Hilmy",
      },
      {
        img: "",
        name: "Timothy Farell Lasmana",
      },
    ],
  },
  {
    head: {
      img: Bisma,
      name: "Bisma Alif",
      position: "Head",
    },
    vice: {
      img: "",
      name: "Unknown",
      position: "Vice Head",
    },
    div: "FINANCE",
    desc: "The backbone of Exercise’s financial stability and success. Responsible for creating and implementing financial strategies, managing budgets, and making informed decisions that guide the financial future of our organization. Their unwavering commitment to accuracy and integrity ensures the long-term growth and prosperity of the team.",
    staffs: [
      {
        img: "",
        name: "Rafli Adithia",
      },
      {
        img: "",
        name: "Mikhael Morris Hapataran S.",
      },
    ],
  },
]

export { executives, externals }
