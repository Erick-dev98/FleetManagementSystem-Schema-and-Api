import { db } from "../../connect.js";
import express from "express";
const app = express();

// Create Fleet Table
app.get('/createfleetstable', (req, res) => {
    let sql = 
    `CREATE TABLE Fleet (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        VehicleType VARCHAR(100) NOT NULL,
        VehicleBrand VARCHAR(100) NOT NULL,
        LicensePlate VARCHAR(20) NOT NULL,
        MaxPermissibleLoad DECIMAL(10,2) NOT NULL,
        InitialOdometerReading DECIMAL(10,2) NOT NULL,
        Color VARCHAR(50),
        Year INT NOT NULL,
        Fees DECIMAL(10,2),
        Insurance DECIMAL(10,2),
        MaintenanceExpenses DECIMAL(10,2),
        VehicleId INT,
        FOREIGN KEY (VehicleId) REFERENCES Vehicles(Id)
    );
    `;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Fleets table created...');
    });
});

// Create VehiclesCategory Table
app.get('/createvihiclecategorytable', (req, res) => {
    let sql = 
    `CREATE TABLE Vehicles (
        VehicleId INT AUTO_INCREMENT PRIMARY KEY,
        VehicleName VARCHAR(255) NOT NULL,
        InsuranceDate DATE,
        InspectionDate DATE,
        LastServiceDate DATE,
        VehicleCondition TEXT
    );  
    `;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Vehicles table created...');
    });
});

// Create VehiclesCategory Table
app.get('/createvihiclecategorytable', (req, res) => {
    let sql = 
    `CREATE TABLE VehiclesCategory (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        IsBus BOOLEAN DEFAULT FALSE,
        IsTruck BOOLEAN DEFAULT FALSE,
        IsVan BOOLEAN DEFAULT FALSE,
        IsCar BOOLEAN DEFAULT FALSE,
        IsMotorcycle BOOLEAN DEFAULT FALSE,
        IsSUV BOOLEAN DEFAULT FALSE,
        IsOther BOOLEAN DEFAULT FALSE,
        Comments TEXT,
        VehicleId,
        FOREIGN KEY (VehicleId) REFERENCES Vehicles(Id),
    );
    `;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('VehiclesCategory table created...');
    });
});

// Create Drivers Table
app.get('/createdriverstable', (req, res) => {
    let sql = 
    `CREATE TABLE Drivers (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(255) NOT NULL,
        Address TEXT,
        Telephone VARCHAR(20),
        Identity VARCHAR(50),
        LicenseQualification VARCHAR(100),
        NumberOfFines INT,
        LostPoints INT,
        FinesValue DECIMAL(10,2)
    );
    `;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Drivers table created...')
    })
})

// Create Workshop Table
`CREATE TABLE Workshop (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    WorkshopName VARCHAR(255) NOT NULL,
    Address TEXT,
    Telephone VARCHAR(20),
    Phone2 VARCHAR(20),
    Contact VARCHAR(255)
);
`
// Create MaintenaceType table
`CREATE TABLE MaintenanceType (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    MinorMaintenance VARCHAR(100),
    MajorMaintenance VARCHAR(100)
);
`
// Create MinorMaintenance services table
`CREATE TABLE MinorMaintenanceServices (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    OilChange BOOLEAN DEFAULT FALSE,
    TireRotation BOOLEAN DEFAULT FALSE,
    WheelAlignment BOOLEAN DEFAULT FALSE,
    BrakeInspection BOOLEAN DEFAULT FALSE,
    FluidChecks BOOLEAN DEFAULT FALSE,
    AirFilterReplacements BOOLEAN DEFAULT FALSE,
    BatteryMaintenance BOOLEAN DEFAULT FALSE,
    SparkPlugReplacement BOOLEAN DEFAULT FALSE,
    CabinAirFilterReplacement BOOLEAN DEFAULT FALSE,
    HeadlightTaillightBulbReplacement BOOLEAN DEFAULT FALSE
);
`

