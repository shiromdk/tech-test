// Everything in here is just to help build a randomly generated job

import { OperandValueExpression } from "kysely";
import { Database } from "../../types";


// Create a javascript object in the format required for kysely to create a new job
// Randomly created from the data below
export const generateJobData = () => {
  const contact_name: string =
    firstNames[Math.floor(Math.random() * firstNames.length)] + " "+surnames[Math.floor(Math.random() * surnames.length)] ;
  const contact_email: string = `${contact_name.split(" ")[0]}@fakeemail.com`;
  const contact_phone: string =
    phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
  const price:number = Math.floor(Math.random() * 99);
  const description =
    descriptions[Math.floor(Math.random() * descriptions.length)];
  const suburb_id:number = Math.floor(Math.random() * 4) + 1;
  const category_id:number = Math.floor(Math.random() * 5)+ 1;
  const status:OperandValueExpression<
  Database,
  "jobs",
  "jobs.status"
>= "new";

  return {
    status,
    contact_email,
    contact_name,
    contact_phone,
    price,
    description,
    suburb_id,
    category_id,
  };
};

const firstNames = [
    'John', 'Alice', 'David', 'Emma', 'Michael', 'Olivia', 'Christopher', 'Sophia',
    'Daniel', 'Ava', 'Matthew', 'Mia', 'Andrew', 'Ella', 'Joseph', 'Grace',
    'Nicholas', 'Chloe', 'Ethan', 'Lily', 'Alexander', 'Hannah', 'William', 'Avery',
    'James', 'Abigail', 'Benjamin', 'Emily', 'Samuel', 'Scarlett', 'Gabriel', 'Madison',
    'Nathan', 'Sofia', 'Jonathan', 'Amelia', 'Ryan', 'Evelyn', 'Tyler', 'Victoria',
    'Christian', 'Aria', 'Daniel', 'Addison', 'Henry', 'Layla', 'Jackson', 'Zoe',
    'Elijah', 'Lillian', 'David', 'Natalie', 'Christopher', 'Brooklyn', 'Mason', 'Samantha',
    'Dylan', 'Aubrey', 'Logan', 'Hazel', 'Caleb', 'Ellie', 'Luke', 'Stella',
    'Isaac', 'Paisley', 'Evan', 'Skylar', 'Jack', 'Hailey', 'Jordan', 'Nora',
    'Isaiah', 'Bella', 'Adam', 'Leah', 'Connor', 'Scarlet', 'Thomas', 'Anna',
    'Aaron', 'Maya', 'Liam', 'Julia', 'Jackson', 'Mila', 'Cameron', 'Savannah',
    'Wyatt', 'Lucy', 'Hunter', 'Luna', 'Owen', 'Aaliyah', 'Zachary', 'Katherine'
  ];
  const surnames = [
    'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson',
    'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin',
    'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee',
    'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez',
    'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Nelson', 'Carter', 'Mitchell',
    'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards',
    'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan',
    'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard',
    'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks',
    'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson',
    'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores',
    'Washington', 'Butler', 'Simmons', 'Foster', 'Gonzalez', 'Bryant', 'Alexander', 'Russell'
  ];

const descriptions = [
  "Leaky Faucet",
  "Broken Window",
  "Creaky Door Hinges",
  "Wobbly Chair",
  "Faulty Light Switch",
  "Running Toilet",
  "Loose Cabinet Handles",
  "Squeaky Floors",
  "Cracked Tile",
  "Jammed Door Lock",
  "Torn Window Screen",
  "Dripping Showerhead",
  "Peeling Wallpaper",
  "Broken Doorbell",
  "Stuck Sliding Door",
  "Loose Deck Boards",
  "Cracked Foundation",
  "Leaking Roof",
  "Malfunctioning Garbage Disposal",
  "Faulty Thermostat",
  "Cracked Caulking",
  "Non-functioning Smoke Detector",
  "Unstable Handrail",
  "Broken Garage Door Spring",
  "Flickering Ceiling Fan",
];

const phoneNumbers = [
  "0412345678",
  "0423456789",
  "0434567890",
  "0445678901",
  "0456789012",
  "0467890123",
  "0478901234",
  "0489012345",
  "0490123456",
  "0401234567",
  "0412345670",
  "0423456781",
  "0434567892",
  "0445678903",
  "0456789014",
  "0467890125",
  "0478901236",
  "0489012347",
  "0490123458",
  "0401234569",
  "0412345672",
  "0423456783",
  "0434567894",
  "0445678905",
  "0456789016",
  "0467890127",
  "0478901238",
  "0489012349",
  "0490123450",
  "0401234561",
  "0412345674",
  "0423456785",
  "0434567896",
  "0445678907",
  "0456789018",
  "0467890129",
  "0478901230",
  "0489012341",
  "0490123452",
  "0401234563",
];
