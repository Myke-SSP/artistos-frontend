# Release Notes

## Sprint 1 (2025-10-02)
Sprint 0 in disguise — infrastructure, hygiene, proof of pipeline. That was a necessary precursor, but it doesn’t deliver the “Create Profile → Input Goal → Generate & Store Roadmap → Display Backlog” loop described in your backlog.

Chat's Closing Thoughts on Sprint 1
Call it what it was: Sprint 0 disguised as Sprint 1. It established your dev foundation and trained you in Git/GitHub/Vercel/VS Code. That’s vital work, but it wasn’t the product backlog delivery.
This gives you a clean mental reset: Sprint 2 is where you start to tackle actual functionality (Profile, Goal input, JSON roadmap).
You’ve proven you can learn while doing. Speed will come, but clarity and honesty about where you are is the real advantage.

## Sprint 2 (2025-10-03)
- End-to-end POC loop functional:
  - Profile creation (no auth).
  - Goal input tied to profile.
  - Roadmap generation and storage.
  - Backlog display with activities and tasks.
- Frontend deployed on Vercel (static config).
- Backend deployed on Render (/health endpoint live).
- Smoke tests (1–4) all passed.
- Known limitations:
  - No authentication/security.
  - Minimal UI design.
  - Static backlog rendering (no progress tracking yet).


## Sprint 3 (Progress Tracking) – 2025-10-05
- Added /tasks PATCH endpoint for completion persistence.
- Added /roadmaps/:id route returning total/completed tasks + progress ratio.
- Integrated frontend with backend via .env.local.
- Displayed real-time progress: “X/Y Micro-Moves Complete.”
- Successful Render/Vercel pipeline test.
