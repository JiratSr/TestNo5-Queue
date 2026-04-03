USE master;
GO

IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'QueueControlDB')
BEGIN
    CREATE DATABASE QueueControlDB;
END
GO

USE QueueControlDB;
GO

IF NOT EXISTS (
    SELECT * FROM sys.tables 
    WHERE name = '__EFMigrationsHistory' AND schema_id = SCHEMA_ID('dbo')
)
BEGIN
    CREATE TABLE dbo.__EFMigrationsHistory (
        MigrationId     NVARCHAR(150)   NOT NULL,
        ProductVersion  NVARCHAR(32)    NOT NULL,
        CONSTRAINT PK___EFMigrationsHistory PRIMARY KEY (MigrationId)
    );
END
GO

IF NOT EXISTS (
    SELECT * FROM sys.tables 
    WHERE name = 'Queues' AND schema_id = SCHEMA_ID('dbo')
)
BEGIN
    CREATE TABLE dbo.Queues (
        Id          INT             NOT NULL IDENTITY(1,1),
        Name        NVARCHAR(255)   NOT NULL,
        Description NVARCHAR(500)   NULL,
        Status      TINYINT         NOT NULL DEFAULT 1,  -- e.g. 1=Active, 0=Inactive
        CreatedAt   DATETIME2       NOT NULL DEFAULT GETUTCDATE(),
        UpdatedAt   DATETIME2       NULL,
        CONSTRAINT PK_Queues PRIMARY KEY (Id)
    );
END
GO