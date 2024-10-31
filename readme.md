# Pages 

- Login Screen 
- Dashboard 

# Schemas (Data Models)

## Party Category (Tags)
 - Category ID ObjectId
 - Category Name String

## Party Master
 - Code (ID) Mongo ObjectId
 - Party name String Unique 
 - Address String 
 - Contact Person String 
 - Mobile Number String/ Number 
 - Email id String 
 - Category Id Party Category
 - PAN Number String Unique 
 - Opening Balancce Number 
 - Balance Type Enum (Only two debit or credit)

## Brand Master 
 - BrandID ObjectId 
 - Name String 

## Item Type Master 
 - ID ObjectId
 - Type Name String 

## Quality Master 
 - Id ObjectId 
 - Name String 

## Group Master 
 - Id Object Id
 - name String 

## Unit Master 
 - Id Object Id 
 - name String / Enum 

## Item Master 
 - Item Id ObjectId 
 - Brand Id 
 - Type Id
 - Quality Id Upar wale schema se aayegi
 - Group Id
 - unit Id 
 - Opening Balance Number

# Functionality 
 -  Display all the data on dashboard with links