import { Resume } from "./ResumeDataModels";

export function SampleResume(): Resume {
  return {
    $schema:
      "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: "Richard Hendriks",
      label: "Programmer",
      image: "",
      email: "richard.hendriks@mail.com",
      phone: "(912) 555-4321",
      url: "http://richardhendricks.example.com",
      summary:
        "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinal!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!",
      location: {
        address: "2712 Broadway St",
        postalCode: "CA 94115",
        city: "San Francisco",
        countryCode: "US",
        region: "California",
      },
      profiles: [
        {
          network: "Twitter",
          username: "neutralthoughts",
          url: "",
        },
        {
          network: "SoundCloud",
          username: "dandymusicnl",
          url: "https://soundcloud.example.com/dandymusicnl",
        },
      ],
    },
    work: [
      {
        id: "46813291-322b-4703-9d7b-f95ec7aaa564",
        name: "Pied Piper",
        location: "Palo Alto, CA",
        description: "Awesome compression company",
        position: "CEO/President",
        url: "http://piedpiper.example.com",
        startDate: "2013-12-01",
        endDate: "2014-12-01",
        summary:
          "Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.",
        highlights: [
          "Build an algorithm for artist to detect if their music was violating copy right infringement laws",
          "Successfully won Techcrunch Disrupt",
          "Optimized an algorithm that holds the current world record for Weisman Scores",
        ],
      },
      {
        id: "46813291-322b-4703-9d7b-f95ec7aaa564",
        name: "Pied Piper2",
        location: "Palo Alto, CA",
        description: "Awesome compression company",
        position: "CEO Assistant",
        url: "http://piedpiper.example.com",
        startDate: "2010-12-01",
        endDate: "2013-12-01",
        summary:
          "Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.",
        highlights: ["Made coffee"],
      },
    ],
    volunteer: [
      {
        id: "e1738f29-1004-43a5-9f76-0084fe977196",
        organization: "CoderDojo",
        position: "Teacher",
        url: "http://coderdojo.example.com/",
        startDate: "2012-01-01",
        endDate: "2013-01-01",
        summary: "Global movement of free coding clubs for young people.",
        highlights: ["Awarded 'Teacher of the Month'"],
      },
      {
        id: "e1738f29-1004-43a5-9f76-0084fe977196",
        organization: "Coder Rank",
        position: "Teacher",
        url: "http://coderrank.example.com/",
        startDate: "2012-01-01",
        endDate: "2013-01-01",
        summary: "Global movement of free coding league for programmers.",
        highlights: [],
      },
    ],
    education: [
      {
        id: "f807347b-ca04-4d74-b787-d3048ce4df4a",
        institution: "University of Oklahoma",
        url: "https://www.ou.edu/",
        area: "Information Technology",
        studyType: "Bachelor",
        startDate: "2011-06-01",
        endDate: "2014-01-01",
        score: "4.0",
        courses: ["DB1101 - Basic SQL", "CS2011 - Java Introduction"],
      },
      {
        id: "f807347b-ca04-4d74-b787-d3048ce4df4a",
        institution: "Oklahoma High school",
        url: "https://www.ou.edu/",
        area: "Information Technology",
        studyType: "Bachelor",
        startDate: "2011-06-01",
        endDate: "2014-01-01",
        score: "4.0",
        courses: ["DB1101 - Basic SQL", "CS2011 - Java Introduction"],
      },
    ],
    awards: [
      {
        id: "e2d1a0bc-86ba-4657-bff5-9401c15a9e65",
        title: "Digital Compression Pioneer Award",
        date: "2014-11-01",
        awarder: "Techcrunch",
        summary: "There is no spoon.",
      },
    ],
    publications: [
      {
        id: "89a0148e-271c-4072-9ee5-92906893911e",
        name: "Video compression for 3d media",
        publisher: "Hooli",
        releaseDate: "2014-10-01",
        url: "http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)",
        summary:
          "Innovative middle-out compression algorithm that changes the way we store data.",
      },
    ],
    skills: [
      {
        id: "695cd619-be68-478d-8f47-efef9082700f",
        name: "Web Development",
        level: "Master",
        keywords: ["HTML", "CSS", "Javascript"],
      },
      {
        id: "835cac18-f364-4e3a-a82e-61c87443478b",
        name: "Compression",
        level: "Master",
        keywords: ["Mpeg", "MP4", "GIF"],
      },
    ],
    languages: [
      {
        id: "14a8154e-db6a-4617-8c7a-9a692562fcaa",
        language: "English",
        fluency: "Native speaker",
      },
    ],
    interests: [
      {
        id: "da2291f8-1275-4fad-b0b6-f4d1329885b4",
        name: "Wildlife",
        keywords: ["Ferrets", "Unicorns"],
      },
    ],
    references: [
      {
        id: "62eac8ea-e82b-4c3a-9f4c-bbe5c99705a8",
        name: "Erlich Bachman",
        reference:
          "It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company.",
      },
    ],
    projects: [
      {
        id: "9d528149-c2e8-43f4-95b4-282f974e8f49",
        name: "Miss Direction",
        description: "A mapping engine that misguides you",
        highlights: [
          "Won award at AIHacks 2016",
          "Built by all women team of newbie programmers",
          "Using modern technologies such as GoogleMaps, Chrome Extension and Javascript",
        ],
        keywords: ["GoogleMaps", "Chrome Extension", "Javascript"],
        startDate: "2016-08-24",
        endDate: "2016-08-24",
        url: "missdirection.example.com",
        roles: ["Team lead", "Designer"],
        entity: "Smoogle",
        type: "application",
      },
    ],
    meta: {
      canonical:
        "https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json",
      version: "v1.0.0",
      lastModified: "2017-12-24T15:53:00",
    },
  };
}
