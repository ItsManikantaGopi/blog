---
layout: post
title: "Scalable Systems"
show-img: true
mermaid: true
#thumbnail-img: /assets/img/hello_world.jpeg
tags: [scalability, load balancing, horizontal scaling, vertical scaling]
---

Scalability is a crucial aspect of any system. As the user base grows, the system should be able to handle the increased load without compromising performance. Here are some key points to consider when designing scalable systems:

1. **Load Balancing**: Distribute incoming traffic across multiple servers to ensure no single server is overwhelmed.
2. **Horizontal Scaling**: Add more servers to the system to handle increased load.
3. **Vertical Scaling**: Increase the capacity of existing servers by adding more resources (CPU, memory, etc.).

Horizontal scaling with load balancer with 6 clients 3 servers and a database:
    
```mermaid
graph LR
    C1[Client 1] -->|R1| B[Load Balancer]
    C2[Client 2] -->|R2| B[Load Balancer]
    C3[Client 3] -->|R3| B[Load Balancer]
    C4[Client 4] -->|R4| B[Load Balancer]
    C5[Client 5] -->|R5| B[Load Balancer]
    C6[Client 6] -->|R6| B[Load Balancer]
    B -->|R1| C[Server 1]
    B -->|R2| D[Server 2]
    B -->|R3| E[Server 3]
    B -->|R4| C[Server 1]
    B -->|R5| D[Server 2]
    B -->|R6| E[Server 3]
    C --> F[Database]
    D --> F[Database]
    E --> F[Database]
```

Vertical scaling with load balancer with 6 clients 1 server and a database:
    
```mermaid
graph LR
    C1[Client 1] -->|R1| B[Load Balancer]
    C2[Client 2] -->|R2| B[Load Balancer]
    C3[Client 3] -->|R3| B[Load Balancer]
    C4[Client 4] -->|R4| B[Load Balancer]
    C5[Client 5] -->|R5| B[Load Balancer]
    C6[Client 6] -->|R6| B[Load Balancer]
    B -->|R1| C[Server 1]
    B -->|R2| C[Server 1]
    B -->|R3| C[Server 1]
    B -->|R4| C[Server 1]
    B -->|R5| C[Server 1]
    B -->|R6| C[Server 1]
    C --> F[Database]
```


    



