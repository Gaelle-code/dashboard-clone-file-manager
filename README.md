# Gaelle UI Image Folder Clone

This project is a student-style frontend implementation of the **Dashboard Clone: File Manager Image Gallery Module** assignment.

## Assignment Understanding

- The reference is the live file manager image folder design from the assignment brief.
- The work is a **read-only clone** for this sprint.
- The important parts are the **layout**, **visual system**, **shared state shape**, and **responsive structure**.
- Create, update, delete, trash, and upload flows are intentionally out of scope for this pass.

## What This Scaffold Now Includes

- Routed file-manager shell with sidebar and top navbar.
- Active sidebar highlighting via React Router.
- Shared mock image store backed by React state and context.
- Images page with:
  - page header
  - search/filter input
  - recently viewed row
  - responsive image grid
  - read-only preview modal
- Placeholder routes for Videos, Documents, All Files, and Trash.
- A dashboard overview route for the File Manager entry point.

## Stack

- React
- Vite
- React Router v6
- react-icons
- Plain CSS with CSS custom properties was chosen over Tailwind to allow direct matching of exact hex values from the reference design without configuring a Tailwind theme. The assignment permits this choice.

## Known Limitations

- Add Image button is present for visual fidelity only and does not save anything to state.
- Delete, Edit, and Trash flows are intentionally out of scope for this sprint.
- Sign Out and Help links are non-functional placeholders.
- No backend or API - all data is local mock data.

## Run Locally

```bash
npm run dev
```

## Verify

```bash
npm test
npm run build
```

## Scope Notes

- The gallery uses local SVG-backed mock artwork, so it does not depend on external image hosts.
- Recently Viewed is derived from `lastOpenedAt` in the shared image store.
- The Add Image button is present for visual fidelity only in this round.
