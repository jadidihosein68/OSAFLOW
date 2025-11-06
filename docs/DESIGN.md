# OSAFlow Lite Design Document

This document outlines the design principles, architecture, and UI/UX guidelines for the OSAFlow Lite application.

**Note:** Any future changes to the application's design or architecture must be reflected in this document.

## 1. Architecture

OSAFlow Lite is a full-stack application with a decoupled frontend and backend.

-   **Backend:** A Django-based REST API that handles business logic, data storage, and authentication.
-   **Frontend:** A Next.js single-page application that consumes the backend API.

## 2. Design Principles

-   **Simplicity:** The UI should be intuitive and easy to navigate.
-   **Responsiveness:** The application must be mobile-friendly.
-   **Consistency:** The design should be consistent across all pages.

## 3. UI/UX

-   **UI Library:** The frontend is built using Tailwind CSS, a utility-first CSS framework.
-   **Color Palette:**
    -   Primary: `#4F46E5`
    -   Secondary: `#10B981`
    -   Grays: `#F3F4F6`, `#D1D5DB`, `#6B7280`
-   **Typography:** The primary font is Inter.
-   **Layout:** The application uses a simple and clean dashboard layout.

## 4. Authentication

Authentication is handled by the backend using JWT (JSON Web Tokens). The frontend stores the token in local storage and includes it in the header of all API requests.
