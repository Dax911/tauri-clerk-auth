// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use tauri::Listener;
use tauri::Manager;
use tauri_plugin_deep_link::DeepLinkExt;
use webbrowser;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn authenticate_user() {
    // Open the web browser to the sign-in page with a custom redirect URL
    webbrowser::open(
        "https://accounts.skill-issue.dev/sign-in?redirect_url=clerk-tauri://auth-callback",
    )
    .unwrap();
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_deep_link::init())
        .setup(|app| {
            app.listen("clerk-tauri://auth-callback", |event| {
                // Clone the payload to avoid moving the event
                let payload = event.payload().to_string();
                dbg!(&event); // Use a reference to avoid moving
                println!("{}", payload);
            });
            println!("Hello from Tauri!");
            Ok(())
        })
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_cors_fetch::init())
        .invoke_handler(tauri::generate_handler![greet, authenticate_user])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
