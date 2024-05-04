# tauri-clerk-auth

This is a thrown together demo repo for understanding how to implement Auth with [Clerk](https://clerk.dev) and [Tauri](https://tauri.dev). This came from some questions in the discord about how best to do Auth. And while Auth is important, one should note that there is very little that the native desktop application should be doing with it and most problems can be solved with the basic user context passed by Clerk. Anything more complex and you will likely have a service running somewhere, an actual backend which is more likely where you will be calling Clerk's backend api and using the server side features. If you feel you want to access this api instead and use the backend api with the rust portion of your app I encourage you to take a look at [clerk-rs](https://github.com/DarrenBaldwin07/clerk-rs) as they are working on implementing a rust SDK for Clerk.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

### To Do

- [x] Add tailwind
- [ ] Write A blog Post
- [ ] Layout a Docs page for Clerk and/or Tauri
- [ ] Rust logic for user context
- [ ] TS logic for passing user context to rust
