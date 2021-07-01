---
title: "Security"
description: "Keeping your data safe is hugely important to us"
date: "2017 May 30"
seoTitle: "Security | HireHive"
seoDescription: "HireHive is based in the EU (Cork, Ireland). We are in full compliance with EU and Irish Data Protection directives. We store all data on servers in the EU."
---

### Summary

HireHive is robust and secure; the security and performance of HireHive is our number one priority. At HireHive we do our utmost to keep your data safe and secure.

HireHive is deployed on Microsoft's Windows Azure platform. We take advantage of the extensive security options available on Azure to give you confidence that the highest standards and best practices are maintained.

See how HireHive is compliant with EU General Data Protection Regulation (GDPR) [here](https://hirehive.com/eu-general-data-protection-regulation-gdpr/).

### Compliance: Azure conforms to global standards

Microsoft invests heavily in the development of robust and innovative compliance processes. The Microsoft compliance framework for online services maps controls to multiple regulatory standards. This enables Microsoft to design and build services using a common set of controls, streamlining compliance across a range of regulations today and as they evolve in the future.

Azure meets a broad set of international as well as regional and industry-specific compliance standards, such as **ISO 27001**, **FedRAMP**, **SOC 1** and **SOC 2**. Azure’s adherence to the strict security controls contained in these standards is verified by rigorous third-party audits that demonstrate Azure services work with and meet world-class industry standards, certifications, attestations, and authorizations.

Other compliance standards that Azure adhere to: **CSA CCM**, **EU Model Clauses**, **ISO/IEC 27018** and **ISO/IEC** **27001**/**27002:2013**. For a full list of standards see [here](https://www.microsoft.com/en-us/trustcenter/cloudservices/azure).

### Security measures

Our web application is hosted using Azure App Service, a fully-managed platform that allows us to scale quickly and securely. Our instance is running in the North Europe Data Center. Our application runs in a sandbox environment with limited privileges so only software we allow is executed on the server. Our database uses TDE (transparent data encryption) so all data is encrypted at rest using AES and 3DES encryption algorithms. Real-time auditing and threat detection is enabled on all our databases. Any unauthorized access is immediately reported and locked out.

All passwords associated with user accounts in the application are encrypted with AES. Passwords must have a minimum length of 6 characters and we guard against brute force login by locking an account for a period of 30 minutes after 5 failed attempts.

All files eg. resume/CV and attachments are stored in private blob containers on Azure and Geo-Replicated to two regions. Each company is provisioned with its own private container. Access to any of the files is only available through the application.

### Data backup

Our database includes a 30 day point in time restore function. The web application itself is on a nightly scheduled backup.

Files and attachments are instantly replicated to a geo-redundant location.

### Data

If you have an account with us, you may access, correct, or request that we delete your personal data by logging into your account or by contacting us at support@hirehive.com. This request can include personal data of other individuals, like your employees or candidates that you have provided to us and who have requested this of you. We will respond to these requests within a reasonable timeframe.

### SSL & Encryption

HireHive forces HTTPS for all services using TLS (SSL) to our application using 256-bit encryption. We have an ssllabs.com rating of A.

All data access is protected by a role-based access-control mechanism, which only lets users view data for which they have permission. It’s impossible for users to view data from organizations other than their own.

### Credit card data

We do not store any credit card information. We store a random identifier to associate a customer with our payment provider [Stripe.com](https://stripe.com).

Stripe has been audited by a PCI-certified auditor and is certified to [PCI Service Provider Level 1](http://www.visa.com/splisting/searchGrsp.do?companyNameCriteria=stripe). This is the most stringent level of certification available in the payments industry.

### Application uptime

Microsoft's Azure platform guarantees us 99.95% uptime.

### Maintenance and updates

HireHive is updated with improvements and minor fixes weekly. Larger feature releases and updates are done on a 4-6 weeks release cycle.

### Access control

Only authorized employees have access to our production infrastructure, and passwords are strictly regulated. We limit access to customer data to a select few employees who need it to provide support and troubleshooting on our customer's behalf. Accessing data center information as well as customer data is done solely on an as-needed basis, and only when approved by the customer (i.e. as part of a support request), or to provide support and maintenance.

### Passwords

We adhere to the updated National Institute of Standards and Technology (NIST) Digital Identity Guidelines. These guidelines are recognised worldwide as best practice.  The password procedure fulfills the below minimum requirements:  
• The minimum password length is 8 characters  
• Limit the number of password attempts to 5 in a 30 minutes time frame to prevent against brute force.  
• 2 Factor Authentication can be used as an additional security measure for all accounts.

### 2 Factor Authentication

2 Step Authentication Options are available on all Big Hive + accounts. This can be enabled/disabled on a user level.

2 Step Authentication adds another level of security to the account. A code generated via an app on your mobile device will be required to log in if 2 Step Authentication is enabled. We support Google Authenticator, Authy and 1Password.
