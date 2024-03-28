import { db } from "../../index.js";

// Create the SuperiorAdmin table
`CREATE TABLE Admins (
    AdminId INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    FullName VARCHAR(255) NOT NULL,
    Role ENUM('Superior Admin') NOT NULL,
    Photo VARCHAR(255),
    PhoneNumber VARCHAR(20)
);
`
// Create the FleetManagers Table
`CREATE TABLE FleetManagers (
    FleetManagerId INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    FullName VARCHAR(255) NOT NULL,
    Role ENUM('Fleet Manager') NOT NULL,
    Photo VARCHAR(255),
    PhoneNumber VARCHAR(20)
);
`