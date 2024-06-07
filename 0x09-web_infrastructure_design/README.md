
Web Infrastructure Design
Project done during Full Stack Software Engineering studies at ALX. It aims to learn about how to design a Web Infrastructure.
Key Concepts

Network basics
Server
Web server
Application server
DNS & DNS record types
Load Balancer
Monitoring
Database
Single point of failure
HTTP & HTTPS
Firewall

File Descriptions
Each file contains a link to an image hosted on Google drive. These images are based on the following requirements:
0-simple_web_stack
On a whiteboard, design a one server web infrastructure that hosts the website that is reachable via www.foobar.com. Start your explanation by having a user wanting to access your website.
You must use:

1 physical server
1 web server (Nginx)
1 application server
1 application files (your code base)
1 database (MySQL)
1 domain name foobar.com configured with a www record that points to your server IP 8.8.8.8

1-distributed_web_infrastructure
On a whiteboard, design a three servers web infrastructure that host the website www.foobar.com.
You must add to 0-simple_web_stack:

2 physical servers
1 web server (Nginx)
1 application server
1 load-balancer (HAproxy)
1 application files (your code base)
1 database (MySQL)

2-secured_and_monitored_web_infrastructure
On a whiteboard, design a three servers web infrastructure that host the website www.foobar.com, it must be secured, serve encrypted traffic and be monitored.
You must add to 1-distributed_web_infrastructure:

3 firewalls
1 SSL certificate to serve www.foobar.com over HTTPS
3 monitoring clients (data collector for Sumologic or other monitoring services)

3-scale_up
You must add to 2-secured_and_monitored_web_infrastructure:

1 physical server
1 load-balancer (HAproxy) configured as cluster with the other one
Split components (web server, application server, database) with their own server

Key Concepts Explained
Network Basics
Networks are the backbone of modern computing, enabling communication and data transfer between devices. Understanding network basics, such as TCP/IP protocols, IP addressing, and routing, is crucial for designing and implementing web infrastructures.
Server
A server is a computer or program that provides services to other programs or devices, called clients, over a network. Servers are essential components in web infrastructures, handling various tasks like serving web pages, processing application logic, and managing databases.
Web Server
A web server is a software component that listens for incoming HTTP requests from clients (user's browsers) and serves web pages or static content in response. Popular web server software includes Apache and Nginx.
Application Server
An application server is a software component that runs the application logic and business rules. It receives requests from the web server, processes them, and generates dynamic content or interacts with the database as needed. Examples include Node.js, Django, and Ruby on Rails.
DNS & DNS Record Types
The Domain Name System (DNS) is a hierarchical and decentralized naming system that translates human-readable domain names (e.g., www.foobar.com) into IP addresses that computers can understand. DNS record types, such as A (IPv4 address), AAAA (IPv6 address), and CNAME (canonical name), are used to map domain names to IP addresses or other domain names.
Load Balancer
A load balancer is a device or software component that distributes incoming network traffic across multiple servers, improving availability, scalability, and redundancy. Load balancers can use various algorithms, such as round-robin or least connections, to distribute the workload evenly among servers.
Monitoring
Monitoring is the process of collecting, analyzing, and visualizing data from various components of an infrastructure, such as servers, applications, and networks.

Infrastructure Components Explanation
0-simple_web_stack
Description:
This setup is a basic web infrastructure design suitable for a small-scale application or website, hosted on a single server. The goal is to have a user access the website via the domain name www.foobar.com.

Components:

1 Physical Server:

Purpose: Hosts all the necessary components for the website, including the web server, application server, and database.
IP Address: The server's IP address is 8.8.8.8.
1 Web Server (Nginx):

Purpose: Listens for incoming HTTP requests and serves web pages or static content to users.
Functionality: Acts as the front-end server, handling client requests and delivering static files such as HTML, CSS, and JavaScript.
1 Application Server:

Purpose: Runs the application logic and processes requests received from the web server.
Examples: Could be using frameworks or runtimes like Node.js, Django, or Ruby on Rails.
Functionality: Generates dynamic content by executing business logic, handling user sessions, and interfacing with the database.
1 Application Files (Code Base):

Purpose: Contains the source code for the web application.
Location: Hosted on the server and executed by the application server to generate dynamic web content.
1 Database (MySQL):

Purpose: Stores and manages data for the application.
Functionality: Handles data storage, retrieval, and manipulation through SQL queries.
Usage: Provides persistent storage for application data such as user information, content, and configurations.
1 Domain Name (foobar.com):

Purpose: Provides a human-readable address for accessing the website.
DNS Configuration: Configured with a www record that points to the server's IP address (8.8.8.8), allowing users to access the website via www.foobar.com.

1-distributed_web_infrastructure
Components:

2 Additional Physical Servers:

Purpose: Distribute the workload and improve the system's availability and performance by hosting different parts of the infrastructure on separate machines.
Why It's Added: Enhances redundancy and scalability by isolating components, reducing the load on each server, and allowing for better resource management.
1 Web Server (Nginx):

Purpose: Handles HTTP requests and serves static files. Now dedicated to only serving web content.
Why It's Added: Segregates the web server from the application server, improving performance and security by reducing the attack surface.
1 Application Server:

Purpose: Processes dynamic content and runs application logic on a separate server.
Why It's Added: Improves scalability and resource allocation by separating concerns, making the system more efficient.
1 Load Balancer (HAproxy):

Purpose: Distributes incoming requests across multiple servers to ensure no single server is overwhelmed.
Why It's Added: Increases availability and load handling capacity by balancing traffic, making the infrastructure more resilient to high loads and server failures.
1 Application Files (Code Base):

Purpose: Centralized on the application server, it provides the necessary files and scripts for the application to function.
Why It's Added: Ensures consistent application deployment across the infrastructure, making maintenance and updates easier.
1 Database (MySQL):

Purpose: Acts as a centralized data store accessible by the application server.
Why It's Added: Keeps data management and storage efficient and centralized, ensuring data integrity and easy access.
2-secured_and_monitored_web_infrastructure
Components:

3 Firewalls:

Purpose: Filter incoming and outgoing network traffic to protect servers from unauthorized access and potential threats.
Why It's Added: Enhances security by controlling traffic based on predetermined rules, preventing potential attacks and data breaches.
1 SSL Certificate:

Purpose: Enables HTTPS to encrypt traffic between the user's browser and the web server, ensuring secure communication.
Why It's Added: Protects data in transit from eavesdropping and tampering, establishing a secure connection for users accessing the website.
3 Monitoring Clients:

Purpose: Collect data on system performance, uptime, and health metrics, sending it to a monitoring service for analysis.
Why It's Added: Allows for real-time tracking of infrastructure health, facilitating quick detection and response to potential issues, thus ensuring higher uptime and reliability.
3-scale_up
Components:

1 Additional Physical Server:

Purpose: Expands the infrastructure by adding more computational resources and allowing for further separation of components.
Why It's Added: Supports increased traffic and application demands by providing additional hardware capacity and improving performance through component isolation.
Load Balancer Cluster (HAproxy):

Purpose: Configures the load balancer in a cluster setup, providing high availability and failover capabilities.
Why It's Added: Ensures that even if one load balancer fails, the other can continue managing traffic, improving resilience and maintaining service availability.
Dedicated Servers for Each Component:

Purpose: Allocates separate servers for the web server, application server, and database to optimize performance and resource utilization.
Why It's Added: Reduces bottlenecks by ensuring that each server only handles a specific part of the infrastructure, leading to better load management and scalability.

