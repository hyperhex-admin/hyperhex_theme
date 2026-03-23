from . import __version__ as app_version

app_name = "hyperhex_theme"
app_title = "HyperHex Theme"
app_publisher = "HyperHex Solutions"
app_description = "Industrial dark theme for ERPNext v15 — HyperHex Solutions"
app_email = "hello@hyperhexsolutions.com"
app_license = "MIT"
app_version = app_version

# Inject CSS & JS into the Frappe Desk (all pages)
app_include_css = [
    "assets/hyperhex_theme/css/hyperhex_theme.css"
]

app_include_js = [
    "assets/hyperhex_theme/js/hyperhex_theme.js"
]

# Inject into web pages (portal)
web_include_css = [
    "assets/hyperhex_theme/css/hyperhex_web.css"
]

# Override the login page
login_page_image = "/assets/hyperhex_theme/images/login_bg.svg"

# Page hooks
page_js = {}

# Boot info (optional — can pass theme config to JS)
# boot_session = "hyperhex_theme.boot.boot_session"

website_context = {
    "favicon": "/assets/hyperhex_theme/images/favicon.svg",
    "top_bar_items": [],
}
