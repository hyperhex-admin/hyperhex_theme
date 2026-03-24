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

    user_meta = frappe.get_meta("User")
    if user_meta.has_field("user_theme"):
        frappe.db.set_value("User", user, "user_theme", theme)

    return {"theme": theme}
