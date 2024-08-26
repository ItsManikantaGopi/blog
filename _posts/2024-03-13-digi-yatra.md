---
layout: post
title: "Digi Yatra System Design"
show-img: true
mermaid: true
tags: [System Architecture, High Level Design, Digi Yatra]
---
After going through some resources, I got an Idea of how digiyatra is working and what are the components involved in it. I have tried to create a high level design of the system.

There might be some components missing or some components might not be required. This is just a high level design of the system.
I would like to know your thoughts on this.
```mermaid
graph LR
    subgraph Frontend
        A[Flutter App]
    end

		subgraph AWS
		    C2[SSM]
        
        subgraph Storage
            B8[Redis]
            B9[Hadoop & Apache Spark]
            B10[AWS RDS MySQL]
		    C4[S3]
        end
    subgraph EKS
        B[Go with GIN]
        subgraph Auth
            B1[OTP Service]
            B2[JWT Service]
        end
            B4[QR Code Service]
        subgraph Integration
            B5[DigiLocker API]
            B6[Aadhar Verification API]
        end
        subgraph Streaming_service
            B7[Kafka]
        end
        
    end
    end


    subgraph Mobile_Services
        D1[FCM]
        D2[Crashlytics]
        D3[Analytics]
        D4[Google ML Kit]
    end

    A --> |User Login| B
    B --> |OTP Verification| B1
    B1 --> |Send OTP| A
    A --> |Add Credentials| B
    B --> |OAuth 2.0 Flow| B5
    B5 --> |User Documents| B
    B --> |Store Documents| B10
    A --> |Capture Face| B
    A --> |Upload Pass| B
    B --> |Auth Verification| B4
    B4 --> |Generate QR Code| B
    Camera --> |Capture Image| B
    B --> |face recognition stream| B7
    B7 --> |user data| B9
    B9 --> |user data| B7
    B --> A

    B --> |Cache Data| B8
    B --> |Stream Events| B7
    B --> |Push Notifications| D1
    B --> |Analytics Data| D3
    B --> |Aadhar Verification| B6
    B --> |Fetch Secrets| C2
    B --> |Secure Communication| C4

```