// Create MajorMaintenance services table
`CREATE TABLE MajorMaintenanceServices (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    TimingBeltReplacements BOOLEAN DEFAULT FALSE,
    TransmissionServices BOOLEAN DEFAULT FALSE,
    CoolantSystemFlush BOOLEAN DEFAULT FALSE,
    FuelSystemCleaning BOOLEAN DEFAULT FALSE,
    BrakeSystemRepairs BOOLEAN DEFAULT FALSE,
    EngineTuneUp BOOLEAN DEFAULT FALSE,
    ExhaustSystemRepairs BOOLEAN DEFAULT FALSE,
    EngineOverhaul BOOLEAN DEFAULT FALSE,
    ElectricalSystemRepairs BOOLEAN DEFAULT FALSE
);
`
// Create SupplyStations table
`CREATE TABLE SupplyStations (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    GasStation VARCHAR(255),
    PowerStation VARCHAR(255),
    Address TEXT,
    Telephone VARCHAR(20),
    Phone2 VARCHAR(20),
    Contact VARCHAR(255)
);`

// Create Causes of Defect table 
`CREATE TABLE CausesOfDefect (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    LackOfMaintenance BOOLEAN DEFAULT FALSE,
    Accident BOOLEAN DEFAULT FALSE,
    FlatTire BOOLEAN DEFAULT FALSE,
    LackOfExchange BOOLEAN DEFAULT FALSE
);
`
// Create TypesOfInfringement
`CREATE TABLE TypesOfInfringement (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Light BOOLEAN DEFAULT FALSE,
    Average BOOLEAN DEFAULT FALSE,
    Serious BOOLEAN DEFAULT FALSE,
    VerySerious BOOLEAN DEFAULT FALSE
);
`
// Create Insurance table
`CREATE TABLE Insurance (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    PolicyNumber VARCHAR(100) NOT NULL,
    Provider VARCHAR(255) NOT NULL,
    InsuranceType VARCHAR(100) NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    Amount DECIMAL(10,2) NOT NULL,
    VehicleId INT NOT NULL,
    FOREIGN KEY (VehicleId) REFERENCES Vehicles(Id),
    FOREIGN KEY (InsuranceTypeId) REFERENCES InsuranceTypes(Id)
);
`
// Create InsuranceTypes table
`CREATE TABLE InsuranceTypes (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Comprehensive BOOLEAN DEFAULT FALSE,
    Liability BOOLEAN DEFAULT FALSE,
    Collision BOOLEAN DEFAULT FALSE,
    PersonalInjuryProtection BOOLEAN DEFAULT FALSE,
    UninsuredMotoristCoverage BOOLEAN DEFAULT FALSE,
    UnderinsuredMotoristCoverage BOOLEAN DEFAULT FALSE,
    PropertyDamageLiability BOOLEAN DEFAULT FALSE,
    MedicalPaymentsCoverage BOOLEAN DEFAULT FALSE,
    RentalReimbursementCoverage BOOLEAN DEFAULT FALSE,
    RoadsideAssistanceCoverage BOOLEAN DEFAULT FALSE,
    FireDamageCoverage BOOLEAN DEFAULT FALSE
);
`

// Create FuelRequest tables
`CREATE TABLE FuelRequest (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    FuelRequestDate DATE NOT NULL,
    OdometerReading DECIMAL(10, 2) NOT NULL,
    FuelType ENUM('Diesel', 'Petrol') NOT NULL,
    VehicleId INT NOT NULL,
    DriverId INT NOT NULL,
    CardLimit DECIMAL(10, 2),
    AmountFilled DECIMAL(10, 2),
    FOREIGN KEY (VehicleId) REFERENCES Vehicles(Id),
    FOREIGN KEY (DriverId) REFERENCES Drivers(Id)
);
` 
// Create VehicleAllocation table
`CREATE TABLE VehicleAllocation (
    AllocationId INT AUTO_INCREMENT PRIMARY KEY,
    DriverId INT NOT NULL,
    VehicleId INT NOT NULL,
    AllocationDate DATE NOT NULL,
    FOREIGN KEY (DriverId) REFERENCES Drivers(DriverId),
    FOREIGN KEY (VehicleId) REFERENCES Vehicles(VehicleId)
);
`
// Create VehicleInspections table
`CREATE TABLE VehicleInspections (
    InspectionId INT AUTO_INCREMENT PRIMARY KEY,
    VehicleId INT NOT NULL,
    DriverId INT NOT NULL,
    InspectionDate DATE NOT NULL,
    VehicleCondition TEXT NOT NULL,
    FOREIGN KEY (VehicleId) REFERENCES Vehicles(VehicleId),
    FOREIGN KEY (DriverId) REFERENCES Drivers(DriverId)
);
`
// Create TripLogs table
`CREATE TABLE TripLogs (
    TripId INT AUTO_INCREMENT PRIMARY KEY,
    DriverId INT NOT NULL,
    VehicleId INT NOT NULL,
    TripDate DATE NOT NULL,
    StartLocation VARCHAR(255) NOT NULL,
    EndLocation VARCHAR(255) NOT NULL,
    Distance DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (DriverId) REFERENCES Drivers(DriverId),
    FOREIGN KEY (VehicleId) REFERENCES Vehicles(VehicleId)
);
`
// Create VehicleRepairs table
`CREATE TABLE VehicleRepairs (
    RepairId INT AUTO_INCREMENT PRIMARY KEY,
    DriverId INT NOT NULL,
    VehicleId INT NOT NULL,
    RepairDate DATE NOT NULL,
    Description TEXT NOT NULL,
    FOREIGN KEY (DriverId) REFERENCES Drivers(DriverId),
    FOREIGN KEY (VehicleId) REFERENCES Vehicles(VehicleId)
);
`

