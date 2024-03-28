import { db } from "../../connect.js";

// Create SystemDashboard table
`CREATE TABLE SystemDashboard (
    DashboardId INT AUTO_INCREMENT PRIMARY KEY,
    DateUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    AdminId INT,
    TimeToResolve DECIMAL(10, 2),
    VehicleRenewalReminders INT,
    ActiveWorkOrders INT,
    VehicleStatus ENUM('Active/Inactive', 'In Shop', 'Out of Service'),
    EquipmentStatus ENUM('In-Service', 'Out of Service', 'Disposed', 'Missing'),
    FuelCosts DECIMAL(10, 2),
    OtherCosts DECIMAL(10, 2),
    TopReasonsForRepair TEXT,
    CostPerKilometer DECIMAL(10, 2),
    OverdueInspections INT,
    InspectionSubmissions INT,
    OnTimeServiceCompliance DECIMAL(5, 2),
    InspectionSummary TEXT,
    InspectionItemFailureRate DECIMAL(5, 2),
    AllFaultsOpenPending INT,
    LatestMeterReadings TEXT,
    TotalCosts DECIMAL(10, 2),
    ServiceCosts DECIMAL(10, 2),
    CriticalFaults INT,
    RecentComments TEXT,
    VehicleLocations TEXT,
    VehicleAssignments TEXT,
    ContactRenewalReminders INT,
    OpenIssues INT,
    ServiceRemindersOverdue INT,
    ServiceRemindersDueSoon INT,
    RepairPriorityClassTrends ENUM('No Repair', 'Emergency', 'Non-Scheduled', 'Scheduled'),
    FOREIGN KEY (AdminId) REFERENCES Admins(AdminId)
);
`