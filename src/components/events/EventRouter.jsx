import React from 'react'

import EventDetails from '../../pages/EventDetails'
import EventList from '../../pages/EventList'

import learning from "../../assets/event-details/benefits/learning.svg"
import presertif from "../../assets/event-details/benefits/checkmark.svg"
import sertif from "../../assets/event-details/benefits/certificate.svg"
import konsum from "../../assets/event-details/benefits/konsumsi.svg"

import vscode from "../../assets/event-details/applications/vscode.png"
import figma from "../../assets/event-details/applications/figma.png"
import andro from "../../assets/event-details/applications/androstud.png"
import postman from "../../assets/event-details/applications/postman.png"
import github from "../../assets/event-details/applications/github.png"
import gcolab from "../../assets/event-details/applications/google-colab.png"
import proteus from "../../assets/event-details/applications/proteus.png"

const DigSilent = {
    path: 'power-factory-digsilent-training',
    element: 
    <EventDetails 
        title={"Power Factory DigSILENT Training"}
        prices={{
            indv: 100,
            team: 450
        }}
        date={"29 April 2023"}
        desc={"Digsilent Training is a training with the DigSilent application specifically for students majoring in Electrical Engineering who want to take Electric Power specialization. Digsilent Training collaborates with STL Laboratory FTUI in March 2023."}
        benefits={[
            {
                title: "Basic Competencies of STL and DigSILENT",
                img: learning,
                bg: "bg-dark-2",
                text: "text-light"
            },
            {
                title: "Pre-Certificate",
                img: presertif,
                bg: "bg-grey-2",
                text: "text-light"
            },
            {
                title: "Post-Training Certificate",
                img: sertif,
                bg: "bg-grey-1",
                text: "text-light"
            },
            {
                title: "Snacks",
                img: konsum,
                bg: "bg-light",
                text: "text-dark"
            }
        ]}
        curriculum={[
            {
                title: "DAY 1",
                list: [
                " STL Basics",
                "DigSILENT Introduction",
                "Simulation of Single Line Diagram Creation & Generation"
                ]
            },
            {
                title: "DAY 2",
                list: [
                "Load Flow",
                "Short Circuit",
                "Single Line Diagram Generation",
                "Error Handling, Summary, & Report"
                ]
            },
        ]}
        apps={[
            {
                title: "VsCode",
                img: vscode,
            },
            {
                title: "Figma",
                img: figma,
            },
            {
                title: "Android Studio",
                img: andro,
            },
            {
                title: "Postman",
                img: postman,
            }
        ]}
        faq={[
            {
                question: "Who can attend the Training?",
                answer: "Everyone is welcome to attend the training."
            },
            {
                question: "How do I register for the workshop?",
                answer: "To register for the workshop, simply click on the provided registration link."
            },
            {
                question: "Who can attend the Training?",
                answer: "Yes, there is a registration fee, but it varies for each event. Details can be found in the respective event information."
            },
            {
                question: "Do I need to bring my laptop or any specific materials?",
                answer: "Yes, participants are required to bring their own laptops, if necessary for the training.."
            },
            {
                question: "Will there be hands-on sessions?",
                answer: "Yes, for some practical training, there will be hands-on sessions."
            },
            {
                question: "Will I receive any certificates or course materials after completing the workshop?",
                answer: "Yes, participants will receive certificates and course materials upon completing the workshop."
            },
            {
                question: "Is there a limit to the number of participants in the workshop?",
                answer: "Yes, we limit the number of participants to maintain a focused and high-quality learning environment."
            },
            {
                question: " How do I contact the organizers for further questions or concerns?",
                answer: "For any further questions or concerns, you can reach out to us at XXXXXXXXX"
            }
        ]}
    />
}