//Create MonthlyReports table
`CREATE TABLE MonthlyReports (
    ReportId INT AUTO_INCREMENT PRIMARY KEY,
    ReportMonth INT NOT NULL,
    ReportYear INT NOT NULL,
    VehicleId INT NOT NULL,
    VehicleCondition TEXT,
    Mileage DECIMAL(10, 2),
    FuelConsumption DECIMAL(10, 2),
    FOREIGN KEY (VehicleId) REFERENCES Vehicles(VehicleId)
);
`
// Create Reminders table
`CREATE TABLE Reminders (
    ReminderId INT AUTO_INCREMENT PRIMARY KEY,
    FleetManagerId INT NOT NULL,
    ReminderType VARCHAR(100) NOT NULL,
    ReminderDate DATE NOT NULL,
    FOREIGN KEY (FleetManagerId) REFERENCES FleetManagers(FleetManagerId)
);
`
// Create Reminders table for the Fleet Managers
`CREATE TABLE Reminders (
    ReminderId INT AUTO_INCREMENT PRIMARY KEY,
    FleetManagerId INT NOT NULL,
    ReminderType VARCHAR(100) NOT NULL,
    ReminderDate DATE NOT NULL,
    VehicleId INT NOT NULL,
    Insurance DECIMAL(10, 2),
    Service DECIMAL(10, 2),
    FOREIGN KEY (FleetManagerId) REFERENCES FleetManagers(FleetManagerId),
    FOREIGN KEY (VehicleId) REFERENCES Vehicles(VehicleId)
);
`
// Create VehicleExpenses table
`CREATE TABLE VehicleExpenses (
    ExpenseId INT AUTO_INCREMENT PRIMARY KEY,
    ReceiptNumber VARCHAR(255),
    Date DATE,
    Time TIME,
    Details TEXT,
    TransactionStatus VARCHAR(50),
    PaidIn DECIMAL(10, 2),
    Withdrawn DECIMAL(10, 2),
    Account VARCHAR(255),
    Payee VARCHAR(255),
    Item VARCHAR(255)
);
`
// Create WorkplaceIncidentReport table
`CREATE TABLE WorkplaceIncidentReport (
    ReportId INT AUTO_INCREMENT PRIMARY KEY,
    Date DATE NOT NULL,
    Staff ENUM('Driver', 'Fleet Manager') NOT NULL,
    Location VARCHAR(255) NOT NULL,
    Incident VARCHAR(255) NOT NULL,
    TypeOfIncident ENUM('Accident', 'Theft', 'Loss', 'Breakage', 'Other') NOT NULL,
    Detail TEXT,
    CauseOfIncident TEXT,
    DetailActionTaken TEXT,
    ThirdPartiesAndAuthoritiesInvolved TEXT,
    ContactPerson VARCHAR(255),
    DriverId INT,
    FleetManagerId INT,
    AdminId INT,
    FOREIGN KEY (FleetManagerId) REFERENCES FleetManagers(FleetManagerId),
    FOREIGN KEY (AdminId) REFERENCES Admins(AdminId)
);
`
