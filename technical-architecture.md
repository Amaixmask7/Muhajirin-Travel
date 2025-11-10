# MuhajirinTravel Technical Architecture

## System Overview

```mermaid
graph TB
    subgraph "Frontend Architecture"
        A[React App] --> B[Component Library]
        A --> C[State Management]
        A --> D[Routing]
        A --> E[Animation System]
    end
    
    subgraph "UI/UX Enhancement Layers"
        F[Visual Design Layer]
        G[Interaction Layer]
        H[Performance Layer]
        I[Accessibility Layer]
    end
    
    subgraph "Backend Services"
        J[Express API]
        K[Database Layer]
        L[File Storage]
        M[External Integrations]
    end
    
    subgraph "Third-party Services"
        N[Payment Gateway]
        O[WhatsApp API]
        P[Email Service]
        Q[Analytics]
    end
    
    A --> J
    J --> K
    J --> L
    J --> M
    M --> N
    M --> O
    M --> P
    M --> Q
```

## Component Architecture

### Enhanced Component Structure

```mermaid
graph LR
    subgraph "Core Components"
        A[App]
        B[Router]
        C[Layout]
    end
    
    subgraph "Enhanced UI Components"
        D[EnhancedHero]
        E[EnhancedNavbar]
        F[EnhancedPackageCard]
        G[EnhancedPackageDetail]
        H[EnhancedRegistration]
    end
    
    subgraph "Animation Components"
        I[ParallaxLayer]
        J[ScrollReveal]
        K[MicroAnimations]
        L[SkeletonLoader]
    end
    
    subgraph "Interactive Components"
        M[SearchWithAutocomplete]
        N[AdvancedFilters]
        O[PackageComparison]
        P[QuickViewModal]
        Q[WishlistManager]
    end
    
    subgraph "Form Components"
        R[MultiStepForm]
        S[FileUploadArea]
        T[RealTimeValidation]
        U[AutoSaveForm]
    end
    
    A --> B
    B --> C
    C --> D
    C --> E
    C --> F
    C --> G
    C --> H
    
    D --> I
    E --> J
    F --> K
    G --> L
    
    F --> M
    F --> N
    G --> O
    G --> P
    H --> Q
    
    H --> R
    H --> S
    H --> T
    H --> U
```

## Animation System Architecture

### Animation Hierarchy

```mermaid
graph TD
    A[Animation Controller] --> B[Page Transitions]
    A --> C[Scroll Animations]
    A --> D[Micro-interactions]
    A --> E[Loading States]
    
    B --> F[Route Transitions]
    B --> G[Page Mount/Unmount]
    
    C --> H[Parallax Effects]
    C --> I[Scroll Reveal]
    C --> J[Sticky Elements]
    
    D --> K[Hover Effects]
    D --> L[Button Animations]
    D --> M[Icon Animations]
    
    E --> N[Skeleton Screens]
    E --> O[Progress Indicators]
    E --> P[Shimmer Effects]
```

## State Management Architecture

### Data Flow Structure

```mermaid
graph LR
    subgraph "Client State"
        A[React State]
        B[Context API]
        C[Local Storage]
        D[Session Storage]
    end
    
    subgraph "Server State"
        E[React Query]
        F[API Cache]
        G[Background Sync]
    end
    
    subgraph "Global State"
        H[User Preferences]
        I[Wishlist Items]
        J[Comparison List]
        K[Form Drafts]
    end
    
    A --> B
    B --> C
    C --> D
    
    E --> F
    F --> G
    
    B --> H
    B --> I
    B --> J
    B --> K
```

## Database Schema Enhancement

### Extended Data Models

```mermaid
erDiagram
    PACKAGES ||--o{ REGISTRATIONS : has
    PACKAGES ||--o{ WISHLIST_ITEMS : in
    PACKAGES ||--o{ COMPARISON_ITEMS : in
    PACKAGES ||--o{ REVIEWS : has
    PACKAGES ||--o{ PHOTOS : has
    
    USERS ||--o{ REGISTRATIONS : creates
    USERS ||--o{ WISHLIST_ITEMS : owns
    USERS ||--o{ COMPARISON_ITEMS : creates
    USERS ||--o{ REVIEWS : writes
    USERS ||--o{ DOCUMENTS : uploads
    
    REGISTRATIONS ||--o{ PAYMENTS : has
    REGISTRATIONS ||--o{ DOCUMENTS : requires
    REGISTRATIONS ||--o{ NOTIFICATIONS : triggers
    
    PACKAGES {
        string id PK
        string name
        string destination
        integer duration
        string departure_date
        string airline
        string hotel_mecca
        string hotel_madinah
        string distance_haram
        string distance_nabawi
        integer price_quad
        integer price_triple
        integer price_double
        integer available_slots
        integer total_slots
        string status
        text itinerary
        text facilities
        text image_url
        text gallery_images
        text video_url
        real rating
        integer review_count
        boolean featured
        timestamp created_at
        timestamp updated_at
    }
    
    USERS {
        string id PK
        string name
        string email
        string phone
        string password_hash
        text preferences
        string role
        boolean email_verified
        boolean phone_verified
        timestamp last_login
        timestamp created_at
        timestamp updated_at
    }
    
    REGISTRATIONS {
        string id PK
        string package_id FK
        string user_id FK
        string full_name
        string email
        string phone
        string passport_name
        string room_type
        text ktp_url
        text kk_url
        text passport_url
        string status
        integer total_amount
        integer paid_amount
        text special_requests
        timestamp created_at
        timestamp updated_at
    }
    
    WISHLIST_ITEMS {
        string id PK
        string user_id FK
        string package_id FK
        timestamp created_at
    }
    
    COMPARISON_ITEMS {
        string id PK
        string user_id FK
        string package_id FK
        string session_id
        timestamp created_at
    }
    
    REVIEWS {
        string id PK
        string package_id FK
        string user_id FK
        integer rating
        text comment
        text photos
        boolean verified
        timestamp created_at
        timestamp updated_at
    }
    
    PAYMENTS {
        string id PK
        string registration_id FK
        integer amount
        string payment_method
        string transaction_id
        string status
        text payment_details
        timestamp created_at
        timestamp updated_at
    }
    
    DOCUMENTS {
        string id PK
        string registration_id FK
        string document_type
        string file_url
        string file_name
        integer file_size
        string status
        timestamp uploaded_at
        timestamp verified_at
    }
    
    NOTIFICATIONS {
        string id PK
        string user_id FK
        string registration_id FK
        string type
        string title
        text message
        boolean read
        timestamp created_at
        timestamp read_at
    }
```

