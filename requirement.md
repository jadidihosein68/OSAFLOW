# 🧩 Product Requirements Document (PRD) — OSAFlow Lite (MVP)

**Version:** 1.0  
**Prepared By:** OSACORE Product Team  
**Goal:** Build a lightweight web app for automating WhatsApp outbound messages for real-estate professionals.  
**Delivery Target:** MVP within 90 days  

---

## 1. Product Overview

OSAFlow Lite is an AI-powered WhatsApp automation tool that enables brokers to send personalized, scheduled messages to different client segments.  
It integrates with WhatsApp Business API, allows CSV contact uploads, supports static and AI-generated templates, and provides a performance dashboard for message tracking.  

**Primary User:** Real-estate agents and sales professionals who use WhatsApp for lead nurturing.  

---

## 2. Core Objectives

1. Automate WhatsApp outbound messages (single and bulk).  
2. Enable template-based personalization (e.g., {{name}}, {{property}}).  
3. Allow upload of contacts and segment them (Buyers, Sellers, Investors, VIPs).  
4. Schedule messages by time or event trigger.  
5. Display basic campaign performance stats (sent, delivered, read).  

---

## 3. System Architecture Overview

| Layer | Stack |
|-------|-------|
| **Frontend** | React (Next.js) + Tailwind CSS |
| **Backend** | Node.js (Express or NestJS) |
| **Database** | PostgreSQL |
| **Messaging Integration** | WhatsApp Business Cloud API |
| **File Storage** | Google Drive API |
| **Calendar Integration** | Google Calendar API (OAuth 2.0) |
| **Auth** | Firebase Authentication (Google / Email) |
| **Hosting** | Azure App Service (Linux) |
| **Monitoring** | Azure Monitor + App Insights |

---

## 4. Functional Requirements

### 4.1 User Management

| Feature | Description |
|----------|--------------|
| Sign-Up / Login | OAuth (Google or Email & Password). User creates an account. |
| Profile Settings | Basic info (Name, Company, Phone linked to WhatsApp Business). |
| WhatsApp Connection | User authenticates via WhatsApp Business Cloud API token. |

---

### 4.2 Contacts & Segmentation

| Feature | Description |
|----------|--------------|
| CSV Upload | User uploads a CSV file with columns (name, phone, category). |
| Auto-Categorization | System reads `category` field to create segments (Buyers, Sellers, etc.). |
| Segment Management | User can create new segments, edit, or delete them. |
| Segment Selection | User selects segments to include/exclude from a campaign. |

---

### 4.3 Templates

| Feature | Description |
|----------|--------------|
| Static Template Creation | User creates message templates with variables like {{name}}. |
| Template Library | List of all saved templates per user. |
| AI Template Assistant (optional) | Uses OpenAI API to suggest or improve templates based on category (context). |

---

### 4.4 Campaign Scheduler

| Feature | Description |
|----------|--------------|
| Create Campaign | User names the campaign, selects template and segments. |
| Scheduling | Choose a specific date/time or immediate send. |
| Message Dispatch | Backend calls WhatsApp Business API per recipient with personalized variables. |
| Attachment Option | Optional Drive file link attachment (if integrated). |

---

### 4.5 Performance Dashboard

| Metric | Description |
|---------|-------------|
| Sent Messages | Count per campaign (successful requests). |
| Delivered Messages | Delivery reports from WhatsApp API. |
| Read Rate | Read receipts if available via API. |
| Segment Performance | Engagement rate by segment (optional Phase 2). |

---

### 4.6 Integrations (Phase 2)

| Integration | Function |
|--------------|-----------|
| Google Drive | Browse and attach files to messages. |
| Google Calendar | Create events or reminders based on message schedule. |

---

## 5. Non-Functional Requirements

| Aspect | Requirement |
|--------|--------------|
| Scalability | Support up to 5,000 contacts per user initially. |
| Security | OAuth 2.0 for Google / WhatsApp; JWT for sessions. |
| Performance | Message send latency < 3s per message. |
| Compliance | Meta-approved WhatsApp API only (no unofficial APIs). |
| Logging | Audit logs for message status and errors. |

---

## 6. Data Model (Simplified Schema)

**Tables:**

- `users(id, name, email, wa_token, created_at)`  
- `contacts(id, user_id, name, phone, category, segment_id)`  
- `segments(id, user_id, name)`  
- `templates(id, user_id, name, content, is_ai_generated)`  
- `campaigns(id, user_id, template_id, name, scheduled_at, status)`  
- `campaign_contacts(id, campaign_id, contact_id, status, sent_at, delivered_at, read_at)`  

---

## 7. APIs (High-Level Endpoints)

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/auth/signup` | Create new user. |
| POST | `/auth/login` | Authenticate user. |
| POST | `/contacts/upload` | Upload CSV contacts. |
| GET | `/segments` | List segments. |
| POST | `/segments` | Create segment. |
| POST | `/templates` | Create template. |
| GET | `/templates` | List templates. |
| POST | `/campaigns` | Create campaign. |
| GET | `/campaigns/:id/stats` | Retrieve campaign metrics. |
| POST | `/campaigns/:id/dispatch` | Trigger message sending. |

---

## 8. AI Integration Prompt Example

> **System:**  
> “You are an AI copy assistant for real-estate agents. Generate 3 message templates for follow-ups or listing announcements using a friendly, professional tone. Variables allowed: {{name}}, {{project}}, {{price}}.”  

**Response Format:**
```json
{
 "templates": [
  {"name": "Follow-up Greeting", "content": "Hi {{name}}, just checking if you had a chance to view {{project}}…"},
  {"name": "New Listing", "content": "Great news! {{project}} is now open for viewing at {{price}}…"}
 ]
}


9. User Flow Summary

User signs in via Google → connects WhatsApp API token.

Uploads CSV contacts → auto-segments appear.

Creates a template (static or AI-assisted).

Creates a campaign → chooses segment + schedule.

OSAFlow Lite dispatches messages and tracks status.

User views dashboard for delivery and read rates.

10. MVP Out of Scope

Inbound message automation or chatbots.

CRM sync (Salesforce, HubSpot).

Team collaboration features.

Mobile native apps (iOS/Android) — web only.

11. Success Metrics

✅ 95% message delivery success rate.

✅ Average setup time < 10 minutes.

✅ At least 3 active campaigns per beta user within first week.
