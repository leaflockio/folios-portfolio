# Profile JSON Schema

This document describes every field in `profile.json` — the single file that drives your entire portfolio.

The file is validated at runtime using [Zod](https://zod.dev/). If your JSON has invalid or missing required fields, the app logs detailed errors to the browser console and falls back to the error page.

---

## Key Concepts

### Required vs Optional

Fields marked **required** must be present or validation fails. Everything else can be omitted — the UI will skip rendering anything that is empty or absent.

### `displayText`

Sections support a `displayText` field that overrides the default heading shown in the UI. For example, setting `"displayText": "Journey"` on the experience section displays "Journey" instead of "Experience." If omitted, the app uses the default section name.

### `visible`

Every item in an array section has a `visible` flag (defaults to `true`). Set it to `false` to hide an item without deleting it from your JSON. This is useful for temporarily hiding a project or old job entry.

### Section Wrapper

Most sections use a wrapper structure with `displayText` and `items`:

```json
{
  "experience": {
    "displayText": "Journey",
    "items": [ ... ]
  }
}
```

Exceptions: `basics` and `contact` are plain objects (no `items` array). `customSections` is a flat array.

---

## Reusable Types

These types appear across multiple sections.

### Location

| Field     | Type   | Required | Description          |
| --------- | ------ | -------- | -------------------- |
| `city`    | string | no       | City name            |
| `region`  | string | no       | State, province, etc |
| `country` | string | no       | Country name         |

### Phone

| Field         | Type   | Required | Description                    |
| ------------- | ------ | -------- | ------------------------------ |
| `countryCode` | string | yes      | Country dial code, e.g. `"+1"` |
| `number`      | string | yes      | Digits only, 7-15 characters   |

### Link

| Field   | Type   | Required | Description                    |
| ------- | ------ | -------- | ------------------------------ |
| `label` | string | yes      | Display text, e.g. `"GitHub"`  |
| `url`   | string | yes      | Full URL, e.g. `"https://..."` |

---

## Sections

### `basics` (required)

Your identity. The only required section in the entire profile.

| Field       | Type     | Required | Description                                                     |
| ----------- | -------- | -------- | --------------------------------------------------------------- |
| `firstName` | string   | yes      | First name (Capital Case)                                       |
| `lastName`  | string   | yes      | Last name (Capital Case)                                        |
| `headline`  | string[] | no       | Titles or roles, e.g. `["Full Stack Developer", "AI Engineer"]` |
| `bio`       | string   | no       | Short personal introduction                                     |
| `avatar`    | string   | no       | URL to your profile photo                                       |
| `location`  | Location | no       | Where you are based                                             |

```json
{
  "basics": {
    "firstName": "Alex",
    "lastName": "Johnson",
    "headline": ["Full Stack Developer", "AI Engineer"],
    "bio": "Passionate developer with 5+ years of experience.",
    "avatar": "https://example.com/photo.jpg",
    "location": {
      "city": "San Francisco",
      "region": "CA",
      "country": "USA"
    }
  }
}
```

---

### `contact` (optional)

How people can reach you. Rendered in the hero and contact sections.

| Field          | Type                | Required | Description                                |
| -------------- | ------------------- | -------- | ------------------------------------------ |
| `displayText`  | string              | no       | Custom section heading, e.g. `"Say Hello"` |
| `email`        | string              | no       | Contact email (must be valid email format) |
| `phone`        | Phone               | no       | Phone number with country code             |
| `resume`       | string              | no       | URL to your resume/CV PDF                  |
| `socials`      | Link[]              | no       | Social media links                         |
| `availability` | AvailabilityBadge[] | no       | Status badges (see below)                  |

**Availability Badge:**

Status badges displayed in the contact section to indicate your current availability and preferences.

| Field   | Type    | Required | Description                                                       |
| ------- | ------- | -------- | ----------------------------------------------------------------- |
| `text`  | string  | yes      | Badge label, e.g. `"Open to opportunities"`                       |
| `color` | string  | yes      | One of: `green`, `amber`, `teal`, `blue`, `purple`, `red`, `gray` |
| `pulse` | boolean | no       | Animate the dot with a pulse effect (default: `false`)            |

**Color Guide:**

| Color    | Best for                                                                 |
| -------- | ------------------------------------------------------------------------ |
| `green`  | Active/positive status: "Open to opportunities", "Available immediately" |
| `amber`  | Neutral/cautious status: "Currently employed", "2 weeks notice"          |
| `teal`   | Preferences: "Hybrid preferred", "Remote friendly"                       |
| `blue`   | Work type: "Freelance welcome", "Contract work"                          |
| `purple` | Special interests: "Open to mentoring", "Speaking engagements"           |
| `red`    | Unavailable: "Not looking", "Booked until Q3"                            |
| `gray`   | Informational: "Based in EST", "Part-time only"                          |

```json
{
  "contact": {
    "displayText": "Say Hello",
    "email": "alex@example.com",
    "phone": {
      "countryCode": "+1",
      "number": "5551234567"
    },
    "resume": "https://example.com/resume.pdf",
    "availability": [
      { "text": "Open to opportunities", "color": "green", "pulse": true },
      { "text": "Currently employed", "color": "amber" },
      { "text": "Hybrid preferred", "color": "teal" }
    ],
    "socials": [
      { "label": "GitHub", "url": "https://github.com/alexjohnson" },
      { "label": "LinkedIn", "url": "https://linkedin.com/in/alexjohnson" }
    ]
  }
}
```

---

### `experience` (optional)

Work history. Displayed as a timeline. The entry with `endDate: null` is treated as your current role and is used in the page title.

| Field         | Type   | Required | Description                            |
| ------------- | ------ | -------- | -------------------------------------- |
| `displayText` | string | no       | Custom heading, e.g. `"Journey"`       |
| `items`       | array  | no       | List of experience entries (see below) |

**Experience item:**

| Field         | Type     | Required | Description                               |
| ------------- | -------- | -------- | ----------------------------------------- |
| `visible`     | boolean  | no       | Show/hide this entry (default: `true`)    |
| `company`     | string   | yes      | Company name                              |
| `role`        | string   | yes      | Your job title                            |
| `startDate`   | string   | yes      | Start date, e.g. `"2021-03"` or `"2021"`  |
| `endDate`     | string   | no       | End date, or `null` for current role      |
| `workModel`   | string   | no       | One of `"onSite"`, `"remote"`, `"hybrid"` |
| `location`    | Location | no       | Office location (`null` for remote)       |
| `description` | string   | no       | What you did in this role                 |
| `logo`        | string   | no       | URL to company logo image                 |
| `url`         | Link[]   | no       | Related links (company website, etc)      |

```json
{
  "experience": {
    "displayText": "Journey",
    "items": [
      {
        "visible": true,
        "company": "Tech Corp",
        "role": "Senior Software Engineer",
        "startDate": "2021-03",
        "endDate": null,
        "workModel": "onSite",
        "location": { "city": "San Francisco", "region": "CA", "country": "USA" },
        "description": "Leading development of microservices architecture.",
        "logo": "https://logo.clearbit.com/google.com",
        "url": [{ "label": "Tech Corp", "url": "https://techcorp.example.com" }]
      }
    ]
  }
}
```

---

### `education` (optional)

Academic background.

| Field         | Type   | Required | Description                           |
| ------------- | ------ | -------- | ------------------------------------- |
| `displayText` | string | no       | Custom heading, e.g. `"Foundation"`   |
| `items`       | array  | no       | List of education entries (see below) |

**Education item:**

| Field         | Type     | Required | Description                               |
| ------------- | -------- | -------- | ----------------------------------------- |
| `visible`     | boolean  | no       | Show/hide this entry (default: `true`)    |
| `institution` | string   | yes      | School or university name                 |
| `degree`      | string   | no       | Degree type, e.g. `"Bachelor of Science"` |
| `field`       | string   | no       | Field of study, e.g. `"Computer Science"` |
| `startDate`   | string   | no       | Start year or date                        |
| `endDate`     | string   | no       | End year or date                          |
| `grade`       | string   | no       | GPA or grade, e.g. `"3.8 GPA"`            |
| `location`    | Location | no       | School location                           |
| `logo`        | string   | no       | URL to institution logo                   |
| `courses`     | array    | no       | Relevant courses (see below)              |

**Course:**

| Field         | Type   | Required | Description                   |
| ------------- | ------ | -------- | ----------------------------- |
| `course`      | string | yes      | Course name                   |
| `description` | string | no       | Brief course description      |
| `grade`       | string | no       | Grade received                |
| `year`        | string | no       | Year taken                    |
| `link`        | string | no       | URL to course page (nullable) |

---

### `skills` (optional)

Technical skills, displayed as chips grouped by category.

| Field         | Type   | Required | Description                               |
| ------------- | ------ | -------- | ----------------------------------------- |
| `displayText` | string | no       | Custom heading, e.g. `"What I Work With"` |
| `items`       | array  | no       | List of skill entries (see below)         |

**Skill item:**

| Field      | Type    | Required | Description                                      |
| ---------- | ------- | -------- | ------------------------------------------------ |
| `visible`  | boolean | no       | Show/hide this skill (default: `true`)           |
| `name`     | string  | yes      | Skill name, e.g. `"React"`                       |
| `category` | string  | no       | Grouping label, e.g. `"Frontend"`, `"Languages"` |

```json
{
  "skills": {
    "displayText": "What I Work With",
    "items": [
      { "visible": true, "name": "JavaScript", "category": "Languages" },
      { "visible": true, "name": "React", "category": "Frontend" },
      { "visible": true, "name": "Docker", "category": "DevOps" }
    ]
  }
}
```

---

### `projects` (optional)

Portfolio pieces and side projects.

| Field         | Type   | Required | Description                            |
| ------------- | ------ | -------- | -------------------------------------- |
| `displayText` | string | no       | Custom heading, e.g. `"Selected Work"` |
| `items`       | array  | no       | List of project entries (see below)    |

**Project item:**

| Field         | Type     | Required | Description                                  |
| ------------- | -------- | -------- | -------------------------------------------- |
| `visible`     | boolean  | no       | Show/hide this project (default: `true`)     |
| `title`       | string   | yes      | Project name                                 |
| `description` | string   | no       | What the project does                        |
| `image`       | string[] | no       | Screenshot URLs                              |
| `tags`        | string[] | no       | Tech stack tags, e.g. `["React", "Node.js"]` |
| `links`       | Link[]   | no       | Demo, GitHub, or other links                 |

---

### `certifications` (optional)

Professional certifications and credentials.

| Field         | Type   | Required | Description                               |
| ------------- | ------ | -------- | ----------------------------------------- |
| `displayText` | string | no       | Custom heading                            |
| `items`       | array  | no       | List of certification entries (see below) |

**Certification item:**

| Field     | Type    | Required | Description                           |
| --------- | ------- | -------- | ------------------------------------- |
| `visible` | boolean | no       | Show/hide this cert (default: `true`) |
| `name`    | string  | yes      | Certification name                    |
| `issuer`  | string  | yes      | Issuing organization                  |
| `date`    | string  | no       | Date earned, e.g. `"2023-06"`         |
| `link`    | string  | no       | URL to certification page             |
| `badge`   | string  | no       | URL to digital badge image or `null`  |

---

### `customSections` (optional)

Freeform sections for anything that does not fit the standard categories. Each entry renders as its own section with its `title` as the heading.

| Field     | Type    | Required | Description                              |
| --------- | ------- | -------- | ---------------------------------------- |
| `visible` | boolean | no       | Show/hide this section (default: `true`) |
| `title`   | string  | yes      | Section heading                          |
| `content` | string  | yes      | Section body text                        |

```json
{
  "customSections": [
    {
      "visible": true,
      "title": "Interests",
      "content": "Hiking, open-source contributions, and experimenting with new recipes."
    }
  ]
}
```

---

## Minimal Example

The smallest valid `profile.json` — only `basics` is required:

```json
{
  "basics": {
    "firstName": "Alex",
    "lastName": "Johnson"
  }
}
```

---

## Full Example

See [`public/data/profile.json`](../public/data/profile.json) for a complete working example with all sections populated.

---

## Social Media Icon Mapping

The `label` field in `contact.socials` determines which icon is rendered. Matching is **case-insensitive**. If the label does not match any known platform, a generic globe icon is used as a fallback.

| `label`       | Icon           |
| ------------- | -------------- |
| `"GitHub"`    | GitHub logo    |
| `"LinkedIn"`  | LinkedIn logo  |
| `"Twitter"`   | X/Twitter logo |
| `"X"`         | X/Twitter logo |
| `"Dribbble"`  | Dribbble logo  |
| `"Medium"`    | Medium logo    |
| `"YouTube"`   | YouTube logo   |
| `"Instagram"` | Instagram logo |
| anything else | Globe icon     |

Example:

```json
{
  "socials": [
    { "label": "GitHub", "url": "https://github.com/you" },
    { "label": "LinkedIn", "url": "https://linkedin.com/in/you" },
    { "label": "My Blog", "url": "https://blog.example.com" }
  ]
}
```

In the example above, GitHub and LinkedIn get their brand icons. "My Blog" does not match any known platform, so it renders with the globe fallback icon.

---

## Validation

The profile is validated at runtime when the app loads. If validation fails:

1. The app renders the error page instead of the portfolio
2. If `DDP_SHOW_CONTACT_ON_ERROR` is `true`, contact info from env variables is shown on the error page

**Development:** Detailed validation errors are logged to the browser console (`debug` level) so you can see exactly which fields failed and why.

**Production:** Logging is **silent** by default — no output in the browser console. You will only see the error page. To debug production issues, test your JSON locally in development mode first.

To test your JSON before deploying, paste it into [JSONLint](https://jsonlint.com/) to check for syntax errors, then run the app locally (`npm run dev`) to verify schema validation passes.