const Technoskill = {
    path: 'technoskill-1.0',
    element: 
    <EventDetails 
        title={"Technoskill 1.0"}
        date={"13 Mei 2023"}
        desc={"Technoskill 1.0 this time is present to support the hard skill needs of the Electrical Engineering Department residents by bringing two series of events, namely Workshops and Webinars which can be attended by all students and students of the Electrical Engineering Department."}
        benefits={[
            {
                title: "Skill Enhancement and Expert Guidance to Boost your confidence for an upcoming competition ",
                img: learning,
                bg: "bg-dark-2",
                text: "text-light"
            },
            {
                title: "Prizes for Competition winners",
                img: presertif,
                bg: "bg-grey-2",
                text: "text-light"
            },
            {
                title: "Post-Training Certificate",
                img: sertif,
                bg: "bg-grey-1",
                text: "text-light"
            },
            {
                title: "Refreshing beverages",
                img: konsum,
                bg: "bg-light",
                text: "text-dark"
            }
        ]}
        prices={{
            indv: 35,
            team: 90
        }}
        curriculum={[
            {
                title: "Learning Materials",
                list: [
                "Introduction to Python and Google Colab",
                "Introduction to AI, Deep Learning, and Image Classification",
                "Difference between Supervised & Unsupervised",
                "Introduction to Convolutional Neural Networks (CNNs) for Image Classification",
                "Image Preprocessing Techniques",
                "Introduction to Computer Vision"
                ]
            },
        ]}
        apps={[
            {
                title: "VsCode",
                img: vscode,
            },
            {
                title: "Github",
                img: github,
            },
            {
                title: "Google Colab",
                img: gcolab,
            }
        ]}
        faq={[
            {
                question: "Who can attend the Training?",
                answer: "Everyone is welcome to attend the training."
            },
            {
                question: "How do I register for the workshop?",
                answer: "To register for the workshop, simply click on the provided registration link."
            },
            {
                question: "Who can attend the Training?",
                answer: "Yes, there is a registration fee, but it varies for each event. Details can be found in the respective event information."
            },
            {
                question: "Do I need to bring my laptop or any specific materials?",
                answer: "Yes, participants are required to bring their own laptops, if necessary for the training.."
            },
            {
                question: "Will there be hands-on sessions?",
                answer: "Yes, for some practical training, there will be hands-on sessions."
            },
            {
                question: "Will I receive any certificates or course materials after completing the workshop?",
                answer: "Yes, participants will receive certificates and course materials upon completing the workshop."
            },
            {
                question: "Is there a limit to the number of participants in the workshop?",
                answer: "Yes, we limit the number of participants to maintain a focused and high-quality learning environment."
            },
            {
                question: " How do I contact the organizers for further questions or concerns?",
                answer: "For any further questions or concerns, you can reach out to us at XXXXXXXXX"
            }
        ]}
    />
}
const Proteus = {
    path: 'proteus-training',
    element: 
    <EventDetails 
        title={"Proteus Training"}
        prices={{
            indv: 50,
            team: 160
        }}
        date={"29 April 2023"}
        desc={"Proteus Training is an exciting opportunity to learn electronic design in a fun and hands-on way. No prior experience required. With Digital Laboratory, , this immersive event offers hands-on projects, expert mentorship, and insights into IC decoders, multiplexers, and more."}
        benefits={[
            {
                title: "Practical Skill Development",
                img: learning,
                bg: "bg-dark-2",
                text: "text-light"
            },
            {
                title: "Immediate Feedback and Application",
                img: presertif,
                bg: "bg-grey-2",
                text: "text-light"
            },
            {
                title: "Post-Training Certificate",
                img: sertif,
                bg: "bg-grey-1",
                text: "text-light"
            },
            {
                title: "Snacks",
                img: konsum,
                bg: "bg-light",
                text: "text-dark"
            }
        ]}
        curriculum={[
            {
                title: "Advancing Use of Proteus",
                list: [
                "Creating new project with proteus",
                "Learn how to read datasheets",
                "Learn about IC decoder and seven segment",
                "Learn about IC multiplexer and demux",
                "Learn about flip flop, register, and counter"
                ]
            }
        ]}
        apps={[
            {
                title: "Proteus",
                img: proteus,
            },
        ]}
        faq={[
            {
                question: "Who can attend the Training?",
                answer: "Everyone is welcome to attend the training."
            },
            {
                question: "How do I register for the workshop?",
                answer: "To register for the workshop, simply click on the provided registration link."
            },
            {
                question: "Who can attend the Training?",
                answer: "Yes, there is a registration fee, but it varies for each event. Details can be found in the respective event information."
            },
            {
                question: "Do I need to bring my laptop or any specific materials?",
                answer: "Yes, participants are required to bring their own laptops, if necessary for the training.."
            },
            {
                question: "Will there be hands-on sessions?",
                answer: "Yes, for some practical training, there will be hands-on sessions."
            },
            {
                question: "Will I receive any certificates or course materials after completing the workshop?",
                answer: "Yes, participants will receive certificates and course materials upon completing the workshop."
            },
            {
                question: "Is there a limit to the number of participants in the workshop?",
                answer: "Yes, we limit the number of participants to maintain a focused and high-quality learning environment."
            },
            {
                question: " How do I contact the organizers for further questions or concerns?",
                answer: "For any further questions or concerns, you can reach out to us at XXXXXXXXX"
            }
        ]}
    />
}

const EventRouter = {
    path: '/events',
    children: [
        {
            path: "",
            element: <EventList />
        },
        DigSilent,
        Technoskill,
        Proteus
    ]
}

export default EventRouter