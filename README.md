# ⬡ HyperHex Theme — ERPNext v15

Industrial dark theme for ERPNext / Frappe v15 by **HyperHex Solutions**.

![Theme Preview](hyperhex_theme/public/images/login_bg.svg)

---

## Design

| Token | Value |
|---|---|
| Accent Green | `#00FFB2` |
| Background Base | `#060A0F` |
| Surface | `#0C1219` |
| Elevated | `#121C27` |
| Border | `#1E2D3D` |
| Display Font | Bebas Neue |
| Mono Font | DM Mono |
| Body Font | Barlow |

---

## Installation

### Prerequisites
- ERPNext v15 / Frappe v15
- Bench CLI installed

### Install via bench

```bash
# 1. Get the app
bench get-app https://github.com/hyperhexsolutions/hyperhex_theme
# OR from a local path:
bench get-app /path/to/hyperhex_theme

# 2. Install on your site
bench --site your-site.com install-app hyperhex_theme

# 3. Build assets
bench build --app hyperhex_theme

# 4. Restart bench
bench restart
```

### Install from a zip (no git)

```bash
# Extract the zip into your apps folder
cp -r hyperhex_theme /path/to/frappe-bench/apps/

# Install pip-editable
cd /path/to/frappe-bench
./env/bin/pip install -e apps/hyperhex_theme

# Install on site
bench --site your-site.com install-app hyperhex_theme
bench build --app hyperhex_theme
bench restart
```

---

## What Gets Themed

| Area | Status |
|---|---|
| Navbar / Topbar | ✅ |
| Sidebar | ✅ |
| Module Tiles (Home) | ✅ |
| Forms & Inputs | ✅ |
| Buttons | ✅ |
| Tables / List View | ✅ |
| Modals & Dialogs | ✅ |
| Kanban Board | ✅ |
| Charts & Dashboards | ✅ |
| Tabs & Navigation | ✅ |
| Alerts & Indicators | ✅ |
| Timeline / Activity | ✅ |
| Login Page | ✅ |
| Favicon | ✅ |

---

## Uninstall

```bash
bench --site your-site.com uninstall-app hyperhex_theme
bench build
bench restart
```

---

## License

MIT © HyperHex Solutions — hello@hyperhexsolutions.com
