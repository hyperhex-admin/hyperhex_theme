import frappe


@frappe.whitelist()
def switch_theme(theme: str = "light"):
    """
    Override the default switch_theme to support HyperHex themes.
    Supported themes: light, dark, automatic
    """
    if theme not in ("light", "dark", "automatic"):
        theme = "light"

    user = frappe.session.user
    if user == "Guest":
        frappe.throw("Guest user cannot switch theme")

    frappe.db.set_value("User", user, "user_theme", theme)
    frappe.local.response["message"] = {
        "message": "Theme switched",
        "theme": theme,
    }
    return {"theme": theme}