## API Architecture

### Endpoint Structure

```mermaid
graph TD
    A[API Gateway] --> B[Authentication Middleware]
    B --> C[Rate Limiting]
    C --> D[Request Validation]
    D --> E[Route Handlers]
    
    E --> F[Package Routes]
    E --> G[User Routes]
    E --> H[Registration Routes]
    E --> I[Payment Routes]
    E --> J[Content Routes]
    
    F --> K[Package CRUD]
    F --> L[Search & Filter]
    F --> M[Comparison]
    
    G --> N[User Management]
    G --> O[Wishlist]
    G --> P[Preferences]
    
    H --> Q[Registration CRUD]
    H --> R[Document Upload]
    H --> S[Status Tracking]
    
    I --> T[Payment Processing]
    I --> U[Transaction History]
    
    J --> V[Testimonials]
    J --> W[Blog Posts]
    J --> X[FAQ]
```

## Performance Optimization Strategy

### Loading and Caching Strategy

```mermaid
graph LR
    A[User Request] --> B[Service Worker]
    B --> C[Cache Strategy]
    C --> D[Network Request]
    
    C --> E[Static Assets]
    C --> F[API Responses]
    C --> G[Images]
    
    E --> H[Long-term Cache]
    F --> I[Short-term Cache]
    G --> J[Lazy Loading]
    
    D --> K[CDN]
    K --> L[Origin Server]
    
    L --> M[Database]
    L --> N[File Storage]
```

## Security Architecture

### Security Layers

```mermaid
graph TD
    A[Web Application Firewall] --> B[Rate Limiting]
    B --> C[Authentication]
    C --> D[Authorization]
    D --> E[Input Validation]
    E --> F[Output Encoding]
    F --> G[Secure Headers]
    G --> H[Data Encryption]
    
    H --> I[Database Security]
    H --> J[File Upload Security]
    H --> K[API Security]
    
    I --> L[Parameterized Queries]
    J --> M[File Type Validation]
    K --> N[API Key Management]
```

## Deployment Architecture

### Infrastructure Setup

```mermaid
graph TB
    subgraph "Development"
        A[Local Development]
        B[Staging Environment]
    end
    
    subgraph "Production"
        C[Load Balancer]
        D[Web Servers]
        E[Application Servers]
        F[Database Cluster]
        G[File Storage]
        H[CDN]
    end
    
    subgraph "Monitoring"
        I[Application Monitoring]
        J[Performance Monitoring]
        K[Error Tracking]
        L[User Analytics]
    end
    
    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    E --> G
    C --> H
    
    E --> I
    E --> J
    E --> K
    C --> L
```

## Integration Architecture

### Third-party Service Integration

```mermaid
graph LR
    subgraph "Payment Services"
        A[Payment Gateway]
        B[Bank Transfer]
        C[E-wallet Integration]
    end
    
    subgraph "Communication Services"
        D[WhatsApp Business API]
        E[Email Service]
        F[SMS Gateway]
    end
    
    subgraph "Analytics Services"
        G[Google Analytics]
        H[Facebook Pixel]
        I[Hotjar]
    end
    
    subgraph "Content Services"
        J[Cloud Storage]
        K[CDN]
        L[Image Optimization]
    end
    
    subgraph "Business Services"
        M[CRM Integration]
        N[Accounting Software]
        O[Travel Insurance]
    end
    
    A --> M
    D --> M
    E --> M
    G --> M
```

## Technology Stack Summary

### Frontend Technologies
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight routing)
- **State Management**: React Query + Context API
- **UI Library**: Radix UI + Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod Validation
- **Icons**: Lucide React + React Icons

### Backend Technologies
- **Runtime**: Node.js with Express
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js
- **File Storage**: Cloud-based storage
- **Session Management**: Express Session with Memory Store

### Development Tools
- **Build Tool**: Vite
- **Package Manager**: npm
- **Code Quality**: ESLint + TypeScript
- **Testing**: Jest + React Testing Library
- **Deployment**: Netlify Functions + Vercel

This architecture provides a solid foundation for implementing all the requested enhancements while maintaining scalability, performance, and security.