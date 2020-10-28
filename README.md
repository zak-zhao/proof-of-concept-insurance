# Proof of concept for insurance management

## Introduction
This project is an easy-to-use insurance management application, which is designed to optimize insurance buying procedures such as quote, submit, and approval. 

There are three roles in this application, 
- agent who can submit insurance application 
- underwriter who can verify agent information and evaluate the risk of agent, to see if agent is qualified for their insurance
- manager who can approve insurance and maintain all the other stuff.

## Software Stack
- Front-end: React
- Back-end: Spring Boot

## Microservices Architecture
There are three main modules in this project, which are document generation, policy management, and configurable reports.

### Document Generation
After we receive the approval from the manager, and get the client information, we can generate the insurance document and send the success or failure message and document files to other modules through ActiveMQ as a Java Message Service.

### Policy Management
There are some CRUD operations and store the policy information inside the AWS DynamoDB, also I utilized AWS Lambda and API gateway to send out email notifications.

### Configurable Reports
I Designed the report using D3.js for manager to have an overview of how business is going, how is performance of employee.

## Class Model
![Class Model](https://github.com/zak-zhao/proof-of-concept-insurance/blob/master/Domain_Model.jpg)
