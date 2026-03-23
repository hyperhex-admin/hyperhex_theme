from . import __version__ as app_version

app_name = "hyperhex_theme"
app_title = "HyperHex Theme"
app_publisher = "HyperHex Solutions"
app_description = "Industrial dark theme for ERPNext v15 — HyperHex Solutions"
app_email = "hello@hyperhexsolutions.com"
app_license = "MIT"
app_version = app_version

# Inject CSS & JS into the Frappe Desk (all pages)
# In Frappe v14/v15, use bundle names (without /assets/ prefix)
app_include_css = [
    "hyperhex_theme.bundle.css"
]

app_include_js = [
    "hyperhex_theme.bundle.js"
]

# Inject into web pages (portal)
web_include_css = [
    "hyperhex_web.bundle.css"
]

# Override the login page
login_page_image = "/assets/hyperhex_theme/images/login_bg.svg"

# Page hooks
page_js = {}

website_context = {
    "favicon": "/assets/hyperhex_theme/images/favicon.svg",
    "top_bar_items": [],
}
