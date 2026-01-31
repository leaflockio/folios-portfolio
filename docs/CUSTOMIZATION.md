# Customization Guide

This portfolio is fully data-driven — update a single JSON file to change all content. No coding required.

---

## Step 1: Prepare Your JSON File

All portfolio content lives in a `profile.json` file. You can host it:

- Inside the project at `public/data/profile.json` (default)
- On your own domain (e.g. `https://example.com/profile.json`)
- On a public GitHub Gist or raw GitHub file

The URL must be **publicly accessible** and return valid JSON. Set the path in your `.env` file:

```env
DDP_PROFILE_PATH=/data/profile.json
```

---

## Step 2: Edit Your Profile

Open your JSON file and fill in your details. Here is the basic structure:

```json
{
  "basics": {
    "firstName": "Your",
    "lastName": "Name",
    "headline": ["Your Title"],
    "bio": "A short introduction about yourself.",
    "avatar": "https://example.com/photo.jpg",
    "location": { "city": "City", "region": "State", "country": "Country" }
  },
  "contact": {
    "displayText": "Get In Touch",
    "email": "you@example.com",
    "resume": "https://example.com/resume.pdf",
    "socials": [
      { "label": "GitHub", "url": "https://github.com/you" },
      { "label": "LinkedIn", "url": "https://linkedin.com/in/you" }
    ]
  },
  "experience": {
    "displayText": "Journey",
    "items": [
      {
        "company": "Company Name",
        "role": "Your Role",
        "startDate": "2021-03",
        "endDate": null,
        "description": "What you did."
      }
    ]
  },
  "skills": {
    "displayText": "What I Work With",
    "items": [
      { "name": "JavaScript", "category": "Languages" },
      { "name": "React", "category": "Frontend" }
    ]
  },
  "projects": {
    "displayText": "Selected Work",
    "items": [
      {
        "title": "Project Name",
        "description": "What it does.",
        "tags": ["React", "Node.js"],
        "links": [{ "label": "GitHub", "url": "https://github.com/you/project" }]
      }
    ]
  }
}
```

Only `basics.firstName` and `basics.lastName` are required. Every other section and field is optional — omit anything you do not need and the UI will adapt.

For the complete field-by-field reference, see [PROFILE_SCHEMA.md](./PROFILE_SCHEMA.md).

---

## Step 3: Customize Section Headings

Each section supports a `displayText` field to override the default heading:

| Section          | Default Heading | Example `displayText` |
| ---------------- | --------------- | --------------------- |
| `experience`     | Experience      | `"Journey"`           |
| `education`      | Education       | `"Foundation"`        |
| `skills`         | Skills          | `"What I Work With"`  |
| `projects`       | Projects        | `"Selected Work"`     |
| `certifications` | Certifications  | `"Credentials"`       |
| `contact`        | Contact         | `"Say Hello"`         |

---

## Step 4: Show or Hide Items

Every item has a `visible` flag. Set it to `false` to hide an entry without deleting it:

```json
{ "visible": false, "name": "Old Skill", "category": "Languages" }
```

To hide an entire section, simply remove it from your JSON or leave its `items` array empty.

---

## Tips

- Validate your JSON with [JSONLint](https://jsonlint.com/) before deploying.
- Keep text concise — the portfolio is designed to be clean and minimal.
- Set `endDate` to `null` on your current job — this drives the dynamic page title.
- Use `public/data/profile.json` as a starting template with sample data.
- Check the browser console for detailed validation errors if something does not render.

---

## Need Help?

If you run into issues, [open an issue](https://github.com/LeafLock-Security-Solutions/datadriven-portfolio/issues).
